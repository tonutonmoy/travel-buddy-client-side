"use client";

import React from "react";
import SidebarAllLinks from "../SideBar/SidebarAllLinks";
import Filter from "../Filter/Filter";
import { usePathname } from "next/navigation";

const SidebarAllLinksAndFilter = ({ setIsOpen }: any) => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <div>
      {pathname === "/trip" ? (
        <Filter />
      ) : (
        <SidebarAllLinks setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default SidebarAllLinksAndFilter;
