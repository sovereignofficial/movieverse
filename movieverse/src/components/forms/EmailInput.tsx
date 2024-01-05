import { Field, ErrorMessage } from "formik";
import { validateEmail } from "~/utils/validate";

export const EmailInput: React.FC<{
  label: string;
  name: string;
  placeholder: string;
  maxLength: number;
}> = ({ name, maxLength, placeholder, label }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-white text-sm font-medium mb-1 text-start"
      >
        {label}
      </label>
      <div className="bg-gray-900 rounded ring-1 ring-gray-800 h-10 w-full gap-1 p-1">
        <Field
          className="text-center font-medium p-1 bg-transparent w-full h-full outline-none"
          type={"text"}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          validate={validateEmail}
        />
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};
