import { ErrorMessage, Field } from "formik";
import { ReactNode } from "react";

export const TextInput: React.FC<{
  label: string;
  name: string;
  placeholder: string;
  maxLength: number;
  submitBtn?: ReactNode;
  validate?: (text: string) => string;
}> = ({ name, maxLength, submitBtn, placeholder, label, validate }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-white text-sm font-medium mb-1 text-start"
      >
        {label}
      </label>
      <div className="bg-gray-900 rounded ring-1 grid grid-cols-12 place-items-center ring-gray-800 h-10 w-full gap-1 p-1">
        <Field
          className="text-center font-medium p-1 bg-transparent w-full h-full outline-none col-span-11"
          type={"text"}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          validate={validate}
        />

        <div className="col-span-1">{submitBtn}</div>
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};
