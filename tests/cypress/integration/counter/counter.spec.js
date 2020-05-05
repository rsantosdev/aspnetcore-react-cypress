
describe('Counter Page Tests', () => {
    it('Click Counter Button Should Increment Value', () => {
        cy.visit('/counter')
        
        cy.get('button.btn').click()
        cy.get('strong').should('have.text', '1')

        cy.get('button.btn').click()
        cy.get('button.btn').click()
        cy.get('strong').should('have.text', '3')
    })
})