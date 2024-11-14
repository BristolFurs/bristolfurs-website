import { format } from "date-fns"

export default function (url) {
  const [urlPart, paramPart] = url.split("?")
  const params = new URLSearchParams(paramPart || "")
  params.set("v", format(new Date(), "t"))
  return `${urlPart}?${params}`
}
