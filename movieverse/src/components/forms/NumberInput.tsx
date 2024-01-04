import { Field } from "formik";
import { ReactNode } from "react";

export const NumberInput: React.FC<{
  label: string;
  name: string;
  placeholder: string;
  maxLength: number;
  submitBtn?: ReactNode;
}> = ({ name, label, maxLength, submitBtn, placeholder }) => {
  return (
    <div className="w-full grid grid-cols-12 items-center">
      <label
        htmlFor={name}
        className="block text-white text-sm font-medium mb-1 col-span-2"
      >
        {label}
      </label>
      <div className="bg-gray-900 rounded-full  h-10 w-full gap-1 p-1 col-span-10">
        <Field
          className="text-center font-medium p-1 bg-transparent w-full h-full outline-none rounded-full col-span-11"
          type={"number"}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
        />
        <div className="col-span-1">{submitBtn}</div>
      </div>
    </div>
  );
};
