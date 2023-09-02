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
        title: "Chairperson",
        biography: "Adipisicing ut sunt exercitation incididunt esse eiusmod adipisicing.",
        avatar: "not-azure.jpg",
        socialLinks: [
          { text: "gote on that fuckin' website", icon: "twitter", href: "//bees.bees" },
          { text: "telegrum", icon: "telegram", href: "//bees.bees" },
        ],
      },
      { name: "Kipperil" },
    ],
    meetModerators: [{ name: "Eskelater" }, { name: "Owen" }, { name: "Taylor" }],
    chatModerators: [{ name: "Pudge" }, { name: "Verge" }],
  }
}
