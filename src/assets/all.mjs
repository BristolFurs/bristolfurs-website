import GoogleMap from "./javascript/google-map.mjs"
import Header from "./javascript/header.mjs"
import Share from "./javascript/share.mjs"

function initAll() {
  new Header()

  document.querySelectorAll(".bf-map").forEach(($m) => {
    new GoogleMap($m)
  })

  document.querySelectorAll("[data-module='share']").forEach(($m) => {
    new Share($m)
  })
}

export { initAll, GoogleMap, Header, Share }
