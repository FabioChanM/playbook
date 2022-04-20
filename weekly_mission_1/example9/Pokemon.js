export default class Logger {
    constructor (Pokemon) {
      this.name = Pokemon
    }
  
    log (message) {
      console.log(`[${this.Pokemon}] ${message}`)
    }
  }