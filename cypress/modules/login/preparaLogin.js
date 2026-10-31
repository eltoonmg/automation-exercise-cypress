import * as cadastro from  '../cadastro/index.js';
import { efetuarLogout } from './logout';

function prepararLogin() {
  cy.visit('/login');

  cadastro.iniciarCadastro();
  cadastro.preencherCadastro();

  cy.get('[data-qa="continue-button"]').click();

  efetuarLogout();
}

export { prepararLogin };