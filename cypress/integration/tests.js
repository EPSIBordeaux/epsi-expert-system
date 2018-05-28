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

        if (formValue.sideEqualTwoByTwo) {
            cy.get('form')
                .find('#toBeOrNotToBe').check()
        }

    }

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    describe('Triangle', function () {

        it('Should be a triangle', function () {

            setupForm({
                sideNumber: 3,
                numberSideSameLength: 0,
                numberRightAngle: 0,
                numberParallelSide: 0,
                sideEqualTwoByTwo: false
            })

            cy.get('form')
                .submit()

            cy.get("#resultat").should("have.html", getKeyByValue(factsList, factsList.TRIANGLE))
        });

        it('Should be a rectangle triangle', function () {

            setupForm({
                sideNumber: 3,
                numberSideSameLength: 0,
                numberRightAngle: 1,
                numberParallelSide: 0,
                sideEqualTwoByTwo: false
            })

            cy.get('form')
                .submit()

            cy.get("#resultat").should("have.html", getKeyByValue(factsList, factsList.TRIANGLE_RECTANGLE))
        });

        it('Should be a equilateral triangle', function () {

            setupForm({
                sideNumber: 3,
                numberSideSameLength: 3,
                numberRightAngle: 0,
                numberParallelSide: 0,
                sideEqualTwoByTwo: false
            })

            cy.get('form')
                .submit()

            cy.get("#resultat").should("have.html", getKeyByValue(factsList, factsList.TRIANGLE_EQUILATERAL))
        });

        it('Should be an isocele triangle', function () {

            setupForm({
                sideNumber: 3,
                numberSideSameLength: 2,
                numberRightAngle: 0,
                numberParallelSide: 2,
                sideEqualTwoByTwo: false
            })

            cy.get('form')
                .submit()

            cy.get("#resultat").should("have.html", getKeyByValue(factsList, factsList.TRIANGLE_ISOCELE))
        });

        it('Should be an isocele rectangle triangle', function () {

            setupForm({
                sideNumber: 3,
                numberSideSameLength: 2,
                numberRightAngle: 1,
                numberParallelSide: 2,
                sideEqualTwoByTwo: false
            })

            cy.get('form')
                .submit()

            cy.get("#resultat").should("have.html", getKeyByValue(factsList, factsList.TRIANGLE_ISOCELE_RECTANGLE))
        });

    })

    describe.only('Quadrilatere / Square / Rectangle', function () {

        it('Should be a quadrilatere', function () {

            setupForm({
                sideNumber: 4,
                numberSideSameLength: 0,
                numberRightAngle: 0,
                numberParallelSide: 0,
                sideEqualTwoByTwo: false
            })

            cy.get('form')
                .submit()

            cy.get("#resultat").should("have.html", getKeyByValue(factsList, factsList.QUADRILATERE))
        });

        it('Should be a losange', function () {

            setupForm({
                sideNumber: 4,
                numberSideSameLength: 4,
                numberRightAngle: 0,
                numberParallelSide: 0,
                sideEqualTwoByTwo: false
            })

            cy.get('form')
                .submit()

            cy.get("#resultat").should("have.html", getKeyByValue(factsList, factsList.LOSANGE))
        });

        it('Should be a square', function () {

            setupForm({
                sideNumber: 4,
                numberSideSameLength: 4,
                numberRightAngle: 4,
                numberParallelSide: 2,
                sideEqualTwoByTwo: true
            })

            cy.get('form')
                .submit()

            cy.get("#resultat").should("have.html", getKeyByValue(factsList, factsList.CARRE))
        });

        it('Should be a rectangle', function () {

            setupForm({
                sideNumber: 4,
                numberSideSameLength: 2,
                numberRightAngle: 4,
                numberParallelSide: 2,
                sideEqualTwoByTwo: true
            })

            cy.get('form')
                .submit()

            cy.get("#resultat").should("have.html", getKeyByValue(factsList, factsList.RECTANGLE))
        });

    })

    describe('Trapeze', function () {

        it('Should be a trapeze', function () {

            setupForm({
                sideNumber: 4,
                numberSideSameLength: 0,
                numberRightAngle: 0,
                numberParallelSide: 2,
                sideEqualTwoByTwo: false
            })

            cy.get('form')
                .submit()

            cy.get("#resultat").should("have.html", getKeyByValue(factsList, factsList.TRAPEZE))
        });

        it('Should be a trapeze rectangle', function () {

            setupForm({
                sideNumber: 4,
                numberSideSameLength: 0,
                numberRightAngle: 2,
                numberParallelSide: 2,
                sideEqualTwoByTwo: false
            })

            cy.get('form')
                .submit()

            cy.get("#resultat").should("have.html", getKeyByValue(factsList, factsList.TRAPEZE_RECTANGLE))
        });

    })

})