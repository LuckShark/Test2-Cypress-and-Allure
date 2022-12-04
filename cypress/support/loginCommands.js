///  <reference types="Cypress" />

import loginLocators from './elements/loginLocators'
const login_loc = new loginLocators

Cypress.Commands.add('acessarPaginaLogin', () => {
    cy.visit('/user/login', {failOnStatusCode: false}) //esse fail.. é se alguma api tiver caindo e tal.. mas isso é um risco. Por que não vamos testar a falha da api (se isso for o objetivo)
})

Cypress.Commands.add('inserirEmail', () => {
    cy.xpath(login_loc.FIELD_EMAIL()).type('guilacovolan@gmail.com')
})

Cypress.Commands.add('inserirSenha', () => {
    cy.xpath(login_loc.FIELD_SENHA()).type('123456')
})

Cypress.Commands.add('acessarBotao', () => {
    cy.xpath(login_loc.FIELD_BTN()).click()
})

Cypress.Commands.add('aparecerErro', () => {
    cy.xpath(login_loc.FIELD_ERRO())
})



