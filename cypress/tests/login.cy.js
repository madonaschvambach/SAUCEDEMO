const { URLs, CREDENCIAIS } = require("../support/constants");
const { validarCampoPassWordObrigatorio, validarCampoUserNameObrigatorio, validarCredenciaisLoginInvalidas, exclusaoMensagemClicarNoX, validarRedirecionamentoTelaCompras } = require("../support/functions/login-functions")

describe('Campos obrigatórios login', () => {
  beforeEach(() => {
    cy.limparCache();
  });

  it('Deve validar se o campo "username" é obrigatório, e exibir a mensagem de campo obrigatório', () => {
    validarCampoUserNameObrigatorio();
  });

  it('Deve validar se o campo "password" é obrigatório, e exibir a mensagem de campo obrigatório', () => {
    validarCampoPassWordObrigatorio(CREDENCIAIS.USERNAME, URLs.BASE_URL);
  });

})

describe('Validações no login', () => {
  beforeEach(() => {
    cy.limparCache();
  });

  it('Deve exibir mensagem de login inválido ao inserir credenciais inválidas', () => {
    validarCredenciaisLoginInvalidas();
  });

  it('Deve excluir a mensagem em tela, ao clicar no ícone do X', () => {
    exclusaoMensagemClicarNoX();
  });  

})

describe('Funcionalidade de Login', () => {
  beforeEach(() => {
    cy.limparCache();
  });

  it('Deve redirecionar para a página de compras após login bem-sucessido', () => {
    validarRedirecionamentoTelaCompras();
  });
})