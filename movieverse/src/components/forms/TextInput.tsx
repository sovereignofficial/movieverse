import { Field } from "formik";
import { ReactNode } from "react";

export const TextInput: React.FC<{
  name: string;
  placeholder: string;
  maxLength: number;
  submitBtn?: ReactNode;
}> = ({ name, maxLength, submitBtn, placeholder }) => {
  return (
    <div className="bg-zinc-800 rounded-full grid grid-cols-12 place-items-center h-10 w-full gap-1 p-1">
      <Field
        className="text-center font-medium p-1 bg-transparent w-full h-full outline-none rounded-full col-span-11"
        type={"text"}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <div className="col-span-1">{submitBtn}</div>
    </div>
  );
};
