const rulesList = require('../data/rules')
const factsList = require('../data/facts')
const Rule = require('./rule')

module.exports = class Solver {
  constructor () {
    this.facts = []
    this.rules = []

    // On 'explode' les sous regles en regles
    for (let conclusion in rulesList) {
      this.rules.push(...rulesList[conclusion].map(x => {
        return new Rule(x.split('+'), conclusion)
      }))
    }
  }

  addFact (fact) {
    if (fact in factsList) {
      this.facts.push(fact)
    }
  }

  solve () {
    console.log(this.facts)
    let conclusions = []
    do {
      conclusions.forEach(rule => {
        this.facts = rule.apply(this.facts)
      })

      conclusions = this.rules.filter(rule => rule.test(this.facts))
      console.log(conclusions)
      console.log(this.facts)
    } while (conclusions.length > 0)

    return this.facts.join()
  }
}
