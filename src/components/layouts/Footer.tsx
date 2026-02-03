"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { footerNotes } from "../constant/footerNotes";
const Footer = () => {
  const pathname = usePathname();
  const mainFooter = ["/", "/cashadvance"];
  const socialMediaIcons = [
    "/images/tiktok.svg",
    "/images/twitter.svg",
    "/images/instagram.svg",
    "/images/linkdinIcon.svg",
    "/images/ypuTube.svg",
  ];

  return (
    <footer
      className={`${mainFooter.includes(pathname) ? "bg-black text-white" : "bg-[#F7F5EF] text-black"}  px-6 py-40`}
    >
      <div>
        <div className="max-w-7xl mx-auto">
          <div className="md:flex  justify-between items-center  hidden">
            {mainFooter.includes(pathname) ? (
              <Image
                src="/images/footerLogo.svg"
                alt="footer logo"
                className="invert"
                width={400}
                height={400}
              />
            ) : (
              <Image
                src="/images/footerLogo.svg"
                alt="footer logo"
                width={400}
                height={400}
              />
            )}

            <div className="w-[656px]">
              <p>
                The Tilt name and logos are trademarks and service marks
                (collectively, the &quot;Tilt Trademarks&quot;) owned by Tilt
                Finance, Inc. You do not acquire a license or any ownership
                rights to any trademarks, service marks, or trade names through
                your access or use of the Tilt app or platform product or
                service.
              </p>
              <p className="py-40 w-[135px] text-sm">
                Tilt Finance, Inc. 9169 W State St., PMB 499, Garden City, ID
                83714
              </p>
            </div>
          </div>
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-20">
            <div>
              <p className="text-[#64635C] text-lg mb-6 tracking-widest">
                PRODUCTS
              </p>
              <div className=" text-lg font-thin font-gtamerica mb-6 space-y-4 ">
                <p>Cash Advance</p>
                <p>Line of Credit</p>
                <p>Credit Cards</p>
              </div>
            </div>

            <div>
              <p className="text-[#64635C] text-lg mb-6 tracking-widest">
                COMPANY
              </p>
              <div className=" text-lg font-thin font-gtamerica mb-6 space-y-4">
                <p>About Us</p>
                <p>Reviews</p>
                <p>Careers</p>
                <p>Legal</p>
                <p>Terms of Service</p>
                <p>Privacy</p>
                <p>Your Privacy Choices</p>
              </div>
            </div>

            <div>
              <p className="text-[#64635C] text-lg mb-6 tracking-widest">
                LEARN
              </p>
              <p className=" text-lg font-thin font-gtamerica ">FAQ</p>
            </div>

            <div>
              <p className="text-[#64635C] text-lg mb-6 tracking-widest md:block hidden">
                GET THE APP
              </p>
              <div className="md:flex flex-row items-center gap-4 hidden">
                <Image
                  src="/images/app-store.webp"
                  alt="appStore"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/google-play.webp"
                  alt="appStore"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <div className="md:w-[1312px] w-[342] text-[#64635C] text-xs space-y-4">
            <div className="md:flex flex-row items-center justify-between">
              <p className="text-white text-sm pb-12">
                Copyright © 2025 Tilt - All Rights Reserved
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  {socialMediaIcons.map((src, i) => (
                    <div
                      key={i}
                      className="relative w-8 h-8 rounded-full bg-primary flex items-center justify-center"
                    >
                      <Image
                        src={src}
                        alt="social icon"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {footerNotes.map((text, index) => (
              <p key={index} className="text-[#64635C] text-xs">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
