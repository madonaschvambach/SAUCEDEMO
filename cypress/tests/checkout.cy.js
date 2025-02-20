const { CREDENCIAIS, URLs, VARIABLE } = require("../support/constants");
const { preRequisitosCheckout, validarCampoFirstNameObrigatorio, validarCampoLastNameObrigatorio, validarCampoPostalCodeObrigatorio, inserirValoresNosCamposDoCheckout, validarInformacoesDaCompra, validarRedirecionamentoTelaCheckout, validarRedirecionamentoPenultimaEtapaCompra, validarRedirecionamentoTelaHome, validarRedirecionamentoNaEtapaDeCompraConcluida, validarMensagensDeCompraRealizadaComSucesso } = require("../support/functions/checkout");
const { realizarLogin } = require("../support/functions/login-functions");


describe('Botão "Checkout"', () => {
  beforeEach(() => {
    realizarLogin(CREDENCIAIS.USERNAME, CREDENCIAIS.PASSWORD, URLs.BASE_URL);
    preRequisitosCheckout();
  });

  it('Deve redirecionar a tela do checkout, ao clicar no botão "Checkout"', () => {
    validarRedirecionamentoTelaCheckout();
  });

})

describe('Botão "Cancelar"', () => {
  beforeEach(() => {
    realizarLogin(CREDENCIAIS.USERNAME, CREDENCIAIS.PASSWORD, URLs.BASE_URL);
    preRequisitosCheckout();
  });

  it('Deve redirecionar ao carrinho de compras, ao clicar no botão "Cancel"', () => {
    validarRedirecionamentoTelaCheckout();
  });

})

describe('Campos obrigatórios da rotina de checkout', () => {
  beforeEach(() => {
    realizarLogin(CREDENCIAIS.USERNAME, CREDENCIAIS.PASSWORD, URLs.BASE_URL);
    preRequisitosCheckout();
  });

  it('Deve validar se o campo "First Name" é obrigatório', () => {
    validarCampoFirstNameObrigatorio();
  });

  it('Deve validar se o campo "Last Name" é obrigatório', () => {
    validarCampoLastNameObrigatorio();
  });

  it('Deve validar se o campo "Postal code" é obrigatório', () => {
    validarCampoPostalCodeObrigatorio();
  });

})

describe('Funcionalidades da rotina de checkout', () => {
  beforeEach(() => {
    realizarLogin(CREDENCIAIS.USERNAME, CREDENCIAIS.PASSWORD, URLs.BASE_URL);
    preRequisitosCheckout();
    inserirValoresNosCamposDoCheckout();
    cy.cliqueBotao(VARIABLE.BUTTON_CONTINUE);
  });

  it('Deve direcionar a tela de finalização de compra, ao clicar no botão "Continue"', () => {
    validarRedirecionamentoPenultimaEtapaCompra();
  });

  it('Deve possuir as informações da compra na última etapa do checkout', () => {
    validarInformacoesDaCompra();
  });

  it ('Deve direcionar a tela home, ao clicar no botão "Cancel"', () => {
    validarRedirecionamentoTelaHome(VARIABLE.BUTTON_CANCEL);
  });
})

describe('Etapa de compra realizada', () => {
  beforeEach(() => {
    realizarLogin(CREDENCIAIS.USERNAME, CREDENCIAIS.PASSWORD, URLs.BASE_URL);
    preRequisitosCheckout();
    inserirValoresNosCamposDoCheckout();
    cy.cliqueBotao(VARIABLE.BUTTON_CONTINUE);
    cy.cliqueBotao(VARIABLE.BUTTON_FINISH);
  });

  it('Deve redirecionar a ulr de compra concluída', () => {
    validarRedirecionamentoNaEtapaDeCompraConcluida();
  });

  it('Deve mostrar uma mensagem de compra realizada com sucesso ao concluir a mesma', () => {
    validarMensagensDeCompraRealizadaComSucesso();
  });

  it('Deve direcionar a página home, ao clicar no botão "Back Home" ', () => {
    validarRedirecionamentoTelaHome(VARIABLE.BUTTON_BACKHOME);
  });

})

  // Validar ordenação dos filtros
  // testar as opções de menu
  // testar opções rodapé