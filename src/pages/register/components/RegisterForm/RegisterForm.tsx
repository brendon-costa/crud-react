import {FunctionComponent} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

interface IRegisterForm {
    handleSave: (valueForm) => void;
    handleClose: () => void;
    open: boolean;
}

export const RegisterForm: FunctionComponent<IRegisterForm> = ({
    handleSave,
    handleClose,
    open,
}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Criar Registro
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Cancelar
                </Button>
                <Button onClick={handleSave} autoFocus>
                    Salvar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
