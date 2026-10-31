  function acessarMenuProdutos() {

    //Clique no botão "Products" (Produtos).
    cy.get('a[href*="products"]').click();

    //Verifique se o usuário foi direcionado com sucesso para a página "ALL PRODUCTS" (Todos os produtos).
    cy.get('.title').should("be.visible");
 
  }

    function acessarPrimeiroProduto() {
    //Clique em "View Product" (Visualizar produto) do primeiro produto
    cy.get('a[href*="/product_details/1"]').first().click();

    //Verifique se o usuário foi direcionado para a página de detalhes do produto.
    cy.get('.active > a').should("exist");

    
    }

    function validarInformacoesProduto(){
    //Verifique se os detalhes do produto estão visíveis: nome, categoria, preço, disponibilidade, condição e marca.
    cy.get('.product-information > h2').should("be.visible");
    cy.get('.product-information > p').should("be.visible");
    cy.contains('span', 'Rs. 500').should('be.visible');
    cy.contains('b', 'Availability').should("be.visible");
    cy.contains('b', 'Condition').should("be.visible");
    cy.contains('b', 'Brand').should("be.visible");
    }

    function pesquisarProduto(){
    //Digite o nome do produto no campo de pesquisa e clique no botão de pesquisar.
    cy.get('#search_product').click();
    cy.get('#search_product').type('Frozen');
    cy.get('#submit_search').click();

    //Verifique se o título "SEARCHED PRODUCTS" (Produtos pesquisados) está visível.
    cy.contains('.title', 'Searched Products').should("be.visible");   
    }

    function verificarProdutosPesquisados() {
     cy.get('.product-image-wrapper')
        .should('be.visible')
        .and('have.length.greaterThan', 0);
    }

    function colocarProdutosCarrinho(){
       //cy.get('a[href*="/product_details/1"]').first().click();
       cy.wait(6000)
       cy.get('a[href*="/product_details/1"]')
            .filter(':has(i.fa-plus-square)')
            .first()
            .click()

       cy.get('button > .fa-shopping-cart').click();

       cy.wait(3000)
       
       //botão continuar shooping
       cy.get('.modal-footer > .btn').click();
    }

  export {  acessarMenuProdutos,
            acessarPrimeiroProduto,
            validarInformacoesProduto,
            pesquisarProduto,
            verificarProdutosPesquisados,
            colocarProdutosCarrinho,
   };