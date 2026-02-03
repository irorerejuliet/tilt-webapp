"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const mainNavbar = ["/", "/cashadvance"];
  const pathname = usePathname();


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Yellow bar */}
      <div className="flex justify-center items-center gap-3 px-4 py-3 bg-[#E4E24E] text-center">
        <Image src="/images/email.svg" alt="emailIcon" width={20} height={20} />
        <p className="uppercase text-black text-sm md:text-base font-semibold">
          respond to a mail offer
        </p>
        <Image
          src="/images/arrow-right.svg"
          alt="arrowRight"
          width={20}
          height={20}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`${mainNavbar.includes(pathname) ? "bg-black text-white" : "bg-[#F7F5EF] text-black"}sticky top-0 z-50 bg-white text-black`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          {/* Logo */}
          {mainNavbar.includes(pathname) ? (
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="logo"
                className="size-16 invert"
                width={64}
                height={64}
              />
            </Link>
          ) : (
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={64}
                height={64}
              />
            </Link>
          )}

          {/* Mobile toggle */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <FaTimes size={22} /> : <GiHamburgerMenu size={22} />}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/cashadvance">CASH ADVANCE</Link>
            <Link href="/lineofcredit">LINE OF CREDIT</Link>

            <div className="flex items-center gap-1">
              <Link href="/creditcard">CREDIT CARD</Link>
              <Image
                src="/images/arrow-top.svg"
                alt=""
                className="invert"
                width={16}
                height={16}
              />
            </div>

            <div className="flex items-center gap-1">
              <Link href="/company">COMPANY</Link>
              <Image
                src="/images/arrow-top.svg"
                alt=""
                className="invert"
                width={16}
                height={16}
              />
            </div>
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex gap-4">
            <button className="py-1 px-4 border rounded-full">LOGIN</button>
            <button className="py-1 px-4 rounded-full bg-primary text-black">
              GET STARTED
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden sticky top-0 z-50 bg-black text-white border-t border-white/10">
          <div className="flex flex-col px-6 py-6 space-y-6 text-sm font-medium">
            <Link href="/cashadvance">CASH ADVANCE</Link>
            <Link href="/lineofcredit">LINE OF CREDIT</Link>
            <Link href="/creditcard">CREDIT CARD</Link>
            <Link href="/company">COMPANY</Link>

            <div className="pt-4 flex flex-col gap-3">
              <button className="py-2 border border-white rounded-full">
                LOGIN
              </button>
              <button className="py-2 rounded-full bg-primary text-black font-semibold">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
