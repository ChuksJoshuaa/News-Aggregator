import { DateInputProps } from "@/interface";

const DateInput: React.FC<DateInputProps> = ({
  value,
  onChange,
  placeholder,
  id,
  name,
  label
}) => {

  const handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.type = "date";
  };

  return (
    <div className="mb-6 md:mb-3">
      <label
        className="block capitalize tracking-wide text-grey-darker text-md md:text-lg font-normal font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="flex items-center border border-1 rounded-lg border-gray-400 px-2">
        <svg
          className="mx-4"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.79941 3.69988H3.19946V2.89901H1.60018V5.30054H14.3997V2.89901H12.7994V3.69988H11.1995V2.89901H4.79941V3.69988ZM14.3997 6.90048H1.60018V14.8986H14.3997V6.90048ZM11.1995 1.30054H4.79941V0.5H3.19946V1.30054H1.59994C0.716318 1.30054 0 2.01686 0 2.90048V14.9C0 15.7837 0.716318 16.5 1.59994 16.5H14.3995C15.2831 16.5 15.9994 15.7837 15.9994 14.9V2.90048C15.9994 2.01686 15.2831 1.30054 14.3995 1.30054H12.7994V0.5H11.1995V1.30054ZM5.59994 10.0998H4V8.49988H5.59994V10.0998ZM7.19946 10.0998H8.79941V8.49988H7.19946V10.0998ZM11.9998 10.0998H10.3998V8.49988H11.9998V10.0998ZM4 13.299H5.59994V11.6991H4V13.299ZM8.79941 13.299H7.19946V11.6991H8.79941V13.299Z"
            fill="#070707"
          />
        </svg>
        <svg
          className="mr-3"
          width="1"
          height="37"
          viewBox="0 0 1 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.25"
            y1="0.75"
            x2="0.249999"
            y2="36.25"
            stroke="#9BA0A7"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
        </svg>
        <input
          className="py-[0.7rem] px-2 border-0 m-0 text-black font-medium w-full"
          type="text"
          placeholder={placeholder}
          onFocus={handleFocus}
          name={name}
          onChange={onChange}
          value={value}
          id={id}
        />
      </div>
    </div>
  );
};


export default DateInput