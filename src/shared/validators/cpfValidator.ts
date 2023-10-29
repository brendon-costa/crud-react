import {z} from "zod";

export const cpfValidator = () => {
    return z.string().refine(value => {
        if (value.trim() === '') return false;
        const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
        return cpfRegex.test(value);
    }, {
        message: 'CPF inválido',
    });
}
