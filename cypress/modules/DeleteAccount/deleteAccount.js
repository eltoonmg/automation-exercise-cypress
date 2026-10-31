function deletarConta(){
    cy.wait(3000)
    cy.get('a[href="/delete_account"]').click();

    cy.get('[data-qa="account-deleted"]')
        .should('be.visible')
        .and('have.text', 'Account Deleted!');
}

export{
    deletarConta,
}