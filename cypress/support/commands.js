Cypress.Commands.add('validarMensagemSendoExibida', (message) => {
    cy.contains(message).should('be.visible');
});

Cypress.Commands.add('cliqueBotao', (botton) => {
    cy.get('[' + botton + ']').should('exist').first().click();
});

Cypress.Commands.add('validarURL', (URL) => {
    cy.url().should('include', URL)
});

Cypress.Commands.add('limparCache', (URL) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
});
