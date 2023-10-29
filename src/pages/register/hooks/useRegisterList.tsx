import {useEffect, useState} from "react";
import {UserModel} from "../model/user.model.ts";
import {
    getRegisterListInApi,
    getRegisterListInStorage,
    setRegisterListInStorage
} from "../services/register.service.tsx";

export const useRegisterList = (): any => {
    const [registerList, setRegisterList] = useState<UserModel[]>(getRegisterListInStorage());
    const [error, setError] = useState(false);
    useEffect(() => {
        if (!registerList.length) {
            const fetchData = async () => {
                try {
                    const response = await getRegisterListInApi();
                    const registerListWithId = response.data.map(item => {
                        item.id = Math.random();
                        return item;
                    })
                    setRegisterList(registerListWithId);
                    setError(false);
                } catch (error) {
                    setError(true);
                }
            };
            fetchData().then();
        }
    }, []);
    useEffect(() => {
        setRegisterListInStorage(registerList);
    }, [registerList]);

    return {registerList, setRegisterList, error};
}
