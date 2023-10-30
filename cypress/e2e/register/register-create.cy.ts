import {fillForm, formValudValidMock} from "./register.mock";

describe("Criação de um registro", () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
        cy.contains('Criar Novo Registro').click();
    })
    describe("Testando campos inválidos", () => {
        it('Exibe mensagem de erro quando o nome for inválido', () => {
            cy.get('input[name="name"]').type('ab');
            cy.get('input[name="name"]').blur();
            cy.contains('Este campo precisa ter pelo menos 3 caracteres').should('exist');
        });
        it('Exibe mensagem de erro quando o e-mail for inválido', () => {
            cy.get('input[name="email"]').type('ab');
            cy.get('input[name="email"]').blur();
            cy.contains('E-mail inválido').should('exist');
        });
        it('Exibe mensagem de erro quando o CPF é inválido', () => {
            cy.get('input[name="cpf"]').type('12345678900');
            cy.get('input[name="cpf"]').blur();
            cy.contains('CPF inválido').should('exist');
        });
        it('Exibe mensagem de erro quando o telefone é inválido', () => {
            cy.get('input[name="phone"]').type('123456');
            cy.get('input[name="phone"]').blur();
            cy.contains('Telefone inválido').should('exist');
        });
    });

    describe("Testando campos validos", () => {
        it('Não exibir mensagem de erro quando o nome for valido', () => {
            cy.get('input[name="name"]').type(formValudValidMock.nome);
            cy.get('input[name="name"]').blur();
            cy.contains('Este campo precisa ter pelo menos 3 caracteres').should('not.exist');
        });
        it('Não exibir mensagem de erro quando o email for valido', () => {
            cy.get('input[name="email"]').type(formValudValidMock.email);
            cy.get('input[name="email"]').blur();
            cy.contains('E-mail inválido').should('not.exist');
        });
        it('Não exibir mensagem de erro quando o cpf for valido', () => {
            cy.get('input[name="cpf"]').type(formValudValidMock.cpf);
            cy.get('input[name="cpf"]').blur();
            cy.contains('CPF inválido').should('not.exist');
        });
        it('Não exibir mensagem de erro quando o telefone for valido', () => {
            cy.get('input[name="phone"]').type(formValudValidMock.phone);
            cy.get('input[name="phone"]').blur();
            cy.contains('Telefone inválido').should('not.exist');
        });
    });

    describe("Testando ação do botão cancelar", () => {
        it('Resetando após clicar no botão cancelar', () => {
            fillForm('create');
            cy.get('#cancel-button').click();
            cy.contains('Criar Novo Registro').click();
            cy.get('input[name="name"]').should('have.value', '');
            cy.get('input[name="email"]').should('have.value', '');
            cy.get('input[name="cpf"]').should('have.value', '');
            cy.get('input[name="phone"]').should('have.value', '');
        });
    });

    describe("Testando ação do botão salve", () => {
        it('Testando se o save é concluído e as informações exibidas na listagem', () => {
            fillForm('create');
            cy.get('#save-button').click();
            cy.contains(formValudValidMock.nome);
            cy.contains(formValudValidMock.cpfMask);
            cy.contains(formValudValidMock.phoneMask);
            cy.contains(formValudValidMock.email);
        });
    });
})

