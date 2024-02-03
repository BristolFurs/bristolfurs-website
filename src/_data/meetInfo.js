// Override dates where they don't happen on the first Saturday of the month
//
// e.g. If a meet is rescheduled to a different date:
// "2023-05-06": "2023-05-13"
//
// e.g. If a meet is cancelled outright:
// "2023-05-06": null
const overrides = {
  "2023-05-06": "2023-05-13",
}

module.exports = function () {
  return {
    schedule: [
      { startTime: "11am", name: "Pre-meet at Starbucks Temple Quay" },
      { startTime: "1pm", name: "Furmeet at The Boardroom" },
      { startTime: "3pm", name: "Fursuit walk (weather permitting)" },
    ],
    nextMeetDate: getNextNMeetDates(1),
    next6MeetDates: getNextNMeetDates(6),
  }
}

// Helper function to check the first seven days of a month and return the
// Saturday. We can be sure it'll be in the first seven days by the nature
// of the Gregorian calendar.
const getFirstSaturdayOfMonth = function (dateObj) {
  const { setDate, isSaturday } = require("date-fns")

  for (let i = 1; i <= 7; i++) {
    const date = setDate(dateObj, i)
    if (isSaturday(date)) {
      return date
    }
  }
}

const getNextNMeetDates = function (iterations = 12, fromDate) {
  const { addMonths, formatISO, isFuture, isToday } = require("date-fns")
  const results = []

  fromDate = fromDate || new Date()

  // Use <= as we actually want `iterations + 1` loops to take place, in case
  // the first one ends up being a past date
  for (let i = 0; i <= iterations; i++) {
    // Get first day of this month
    let date = getFirstSaturdayOfMonth(addMonths(fromDate, i))

    // Convert this date into ISO format for comparisons
    let dateISO = formatISO(date, { representation: "date" })

    // Check to see if this date has been overridden by a replacement date
    if (dateISO in overrides) {
      const overrideDate = overrides[dateISO]

      // If there's an alternative date set, use that instead. If there isn't
      // (i.e. meet cancelled), set it to a past date so that it'll fail the
      // next checks. It's nasty, but it works.
      date = new Date(overrideDate || "2000-01-01")
      dateISO = formatISO(date, { representation: "date" })
    }

    if (isToday(date) || isFuture(date)) {
      results.push(dateISO)
    }
  }

  return results.slice(0, iterations)
}
