// Message to show at the top of all pages in cases where something important
// needs to be communicated (e.g. disruption due to Covid 2)

module.exports = function () {
  // Display the banner all the time on development environment
  if (process.env.ENVIRONMENT === "development") {
    return {
      title: "Roadworks ahead 🚧",
      body: `This is a development version of the website. Information on it may not be correct. See the <a class="bf-link" href="//bristolfurs.co.uk">main BristolFurs website</a> for the proper stuff.`,
    }
  }

  // Write a message to show in the banner. Uncomment to make it visible.
  // Only supports a single line of plain text at the moment.
  //
  // return {
  //   title: "The July meet has been cancelled",
  //   body: "This is due to staff illness.",
  // }

  return null
}
