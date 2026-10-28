import { isFuture, isToday, formatISO } from "date-fns"
import Fetch from "@11ty/eleventy-fetch"

// Tabletop meets are sporadically organised in a way that can't really be
// automated, so we pull this data from an ICS file managed by BristolFurs staff
const icsUrl = "https://bristolfurs.org/remote.php/dav/public-calendars/ZyF6q8J2z46PYTm3/?export"

const getNextMeetDate = async function () {
  const meetDates = []
  let nextMeet = null

  try {
    // Get ICS file data
    let data = await Fetch(icsUrl, {
      duration: "1d",
      type: "text",
    })

    // Split file into lines, loop through each line to find those with start
    // dates involved. We don't bother handling times because that's hard
    // (daylight savings exists).
    data.split("\n").forEach((line) => {
      if (line.startsWith("DTSTART;")) {
        // DTSTART can have a lot of different formats, HOWEVER dates are always
        // 8 digits (YYYYMMDD). Nothing else is that long (times are 6 digits),
        // so this is a cheaty way of extracting just the date portion.
        const dateString = line.match(/([0-9]{8})/)[0]

        // Stick a time on the end here, so that it doesn't default to midnight,
        // which DST schenanigans can potentially push over the dateline
        const dateParsed = new Date(
          `${dateString.substring(0, 4)}-${dateString.substring(4, 6)}-${dateString.substring(6, 8)}T12:00:00Z`,
        )

        meetDates.push(dateParsed)
      }
    })
  } catch (e) {
    throw new Error(e)
  }

  // We might get multiple dates in the past and future, so let's sort
  // everything and then loop through to find the first one in the future
  meetDates.sort((a, b) => a - b)

  meetDates.some((date) => {
    if (isToday(date) || isFuture(date)) {
      nextMeet = formatISO(date)

      // Exit loop by returning true
      return true
    }
    return false
  })

  return nextMeet
}

export default async function () {
  return {
    schedule: [{ startTime: "noon", title: "Tabletop meet", subtitle: "at The Royal Oak" }],
    nextMeetDate: await getNextMeetDate(),
  }
}
