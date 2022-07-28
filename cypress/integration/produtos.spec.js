/// <reference types="cypress" />
describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first
            //.last()
            //.eq(7)
            .contains('Apollo Running Short')
            .click()
    })

    it('Deve adcionar um produto ao carrinho', () => {
        var quantidade = 10

        cy.get('[class="product-block grid"]')
        .contains('Apollo Running Short').click()
        cy.get('.button-variable-item-36').click()  
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()   
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should ('contain', quantidade + ' × “Apollo Running Short” foram adicionados no seu carrinho.')
    })

    it('Deve adcionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Yellow', 2) 

    });
});