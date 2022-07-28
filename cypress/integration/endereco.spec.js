/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')
describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });


    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Fábio', 'Araujo', 'Google', 'Brasil', 'Rua America', '5552', 'Osasco', 'São Paulo', '01023050', '11965453211', 'FabioA@teste.com')
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando Arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(dadosEndereco[1].nome,
         dadosEndereco[1].sobrenome,
         dadosEndereco[1].emrpesa,
         dadosEndereco[1].pais,
         dadosEndereco[1].endereco,
         dadosEndereco[1].numero,
         dadosEndereco[1].cidade,
         dadosEndereco[1].estado,
         dadosEndereco[1].cep,
         dadosEndereco[1].telefone,
         dadosEndereco[1].email   
         )
    });

});
