/*
 * Things what can be here:
 
 * name {string} - Required. The displayed name.
 * title {string} - Role name, if a more specific one exists.
 * avatar {string} - Filename of an avatar to display. Must be in '/src/images'.
 * biography {string} - A *SHORT* sentence to act as a biography. Plain text only.
 */

export default function () {
  return {
    committee: [
      {
        name: "Kipperil",
        species: "cat",
        role: "Meet lead, treasurer",
        pronouns: "they/them",
        avatar: "kipperil.png",
        avatarAttribution: "valleycore",
      },
      {
        name: "Taylor",
        species: "dogdeer",
        role: "Online lead",
        pronouns: "he/it",
        avatar: "taylor.jpg",
        avatarAttribution: "Katsuke",
      },
      {
        name: "Eskelater",
        species: "jackalope",
        role: "Operations lead",
        pronouns: "he/him",
        avatar: "esk.jpg",
        avatarAttribution: "Superneonbuck",
      },
    ],
    meetModerators: [
      {
        name: "Azure",
        species: "goat",
        pronouns: "he/him",
        avatar: "azure.jpg",
        avatarAttribution: "StormBlaze",
      },
      {
        name: "Jordon",
        species: "opossum",
        pronouns: "he/him",
        avatar: "jordon.png",
        avatarAttribution: "cherrybrandy",
      },
    ],
    chatModerators: [
      { name: "Nenna", species: "dragon", pronouns: "she/her" },
      { name: "Pudge", species: "raccoon", pronouns: "he/him" },
      { name: "Robyn", species: "cheetah", pronouns: "he/she/they" },
      { name: "Sijn", species: "cat", pronouns: "they/them", avatar: "sijn.png", avatarAttribution: "SijnCat" },
    ],
    other: [
      {
        name: "beeps",
        species: "amphimorpho",
        role: "Tech critter",
        pronouns: "it/its",
        avatar: "beeps.png",
        avatarAttribution: "TuxedoDragon",
      },
    ],
  }
}
