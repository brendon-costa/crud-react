import {AxiosResponse} from "axios";
import api from "../../../core/axios/api.ts";
import {UserModel} from "../model/user.model.ts";

const repositoryKey = 'registerList';

export const getRegisterListInApi = (): Promise<AxiosResponse<UserModel[]>> => {
    return api.get(`/users`);
}

export const getRegisterListInStorage = (): UserModel[] => {
    const registerList = localStorage.getItem(repositoryKey);
    return registerList ? JSON.parse(registerList) : [];

}

export const setRegisterListInStorage = (registerList: UserModel[]): void => {
    localStorage.setItem(repositoryKey, JSON.stringify(registerList));
}
