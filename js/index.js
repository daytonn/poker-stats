import Stats from "./stats.js"
import "./components/money.js"
import "./components/stat.js"

const $stats = document.querySelector("#stats")
const $total = document.querySelector("#total")
const $form = document.querySelector("#new-stat-form")
const $dateInput = document.querySelector("input[name='date']")
const $buyInInput = document.querySelector("input[name='buyIn']")
const $cashOutInput = document.querySelector("input[name='cashOut']")
const $addButton = document.querySelector("#controls button")
const $modalMask = document.querySelector(".modal-mask")
const $modal = document.querySelector(".modal")
const $average = document.querySelector("#average")
const $highestCashout = document.querySelector("#highest-cashout")
const $highestWinnings = document.querySelector("#highest-winnings")

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function monthName(date) {
  return MONTHS[date.getMonth()]
}

function formatDate(date) {
  const year = date.getFullYear()
  const day = date.getDate()

  return `${monthName(date)} ${day}, ${year}`
}

function td(value, colorize = false) {
  const $td = document.createElement("td")
  let $content

  if (Number.isInteger(value)) {
    $content = document.createElement("poker-money")
    $content.setAttribute("amount", value)
    if (colorize && value > 0) {
      $content.style.color = "var(--color-green-500)"
    }

    if (colorize && value < 0) {
      $content.style.color = "var(--color-red-500)"
    }
  } else {
    $content = document.createElement("span")
    $content.innerText = formatDate(new Date(value))
  }

  $td.appendChild($content)

  return $td
}

function renderStat($table, stat) {
  const $stat = document.createElement("tr")
  const total = stat.cashOut - stat.buyIn
  $table.appendChild($stat)
  const $date = td(stat.date)
  const $buyIn = td(stat.buyIn)
  const $cashOut = td(stat.cashOut, true)
  const $total = td(total, true)
  const $deleteButton = document.createElement("button")

  $deleteButton.setAttribute("type", "button")
  $deleteButton.dataset.date = stat.date
  $deleteButton.classList.add("destructive")
  $deleteButton.innerText = "Delete"
  $deleteCell = document.createElement("td")
  $deleteCell.appendChild($deleteButton)

  $stat.appendChild($date)
  $stat.appendChild($buyIn)
  $stat.appendChild($cashOut)
  $stat.appendChild($total)
  $stat.appendChild($deleteCell)

  $deleteButton.addEventListener("click", e => {
    const date = new Date(e.currentTarget.dataset.date)
    Stats.delete(date)
    renderStats()
    renderTotal()
  })
}

function renderStats() {
  $stats.textContent = ""

  Stats.all.forEach(stat => {
    renderStat($stats, stat)
  })
}

function openModal() {
  $modalMask.classList.remove("hidden")
}

function closeModal() {
  $modalMask.classList.add("hidden")
  $form.reset()
  render()
}

function render() {
  renderStats()
  renderTotal()
  renderAverage()
  renderHighestCashout()
  renderHighestWinnings()
}

function renderTotal() {
  $total.setAttribute("amount", Stats.totalWinnings)
}

function renderAverage() {
  $average.setAttribute("amount", Stats.average)
}

function renderHighestCashout() {
  $highestCashout.setAttribute("amount", Stats.highestCashout)
}

function renderHighestWinnings() {
  $highestWinnings.setAttribute("amount", Stats.highestTotal)
}

document.addEventListener("keyup", ({ keyCode }) => {
  if (keyCode === 27) {
    closeModal()
  }
})

$modal.addEventListener("click", e => {
  e.stopPropagation()
})
$modalMask.addEventListener("click", () => {
  closeModal()
})

$addButton.addEventListener("click", () => {
  openModal()
})

$form.addEventListener("submit", e => {
  e.preventDefault()

  console.log(submit)

  Stats.add({
    date: new Date($dateInput.value),
    buyIn: parseInt($buyInInput.value, 10),
    cashOut: parseInt($cashOutInput.value, 10),
  })

  $form.reset()
  closeModal()
  renderStats()
})

render()
