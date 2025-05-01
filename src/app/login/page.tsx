import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const LoginPage = () => {
  const inputStyle = "p-2 rounded-md w-1/2 border-2 border-teal4 outline-none focus:shadow shadow-teal4";
  return (
    <div className="bg-lightGreen1 min-h-screen flex justify-center items-center">
      <div className="p-15 w-1/2 flex flex-col gap-5 justify-center items-center bg-black/2 border border-black/10 rounded-md shadow-sm">
        <div className="flex flex-col gap-3">
          <Link href="/" className="text-center text-[40px] font-extrabold text-teal4 hover:cursor-pointer">
            Al-Yeqeen Uplift
          </Link>
          <h1 className="text-center text-[25px] font-bold text-teal4">Log in</h1>
        </div>

        <form className="flex flex-col items-center gap-5 mt-5 w-full">
          <input type="email" placeholder="Email" className={inputStyle} required />
          <input type="password" placeholder="Password" className={inputStyle} required />

          <button
            type="submit"
            className="bg-teal4 hover:bg-teal4/90 hover:cursor-pointer text-white p-2 rounded-md w-1/2"
          >
            Sign Up
          </button>
        </form>
        <Link href="/signup" className="hover:underline hover:cursor-pointer">
          Have no account? Sign Up
        </Link>
        <div className="bg-white text-teal4 font-semibold border border-gray-300 p-3 rounded-md w-1/2 flex justify-center items-center gap-5 hover:cursor-pointer hover:bg-gray-50">
          <FcGoogle className="size-6" /> Login with Google
        </div>

        <span className="text-gray-400 mt-5">@Suhud Al-Yeqeen Innovation</span>
      </div>
    </div>
  );
};

export default LoginPage;
