import { isFuture, isToday, formatISO } from "date-fns"

// Mini-meets are organised more sporadically and can't really be automated, so
// this is just a list of when they happen. ¯\_(ツ)_/¯
const meetDates = ["2025-06-15", "2025-07-20", "2025-08-10"]

export default function () {
  return {
    schedule: [{ startTime: "noon", title: "Tabletop meet", subtitle: "at Excelsior" }],
    nextMeetDate: getNextMeetDate(),
  }
}

const getNextMeetDate = function () {
  let nextMeet = null

  meetDates.every((d) => {
    if (isToday(d) || isFuture(d)) {
      nextMeet = formatISO(d)

      // Exit loop by returning false
      return false
    }
    return true
  })

  return nextMeet
}
