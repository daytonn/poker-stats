import Stats from "./stats.js"

export const SEEDS = [
  {
    date: new Date("August 20, 2022 11:59:00"),
    buyIn: 100,
    cashOut: 180,
  },

  {
    date: new Date("October 1, 2022 11:59:00"),
    buyIn: 100,
    cashOut: 500,
  },

  {
    date: new Date("November 5, 2022 11:59:00"),
    buyIn: 100,
    cashOut: 185,
  },

  {
    date: new Date("December 9, 2022 11:59:00"),
    buyIn: 300,
    cashOut: 40,
  },

  {
    date: new Date("January 7, 2023 11:59:00"),
    buyIn: 200,
    cashOut: 40,
  },

  {
    date: new Date("January 21, 2023 11:59:00"),
    buyIn: 60,
    cashOut: 100,
  },

  {
    date: new Date("February 19, 2023 11:59:00"),
    buyIn: 100,
    cashOut: 285,
  },

  {
    date: new Date("May 27, 2023 11:59:00"),
    buyIn: 300,
    cashOut: 40,
  },

  {
    date: new Date("July 15, 2023 11:59:00"),
    buyIn: 200,
    cashOut: 380,
  },

  {
    date: new Date("August 25, 2023 11:59:00"),
    buyIn: 100,
    cashOut: 190,
  },

  {
    date: new Date("January 12, 2024 11:59:00"),
    buyIn: 340,
    cashOut: 510,
  },
]

export function seed() {
  SEEDS.forEach(seed => Stats.add(seed))
}
