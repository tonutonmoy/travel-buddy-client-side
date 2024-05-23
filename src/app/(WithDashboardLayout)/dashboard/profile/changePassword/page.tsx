"use client";
import React from "react";

const ChangePassword = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="antialiased bg-slate-200 h-screen flex  items-center">
      <div className=" w-[90%]  md:w-[50%]  lg:w-[50%]  xl:w-[30%]  2xl:w-[30%] mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-2xl font-medium text-center">Change password</h1>

        <form onSubmit={handleSubmit} className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-2">Old Password</p>
              <input
                name="oldPassword"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter email address"
              />
            </label>
            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-2">New Password</p>
              <input
                name="newPassword"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter email address"
              />
            </label>

            <button
              type="submit"
              className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>

              <span>Reset password</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
