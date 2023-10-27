import {AxiosResponse} from "axios";
import api from "../../../core/axios/api.ts";
import {UserModel} from "../model/user.model.ts";

export const getRegisterList = (): Promise<AxiosResponse<UserModel[]>> => {
    return api.get(`/users`);
}
