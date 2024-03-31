import { IButtonProps } from "@/utils/interfaces";

const AppButton = ({
  title,
  type = "submit",
  disabled = false,
  isPrimary = true,
  ...rest
}: IButtonProps) => {

  const toggleClass = isPrimary ? 'bg-black text-white' : 'text-indigo-700 bg-white border-2 border-indigo-700 hover:text-white'
  return (
    <div>
      <button 
        disabled={disabled}
        type={type}
        {...rest}
        className={` text-center p-3 rounded-lg px-12 flex justify-center cursor-pointer ${toggleClass} font-medium leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      >
        {title}
      </button>
    </div>
  );
};

export default AppButton;
