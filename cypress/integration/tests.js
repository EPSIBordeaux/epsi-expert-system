var BASE_URL = "http://localhost:3000/";

const factsList = require('../../app/data/facts')

describe('Tests', function () {

    beforeEach(function () {
        cy.visit(BASE_URL)
    })

    function setupForm(formValue) {
        cy.get('form')
            .find('#sideNumber').type(formValue.sideNumber)

        cy.get('form')
            .find("#numberSideSameLength").type(formValue.numberSideSameLength)

        cy.get("form")
            .find('#numberRightAngle').type(formValue.numberRightAngle)

        cy.get('form')
            .find("#numberParallelSide").type(formValue.numberParallelSide)

        if (formValue.toBeOrNotToBe) {
            cy.get('form')
                .find('#toBeOrNotToBe').check()
        }

    }

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    it('Should be a square', function () {

        setupForm({
            sideNumber: 4,
            numberSideSameLength: 4,
            numberRightAngle: 4,
            numberParallelSide: 2,
            toBeOrNotToBe: true
        })

        cy.get('form')
            .submit()

        cy.get("#resultat").should("have.html", getKeyByValue(factsList, factsList.CARRE))
    });

})