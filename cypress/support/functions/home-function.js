import { VARIABLE } from "../constants";

export function validarRedirecionamentoTelaProduto (button, url) {
    cy.cliqueBotao(button);
    cy.validarURL(url);
}

export function validarRemocaoProdutoCarrinho () {
    cy.cliqueBotao(VARIABLE.BUTTON_REMOVE_PRODUCT);
    validarCarrinhoComprasVazio();
}

export function validarProdutoAdicionadoCarrinhoCompras () {
    cy.get('[data-test="shopping-cart-link"] [data-test="shopping-cart-badge"]').should('exist');
}

export function validarSeContabilizaQuantProdAdicionadoCarrinhoCompras () {
    cy.get('[data-test="shopping-cart-link"] [data-test="shopping-cart-badge"]').should('exist')
    .invoke('text') // Obtém o texto do span
    .then((text) => {
        const value = parseFloat(text.trim()); // Converte o texto em número
        expect(value).to.be.greaterThan(0); // Verifica se é maior que zero
  });;
}

export function validarCarrinhoComprasVazio () {
    cy.get('a .shopping_cart_link').should('not.exist', 'span');
}

export function validarSubstituicaoBotaoRemove () {
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist').first();
}