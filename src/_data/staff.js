/*
 * Things what can be here:
 
 * name {string} - Required. The displayed name.
 * title {string} - Role name, if a more specific one exists.
 * avatar {string} - Filename of an avatar to display. Must be in '/src/images'.
 * biography {string} - A *SHORT* sentence to act as a biography. Plain text only.
 * socialLinks {array} - Array of objects.
 * socialLinks.text {string} - String describing the link.
 * socialLinks.href {string} - URL of the link.
 * socialLinks.icon {string} - Name of icon to use, must be in `/src/assets/images/icons` to work.
 */

module.exports = function () {
  return {
    committee: [
      {
        name: "Azure Goat",
        role: "Community lead",
        pronouns: "he/him",
        avatar: "not-azure.jpg",
        socialLinks: [
          { text: "Bluesky", href: "//bees.bees" },
          { text: "Telegram", href: "//bees.bees" },
        ],
      },
      { name: "Kipperil", role: "Meet lead", pronouns: "they/them", avatar: "not-kip.jpg" },
      { name: "Taylor", role: "Is also here", pronouns: "he/him", avatar: "not-taylor.png" },
    ],
    meetModerators: [{ name: "Eskelater", pronouns: "he/him" }, { name: "Owen" }],
    chatModerators: [
      { name: "Pudge", pronouns: "he/him" },
      { name: "Verge", pronouns: "any pronouns" },
    ],
    other: [
      {
        name: "beeps",
        role: "Website developer",
        pronouns: "it/its",
        avatar: "beeps.png",
        socialLinks: [
          { text: "beeps.website", href: "//beeps.website" },
          { text: "Mastodon", href: "//chitter.xyz/@batbeeps" },
        ],
      },
      {
        name: "Hoot",
        role: "Photographer",
      },
      {
        name: "Kirin",
        role: "Photographer",
      },
    ],
  }
}
