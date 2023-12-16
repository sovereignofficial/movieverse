import { Field } from "formik";
import { ReactNode } from "react";

export const TextInput:React.FC<{
    name:string
    placeHolder:string,
    maxLength:number,
    submitBtn?:ReactNode
}> = ({
    name,
    maxLength,
    submitBtn,
    placeHolder
}) => {
  return (
    <div className="bg-zinc-700 rounded-full flex items-center py-1 px-2">
      <Field
        className="text-center font-medium p-1 bg-transparent w-full h-full outline-none "
        type={"text"}
        name={name}
        placeHolder={placeHolder}
        maxLength= {maxLength}
      />
      {submitBtn}
    </div>
  );
};
