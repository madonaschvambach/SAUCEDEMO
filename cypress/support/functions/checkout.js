import { URLs, VARIABLE } from "../constants";

export function preRequisitosCheckout() {
    cy.cliqueBotao(VARIABLE.BUTTON_ADD_PRODUCT);
    cy.cliqueBotao(VARIABLE.BUTTON_SHOPPING_CART);
    cy.cliqueBotao(VARIABLE.BUTTON_CHECKOUT);
}

export function validarCampoFirstNameObrigatorio () {
    cy.cliqueBotao(VARIABLE.BUTTON_CONTINUE);
    cy.validarMensagemSendoExibida('Error: First Name is required');
}

export function validarCampoLastNameObrigatorio () {
    inserirValorCampoFirstName();
    cy.cliqueBotao(VARIABLE.BUTTON_CONTINUE);
    cy.validarMensagemSendoExibida('Error: Last Name is required');
}

export function validarCampoPostalCodeObrigatorio () {
    inserirValorCampoFirstName();
    inserirValorCampoLastName();
    cy.cliqueBotao(VARIABLE.BUTTON_CONTINUE);
    cy.validarMensagemSendoExibida('Error: Postal Code is required');
}

export function validarInformacoesDaCompra () {
    validarItemSendoListadoCheckout();
    validarTextosListadosChekcout();
}

export function validarItemSendoListadoCheckout () {
    cy.get('[data-test="inventory-item"]').should('exist');
}

export function validarTextosListadosChekcout () {
    cy.validarMensagemSendoExibida('Payment Information:');
    cy.validarMensagemSendoExibida('Shipping Information:');
    cy.validarMensagemSendoExibida('Price Total');
    cy.validarMensagemSendoExibida('Total:');
}

export function validarRedirecionamentoTelaCheckout () {
    validarURL(URLs.CHECKOUT);
}

export function validarRedirecionamentoCarrinhoCompras () {
    cy.cliqueBotao(VARIABLE.BUTTON_CANCEL);
    urlCarrinhoDeCompras();
}

export function validarRedirecionamentoPenultimaEtapaCompra () {
    validarURL(URLs.CHECKOUT_TWO);
}

export function validarRedirecionamentoTelaHome (button) {
    cy.get('[' + button + ']').should('exist').click();
    validarURL(URLs.HOME_PAGE);
}

export function validarRedirecionamentoNaEtapaDeCompraConcluida () {
    validarURL(URLs.CHECKOUT_COMPLETE);
}

export function validarMensagensDeCompraRealizadaComSucesso () {
    cy.validarMensagemSendoExibida('Thank you for your order!');
    cy.validarMensagemSendoExibida('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
}

export function inserirValoresNosCamposDoCheckout () {
    inserirValorCampoFirstName();
    inserirValorCampoLastName();
    inserirValorCampoPostalCode();
}

export function inserirValorCampoFirstName () {
    cy.get('input[name="firstName"]').should('exist').type("Madona");
}

export function inserirValorCampoLastName () {
    cy.get('input[name="lastName"]').should('exist').type("Schvambach");
}

export function inserirValorCampoPostalCode () {
    cy.get('input[name="postalCode"]').should('exist').type("89053435");
}

export function validarURL (URL) {
    cy.url().should('include', URL)
}