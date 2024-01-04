import React from "react";
import { Field, ErrorMessage } from "formik";
import { SelectInputProps } from "~/types/forms";

const SelectInput: React.FC<SelectInputProps> = ({ name, label, options,defaultValue}) => {
  return (
    <div className="w-full grid grid-cols-12 items-center">
      <label
        htmlFor={name}
        className="block text-white text-sm font-medium mb-1 col-span-2"
      >
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        value={defaultValue}
        className="block col-span-10 w-full py-2 px-3 bg-gray-900 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-white sm:text-sm"
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
