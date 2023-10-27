import {useEffect, useState} from "react";
import {getRegisterList} from "../services/register.service.tsx";
import {UserModel} from "../model/user.model.ts";

export const useRegisterList = (): any => {
    const [registerList, setRegisterList] = useState<UserModel[]>([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRegisterList();
                setRegisterList(response.data);
                setError(false);
            } catch (error) {
                setError(true);
            }
        };
        fetchData().then();
    }, []);
    return {registerList, error};
}
