export default class GoogleMap {
  // The API key has to be publicly visible somehow cuz this is front-end baybee
  // This key is locked down to specific domains to prevent misuse instead.
  googleMapsApiKey = "AIzaSyC0ZwZrtrLdXKzIczjrvfjW793I-NaIUjM"

  $mapElement = null
  map = null

  constructor($element) {
    this.$mapElement = $element

    // Back out if there isn't a valid latitude or longitude present
    if (!this.$mapElement.dataset?.latitude || !this.$mapElement.dataset?.longitude) {
      throw new Error("Map is missing valid latitude or longitude.", $element)
    }

    // Create a <script> tag to inject into the page
    // Saves us having it there all the time, even when not needed
    let $script = document.createElement("script")
    $script.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleMapsApiKey}`
    $script.defer = true
    $script.async = true
    $script.onload = () => {
      this.buildMap()
    }

    // Inject the <script> tag into the page head
    document.head.appendChild($script)
  }
  async buildMap() {
    const { Map } = await google.maps.importLibrary("maps")
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")

    const coords = {
      lat: Number(this.$mapElement.dataset.latitude),
      lng: Number(this.$mapElement.dataset.longitude),
    }

    // Create the map
    this.map = new Map(this.$mapElement, {
      center: coords,
      zoom: this.$mapElement.dataset?.zoom || 16,
      disableDefaultUI: true,
      gestureHandling: "cooperative",
      mapId: "280f55744183ec2d",
    })

    // Create a custom element to use as a map marker
    const $locationTag = document.createElement("div")
    $locationTag.className = "bf-map__marker"
    $locationTag.textContent = this.$mapElement.dataset?.label || "Here"

    // Add a marker pin to the centre
    const marker = new AdvancedMarkerElement({
      map: this.map,
      position: coords,
      content: $locationTag,
    })
  }
}
