import { ErrorMessage, Field } from "formik";
import { ReactNode } from "react";

export const PasswordInput: React.FC<{
  label: string;
  name: string;
  placeholder: string;
  maxLength: number;
  validate: (password: string) => string;
  submitBtn?: ReactNode;
}> = ({ name, maxLength, submitBtn, placeholder, label, validate }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-white text-sm font-medium mb-1 text-start"
      >
        {label}
      </label>
      <div className="bg-gray-900 rounded ring-1 ring-gray-800 h-10 w-full gap-1 p-1 mb-2 ">
        <Field
          className="text-center font-medium p-1 bg-transparent w-full h-full outline-none rounded-full"
          type={"password"}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          validate={validate}
        />
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm "
      />
      <div className="col-span-1">{submitBtn}</div>
    </div>
  );
};
