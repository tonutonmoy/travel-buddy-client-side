"use client";
import Link from "next/link";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";
import Container from "../Container/Container";
import NavbarImage from "./NavbarImage";
import NavbarList from "./NavbarList";
import NavbarListForSmallDevice from "./NavbarListForSmallDevice";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500/30 to-blue-400/30  text-gray-100  z-50 w-full fixed   ">
      <Container>
        <div className="navbar   p-0    ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <NavbarListForSmallDevice />
            </div>
            <Link href="/" className="font-semibold text-xl flex items-center">
              {/* Travel-Buddy */}
              <Image
                src="/logo/logo.png" // Correctly reference the image path
                alt="logo"
                width={170}
                height={20}
                className="py-2  "
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <NavbarList />
          </div>
          <div className="navbar-end gap-10">
            <section className="avatar">
              <div className="w-12 rounded-full ">
                <Link href="/dashboard/profile">
                  <NavbarImage />
                </Link>
              </div>
            </section>
            <section className="hidden md:inline lg:inline xl:inline 2xl:inline">
              <LoginAndLogout />
            </section>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
