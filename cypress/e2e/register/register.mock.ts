export const formValudValidMock = {
    cpf: '92655992008',
    cpfMask: '926.559.920-08',
    phone: '21980176933',
    phoneMask: '(21) 98017-6933',
    nome: 'Brendon Costa',
    email: 'brendon.costa@dev.com',
}

export const formValudValidEditMock = {
    cpf: '23902314036',
    cpfMask: '239.023.140-36',
    phone: '21980176955',
    phoneMask: '(21) 98017-6955',
    nome: 'Brendon Costa Editado',
    email: 'brendon.costa.editado@dev.com',
}

export const fillForm = (typeForm: 'create' | 'edit') => {
    if (typeForm == 'create') {
        cy.get('input[name="name"]').type(formValudValidMock.nome);
        cy.get('input[name="email"]').type(formValudValidMock.email);
        cy.get('input[name="cpf"]').type(formValudValidMock.cpf);
        cy.get('input[name="phone"]').type(formValudValidMock.phone);
    } else {
        cy.get('input[name="name"]').type(formValudValidEditMock.nome);
        cy.get('input[name="email"]').type(formValudValidEditMock.email);
        cy.get('input[name="cpf"]').type(formValudValidEditMock.cpf);
        cy.get('input[name="phone"]').type(formValudValidEditMock.phone);
    }
}

export const resetForm = () => {
    cy.get('input[name="name"]').clear();
    cy.get('input[name="email"]').clear();
    cy.get('input[name="cpf"]').clear();
    cy.get('input[name="phone"]').clear();
}
