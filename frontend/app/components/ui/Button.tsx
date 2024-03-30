import { IButtonProps } from "@/app/utils/interfaces";

const AppButton = ({
  title,
  type = "submit",
  disabled = false,
  ...rest
}: IButtonProps) => {
  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        {...rest}
        className="flex w-full justify-center cursor-pointer rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {title}
      </button>
    </div>
  );
};

export default AppButton;
