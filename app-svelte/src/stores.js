import { writable } from 'svelte/store'

// Integer: current stage of egg hatching. From fully unhatched at 0, to hatched at 3
export const hatchStage = writable(0)

// Boolean: Quest 1 (Math) complete
export const q1Complete = writable(false)
// Boolean: Quest 2 (Artist) complete
export const q2Complete = writable(false)
// Boolean: Quest 3 (Box) complete
export const q3Complete = writable(false)
// Boolean: Quest 3 (Math) complete
export const q4Complete = writable(false)

// Integer: Current number of correct math answers
export const correct = writable(0)
// Integer: Current number of wrong math answers
export const wrong = writable(0)

// String: Body color of page
export const bgColor = writable("lightgrey")
// String: Header class
export const headerClass = writable("pinkcrystal")