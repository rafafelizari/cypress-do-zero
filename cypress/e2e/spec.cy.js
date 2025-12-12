Cypress.on('uncaught:exception', (err, runnable) => {
  // Retornar false impede que o Cypress falhe o teste
  // quando detectar erros no site/aplicação
  return false
})
describe('Teste de Login InCicle', () => {

  beforeEach(() => {
    cy.visit('https://account.inciclebeta.com/')
    cy.get('#root input[type="email"]').type('tedagaw982@reifide.com')
    cy.get('#root input[type="password"]').type('123')
    cy.get('#root button[type="submit"]').click()

    cy.origin('https://social.inciclebeta.com/', () => {

      cy.contains('Feed', { timeout: 10000 }).should('be.visible')
    }) 
  })

  it('Abrir Feedback, solicitar um feedback', () => {

    cy.origin('https://social.inciclebeta.com/', () => {
      cy.contains('Feedback').click()
      cy.url({ timeout: 10000 }).should('include', '/feedback')
      cy.wait(3000)
      cy.contains('Solicitar feedback', { timeout: 10000 })
          .should('be.visible')
          .wait(1000) // Pequena pausa para garantir que o React terminou de "piscar" a tela
          .click({ force: true })
          cy.get('div[role="dialog"]', { timeout: 10000 }).should('be.visible').within(() => {
  
            cy.get('input[role="combobox"]').first()
              .type('André Hiroki') // delay ajuda a simular digitação real p/ o autocomplete funcionar
        })
        cy.contains('li', 'André Hiroki', { timeout: 5000 })
          .should('be.visible')
          .click()
          cy.contains('Enviar solicitação').click()
    })
  })
})