"use client";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { login } from "@/redux/features/user/userThunk";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = localStorage.getItem("user");
  const parsedUser = user ? JSON.parse(user) : null;

  if (parsedUser?.accessToken) {
    router.push("/main");
  }
  const inputStyle = "p-2 rounded-md w-1/2 border-2 border-teal4 outline-none focus:shadow shadow-teal4";
  const [formData, setFormData] = useState({
    userEmail: "",
    password: ""
  });
  const { userEmail, password } = formData;
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleTraditionalLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await dispatch(login(formData)).unwrap();
      if (response) {
        router.push("/main");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError((error as any).response?.data?.message || error || "An error occurred during signup.");
    }
  };

  const handleGoogleSignIn = async () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="bg-lightGreen1 min-h-screen flex justify-center items-center">
      <div className="p-15 w-1/2 flex flex-col gap-5 justify-center items-center bg-black/5 border border-black/10 rounded-md shadow-sm">
        <div className="flex flex-col gap-3">
          <Link href="/" className="text-center text-[40px] font-extrabold text-teal4 hover:cursor-pointer">
            Al-Yeqeen Uplift
          </Link>
          <h1 className="text-center text-[25px] font-bold text-teal4">Log In</h1>
        </div>
        <div
          className={`flex text-red-600 bg-red-100 p-2 rounded border border-red-300 text-sm w-1/2 justify-start ml-3 ${
            error ? "" : "hidden"
          }`}
        >
          {error}
        </div>
        <form className="flex flex-col items-center gap-5 mt-5 w-full" onSubmit={handleTraditionalLogin}>
          <div className="flex flex-col gap-2 w-full items-center">
            <input
              type="email"
              placeholder="Email"
              className={inputStyle}
              name={"userEmail"}
              value={userEmail}
              onChange={handleChange}
              required
            />
            <div className="flex text-red-600 text-sm w-1/2 justify-start ml-3">
              {userEmail === "" || userEmail.length < 3 || !userEmail.includes("@") ? "Please enter a valid email" : ""}
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full items-center">
            <input
              type="password"
              placeholder="Password"
              className={inputStyle}
              name={"password"}
              value={password}
              onChange={handleChange}
              required
            />
            <div className="flex text-red-600 text-sm w-1/2 justify-start ml-3">
              {password === "" ? "Please enter your password" : ""}
            </div>
          </div>

          <button
            type="submit"
            disabled={userEmail === "" || password === ""}
            className="bg-teal4 hover:bg-teal4/90 hover:cursor-pointer text-white p-2 rounded-md w-1/2 disabled:bg-teal4/40 disabled:cursor-not-allowed"
          >
            Log In
          </button>
        </form>
        <Link href="/signup" className="hover:underline hover:cursor-pointer">
          Have not account? Sign Up
        </Link>
        <button
          className="bg-white text-teal4 font-semibold border border-gray-300 p-3 rounded-md w-1/2 flex justify-center items-center gap-5 hover:cursor-pointer hover:bg-gray-50"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle className="size-6" /> Log In with Google
        </button>

        <span className="text-gray-400 mt-5">@Suhud Al-Yeqeen Innovation</span>
      </div>
    </div>
  );
};

export default LoginPage;
