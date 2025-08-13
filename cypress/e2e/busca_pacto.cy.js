describe('Busca no Yahoo', () => {
  it('Buscar Pacto Soluções, verificar resultados e clicar no primeiro link', () => {
    // Ignora erros de cross-origin (popups em iframes)
    Cypress.on('uncaught:exception', () => false);

  
    cy.visit('https://br.search.yahoo.com/');

    //Digita "Pacto Soluções" e envia a busca
    cy.get('input[name="p"]', { timeout: 15000 })
      .should('be.visible')
      .clear()
      .type('Pacto Soluções{enter}');

    cy.contains(/pacto soluções/i, { timeout: 20000 }).should('be.visible');

    // Clique no primeiro resultado da busca
    cy.get('h3.title > a', { timeout: 20000 }).first().click({ force: true });

    // valida que a nova página carregou 
    cy.title().should('match', /Pacto/i);
  });
});
