import { ReactNode } from "react";

type InitialVal = {
    [key: string]: string | number
}

export type TForm = React.FC<{ children: ReactNode, initialValues: InitialVal, validate?: (values: InitialVal) => void, onSubmit: (values: InitialVal) => void }> & {
    textInput: React.FC<{
        name:string,
        placeholder: string,
        maxLength: number,
        submitBtn?: ReactNode
    }>,
    emailInput: React.FC,
    passwordInput: React.FC,
    textAreaInput: React.FC,
    numberInput: React.FC,
    submitBtn: React.FC<{ children: ReactNode, disabled: boolean }>,
}