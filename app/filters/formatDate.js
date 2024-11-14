import { format, formatISO } from "date-fns"

export default function (value, outputFormat) {
  value = new Date(value)

  if (outputFormat) {
    return format(value, outputFormat)
  }
  return formatISO(value)
}
