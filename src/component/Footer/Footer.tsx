import React from "react";
import Container from "../Container/Container";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-blue-500/30 to-blue-400/30 text-base-content ">
      <Container>
        <section className="  grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-10 md:gap-20 lg:gap-20   xl:gap-10  2xl:gap-10     p-10  text-gray-100 ">
          <aside>
            <p className="font-semibold text-2xl ">
              <Image
                src="/logo/logo.png" // Correctly reference the image path
                alt="logo"
                width={170}
                height={20}
                className="  "
              />
              <br />
            </p>
            <p>Providing reliable tech since 2024</p>
          </aside>
          <nav className=" space-y-1 text-gray-100">
            <h6 className=" text-lg font-semibold text-gray-100 mb-5">
              Services
            </h6>
            <a className="link link-hover block">Branding</a>
            <a className="link link-hover block">Design</a>
            <a className="link link-hover block">Marketing</a>
            <a className="link link-hover block">Advertisement</a>
          </nav>
          <nav className=" space-y-1 text-gray-100">
            <h6 className=" text-lg font-semibold text-gray-100 mb-5">
              Company
            </h6>
            <a className="link link-hover block">About us</a>
            <a className="link link-hover block">Contact</a>
            <a className="link link-hover block">Jobs</a>
            <a className="link link-hover block">Press kit</a>
          </nav>
          <nav className=" space-y-1 text-gray-100">
            <h6 className=" text-lg font-semibold text-gray-100 mb-5">Legal</h6>
            <a className="link link-hover block">Terms of use</a>
            <a className="link link-hover block">Privacy policy</a>
            <a className="link link-hover block">Cookie policy</a>
          </nav>
          <nav className=" space-y-1 text-gray-100">
            <h6 className=" text-lg font-semibold text-gray-100 mb-5">
              Contact
            </h6>
            <p>Email: www.tonutonmoy12@gmail.com</p>
            <p>Phone: +8801732159683</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/tonu.tonmoy.3"
                className="link link-hover"
              >
                Facebook
              </Link>
              <Link
                href="https://www.linkedin.com/in/showmic-arefin-tonmoy-560503280"
                className="link link-hover"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/tonutonmoy"
                className="link link-hover"
              >
                HitHub
              </Link>
            </div>
          </nav>
        </section>
        <section className="footer footer-center p-4   text-gray-200  ">
          <aside className="my-10">
            <p>&copy; 2024 - All rights reserved by Travel-Buddy Ltd</p>
          </aside>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
