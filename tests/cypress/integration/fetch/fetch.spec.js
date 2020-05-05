
describe('Fetch Data Page Tests', () => {
    beforeEach(() => {
        // code that you want to run before the test inits
        // usefull for setup data and routes
    })

    it('Visits the Fetch Page - mock', () => {
        cy.server()
        cy.fixture('weather/weather.json').as('weatherdata')

        cy.route('GET', '/WeatherForecast', [{ ping: 'pong' }]).as('preload')

        cy.visit('/fetch-data')
        cy.wait('@preload')

        cy.get('table>tbody').children().should('have.length', 5)
    })

    it('Visits the Fetch Page - Live', () => {
        cy.visit('/fetch-data')

        cy.get('table>tbody').children().should('have.length', 5)
    })
})