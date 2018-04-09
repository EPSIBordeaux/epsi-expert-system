var BASE_URL = "http://localhost:3000/";

describe('Tests', function () {

    beforeEach(function () {
        cy.visit(BASE_URL)
    })

    it('.should() - assert that <title> is correct', function () {
        cy.title().should('include', 'Hello World !')
    })

    it('.should() - assert their is the start button', function () {
        cy.get('input').should('contain', "Valider")
    })

})