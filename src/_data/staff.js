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
        biography:
          "My name’s Kipperil, or Kip for short. I’m the cat responsible for the physical meets in terms of planning, venue liaising, and overseeing execution. I also handle the back-of house finances. You’ll most likely see me at the meets when I’m running the walks! ",
      },
      {
        name: "Taylor",
        species: "dogdeer",
        role: "Community lead",
        pronouns: "he/it",
        avatar: "taylor.jpg",
        avatarAttribution: "Katsuke",
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
        name: "Eskelater",
        species: "jackalope",
        pronouns: "he/him",
        avatar: "esk.jpg",
        avatarAttribution: "Superneonbuck",
      },
      {
        name: "Jordon",
        species: "opossum",
        pronouns: "he/him",
        avatar: "jordon.png",
        avatarAttribution: "cherrybrandy",
      },
      { name: "Owen", species: "pony", pronouns: "he/him" },
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
