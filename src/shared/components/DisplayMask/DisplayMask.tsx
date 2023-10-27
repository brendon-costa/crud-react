import {FunctionComponent} from "react";

interface IDisplayMask {
    value: string;
    mask: string;
}

export const DisplayMask: FunctionComponent<IDisplayMask> = ({
    value,
    mask
}) => {
    const renderSwitch = (): string => {
        switch(mask) {
            case 'cpf' :
                return cpfMask(value);
            case 'phone' :
                return phoneMask(value);
            default:
                return value;
        }
    }
    const phoneMask = (phone: string) => {
        let phoneMask: string = phone.replace(/\D/g, "");
        phoneMask = phoneMask.replace(/^(\d{2})(\d)/g, "($1) $2");
        phoneMask = phoneMask.replace(/(\d)(\d{4})$/, "$1-$2");
        return phoneMask;
    }
    const cpfMask = (cpf: string): string => {
        return cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9);
    }
    return (
        <>
            {renderSwitch()}
        </>
    )
}
