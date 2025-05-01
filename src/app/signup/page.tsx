import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const SignupPage = () => {
  const inputStyle = "p-2 rounded-md w-1/2 border-2 border-teal4 outline-none focus:shadow shadow-teal4";
  return (
    <div className="bg-lightGreen1 min-h-screen flex justify-center items-center">
      <div className="p-10 w-1/2 flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-center text-[40px] font-extrabold text-teal4">Al-Yeqeen Uplift</h1>
          <h1 className="text-center text-[25px] font-bold text-teal4">Sign Up</h1>
        </div>

        <form className="flex flex-col items-center gap-5 mt-5 w-full">
          <input type="text" placeholder="Username" className={inputStyle} required />
          <input type="email" placeholder="Email" className={inputStyle} required />
          <input type="password" placeholder="Password" className={inputStyle} required />
          <input type="password" placeholder="Confirm Password" className={inputStyle} required />
          <button
            type="submit"
            className="bg-teal4 hover:bg-teal4/90 hover:cursor-pointer text-white p-2 rounded-md w-1/2"
          >
            Sign Up
          </button>
        </form>
        <Link href="/login" className="hover:underline hover:cursor-pointer">
          Have an account already? Log In
        </Link>
        <div className="bg-white text-teal4 font-semibold border border-gray-300 p-3 rounded-md w-1/2 flex justify-center items-center gap-5 hover:cursor-pointer hover:bg-gray-50">
          <FcGoogle className="size-6" /> Continue with Google
        </div>

        <span className="text-gray-400 mt-5">@Suhud Al-Yeqeen Innovation</span>
      </div>
    </div>
  );
};

export default SignupPage;
