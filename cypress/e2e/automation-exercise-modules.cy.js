const cadastro = require ('../modules/cadastro/index');
const loginInicial = require('../modules/login/preparaLogin');
const login = require('../modules/login/login');
const logout = require('../modules/login/logout');
const produto = require('../modules/produtos/produtos');
const home = require('../modules/Home/home');
const carrinho = require('../modules/carrinho/carrinho');
const deletarConta = require('../modules/DeleteAccount/deleteAccount');


describe("Automation Exercise", () => {
  //cadastro
  it("Test Case 1: Cadastrar um novo usuário com sucesso", () => {
    cy.visit('/login');

    cadastro.iniciarCadastro();

    cadastro.preencherCadastro();

    cadastro.verificarSeCadastroFoiEfetuadoComSucesso();
  });

  it("Test Case 2: Efetuar Login de Usuário com email e senha corretos", () => {
    // Arrange: preparar um usuário válido
    loginInicial.prepararLogin();

    // Act: realizar login com o usuário cadastrado
    login.preencherLogin(cadastro.obterEmail(), "12345");

    // Assert: validar o login
    login.verificarSeLoginFoiEfetuadoComSucesso();
  });

  it("Test Case 3: Efetuar Login de Usuário com email e senha incorretos", () => {
    cy.visit('/login');

    //ACTpgats-aut-test-17910308722114@email.com 12345
    login.preencherLogin("pgats-aut-test-17910308722114@email.com", "1235544");

    login.verificarSeMensagemDeErroFoiExibidaNoLogin();
  });

  it("Test Case 4: Efetuar Logout", () => {
    //prepara Login
    loginInicial.prepararLogin();
    
    //Acesso a pagina de login
    cy.visit('/login');

    //ACT
    login.preencherLogin(cadastro.obterEmail(), "12345");

    //assert do login
    logout.efetuarLogout();

    login.verificarSeUsuarioEstaDeslogado();
  });

  it("Test Case 5: Cadastrar usuário com e-mail já existente", () => {
    // Arrange: preparar um usuário válido
    loginInicial.prepararLogin();

    //ACT: Realizar cadastro novamente iniciarCadastroComEmailDefinido
    cadastro.iniciarCadastroComEmailDefinido(cadastro.obterEmail());

    //ASSERT
    login.verificarSeMensagemDeErroEmailJaUtilizado();
  });

  it("Test Case 8: Verificar todos os produtos e a página de detalhes do produto", () => {
    // Arrange: preparar um usuário válido
    cy.visit('/login');

    //ACT: Acessar o Produto
    produto.acessarMenuProdutos();
    produto.acessarPrimeiroProduto();
    

    //ASSERT: Validar informações do produto
    produto.validarInformacoesProduto();
  });

  it("Test Case 9: Pesquisar produto", () => {
    // Arrange: preparar um usuário válido
    cy.visit('/login');

    //ACT: Acessar o Produto
    produto.acessarMenuProdutos();
    produto.pesquisarProduto();

    //ASSERT: Validar informações do produto
    produto.verificarProdutosPesquisados();
  });

  it("Test Case 10: Verificar a inscrição na página inicial", () => {
    // Arrange: preparar um usuário válido
    cy.visit('/login');

    //ACT: Rolar página até o final e enviar email
    home.rolarPaginaAteFinal

    //Verificar Texto
    cy.contains('h2','Subscription').should('exist');

    //Enviar Email:
    home.enviarEmail();

    //ASSERT: Validar mensagem de sucesso
    home.validarMensagemSucessoEmail;
  });

    it("Test Case 15: Finalizar pedido: cadastrar-se antes de finalizar a compra", () => {
    // Arrange: Acessar página
    cy.visit('/login');

    //ACT: Cadastrar usuário
    cadastro.iniciarCadastro();

    cadastro.preencherCadastro();

    cadastro.verificarSeCadastroFoiEfetuadoComSucesso();

    //Acessar produtos
    produto.acessarMenuProdutos();

    //colocar no carrinho
    produto.colocarProdutosCarrinho();

    //Acessar Carrinho
    carrinho.validarMenuCarrinho();

    //Realizar Checkout
    carrinho.realizarCheckOut();

    //Validar endereço
    carrinho.validarEndereço();

    //Preencher campo de texto
    carrinho.preencherCampoDeTexto();

    //Preencher Dados Cartao
    carrinho.preencherDadosCartao();

    //ASSERT: Validar mensagem de sucesso
    carrinho.validarCompra();

    //deletar conta
    deletarConta.deletarConta();

  });

   it.only("Test Case 16: Finalizar pedido: fazer login antes de concluir a compra", () => {
    // Arrange: Acessar página

    // Arrange: preparar um usuário válido
    loginInicial.prepararLogin();

    // Act: realizar login com o usuário cadastrado
    login.preencherLogin(cadastro.obterEmail(), "12345");

    //Acessar produtos
    produto.acessarMenuProdutos();

    //colocar no carrinho
    produto.colocarProdutosCarrinho();

    //Acessar Carrinho
    carrinho.validarMenuCarrinho();

    //Realizar Checkout
    carrinho.realizarCheckOut();

    //Validar endereço
    carrinho.validarEndereço();

    //Preencher campo de texto
    carrinho.preencherCampoDeTexto();

    //Preencher Dados Cartao
    carrinho.preencherDadosCartao();

    //ASSERT: Validar mensagem de sucesso
    carrinho.validarCompra();

    //deletar conta
    deletarConta.deletarConta();

  });


});
