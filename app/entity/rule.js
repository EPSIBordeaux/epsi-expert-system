module.exports = class Rule {
  constructor (prerequisites, conclusion) {
    this.prerequisites = prerequisites
    this.conclusion = conclusion
  }

  // Vérifie que tous les prérequis sont présent dans les faits
  test (facts) {
    return this.prerequisites.every(prerequisite => facts.indexOf(prerequisite) >= 0)
  }

  apply (facts) {
    // on retire les prerequits de la liste de faits
    let prerequisites = this.prerequisites
    facts = facts.filter(fact => !(prerequisites.indexOf(fact) >= 0))
    facts.push(this.conclusion)

    return facts
  }
}
