import Link from "next/link";
import React from "react";

const LinkButton = ({ title, link }: any) => {
  return (
    <Link
      href={link}
      className="w-[150px] block mx-auto rounded-full  bg-gradient-to-r from-blue-500 to-blue-400  hover:shadow-lg font-semibold text-white px-6 py-2"
    >
      {title}
    </Link>
  );
};

export default LinkButton;
