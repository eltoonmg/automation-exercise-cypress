  function preencherLogin(email, senha) {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha);

    cy.get('[data-qa="login-button"]').click();
  }

  function verificarSeLoginFoiEfetuadoComSucesso() {
    cy.wait(2000);
    cy.get(".navbar-nav li").contains("PGATS Aut").should("be.visible");
  }

  function verificarSeMensagemDeErroFoiExibidaNoLogin() {
    cy.get('form[action*="login"] > p')
      .should("exist")
      .should("be.visible")
      .should("contain", "Your email or password is incorrect!")
      .and("contain.text", "Your email or password is incorrect!");
  }

  function verificarSeMensagemDeErroEmailJaUtilizado() {
    cy.wait(2000);
    cy.get('form[action*="signup"] > p')
      .should("exist")
      .should("be.visible")
      .should("contain", "Email Address already exist!")
      .and("contain.text", "Email Address already exist!");
  }

  function verificarSeUsuarioEstaDeslogado() {
    cy.get(".login-form > h2").should("be.visible");
    cy.get('a[href*="logout"]').should("not.exist");
    cy.get('[action*="login"]').should("be.visible");
    cy.url().should("include", "login");
  }

  export {  preencherLogin, 
            verificarSeLoginFoiEfetuadoComSucesso, 
            verificarSeMensagemDeErroFoiExibidaNoLogin, 
            verificarSeUsuarioEstaDeslogado,
            verificarSeMensagemDeErroEmailJaUtilizado,
   };