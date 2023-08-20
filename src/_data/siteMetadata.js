module.exports = function () {
  return {
    // The group name, used in a bunch of places, obviously.
    name: "BristolFurs",

    // The domain name, for when absolute links are required
    // (e.g. OpenGraph, RSS, schema data).
    domainName: process.env.ENVIRONMENT === "prod" ? "https://idunno.lol" : "",

    // Copyright statement
    copyright: "&copy; Copy copyright dobeltleflfsdfsd 20203.",

    // The links that appear on the top of the site.
    navigationLinks: [
      { href: "/attending-a-meet/", text: "Attending" },
      { href: "/venue-information/", text: "Venue" },
      { href: "/the-team/", text: "Team" },
      { href: "/support-us/", text: "Support us" },
    ],

    // The links that appear on the bottom of the site.
    footerLinks: [
      { href: "/code-of-conduct/", text: "Code of conduct" },
      { href: "/privacy-policy/", text: "Privacy policy" },
    ],

    // Social media links. Make sure there's actually an icon in
    // `assets/images/icons` or this is gonna break.
    socialLinks: [
      { text: "Discord server", icon: "discord", href: "//discord.gg/" },
      {
        text: "Telegram channel",
        icon: "telegram",
        href: "//telegram.me/",
      },
      {
        text: "Twitter",
        icon: "twitter",
        href: "//twitter.com/",
      },
      {
        text: "Support us on Ko-fi",
        icon: "ko-fi",
        href: "//ko-fi.com/",
      },
    ],
  }
}
