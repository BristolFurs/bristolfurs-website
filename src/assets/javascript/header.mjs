export default class Header {
  constructor() {
    this.navToggleId = "nav-toggle"
    this.navId = "navigation"

    this.$navToggle = document.getElementById(this.navToggleId)
    this.$nav = document.getElementById(this.navId)

    if (!this.$navToggle || !this.$nav) {
      return
    }

    // Set up breakpoint watcher
    const breakpoint = getComputedStyle(this.$nav).getPropertyValue("--js-breakpoint")
    this.mql = window.matchMedia(`(min-width: ${breakpoint})`)
    this.mql.addEventListener("change", this.checkMediaQuery.bind(this))
    this.checkMediaQuery()
  }
  checkMediaQuery() {
    // Matches = larger than mobile
    if (this.mql.matches) {
      this.destroy()
      return
    }
    this.build()
  }
  build() {
    this.$navToggle.removeAttribute("hidden")
    this.$navToggle.setAttribute("aria-controls", this.navId)
    this.$navToggle.setAttribute("aria-expanded", "false")
    this.$navToggle.boundClick = this.toggleMobileNav.bind(this)
    this.$navToggle.addEventListener("click", this.$navToggle.boundClick)
    this.$nav.setAttribute("aria-controlledby", this.navToggleId)
    this.$nav.setAttribute("hidden", "hidden")
  }
  destroy() {
    this.$navToggle.setAttribute("hidden", "hidden")
    this.$navToggle.removeAttribute("aria-controls")
    this.$navToggle.removeAttribute("aria-expanded")
    this.$navToggle.removeEventListener("click", this.$navToggle.boundClick)
    this.$nav.removeAttribute("aria-controlledby")
    this.$nav.removeAttribute("hidden")
  }
  openMobileNav() {
    this.$navToggle.setAttribute("aria-expanded", "true")
    this.$nav.removeAttribute("hidden")
  }
  closeMobileNav() {
    this.$navToggle.setAttribute("aria-expanded", "false")
    this.$nav.setAttribute("hidden", "hidden")
  }
  toggleMobileNav() {
    if (this.$navToggle.getAttribute("aria-expanded") === "true") {
      this.closeMobileNav()
      return
    }
    this.openMobileNav()
  }
}
