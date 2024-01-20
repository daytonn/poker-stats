class Stats {
  get all() {
    return Object.values({ ...window.localStorage })
      .map(JSON.parse)
      .sort((a, b) => {
        return Date.parse(a.date) - Date.parse(b.date)
      })
  }

  add(value) {
    window.localStorage.setItem(value.date, JSON.stringify(value))
  }

  delete(key) {
    window.localStorage.removeItem(key)
  }

  get highestCashout() {
    if (!this.all.length) return 0

    return this.all.sort((a, b) => {
      if (a.cashOut > b.cashOut) return -1
      if (a.cashOut < b.cashOut) return 1
      return 0
    })[0].cashOut
  }

  get highestTotal() {
    if (!this.all.length) return 0

    const highest = this.all.sort((a, b) => {
      const atotal = a.cashOut - a.buyIn
      const btotal = b.cashOut - b.buyIn
      if (atotal > btotal) return -1
      if (atotal < btotal) return 1
      return 0
    })[0]

    return highest.cashOut - highest.buyIn
  }

  get average() {
    if (!this.all.length) return 0
    return this.totalWinnings / this.all.length
  }

  get totalWinnings() {
    return this.all.reduce((acc, value) => {
      return acc + (value.cashOut - value.buyIn)
    }, 0)
  }
}

export default new Stats()
