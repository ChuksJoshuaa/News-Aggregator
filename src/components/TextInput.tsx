import { TextInputProps } from "@/interface";

const TextInput = ({
  label,
  name,
  id,
  value,
  onChange,
  placeholder,
  error,
  className,
}: TextInputProps) => {
  return (
    <div className="mb-6 md:mb-3">
      <label
        className="block capitalize tracking-wide text-grey-darker text-md md:text-lg font-normal font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`${
          error ? "input-invalid" : "input"
        } appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-1 outline-none ${className}`}
        id={id}
        placeholder={placeholder}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-red-900 text-sm">{error}</div>}
    </div>
  );
};


export default TextInput