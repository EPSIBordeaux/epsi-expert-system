const rulesList = require('../data/rules')
const factsList = require('../data/facts')

module.exports = class Solver {
  
  constructor () {
    this.facts=[];
  }

  addFact(fact){
    if(fact in factsList){
      this.facts.push(fact)
    }
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
