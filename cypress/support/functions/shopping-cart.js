import { URLs, VARIABLE } from "../constants";

export function validarDirecionamentoCarrinhoCompras () {
    cy.cliqueBotao(VARIABLE.BUTTON_SHOPPING_CART);
    cy.validarURL(URLs.SHOPPING_CART);
}

export function validarRedirecionamentoTelaDeCompras () {
    cy.cliqueBotao(VARIABLE.BUTTON_SHOPPING_CART);
    clicarBotaoContinueShopping();
    cy.url().should('include', URLs.HOME_PAGE); 
}

export function validarExclusaoItemCarrinhoCompras () {
    cy.cliqueBotao(VARIABLE.BUTTON_ADD_PRODUCT);
    cy.cliqueBotao(VARIABLE.BUTTON_SHOPPING_CART);
    clicarBotaoRemove();
    cy.get('.cart_list .cart_item').should('not.exist');
}

export function clicarBotaoContinueShopping () {
    cy.get('[data-test="continue-shopping"]').should('exist').click();
}

export function validarExistenciaBotaoCheckout () {
    cy.cliqueBotao(VARIABLE.BUTTON_SHOPPING_CART);
    botaoCheckout();
}

export function botaoCheckout (){
    cy.get('[data-test="checkout"]').should('exist');
}

export function clicarBotaoRemove () {
    cy.get('.cart_list .cart_item_label .item_pricebar button').should('exist').click();
}