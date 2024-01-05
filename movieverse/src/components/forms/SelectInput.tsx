import React from "react";
import { Field, ErrorMessage } from "formik";
import { SelectInputProps } from "~/types/forms";

const SelectInput: React.FC<SelectInputProps> = ({ name, label, options,defaultValue}) => {
  return (
    <div className="w-full ">
      <label
        htmlFor={name}
        className="block text-white text-sm font-medium mb-1 col-span-2 text-start"
      >
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="bg-gray-900 rounded ring-1 ring-gray-800 h-10 w-full gap-1 p-1"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default SelectInput;
