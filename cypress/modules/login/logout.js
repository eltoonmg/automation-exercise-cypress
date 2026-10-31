  function efetuarLogout() {
    cy.wait(5000);
    cy.get('a[href*="logout"]').should("be.visible").click();
  }

  export { efetuarLogout };