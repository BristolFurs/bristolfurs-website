import Header from "./javascript/header.mjs"
import GoogleMap from "./javascript/google-map.mjs"

new Header()

document.querySelectorAll(".bf-map").forEach(($m) => {
  new GoogleMap($m)
})
