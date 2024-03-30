import { IButtonProps } from "@/utils/interfaces";

const AppButton = ({
  title,
  type = "submit",
  disabled = false,
  isPrimary = true,
  ...rest
}: IButtonProps) => {

  const toggleClass = isPrimary ? 'bg-indigo-700 text-white' : 'text-indigo-700 bg-white border-2 border-indigo-700 hover:text-white'
  return (
    <div>
      <button 
        disabled={disabled}
        type={type}
        {...rest}
        className={`flex w-full justify-center cursor-pointer rounded-md ${toggleClass} px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      >
        {title}
      </button>
    </div>
  );
};

export default AppButton;
