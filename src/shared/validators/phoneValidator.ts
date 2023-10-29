import {z} from "zod";

export const phoneValidator = () => {
    return z.string().refine(value => {
        if (value.trim() === '') return false;
        const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        return phoneRegex.test(value);
    }, {
        message: 'Telefone inválido',
    });
}
