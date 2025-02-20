import { CREDENCIAIS, URLs } from "../constants";

export function realizarLogin (username, password, url) {
    cy.limparCache();
    cy.visit(url); 
    cy.get('input[name="user-name"]').should('exist').type(username);
    cy.get('input[name="password"]').should('exist').type(password);
    cy.get('input[name="login-button"]').should('exist').click(); 
}

export function validarCredenciaisLoginInvalidas () {
    realizarLogin('2', '2', URLs.BASE_URL);
    cy.validarMensagemSendoExibida('Epic sadface: Username and password do not match any user in this service');
}

export function exclusaoMensagemClicarNoX () {
    validarCampoPassWordObrigatorio(CREDENCIAIS.USERNAME, URLs.BASE_URL);
    cy.validarMensagemSendoExibida('Epic sadface: Password is required');
    validarMensagemRemovidaDaTelaAoClicarNoX();
}

export function validarRedirecionamentoTelaCompras () {
    realizarLogin(CREDENCIAIS.USERNAME, CREDENCIAIS.PASSWORD, URLs.BASE_URL);
    cy.validarURL(URLs.HOME_PAGE);
}

export function validarCampoUserNameObrigatorio () {
    campoUsernameObrigatorio(CREDENCIAIS.PASSWORD, URLs.BASE_URL);
    cy.validarMensagemSendoExibida('Epic sadface: Username is required');
}

export function validarCampoPassWordObrigatorio (username, url) {
    campoPassWordObrigatorio(username, url);
    cy.validarMensagemSendoExibida('Epic sadface: Password is required');
}

export function campoUsernameObrigatorio (password, url) {
    cy.visit(url); 
    cy.get('input[name="password"]').should('exist').type(password);
    cy.get('input[name="login-button"]').should('exist').click(); 
}

export function campoPassWordObrigatorio (username, url) {
    cy.visit(url); 
    cy.get('input[name="user-name"]').should('exist').type(username);
    cy.get('input[name="login-button"]').should('exist').click(); 
}

export function validarMensagemRemovidaDaTelaAoClicarNoX () {
    cy.get('[data-test="error-button"]').should('exist').click();
    cy.get('[data-test="error"]').should('not.exist');
}
