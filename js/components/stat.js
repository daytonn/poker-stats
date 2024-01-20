import { html, css, LitElement } from "lit"
import "./money.js"
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

export class StatComponent extends LitElement {
  static properties = {
    buyIn: { type: Number },
    cashOut: { type: Number },
    date: { type: Date },
  }

  get total() {
    return this.cashOut - this.buyIn
  }

  get formattedDate() {
    // return formatDate(this.getAttribute("date"))
    return "."
  }

  render() {
    return html` <tr>
      <td>${this.formattedDate}</td>
      <td><poker-money amount=${this.buyIn}></poker-money></td>
      <td><poker-money amount=${this.cashOut}></poker-money></td>
      <td><poker-money amount=${this.total}></poker-money></td>
    </tr>`
  }
}
customElements.define("poker-stat", StatComponent)
