import { TFormProps } from "~/types/forms";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { TextInput } from "./TextInput";
import { TextArea } from "./TextArea";
import { NumberInput } from "./NumberInput";
import { Formik, Form } from "formik";
import { SubmitBtn } from "./SubmitBtn";
import SelectInput from "./SelectInput";

export function FormContainer<T>({ children,initialValues,onSubmit,validate }:TFormProps<T>){
  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      {()=>(
        <Form className="w-10/12 space-y-5 grid">{children}</Form>
      )}
    </Formik>
  );
};

FormContainer.emailInput = EmailInput;
FormContainer.passwordInput = PasswordInput;
FormContainer.textInput = TextInput;
FormContainer.textAreaInput = TextArea;
FormContainer.numberInput = NumberInput;
FormContainer.selectInput = SelectInput;
FormContainer.submitBtn = SubmitBtn;

