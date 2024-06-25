import Link from "next/link";
import { IoMdLogIn } from "react-icons/io";

const LoginButton = () => {
  return (
    <Link
      href="/login"
      className="align-middle flex  items-center  gap-2 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-full bg-blue-500 hover:bg-blue-600 duration-300 text-white  shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none shadow-xl"
    >
      <IoMdLogIn className=" text-lg" /> Login
    </Link>
  );
};

export default LoginButton;
