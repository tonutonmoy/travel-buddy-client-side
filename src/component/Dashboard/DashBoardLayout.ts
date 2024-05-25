// Use 'use client' directive to specify that this file is client-side
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Service for authentication related actions
import { isLoggedIn } from "@/Services/Action/auth.services";

// Layout component for Dashboard
const DashBoardLayout = ({ children }: any) => {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, [router, children]);

  return children;
};

export default DashBoardLayout;
