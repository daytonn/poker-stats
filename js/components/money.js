import { html, css, LitElement } from "lit"

export class Money extends LitElement {
  static properties = {
    amount: { type: Number },
  }

  render() {
    return html`<span>$${this.amount}</span>`
  }
}

customElements.define("poker-money", Money)
