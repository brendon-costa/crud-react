import {FunctionComponent, useState} from "react";
import {useRegisterList} from "../../hooks/useRegisterList.tsx";
import {ColumnModel} from "../../../../shared/model/column.model.ts";
import {ManagementTable} from "../../../../shared/components/Table/Table.tsx";
import {Button, Typography} from "@mui/material";
import {RegisterForm} from "../RegisterForm/RegisterForm.tsx";
import {IRegisterFormValue} from "../../model/register-form.model.ts";
import {removeSpecialCharacters} from "../../../../shared/utils/remove-special-characters.ts";

export const RegisterManagement: FunctionComponent = () => {
    const [open, setOpen] = useState(false)
    const {registerList, setRegisterList} = useRegisterList();
    let [modalType, setModalType] = useState('create');
    let [editItemValue, setEditItemValue] = useState<IRegisterFormValue>(null);
    const columns: ColumnModel[] = [
        { key: 'name', label: 'Nome', type: 'text', minWidth: 100 },
        { key: 'cpf', label: 'CPF', type: 'cpf', minWidth: 100 },
        { key: 'phone', label: 'Telefone', type: 'phone', minWidth: 100 },
        { key: 'email', label: 'E-mail', type: 'text', minWidth: 100 },
    ];

    const openForm = (type: 'create' | 'edit') => {
        setModalType(type);
        setOpen(true);
    }

    const closeForm = () => {
        setOpen(false);
    }

    const saveForm = (valueForm: IRegisterFormValue) => {
        valueForm.cpf = removeSpecialCharacters(valueForm.cpf);
        valueForm.phone = removeSpecialCharacters(valueForm.phone);
        valueForm.id = Math.random();
        setRegisterList((oldList: IRegisterFormValue[]) => [...oldList, ...[valueForm]]);
        closeForm();
    }

    const editForm = (valueForm: IRegisterFormValue) => {
        valueForm.cpf = removeSpecialCharacters(valueForm.cpf);
        valueForm.phone = removeSpecialCharacters(valueForm.phone);
        const registerListNew = registerList.map(register => {
            if (register.id == editItemValue.id) {
                register = valueForm;
                register.id = editItemValue?.id;
            }
            return register;
        });
        setRegisterList(registerListNew);
        closeForm();
    }

    const salveHandle = (valueForm: IRegisterFormValue) => {
        if (modalType == 'create') {
            saveForm(valueForm);
        } else {
            editForm(valueForm);
        }
    }

    const editHandle = (rowValue: IRegisterFormValue) => {
        setEditItemValue(rowValue);
        openForm('edit')
    }

    return (
        <div className="p-5 mt-5">
            <Typography variant="h5" gutterBottom>
                Gerenciamento de Registros
            </Typography>
            <RegisterForm
                open={open}
                handleClose={closeForm}
                handleSave={salveHandle}
                modalType={modalType}
                editItemValue={editItemValue}
            />
            <ManagementTable
                dataList={registerList}
                columns={columns}
                editHandle={editHandle}
            />
            <div className="flex justify-end mt-5">
                <Button variant="contained" onClick={() => openForm('create')}>
                    Criar Novo Registro +
                </Button>
            </div>
        </div>
    )
}
