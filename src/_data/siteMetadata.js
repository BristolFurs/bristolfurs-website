module.exports = function () {
  return {
    // If the site is in development mode.
    // If true, all pages are set to not be indexed by search engines and a
    // bunch o' development information is dumped into the page.
    developmentMode: process.env.ENVIRONMENT === "production" ? false : true,

    // The group name, used in a bunch of places, obviously.
    name: "BristolFurs",

    // The domain name, for when absolute links are required
    // (e.g. OpenGraph, RSS, schema data).
    domainName: process.env.ENVIRONMENT === "production" ? "https://bristolfurs.co.uk" : "",

    // Copyright statement
    copyright: "&copy; 2024 BristolFurs except where otherwise stated. All rights reserved.",

    // The links that appear on the top of the site.
    navigationLinks: [
      { href: "/attending-a-meet/", text: "Attending" },
      { href: "/venue-information/", text: "Venues" },
      { href: "/the-team/", text: "Team" },
      { href: "/support-us/", text: "Support us" },
    ],

    // The links that appear on the bottom of the site.
    footerLinks: [
      { href: "/attending-a-meet/fursuiting/", text: "Fursuiting at BristolFurs" },
      { href: "/code-of-conduct/", text: "Code of conduct" },
      { href: "/privacy-policy/", text: "Privacy and cookies" },
      { href: "/accessibility-statement/", text: "Accessibility statement" },
      { href: "/contact-us/", text: "Contact us" },
    ],

    // Social media links. Make sure there's actually an icon in
    // `assets/images/icons` or this is gonna break.
    socialLinks: [
      {
        text: "Bluesky",
        href: "//bsky.app/profile/bristolfurs.bsky.social",
      },
      { text: "Discord", href: "//discord.gg/" },
      {
        text: "Telegram",
        href: "//telegram.me/",
      },
      {
        text: "Support us on Ko-fi",
        href: "//ko-fi.com/",
      },
    ],
  }
}
