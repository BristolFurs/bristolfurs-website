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

const addMonths = require("date-fns/addMonths")
const isFuture = require("date-fns/isFuture")
const isToday = require("date-fns/isToday")
const formatISO = require("date-fns/formatISO")

module.exports = function () {
  return {
    schedule: [
      { startTime: "11am", name: "Pre-meet at Starbucks Temple Quay" },
      { startTime: "1pm", name: "Furmeet at The Boardroom" },
      { startTime: "3pm", name: "Fursuit walk (weather permitting)" },
    ],
    nextMeetDate: (function () {
      // Get today's date
      const today = new Date()

      // Starting with the current month, loop until we have a first Saturday of the
      // month that is in the future relative to today.
      let iteration = 0
      let isFound = false

      do {
        // Work out the first Saturday of the given month
        let firstSaturday = firstSaturdayOfMonth(addMonths(today, iteration))
        let firstSaturdayISO = formatISO(firstSaturday, { representation: "date" })

        // Check to see if it's overridden
        if (firstSaturdayISO in overrides) {
          const overrideDate = overrides[firstSaturdayISO]

          // If there's an alternative date set, use that instead. If there isn't
          // (i.e. meet cancelled), set it to a past date so that it'll fail the
          // next checks. It's nasty, but it works.
          firstSaturday = overrideDate ? new Date(overrideDate) : new Date("1970-01-01")
          firstSaturdayISO = formatISO(firstSaturday, { representation: "date" })
        }

        // Is this date today or in the future? If so, return it.
        if (isFuture(firstSaturday) || isToday(firstSaturday)) {
          isFound = true
          return firstSaturdayISO
        }

        // Increment iteration
        iteration++
      } while (!isFound)

      // If it's not, when is the first Saturday of the *next* month?
      const firstSaturdayNextMonth = firstSaturdayOfMonth(addMonths(today, 1))
    })(),
  }
}

// Helper function to check the first seven days of a month and return the
// Saturday. We can be sure it'll be in the first seven days by the nature
// of the Gregorian calendar.
const firstSaturdayOfMonth = function (dateObj) {
  const setDate = require("date-fns/setDate")
  const isSaturday = require("date-fns/isSaturday")

  for (let i = 1; i <= 7; i++) {
    if (isSaturday(setDate(dateObj, i))) {
      return setDate(dateObj, i)
    }
  }
}
