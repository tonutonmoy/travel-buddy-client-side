"use client";

import Link from "next/link";

import { storeUserInfo } from "@/Services/Action/auth.services";
import { toast } from "sonner";
import {
  useLoginMutation,
  useRegisterMutation,
} from "@/Redux/api/Auth/authApi";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [RegisterMutation] = useRegisterMutation();
  const [loginMutation] = useLoginMutation();
  const handler = async (e: any) => {
    e.preventDefault();
    const name = e?.target?.name?.value;
    const email = e?.target?.email?.value;
    const password = e?.target?.password?.value;
    const confirmPassword = e?.target?.confirmPassword?.value;

    if (!name) {
      return toast.error("name is required");
    }
    if (!email) {
      return toast.error("Email is required");
    }
    if (!password) {
      return toast.error("Password is required");
    }
    if (!confirmPassword) {
      return toast.error("confirm Password is required");
    }
    if (confirmPassword !== password) {
      return toast.error("password not match");
    }

    try {
      const data = await RegisterMutation({
        name,
        email,
        password,
      }).unwrap();
      if (data && data.success === true) {
        toast.success(data?.message);
        const loginData = await loginMutation({ email, password }).unwrap();

        if (loginData?.data?.token) {
          storeUserInfo({ accessToken: loginData?.data?.token });
          router.push("/");
        }
      }
    } catch (error: any) {
      toast.error(error?.data.message);
    }
  };
  return (
    <div className=" flex h-screen w-full items-center justify-center  bg-cover bg-no-repeat">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-10">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-2xl">Register</h1>
            <span className="text-gray-300">Enter Register Details</span>
          </div>
          <form onSubmit={handler}>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-100 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-100 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-100 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-100 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                name="confirmPassword"
                placeholder="confirm password"
              />
            </div>

            <div>
              Do you already have an account?{" "}
              <Link className=" text-red-500" href="/login">
                Login
              </Link>
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-gradient-to-r from-blue-500 to-blue-400 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600 hover:shadow-lg "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
