export default class GoogleMap {
  // The API key has to be publicly visible somehow cuz this is front-end baybee
  // This key is locked down to specific domains to prevent misuse instead.
  static googleMapsApiKey = "AIzaSyC0ZwZrtrLdXKzIczjrvfjW793I-NaIUjM"

  static googleMapsInjected = false
  static googleMapsLoaded = false

  $mapElement = null
  map = null

  constructor($element) {
    this.$mapElement = $element

    this.data = this.$mapElement.dataset

    // Back out if there isn't a valid latitude or longitude present
    if (!this.data?.latitude || !this.data?.longitude) {
      throw new Error("Map is missing valid latitude or longitude.", $element)
    }

    if (!GoogleMap.googleMapsInjected) {
      GoogleMap.injectMapsAPI()
    }

    this.init()
  }

  init() {
    // Loop trying to initialise maps until Google Maps API has actually loaded
    let intervalId = null

    intervalId = setInterval(() => {
      if (GoogleMap.googleMapsLoaded) {
        this.buildMap()
        clearInterval(intervalId)
      }
    }, 500)
  }

  static injectMapsAPI() {
    GoogleMap.googleMapsInjected = true

    // Create a <script> tag to inject into the page
    // Saves us having it there all the time, even when not needed
    let $script = document.createElement("script")
    $script.src = `https://maps.googleapis.com/maps/api/js?key=${GoogleMap.googleMapsApiKey}`
    $script.id = "google-maps-api"
    $script.defer = true
    $script.async = true
    $script.onload = () => {
      GoogleMap.googleMapsLoaded = true
    }

    // Inject the <script> tag into the page head
    document.head.appendChild($script)
  }

  async buildMap() {
    const { Map } = await google.maps.importLibrary("maps")
    const coords = new google.maps.LatLng(Number(this.data.latitude), Number(this.data.longitude))

    // Create the map
    this.map = new Map(this.$mapElement, {
      center: coords,
      zoom: this.data?.zoom || 16,
      disableDefaultUI: true,
      gestureHandling: "cooperative",
      mapId: "280f55744183ec2d",
    })

    if (this.data?.label) {
      this.addMarker(coords, this.data?.label)
    }

    if (this.data?.route) {
      this.addRoute(this.data?.route)
    }
  }

  async addMarker(coords, label) {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")

    // Create a custom element to use as a map marker
    const $locationTag = document.createElement("div")
    $locationTag.className = "bf-map__marker"
    $locationTag.textContent = label

    // Add a marker pin to the centre
    const marker = new AdvancedMarkerElement({
      map: this.map,
      position: coords,
      content: $locationTag,
    })
  }

  async addRoute(routeId) {
    // const { Routes } = await google.maps.importLibrary("routes")
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")
    let waypoints = GoogleMap.walkRoutes[routeId]

    // Add marker pins at locations with labels
    const waypointsWithLabels = waypoints.filter((point) => point.label !== undefined)

    waypointsWithLabels.forEach((point) => {
      const $marker = document.createElement("div")
      $marker.className = "bf-map__marker"
      $marker.textContent = point.label

      const marker = new AdvancedMarkerElement({
        map: this.map,
        position: new google.maps.LatLng(point),
        content: $marker,
      })
    })

    const newMapBounds = new google.maps.LatLngBounds()
    waypoints.forEach((point) => {
      const mapPoint = new google.maps.LatLng(point)

      // Extend the map bondaries to include all waypoints
      newMapBounds.extend(mapPoint)
    })

    // Draw route
    const route = new google.maps.Polyline({
      path: waypoints,
      geodesic: true,
      icons: [
        {
          icon: { path: google.maps.SymbolPath.FORWARD_OPEN_ARROW },
          offset: "25%",
        },
        {
          icon: { path: google.maps.SymbolPath.FORWARD_OPEN_ARROW },
          offset: "75%",
        },
      ],
      strokeColor: "#bc0031",
      strokeOpacity: 1.0,
      strokeWeight: 4,
    })

    route.setMap(this.map)

    // Recentre and zoom the map to fit the route
    this.map.setCenter(newMapBounds.getCenter())
    this.map.fitBounds(newMapBounds)
  }

  static walkRoutes = {
    "millenium-square": [
      { lat: 51.45383710282948, lng: -2.593624741607833, label: "Start/end" },
      { lat: 51.45370565533652, lng: -2.5942490770587314 },
      { lat: 51.454104546449116, lng: -2.595117952149455 },
      { lat: 51.453580452969625, lng: -2.5969202441365002 },
      { lat: 51.453598116474645, lng: -2.5974171255815754 },
      { lat: 51.453414424259016, lng: -2.597547641446235 },
      { lat: 51.452502251212806, lng: -2.5977032681706196 },
      { lat: 51.45223801277532, lng: -2.5981881920184287 },
      { lat: 51.45164487625245, lng: -2.5983956943172912 },
      { lat: 51.45126397172081, lng: -2.5988558081085773 },
      { lat: 51.45098707603128, lng: -2.599442227643527 },
      { lat: 51.45071580095159, lng: -2.59987076499875 },
      { lat: 51.45022244162792, lng: -2.5997895684486405 },
      { lat: 51.44984574203565, lng: -2.600425608100163, label: "Millenium Square" },
      // if going to Lloyds Amphitheatre
      // { lat: 51.449404381089195, lng: -2.5997219046549755 },
      // { lat: 51.44851180691796, lng: -2.5994512494848845 },
      // { lat: 51.44867907805284, lng: -2.5989573037985734 },
      // { lat: 51.45021963044439, lng: -2.59851974460519 },
      // if not going to Lloyds Amphitheatre
      { lat: 51.45022244162792, lng: -2.5997895684486405 },
      { lat: 51.45029245577149, lng: -2.5988415226433284 },
      // cont.
      { lat: 51.45012826702182, lng: -2.5979558796673987 },
      { lat: 51.45002706424406, lng: -2.597461933982191 },
      { lat: 51.45093366448536, lng: -2.597256687139217 },
      { lat: 51.45192176795599, lng: -2.5972544316795427 },
      { lat: 51.4526020429854, lng: -2.5972769862768894 },
      { lat: 51.4534059913184, lng: -2.597247665298825 },
      { lat: 51.4534059913184, lng: -2.597247665298825 },
      { lat: 51.453432695643635, lng: -2.5970311411635287 },
      { lat: 51.453580452969625, lng: -2.5969202441365002 },
    ],
    "queen-square": [
      { lat: 51.45383710282948, lng: -2.593624741607833, label: "Start/end" },
      { lat: 51.45370565533652, lng: -2.5942490770587314 },
      { lat: 51.454104546449116, lng: -2.595117952149455 },
      { lat: 51.453580452969625, lng: -2.5969202441365002 },
      { lat: 51.453420236269864, lng: -2.596971535524433 },
      { lat: 51.453436238958794, lng: -2.5972459936596684 },
      { lat: 51.452723113677486, lng: -2.5972764890084155 },
      { lat: 51.45231903774386, lng: -2.5972379685682276 },
      { lat: 51.451903956019855, lng: -2.5967644881589464 },
      { lat: 51.451684911370485, lng: -2.5965012651507533 },
      { lat: 51.45150587410055, lng: -2.596429039325691 },
      { lat: 51.45146686588713, lng: -2.595936298696935 },
      { lat: 51.45111178958109, lng: -2.5954868935593134 },
      { lat: 51.45058367098676, lng: -2.5956072699339634, label: "Queen Square" },
      { lat: 51.450531404014, lng: -2.5947022879771624 },
      { lat: 51.4510933329484, lng: -2.5934268753280794 },
      { lat: 51.4516299978336, lng: -2.5933651618076667 },
      { lat: 51.45166112924103, lng: -2.592703243042992 },
      { lat: 51.45213101635127, lng: -2.592659531425051 },
      { lat: 51.452698182134654, lng: -2.5926298699703336 },
      { lat: 51.45318362375407, lng: -2.592375405916067 },
      { lat: 51.45367197865422, lng: -2.5922942271991216 },
      { lat: 51.45374104834633, lng: -2.59188833361701 },
      { lat: 51.45413017142543, lng: -2.5921474810579235 },
      { lat: 51.45397452259566, lng: -2.592712609816942 },
      { lat: 51.45383710282948, lng: -2.593624741607833 },
    ],
  }
}
