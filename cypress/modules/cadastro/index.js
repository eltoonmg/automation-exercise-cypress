let email;

function iniciarCadastro() {
  cy.get('[data-qa="signup-name"]').type(`PGATS Auto`);

  //salvar login
  email = `pgats-aaut-test-${Date.now()}@email.com`;
  cy.get('[data-qa="signup-email"]').type(email);

  cy.get('[data-qa="signup-button"]').click();

}

function iniciarCadastroComEmailDefinido(emailDefinido) {
  cy.get('[data-qa="signup-name"]').type(`PGATS Auto`);

  //salvar login
  cy.get('[data-qa="signup-email"]').type(emailDefinido);

  cy.get('[data-qa="signup-button"]').click();
}

function preencherCadastro() {
  cy.get('[data-qa="signup-button"]').click();

  // radio buttons e checkboxes
  cy.get("#id_gender2").check();

  cy.get('[data-qa="password"]').type("12345");

  //Selects e Comboboxes -> Select
  cy.get('[data-qa="days"]').select("1");
  cy.get('[data-qa="months"]').select("September");
  cy.get('[data-qa="years"]').select("1990");

  // adiciona mês e ano

  //checkboxes -> check
  cy.get("#newsletter").check();
  cy.get("#optin").check();

  cy.get('[data-qa="first_name"]').type("PGATS");
  cy.get('[data-qa="last_name"]').type("Aut");
  cy.get('[data-qa="company"]').type("Pgats");
  cy.get('[data-qa="address"]').type("Exemple Adress");

  cy.get('[data-qa="country"]').select("United States");
  cy.get('[data-qa="state"]').type("California");
  cy.get('[data-qa="city"]').type("San Francisco");
  cy.get('[data-qa="zipcode"]').type("12345");
  cy.get('[data-qa="mobile_number"]').type("99999999");
  cy.get('[data-qa="create-account"]').click();
}

function verificarSeCadastroFoiEfetuadoComSucesso() {
  cy.get('[data-qa="account-created"]')
    .should("be.visible")
    .and("contain", "Account Created!");
}

function obterEmail(){
    return email;
}

module.exports = {
  iniciarCadastro,
  preencherCadastro,
  verificarSeCadastroFoiEfetuadoComSucesso,
  obterEmail,
  iniciarCadastroComEmailDefinido,
};
