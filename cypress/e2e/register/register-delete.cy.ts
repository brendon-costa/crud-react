import {fillForm, formValudValidMock} from "./register.mock";

describe("Deleção do registro", () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('Testando deleção do item', () => {
        cy.contains('Criar Novo Registro').click();
        fillForm('create');
        cy.get('#save-button').click();
        cy.get('tbody tr').eq(3).within(() => {
            cy.get('button').contains('Deletar').click();
        });
        cy.contains(formValudValidMock.nome).should('not.exist');
        cy.contains(formValudValidMock.cpfMask).should('not.exist');
        cy.contains(formValudValidMock.phoneMask).should('not.exist');
        cy.contains(formValudValidMock.email).should('not.exist');
    });
})

