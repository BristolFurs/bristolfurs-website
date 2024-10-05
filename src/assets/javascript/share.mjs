export default class Share {
  constructor($module) {
    // Check if native share function exists, quitting if not
    if (!("share" in navigator)) {
      return
    }

    // Bind click event to open the share sheet
    $module.addEventListener("click", this.onClick.bind(this))

    // Override the link text to what the new function is
    $module.innerText = "Share this page"
  }

  async onClick(event) {
    event.preventDefault()

    // Assemble the share data for this page
    const shareData = {
      title: document.title,
      text: document.querySelector("meta[type='description']") ?? "",
      url: location.href,
    }

    try {
      await navigator.share(shareData)
    } catch (err) {
      throw new Error(err)
    }
  }
}
