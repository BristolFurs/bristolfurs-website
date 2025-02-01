export default function (array) {
  return array.filter((i) => typeof i !== "undefined" && i !== "null")
}
