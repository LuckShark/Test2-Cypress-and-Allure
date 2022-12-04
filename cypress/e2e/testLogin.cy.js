///  <reference types="Cypress" />

//se lembrar de baixar o XPATH -> https://www.npmjs.com/package/cypress-xpath


describe('Testando Página do Fix Pay', () => { 
    
    it('Teste 1 - Login', () => {
        cy.acessarPaginaLogin()
        cy.inserirEmail()
        cy.acessarBotao()
        cy.aparecerErro()
            .should('be.exist')
    })
    

})