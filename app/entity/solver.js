const rules = require('../data/rules')
const facts = require('../data/facts')

module.exports = class Solver {
  constructor (data) {
    this.sideNumber = data.sideNumber
    this.numberParallelSide = data.numberParallelSide
    this.numberSideSameLength = data.numberSideSameLength

    console.log(facts)
    console.log(rules)
  }

  solve () {
    return 'TODO'
  }

  getInputs () {
    return {
      sideNumber: this.sideNumber,
      numberParallelSide: this.numberParallelSide,
      numberSideSameLength: this.numberSideSameLength
    }
  }
}
