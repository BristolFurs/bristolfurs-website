const dateFormat = require("date-fns/format")
const dateFormatISO = require("date-fns/formatISO")

module.exports = function (value, format) {
  value = new Date(value)

  if (format) {
    return dateFormat(value, format)
  }
  return dateFormatISO(value)
}
