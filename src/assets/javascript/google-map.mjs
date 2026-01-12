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
      icons: GoogleMap.routeArrows[routeId]?.map((pc) => {
        return {
          icon: { path: google.maps.SymbolPath.FORWARD_OPEN_ARROW },
          offset: `${String(pc)}%`,
        }
      }),
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
    "queen-square": [
      { lat: 51.448345540109706, lng: -2.5909471333321705, label: "Start/end" },
      { lat: 51.44852273001243, lng: -2.59049115779471 },
      { lat: 51.448643085025886, lng: -2.590458971286183 },
      { lat: 51.44889716679024, lng: -2.5906574547554304 },
      { lat: 51.44907101139327, lng: -2.5907218277724837 },
      { lat: 51.44922325083706, lng: -2.590934845996299 },
      { lat: 51.44928914247877, lng: -2.5911396976040377 },
      { lat: 51.44938729339373, lng: -2.5910923394366576 },
      { lat: 51.449431907381715, lng: -2.5913511573231203 },
      { lat: 51.44942298458869, lng: -2.5915372859344523 },
      { lat: 51.44957398546909, lng: -2.5926837941175203 },
      { lat: 51.449632326583504, lng: -2.5926970103502773 },
      { lat: 51.449724299487166, lng: -2.593329186807704 },
      { lat: 51.44979019040575, lng: -2.593677214270314 },
      { lat: 51.44981078130302, lng: -2.593734484606262 },
      { lat: 51.45039555877928, lng: -2.5945109382785994, label: "Queen Square" },
      { lat: 51.44981078130302, lng: -2.593734484606262 },
      { lat: 51.44979019040575, lng: -2.593677214270314 },
      { lat: 51.449724299487166, lng: -2.593329186807704 },
      { lat: 51.449632326583504, lng: -2.5926970103502773 },
      { lat: 51.44957398546909, lng: -2.5926837941175203 },
      { lat: 51.44942298458869, lng: -2.5915372859344523 },
      { lat: 51.449431907381715, lng: -2.5913511573231203 },
      { lat: 51.44938729339373, lng: -2.5910923394366576 },
      { lat: 51.44928914247877, lng: -2.5911396976040377 },
      { lat: 51.44922325083706, lng: -2.590934845996299 },
      { lat: 51.44907101139327, lng: -2.5907218277724837 },
      { lat: 51.44889716679024, lng: -2.5906574547554304 },
      { lat: 51.448643085025886, lng: -2.590458971286183 },
      { lat: 51.44852273001243, lng: -2.59049115779471 },
      { lat: 51.448345540109706, lng: -2.5909471333321705 },
    ],
    "millenium-square": [
      { lat: 51.448345540109706, lng: -2.5909471333321705, label: "Start/end" },
      { lat: 51.44852273001243, lng: -2.59049115779471 },
      { lat: 51.448643085025886, lng: -2.590458971286183 },
      { lat: 51.44889716679024, lng: -2.5906574547554304 },
      { lat: 51.44907101139327, lng: -2.5907218277724837 },
      { lat: 51.44922325083706, lng: -2.590934845996299 },
      { lat: 51.44928914247877, lng: -2.5911396976040377 },
      { lat: 51.449384063723905, lng: -2.5915449794536167 },
      { lat: 51.44953575110068, lng: -2.5926980957496344 },
      { lat: 51.44951859192047, lng: -2.592754264734556 },
      { lat: 51.44937102270752, lng: -2.592897440589427 },
      { lat: 51.44929964021935, lng: -2.5930725556734613 },
      { lat: 51.44928248095047, lng: -2.593328069503198 },
      { lat: 51.449395732004305, lng: -2.595038470277304 },
      { lat: 51.44919490474094, lng: -2.595061809184158 },
      { lat: 51.449012736401016, lng: -2.595091335208333, label: "Thekla" },
      { lat: 51.44903604051962, lng: -2.595472694241966 },
      { lat: 51.449169237699955, lng: -2.5954971202702115 },
      { lat: 51.44923964176685, lng: -2.5957032148835344 },
      { lat: 51.449243447389, lng: -2.5962283744908157 },
      { lat: 51.44907124267011, lng: -2.596718421675787 },
      { lat: 51.44906267998827, lng: -2.596975658278547 },
      { lat: 51.44912357014053, lng: -2.5976122616396986 },
      { lat: 51.45000090873621, lng: -2.5974668693327723 },
      { lat: 51.45001517958438, lng: -2.5976149521200265 },
      { lat: 51.450183575200406, lng: -2.5981965969176257 },
      { lat: 51.450222106314406, lng: -2.5985179518465937 },
      { lat: 51.45028394630426, lng: -2.598827093766577 },
      { lat: 51.450247318011236, lng: -2.5997736023482574 },
      { lat: 51.449846352828146, lng: -2.600429283472876, label: "Millenium Square" },
      { lat: 51.450247318011236, lng: -2.5997736023482574 },
      { lat: 51.45028394630426, lng: -2.598827093766577 },
      { lat: 51.450222106314406, lng: -2.5985179518465937 },
      { lat: 51.450183575200406, lng: -2.5981965969176257 },
      { lat: 51.45001517958438, lng: -2.5976149521200265 },
      { lat: 51.45000090873621, lng: -2.5974668693327723 },
      { lat: 51.44912357014053, lng: -2.5976122616396986 },
      { lat: 51.44906267998827, lng: -2.596975658278547 },
      { lat: 51.44907124267011, lng: -2.596718421675787 },
      { lat: 51.449243447389, lng: -2.5962283744908157 },
      { lat: 51.44923964176685, lng: -2.5957032148835344 },
      { lat: 51.449169237699955, lng: -2.5954971202702115 },
      { lat: 51.44919490474094, lng: -2.595061809184158 },
      { lat: 51.449395732004305, lng: -2.595038470277304 },
      { lat: 51.44928248095047, lng: -2.593328069503198 },
      { lat: 51.44929964021935, lng: -2.5930725556734613 },
      { lat: 51.44937102270752, lng: -2.592897440589427 },
      { lat: 51.44951859192047, lng: -2.592754264734556 },
      { lat: 51.44953575110068, lng: -2.5926980957496344 },
      { lat: 51.449384063723905, lng: -2.5915449794536167 },
      { lat: 51.44928914247877, lng: -2.5911396976040377 },
      { lat: 51.44922325083706, lng: -2.590934845996299 },
      { lat: 51.44907101139327, lng: -2.5907218277724837 },
      { lat: 51.44889716679024, lng: -2.5906574547554304 },
      { lat: 51.448643085025886, lng: -2.590458971286183 },
      { lat: 51.44852273001243, lng: -2.59049115779471 },
      { lat: 51.448345540109706, lng: -2.5909471333321705 },
    ],
    harbourside: [
      { lat: 51.448345540109706, lng: -2.5909471333321705, label: "Start/end" },
      { lat: 51.44852273001243, lng: -2.59049115779471 },
      { lat: 51.448643085025886, lng: -2.590458971286183 },
      { lat: 51.44889716679024, lng: -2.5906574547554304 },
      { lat: 51.44907101139327, lng: -2.5907218277724837 },
      { lat: 51.44922325083706, lng: -2.590934845996299 },
      { lat: 51.44928914247877, lng: -2.5911396976040377 },
      { lat: 51.449384063723905, lng: -2.5915449794536167 },
      { lat: 51.44953575110068, lng: -2.5926980957496344 },
      { lat: 51.44951859192047, lng: -2.592754264734556 },
      { lat: 51.44937102270752, lng: -2.592897440589427 },
      { lat: 51.44929964021935, lng: -2.5930725556734613 },
      { lat: 51.44928248095047, lng: -2.593328069503198 },
      { lat: 51.449395732004305, lng: -2.595038470277304 },
      { lat: 51.44919490474094, lng: -2.595061809184158 },
      { lat: 51.449012736401016, lng: -2.595091335208333, label: "Thekla" },
      { lat: 51.44903604051962, lng: -2.595472694241966 },
      { lat: 51.449169237699955, lng: -2.5954971202702115 },
      { lat: 51.44923964176685, lng: -2.5957032148835344 },
      { lat: 51.449243447389, lng: -2.5962283744908157 },
      { lat: 51.44907124267011, lng: -2.596718421675787 },
      { lat: 51.44831761468969, lng: -2.596680299514447 },
      { lat: 51.448252062454614, lng: -2.5945345660740426 },
      { lat: 51.44765917462068, lng: -2.5945322286882586 },
      { lat: 51.447651890938616, lng: -2.59401098842986 },
      { lat: 51.44815446227748, lng: -2.593926842034961 },
      { lat: 51.4483394654055, lng: -2.5937398500140105 },
      { lat: 51.44843852189034, lng: -2.5930853779406844 },
      { lat: 51.44845600242418, lng: -2.5929311095234002, label: "Phoenix Wharf" },
      { lat: 51.44843852189034, lng: -2.5930853779406844 },
      { lat: 51.44837000986061, lng: -2.593029511251834 },
      { lat: 51.44834277765108, lng: -2.5929120334877607 },
      { lat: 51.44835706340295, lng: -2.5919822399721486 },
      { lat: 51.44830929540479, lng: -2.591957168502467 },
      { lat: 51.448319116866806, lng: -2.59138267358893 },
      { lat: 51.448289206045075, lng: -2.590965054464207 },
      { lat: 51.448345540109706, lng: -2.5909471333321705 },
    ],
  }

  static routeArrows = {
    "millenium-square": [25.2, 76.6],
    harbourside: [9.5, 20, 30, 39.5, 50, 60, 70, 79, 90],
  }
}
