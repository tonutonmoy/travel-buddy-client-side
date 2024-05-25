"use client";

import { useLoginMutation } from "@/Redux/api/Auth/authApi";
import { storeUserInfo } from "@/Services/Action/auth.services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Login = () => {
  const [loginMutation] = useLoginMutation();
  const router = useRouter();
  const handler = async (e: any) => {
    e.preventDefault();
    const email = e?.target?.email?.value;
    const password = e?.target?.password?.value;

    if (!email) {
      return toast.error("Email is required");
    }
    if (!password) {
      return toast.error("Password is required");
    }

    try {
      const data = await loginMutation({ email, password }).unwrap();
      if (data && data.success === true) {
        toast.success(data?.message);

        storeUserInfo({ accessToken: data?.data?.token });
        router.push("/");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data.message);
    }
  };
  return (
    <div className="login-bg-img flex h-screen  w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
      <div className="rounded-xl bg-gray-800  bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-10">
        <div className="text-white ">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-2xl">Login</h1>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          <form onSubmit={handler}>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-100 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-100 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>

            <div>
              New here? Please{" "}
              <Link className=" text-red-500" href="/register">
                Register
              </Link>
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
