import {z} from "zod";
import {removeSpecialCharacters} from "../utils/remove-special-characters.ts";

export const phoneValidator = () => {
    return z.string().refine(value => {
        if (!value) return false;
        value = removeSpecialCharacters(value);
        return value.length >= 10;

    }, {
        message: 'Telefone inválido',
    });
}
