
describe('Testando elementos', () => { //na suite posso ter 1 ou mais describes
  it('Teste 1 - Interagir com o texto', () => { //lembrando, IT é o caso de testes
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.get('#resultado')
      .should('contain','Status') //validar com contain é muito superficial
      .and('have.text','Status: Nao cadastrado') //and repete o contain
      .and('have.not.text', 'Status inválido') //assertiva negativa 
  })

  it('Teste 2 - Interagir com link', () => { 
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.get('[href="#"]')
      .click()

    cy.get('#resultado')
      .should('have.text','Voltou!')
  })

  it('Teste 3 -  Interagir com Input', () => { 
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.get('#formNome')
      .type('Fernando')
      .should('have.value','Fernando') //para validar um input, ao inves de haveTEXT tem que ser haveVALUE

    cy.get('[data-cy="dataSobrenome"]') //data-cy contribui MUITO para a automação - é tipo um ID mas só para testes
      .type('Pinheiro')
      .should('have.value','Pinheiro')
  })

  it('Teste 4 -  Interagir com radio', () => { 
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.get('#formSexoMasc')
      .click()
      .should('be.checked')

    cy.get('#formSexoFem')
      .should('not.be.checked')

    //fazer com xpath
    //cy.get('#formSexo')
    //  .should('have.lenght',3)
  })

  it('Teste 5 -  Interagir com Combobox', () => { 
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.get('[data-test="dataEscolaridade"]')
      .select('Superior')
      .should('have.value','superior')

    cy.get('[data-test="dataEscolaridade"] option')
      .should('have.length', 8)
  })

  it('Teste 6 -  Interagir com Checkbox', () => { //checkbox posso marcar vários - carne, frango...
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.get('#formComidaCarne')
      .click()
      .should('be.checked')
    
    cy.get('#formComidaFrango')
      .click()
      .should('be.checked')
    
    cy.get('#formComidaPizza')
      .should('not.be.checked')
    
    cy.get('#formComidaVegetariana')
      .should('not.be.checked')
  })

  it('Teste 7 -   Usando o Xpath ', () => { 
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.xpath('//*[.="Status: Nao cadastrado"]')
      .should('contain', 'Status');
      
  })

  it('Teste X  -  Usando ', () => { 
    cy.visit('https://wcaquino.me/cypress/componentes.html')

  })


})