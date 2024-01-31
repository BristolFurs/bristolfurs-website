import GoogleMap from "./javascript/google-map.mjs"
import Header from "./javascript/header.mjs"

function initAll() {
  document.querySelectorAll(".bf-map").forEach(($m) => {
    new GoogleMap($m)
  })

  new Header()
}

export { initAll, GoogleMap, Header }
