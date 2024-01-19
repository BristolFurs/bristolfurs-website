// Message to show at the top of all pages in cases where something important
// needs to be communicated (e.g. disruption due to Covid 2)

module.exports = function () {
  // Write a message to show in the banner. Uncomment to make it visible.
  // Only supports a single line of plain text at the moment.
  return {
    title: "Roadworks ahead 🚧",
    body: "This website is still being actively developed. Information may not be up to date and some pages may appear unusual or broken.",
  }

  return null
}
