import { ReactNode } from "react";

type InitialVal = {
    [key: string]: unknown
}

export type TForm = React.FC<{ children: ReactNode, initialValues: InitialVal, validate?: (values: InitialVal) => void, onSubmit: (values: InitialVal) => void }> & {
    textInput: React.FC<{
        name:string,
        placeHolder: string,
        maxLength: number,
        submitBtn?: ReactNode
    }>,
    emailInput: React.FC,
    passwordInput: React.FC,
    textAreaInput: React.FC,
    numberInput: React.FC,
    submitBtn: React.FC<{ children: ReactNode, disabled: boolean }>,
}