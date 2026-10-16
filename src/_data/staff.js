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
        pronouns: "any pronouns",
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
        name: "Jordon",
        species: "opossum",
        pronouns: "he/him",
        avatar: "jordon.png",
        avatarAttribution: "cherrybrandy",
      },
      {
        name: "Lucah",
        species: "cat",
        pronouns: "she/he",
        avatar: "lucah.png",
        avatarAttribution: "aristoodle",
      },
      {
        name: "Snowy",
        species: "Siberian husky (red)",
        pronouns: "he/him",
        avatar: "snowy.png",
        avatarAttribution: "Rowdy Reindeer",
      },
      { name: "Thea", species: "dragon", pronouns: "she/her", avatar: "thea.png", avatarAttribution: "Q" },
    ],
    chatModerators: [
      { name: "Nenna", species: "dragon", pronouns: "she/her" },
      { name: "Pudge", species: "raccoon", pronouns: "he/him" },
      {
        name: "Reszo Rudvald",
        species: "werewolf",
        pronouns: "he/him",
        avatar: "reszo.png",
        avatarAttribution: "Sijn",
      },
      { name: "Robyn", species: "cheetah", pronouns: "he/she/they" },
    ],
    other: [
      {
        name: "beeps",
        species: "amphimorpho",
        role: "Website critter",
        pronouns: "it/its",
        avatar: "beeps.png",
        avatarAttribution: "TuxedoDragon",
      },
    ],
  }
}
