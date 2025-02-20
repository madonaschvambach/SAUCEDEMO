const { CREDENCIAIS, URLs } = require("../support/constants");
const { realizarLogin } = require("../support/functions/login-functions");
const { clicarBotaoRemove, validarExistenciaBotaoCheckout, validarDirecionamentoCarrinhoCompras, validarRedirecionamentoTelaDeCompras, validarExclusaoItemCarrinhoCompras } = require("../support/functions/shopping-cart");

describe('Funcionalidade botões', () => {
  beforeEach(() => {
    realizarLogin(CREDENCIAIS.USERNAME, CREDENCIAIS.PASSWORD, URLs.BASE_URL);
  });

  it('Deve direcionar a tela de carrinho de compras, ao clicar no ícone "Kart"', () => {
    validarDirecionamentoCarrinhoCompras();
  });

  it('Deve possuir o botão "Checkout', () => {
    validarExistenciaBotaoCheckout();
  });

  it('Deve retornar a tela de compras, ao clicar no botão "Continue Shopping"', () => {
    validarRedirecionamentoTelaDeCompras();
  });

  it('Deve excluir um item do carrinho de compras, ao clicar no botão "Remove"', () => {
    validarExclusaoItemCarrinhoCompras();
  });

})