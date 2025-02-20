const { CREDENCIAIS, URLs, VARIABLE } = require("../support/constants");
const { validarProdutoAdicionadoCarrinhoCompras, validarSubstituicaoBotaoRemove, validarSeContabilizaQuantProdAdicionadoCarrinhoCompras, validarRedirecionamentoTelaProduto, validarRemocaoProdutoCarrinho } = require("../support/functions/home-function");
const { realizarLogin } = require("../support/functions/login-functions");

describe('Funcionalidade dos botões dos produtos', () => {
  beforeEach(() => {
    realizarLogin(CREDENCIAIS.USERNAME, CREDENCIAIS.PASSWORD, URLs.BASE_URL);
  });

  it('Deve redirecionar a tela de produto, ao clicar na imagem do produto', () => {
    validarRedirecionamentoTelaProduto(VARIABLE.BUTTON_PRODUCT_IMAGE, URLs.PRODUCT_PAGE);
  });

  it.only('Deve redirecinar a tela de produto, ao clicar no título do produto', () => {
    validarRedirecionamentoTelaProduto(VARIABLE.BUTTON_PRODUCT_TITLE, URLs.PRODUCT_PAGE);
  });

})

describe('Botão "Remove" no produto ', () => {
  beforeEach(() => {
    realizarLogin(CREDENCIAIS.USERNAME, CREDENCIAIS.PASSWORD, URLs.BASE_URL);
    cy.cliqueBotao(VARIABLE.BOTTON_ADD_PRODUCT);
  });

  it('Deve substituir o botão "Add to cart" pelo botão de "Remove", ao clicar no mesmo ', () => {
    validarSubstituicaoBotaoRemove();
  });

  it('Deve remover o produto do carrinho ao clicar no botão "Remove"', () => {
    validarRemocaoProdutoCarrinho();
  });

})

describe('Ícone do carrinho de compras', () => {
  beforeEach(() => {
    realizarLogin(CREDENCIAIS.USERNAME, CREDENCIAIS.PASSWORD, URLs.BASE_URL);
    cy.cliqueBotao(VARIABLE.BOTTON_ADD_PRODUCT);
  });

  it('Deve adicionar o produto ao carrinho de compras, ao clicar no botão "Add to cart"', () => {
    validarProdutoAdicionadoCarrinhoCompras();
  });

  it('Deve contabilizar a quantidade de produtos adicionados, ao clicar no botão "Add to cart" do um produto', () => {
    validarSeContabilizaQuantProdAdicionadoCarrinhoCompras();
  });

})