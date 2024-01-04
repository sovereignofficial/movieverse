import { ReactNode } from "react";


export type DynamicInitialValues<T> = {
    [P in keyof T]: T[P]
}
type ValuesType<T> = Record<keyof DynamicInitialValues<T>, any>;

export type SelectInputProps = {
    name: string;
    label: string;
    defaultValue:string;
    options: { value: string; label: string}[];
  }

export type TForm<T> = React.FC<{ children: ReactNode, initialValues: DynamicInitialValues<T>, validate?: (values: ValuesType<T>) => void, onSubmit: (values: ValuesType<T>) => void }> & {
    textInput: React.FC<{
        label:string,
        name:string,
        placeholder: string,
        maxLength: number,
        submitBtn?: ReactNode
    }>,
    emailInput: React.FC,
    passwordInput: React.FC<{
        label:string,
        name:string,
        placeholder: string,
        maxLength: number,
        submitBtn?: ReactNode
    }>,
    textAreaInput: React.FC,
    selectInput: React.FC<SelectInputProps>,
    numberInput: React.FC<{
        label:string,
        name:string,
        placeholder: string,
        maxLength: number,
        submitBtn?: ReactNode,
    }>,
    submitBtn: React.FC<{ children: ReactNode, disabled: boolean, className:string }>,
}

export type TFormProps<T> = {
    children: React.ReactNode;
    initialValues: T;
    validate?: (values: T) => void;
    onSubmit: (values: T) => void;
  };