import { TForm } from "~/types/forms";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { TextInput } from "./TextInput";
import { TextArea } from "./TextArea";
import { NumberInput } from "./NumberInput";
import { Formik, Form } from "formik";
import { SubmitBtn } from "./SubmitBtn";

const FormContainer: TForm = ({ children,initialValues,onSubmit,validate }) => {
  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      {()=>(
        <Form>{children}</Form>
      )}
    </Formik>
  );
};

FormContainer.emailInput = EmailInput;
FormContainer.passwordInput = PasswordInput;
FormContainer.textInput = TextInput;
FormContainer.textAreaInput = TextArea;
FormContainer.numberInput = NumberInput;
FormContainer.submitBtn = SubmitBtn;

export { FormContainer };
