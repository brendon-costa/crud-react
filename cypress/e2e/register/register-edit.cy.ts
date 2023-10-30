import {fillForm, formValudValidEditMock, formValudValidMock, resetForm} from "./register.mock";

describe("Edição de registro", () => {
    beforeEach(() => {
        cy.visit('/');
        cy.contains('Criar Novo Registro').click();
    })
    it('Testando se a tela foi preenchida corretamente', () => {
        fillForm('create');
        cy.get('#save-button').click();
        cy.get('tbody tr').eq(3).within(() => {
            cy.get('button').contains('Editar').click();
        });
        cy.get('input[name="name"]').should('have.value', formValudValidMock.nome);
        cy.get('input[name="email"]').should('have.value', formValudValidMock.email);
        cy.get('input[name="cpf"]').should('have.value', formValudValidMock.cpfMask);
        cy.get('input[name="phone"]').should('have.value', formValudValidMock.phoneMask);
    });
    it('Testando se item editado foi salvo corretamente', () => {
        fillForm('create');
        cy.get('#save-button').click();
        cy.get('tbody tr').eq(3).within(() => {
            cy.get('button').contains('Editar').click();
        });
        resetForm();
        fillForm('edit');
        cy.get('#save-button').click();
        cy.contains(formValudValidEditMock.nome).should('exist');
        cy.contains(formValudValidEditMock.cpfMask).should('exist');
        cy.contains(formValudValidEditMock.phoneMask).should('exist');
        cy.contains(formValudValidEditMock.email).should('exist');
    });
})

