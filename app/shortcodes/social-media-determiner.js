/**
 * This takes a URL and does some fancy algorithms (aka, lots of if statements)
 * to work out what it links to and provide metadata about it.
 */

module.exports = function (url) {
  // If it begins with `//` this means to use the current protocol (typically
  // HTTP or HTTPS). The `URL` class doesn't understand this though, so we need
  // to add the protocol manually.
  url = url.substr(0, 2) === "//" ? `http:${url}` : url

  // Get metadata about the URL
  const parts = new URL(url)

  // Define some sensible defaults
  let urlMetadata = {
    name: "Website",
    icon: "globe",
  }

  // Telegram
  if (parts.hostname.includes("t.me") || parts.hostname.includes("telegram.me")) {
    urlMetadata.name = "Telegram"
  }

  // Discord
  else if (parts.hostname.includes("discord.gg") || parts.hostname.includes("discord.com")) {
    urlMetadata.name = "Discord"
  }

  // Twitter/X
  else if (parts.hostname.includes("twitter.com") || parts.hostname.includes("x.com")) {
    urlMetadata.name = "Twitter"
  }

  // GitHub
  else if (parts.hostname.includes("github.com")) {
    urlMetadata.name = "GitHub"
  }

  // Tumblr
  else if (parts.hostname.includes("tumblr.com") || parts.hostname.endsWith(".tumblr.com")) {
    urlMetadata.name = "Tumblr"
  }

  // Bluesky
  else if (parts.hostname.includes("bsky.app") && parts.pathname.startsWith("/profile/")) {
    urlMetadata.name = "Bluesky"
  }

  return urlMetadata
}
