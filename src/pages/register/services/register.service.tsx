import {AxiosResponse} from "axios";
import api from "../../../core/axios/api.ts";
import {UserModel} from "../model/user.model.ts";

const repositoriKey = 'registerList';

export const getRegisterListInApi = (): Promise<AxiosResponse<UserModel[]>> => {
    return api.get(`/users`);
}

export const getRegisterListInStorage = (): UserModel[] => {
    const registerList = localStorage.getItem(repositoriKey);
    return registerList ? JSON.parse(registerList) : [];

}

export const setRegisterListInStorage = (registerList: UserModel[]): void => {
    localStorage.setItem(repositoriKey, JSON.stringify(registerList));
}
