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
    const columns: ColumnModel[] = [
        { key: 'name', label: 'Nome', type: 'text', minWidth: 100 },
        { key: 'cpf', label: 'CPF', type: 'cpf', minWidth: 100 },
        { key: 'phone', label: 'Telefone', type: 'phone', minWidth: 100 },
        { key: 'email', label: 'E-mail', type: 'text', minWidth: 100 },
    ];

    const openForm = () => {
        setOpen(true);
    }

    const closeForm = () => {
        setOpen(false);
    }

    const saveForm = (valueForm: IRegisterFormValue) => {
        valueForm.cpf = removeSpecialCharacters(valueForm.cpf);
        valueForm.phone = removeSpecialCharacters(valueForm.phone);
        setRegisterList((oldList: IRegisterFormValue[]) => [...oldList, ...[valueForm]]);
        closeForm();
    }

    return (
        <div className="p-5 mt-5">
            <Typography variant="h5" gutterBottom>
                Gerenciamento de Registros
            </Typography>
            <RegisterForm
                open={open}
                handleClose={closeForm}
                handleSave={saveForm}
            />
            <ManagementTable
                dataList={registerList}
                columns={columns}
            />
            <div className="flex justify-end mt-5">
                <Button variant="contained" onClick={openForm}>
                    Criar Novo Registro +
                </Button>
            </div>
        </div>
    )
}
