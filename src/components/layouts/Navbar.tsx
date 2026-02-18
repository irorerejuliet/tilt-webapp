"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const mainNavbar = ["/", "/creditcard", "/company/career", "/company/about"];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Yellow bar */}
      <div className="flex justify-center items-center gap-3 px-4 py-3 bg-primary text-center">
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
        className={`sticky top-0 z-50 ${
          mainNavbar.includes(pathname)
            ? "bg-black text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="logo"
              className={`w-16 h-16 ${mainNavbar.includes(pathname) ? "invert" : ""}`}
              width={64}
              height={64}
            />
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <FaTimes size={22} /> : <GiHamburgerMenu size={22} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/cashadvance">CASH ADVANCE</Link>
            <Link href="/lineofcredit">LINE OF CREDIT</Link>

            {/* CREDIT CARD Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("credit")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                <Link href="/creditcard">CREDIT CARD</Link>
                <Image
                  src="/images/arrow-top.svg"
                  alt=""
                  className={`${mainNavbar.includes(pathname) ? "invert" : ""}`}
                  width={16}
                  height={16}
                />
              </div>
              {activeDropdown === "credit" && (
                <div className="absolute top-full left-0 w-96 bg-black text-white font-gtamerica rounded-lg shadow-lg z-10">
                  <div className="flex items-center px-2 py-2">
                    <Image
                      src="/images/tv.svg"
                      alt="tv"
                      className="bg-primary p-2 rounded-full"
                      width={30}
                      height={30}
                    />
                    <Link href="/creditcard/">
                      <div className="px-4 py-2 hover:bg-gray-100 text-black">
                        <p>Credit Card</p>
                        <span className="text-gray-500 text-sm">
                          Card for every builder
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="flex items-center px-2 py-2">
                    <Image
                      src="/images/tv.svg"
                      alt="tv"
                      className="bg-primary p-2 rounded-full"
                      width={30}
                      height={30}
                    />
                    <Link href="/respondtoemail/">
                      <div className="px-4 py-2 hover:bg-gray-100 text-black">
                        <p>Respond to mail offer</p>
                        <span className="text-gray-500 text-sm">
                          Build good credit history
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* COMPANY Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("company")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                <Link href="/company">COMPANY</Link>
                <Image
                  src="/images/arrow-top.svg"
                  alt=""
                  className={`${mainNavbar.includes(pathname) ? "invert" : ""}`}
                  width={16}
                  height={16}
                />
              </div>
              {activeDropdown === "company" && (
                <div className="absolute top-full left-0 w-96 bg-black text-white font-gtamerica rounded-lg shadow-lg z-10">
                  <div className="flex items-center px-2 py-2">
                    <Image
                      src="/images/tv.svg"
                      alt="tv"
                      className="bg-primary p-2 rounded-full"
                      width={30}
                      height={30}
                    />
                    <Link href="/company/customers">
                      <div className="px-4 py-2">
                        <p>Customers Reviews</p>
                      </div>
                    </Link>
                  </div>
                  <div className="flex items-center px-2 py-2">
                    <Image
                      src="/images/tv.svg"
                      alt="tv"
                      className="bg-primary p-2 rounded-full"
                      width={30}
                      height={30}
                    />
                    <Link href="/company/about">
                      <div className="px-4 py-2 ">
                        <p>About</p>
                      </div>
                    </Link>
                  </div>
                  <div className="flex items-center px-2 py-2">
                    <Image
                      src="/images/tv.svg"
                      alt="tv"
                      className="bg-primary p-2 rounded-full"
                      width={30}
                      height={30}
                    />
                    <Link href="/company/career">
                      <div className="px-4 py-2 ">
                        <p>Career</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop buttons */}
          <div className="hidden lg:flex gap-4">
            <button className="py-1 px-4 border rounded-full">LOGIN</button>
            <button className="py-1 px-4 rounded-full bg-primary text-black font-semibold">
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
