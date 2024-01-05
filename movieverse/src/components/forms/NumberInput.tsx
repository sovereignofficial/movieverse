import { ErrorMessage, Field } from "formik";

export const NumberInput: React.FC<{
  label: string;
  name: string;
  placeholder: string;
  maxLength: number;
  validate: (item: number) => string;
}> = ({ name, label, maxLength, placeholder, validate }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-white text-sm font-medium mb-1 col-span-2 text-start"
      >
        {label}
      </label>
      <div className="bg-gray-900 rounded ring-1 ring-gray-800 h-10 w-full gap-1 p-1">
        <Field
          className="text-center font-medium p-1 bg-transparent w-full h-full outline-none"
          type={"number"}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          validate={validate}
        />
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  );
};
