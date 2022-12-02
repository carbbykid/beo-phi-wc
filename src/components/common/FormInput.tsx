import { InputHTMLAttributes, useState } from "react";
import InputType from "./InputType";

type FormInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errorMessage?: string;
  onChange: (e: any) => void;
  types?: string;
};

const FormInput = (props: FormInput): JSX.Element => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, types, ...inputProps } = props;

  const handleFocus = (e: any) => {
    setFocused(true);
  };

  return (
    <div>
      {label && (
        <label className="mb-2 inline-block font-semibold text-lg text-[#FEC310]">
          {label}:
        </label>
      )}
      <InputType
        types={types}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        data-focused={focused.toString()}
      />

      {errorMessage && (
        <span className="block invisible opacity-0 h-0 overflow-hidden text-orange-500 transition-opacity duration-300 text-sm">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default FormInput;
