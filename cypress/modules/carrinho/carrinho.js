function validarMenuCarrinho(){
    cy.scrollTo('top');
    
    cy.get('.nav a[href*="view_cart"]').click();

    cy.url().should('include', '/view_cart');

    cy.get('#empty_cart').should('not.exist');
}

function validarEndereço(){
    cy.get('#address_delivery').should('be.visible');
    cy.contains('#address_delivery > .address_firstname', 'Mrs. PGATS Aut').should('be.visible');
    cy.contains('#address_delivery > .address_city','San Francisco California 12345').should('be.visible');
    cy.contains('#address_delivery > .address_country_name','United States').should('be.visible');

    cy.get('#address_invoice').should('be.visible');
    cy.contains('#address_invoice > .address_firstname','Mrs. PGATS Aut').should('be.visible');
    cy.contains('#address_invoice > .address_city','San Francisco California 12345').should('be.visible');
    cy.contains('#address_invoice > .address_country_name','United States').should('be.visible');
}

function realizarCheckOut(){
    cy.get('.check_out').click();
}

function preencherCampoDeTexto(){
    cy.get('.form-control').type("Compras concluídas com Sucesso!");

    //Clicar Place Order
    cy.get('a.check_out').click();

}

function preencherDadosCartao(){
    cy.get('[data-qa="name-on-card"]').type("Elton Machado");
    cy.get('[data-qa="card-number"]').type("2456148617878");
    cy.get('[data-qa="cvc"]').type("654");
    cy.get('[data-qa="expiry-month"]').type("10");
    cy.get('[data-qa="expiry-year"]').type("2030");
    cy.get('[data-qa="pay-button"]').click();
}

function validarCompra(){
    cy.contains('.container', 'Congratulations! Your order has been confirmed!').should('be.visible');
}

export {
    validarMenuCarrinho,
    realizarCheckOut,
    validarEndereço,
    preencherCampoDeTexto,
    preencherDadosCartao,
    validarCompra,
}