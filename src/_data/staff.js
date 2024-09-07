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
        name: "Kipperil",
        role: "Meet lead, treasurer, cat",
        pronouns: "they/them",
        avatar: "kipperil.png",
        avatarAttribution: "valleycore",
        biography:
          "My name’s Kipperil, or Kip for short. I’m the cat responsible for the physical meets in terms of planning, venue liaising, and overseeing execution. I also handle the back-of house finances. You’ll most likely see me at the meets when I’m running the walks! ",
        socialLinks: [
          { text: "Telegram", href: "//t.me/kipperil" },
          { text: "Discord", href: "//discord.com/users/365910128773300226" },
        ],
      },
      {
        name: "Taylor",
        role: "Community lead, dog",
        pronouns: "he/him",
        avatar: "taylor.jpg",
        avatarAttribution: "MouseNoises",
      },
    ],
    meetModerators: [
      {
        name: "Azure Goat",
        pronouns: "he/him",
        avatar: "azure.jpg",
        avatarAttribution: "StormBlaze",
      },
      {
        name: "Eskelater",
        pronouns: "he/him",
        avatar: "esk.jpg",
        avatarAttribution: "Superneonbuck",
      },
      { name: "Jordon", pronouns: "he/him", avatar: "jordon.png", avatarAttribution: "cherrybrandy" },
      { name: "Owen", pronouns: "he/him" },
    ],
    chatModerators: [
      { name: "Nenna", pronouns: "she/her" },
      { name: "Pudge", pronouns: "he/him" },
      { name: "Robyn", pronouns: "any" },
    ],
    other: [
      {
        name: "beeps",
        role: "Webmaster",
        pronouns: "it/its",
        avatar: "beeps.png",
        avatarAttribution: "Tuxedo Dragon",
        socialLinks: [
          { text: "beeps.website", href: "//beeps.website" },
          { text: "Mastodon", href: "//chitter.xyz/@batbeeps" },
        ],
      },
    ],
  }
}
