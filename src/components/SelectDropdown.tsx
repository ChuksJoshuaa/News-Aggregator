import { SelectDropdownProps } from "@/interface";


const SelectDropdown = ({
  options = [],
  value,
  onChange,
  name,
  id,
  className = "",
  error,
  placeholder,
  label,
}: SelectDropdownProps) => {
  return (
    <div className="mb-6 md:mb-3">
      <label
        className="block capitalize tracking-wide text-grey-darker text-md md:text-lg font-normal font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className={`${
          error ? "input-invalid" : "input"
        } appearance-none block w-full bg-grey-lighter border border-red rounded py-3 px-4 mb-1 outline-none ${value ? "text-gray-700" : "text-gray-400"} ${className}`}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        data-testid="select-dropdown"
      >
        <option value="" selected disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};


export default SelectDropdown