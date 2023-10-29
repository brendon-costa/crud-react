import {FunctionComponent} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import InputMask, { Props } from 'react-input-mask';
import {IRegisterFormValue} from "../../model/register-form.model.ts";
import {registerSchema} from "../../valitation-schema/register.schema.ts";

interface IRegisterForm {
    handleSave: (valueForm: IRegisterFormValue) => void;
    handleClose: () => void;
    open: boolean;
}

export const RegisterForm: FunctionComponent<IRegisterForm> = ({
    handleSave,
    handleClose,
    open,
}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        trigger
    } = useForm<IRegisterFormValue>({
        resolver: zodResolver(registerSchema),
        mode: 'onBlur'
    });
    const onSubmit: SubmitHandler<IRegisterFormValue> = (data) => handleSave(data);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
            maxWidth="md"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle id="alert-dialog-title">
                    Criar Registro
                </DialogTitle>
                <DialogContent>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
                        <div>
                            <TextField
                                {...register("name")}
                                className="w-full"
                                label="Nome completo (sem abreviações)"
                                variant="standard"
                                error={!!errors?.name}
                                helperText={errors?.name?.message}
                            />
                        </div>
                        <div>
                            <TextField
                                {...register("email")}
                                className="w-full"
                                label="E-mail"
                                variant="standard"
                                error={!!errors?.email}
                                helperText={errors?.email?.message}
                            />
                        </div>
                        <div>
                            <InputMask
                                mask="999.999.999-99"
                                value={watch('cpf', '')}
                                onChange={(event) => {
                                    setValue('cpf', event.target.value);
                                }}
                                onBlur={() => {trigger('cpf').then()}}
                            >
                                {(props: Props) => {return (
                                    <TextField
                                        {...props}
                                        label="CPF"
                                        variant="standard"
                                        className="w-full"
                                        error={!!errors?.cpf}
                                        helperText={errors?.cpf?.message}
                                    />
                                )}}
                            </InputMask>
                        </div>
                        <div>
                            <InputMask
                                mask="(99) 99999-9999"
                                value={watch('phone', '')}
                                onChange={(event) => {
                                    setValue('phone', event.target.value);
                                }}
                                onBlur={() => {trigger('phone').then()}}
                            >
                                {(props: Props) => {return (
                                    <TextField
                                        {...props}
                                        label="Telefone"
                                        variant="standard"
                                        className="w-full"
                                        error={!!errors?.phone}
                                        helperText={errors?.phone?.message}
                                    />
                                )}}
                            </InputMask>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button type="submit">
                        Salvar
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}
