"use client";

import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/Redux/api/profile/profileApi";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Profile = () => {
  const { data } = useGetProfileQuery("");
  const [updateFunction] = useUpdateProfileMutation();

  // Define state variables for input values
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [bio, setBio] = useState("");

  useEffect(() => {
    setId(data?.data?.id || "");
    setName(data?.data?.name || "");
    setAge(data?.data?.age || "");
    setEmail(data?.data?.email || "");
    setBio(data?.data?.bio || "");
  }, [data]);

  const handler = async (e: any) => {
    e.preventDefault();

    const info = {
      name,

      email,
    };

    try {
      const updateData = await updateFunction(info).unwrap();
      if (updateData && updateData.success === true) {
        toast.success(updateData?.message);
        setName(updateData?.data?.name);

        setEmail(updateData?.data?.email);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data.message);
    }
  };
  return (
    <div className=" w-full  gap-5 px-3 md:px-16 lg:px-28 login-bg-img   text-[#161931] flex flex-col items-center justify-center ">
      <section className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 flex flex-col items-center justify-center ">
        <div className="p-2 md:p-4 flex flex-col items-center justify-center  ">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg  ">
            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Bordered avatar"
                />
                <div className="flex flex-col space-y-5 sm:ml-8">
                  <button
                    type="button"
                    className="py-3.5 px-7 text-base font-medium text-white  focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200"
                  >
                    Change picture
                  </button>
                  <button
                    type="button"
                    className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200"
                  >
                    Delete picture
                  </button>
                </div>
              </div>
              <form
                onSubmit={handler}
                className="items-center mt-8 sm:mt-14 text-[#202142]"
              >
                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <div className="w-full">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-white  dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your first name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-white  dark:text-white"
                    >
                      Your age
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your last name"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white  dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="your.email@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-white  dark:text-white"
                  >
                    Bio
                  </label>
                  <textarea
                    id="message"
                    className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Write your bio here..."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
