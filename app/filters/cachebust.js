const format = require("date-fns/format")

module.exports = function (url) {
  const [urlPart, paramPart] = url.split("?")
  const params = new URLSearchParams(paramPart || "")
  params.set("v", format(new Date(), "t"))
  return `${urlPart}?${params}`
}
