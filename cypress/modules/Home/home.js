import { obterEmail } from "../cadastro/index";

function rolarPaginaAteFinal() {
  cy.scrollTo('bottom');
}

function enviarEmail(){
    cy.get('#susbscribe_email').click();
    cy.get('#susbscribe_email').type("email@email.com");
    cy.get('#subscribe').click();
}

function validarMensagemSucessoEmail(){
    cy.get('.alert-success').should('be.visible');
}

export { 
    rolarPaginaAteFinal,
    enviarEmail,
    validarMensagemSucessoEmail,
}