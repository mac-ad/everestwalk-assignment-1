import { twMerge } from "tailwind-merge";

const Button = ({ className, onClick, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "bg-[rgba(0,0,0,1)] transition-all  w-full p-2 rounded-md text-white flex justify-center items-center gap-4 text-sm hover:bg-[rgba(255,255,255,1)] border-2 hover:border-black hover:text-black",
        `${className}`,
        `${
          disabled &&
          "opacity-50 cursor-not-allowed hover:bg-unset hover:text-unset hover:border-unset"
        }`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
