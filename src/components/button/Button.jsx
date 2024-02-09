import { twMerge } from "tailwind-merge";

const Button = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "bg-[rgba(0,0,0,1)] transition-all  w-full p-2 rounded-md text-white flex justify-center items-center gap-4 text-sm hover:bg-[rgba(255,255,255,1)] border-2 hover:border-black hover:text-black",
        `${className}`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
