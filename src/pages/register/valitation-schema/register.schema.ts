import {z} from "zod";
import {phoneValidator} from "../../../shared/validators/phoneValidator.ts";
import {cpfValidator} from "../../../shared/validators/cpfValidator.ts";

export const registerSchema = z.object({
    name: z.string().min(3, { message: "Este campo precisa ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "E-mail inválido" }),
    phone: phoneValidator(),
    cpf: cpfValidator(),
});
