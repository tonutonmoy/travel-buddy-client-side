"use client";

import { isLoggedIn } from "@/Services/Action/auth.services";
import SideBar from "@/component/SideBar/SideBar";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  if (!isLoggedIn()) {
    return router.push("/login");
  }
  return (
    <>
      <SideBar>{children}</SideBar>
    </>
  );
};

export default DashboardLayout;
