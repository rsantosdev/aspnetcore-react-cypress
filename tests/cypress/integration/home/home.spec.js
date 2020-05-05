
describe('Home Page Tests', () => {
    it('Visits the Home Page', () => {
        cy.visit('/')
        
        cy.get('h1').should('have.text', 'Hello, world!')
    })
})