import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardFeaturs from "./CardFeaturs";

const CreditCardOffer = () => {
  return (
    <section className="bg-white  scroll-smooth">
      <div className="flex lg:flex-row flex-col justify-center gap-10 items-center py-16 md:py-20 wrapper lg:px-0 px-6">
        {/* Left */}
        <div className="max-w-[520px] w-full">
          <h1 className="lg:text-[64px] md:text-4xl text-3xl font-black leading-[1.05] text-black mb-6 font-abcgravity">
            See your Tilt
            <br />
            Credit Card offer
          </h1>

          <p className="text-[18px] text-[#333333] mb-7 leading-[1.6] w-full max-w-[504px]">
            Enter the 9–character code from the Tilt offer you received in the
            mail.
          </p>

          <input
            type="text"
            placeholder="Enter 9–character code"
            className="px-4 py-4 rounded-[10px] border border-[#dcdcdc] text-[16px] mb-4 outline-none placeholder:text-[#9a9a9a] w-full"
          />

          <input
            type="text"
            placeholder="Enter your zip code"
            className="px-4 py-4 rounded-[10px] border border-[#dcdcdc] text-[16px] mb-4 outline-none placeholder:text-[#9a9a9a] w-full"
          />

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <button className="py-4 px-10 rounded-full bg-primary text-black text-sm font-gtamerica tracking-[0.5px] mt-2 w-full">
              UNLOCK OFFER
            </button>

            <Link
              href="#"
              className="inline-block mt-[6px] sm:mt-[18px] text-[14px] text-[#5a5a5a] underline"
            >
              How to find your code
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="bg-[#F7F5EF] py-10 md:py-14 px-6 md:px-10 rounded-2xl w-full max-w-[584px]">
          <Image
            src="/images/stacked-credit-cards.webp"
            alt="credit-card"
            width={584}
            height={480}
            className="w-full h-auto"
          />
        </div>
      </div>
      <CardFeaturs />
    </section>
  );
};

export default CreditCardOffer;
   






  // {
  //   isOpen && (
  //     <div className="md:hidden sticky top-0 z-50 bg-black text-white border-t border-white/10">
  //       <div className="flex flex-col px-6 py-6 space-y-6 text-sm font-medium">
  //         <Link href="/cashadvance">CASH ADVANCE</Link>
  //         <Link href="/lineofcredit">LINE OF CREDIT</Link>
  //         <Link href="/creditcard">CREDIT CARD</Link>
  //         <Link href="/company">COMPANY</Link>

  //         <div className="pt-4 flex flex-col gap-3">
  //           <button className="py-2 border border-white rounded-full">
  //             LOGIN
  //           </button>
  //           <button className="py-2 rounded-full bg-primary text-black font-semibold">
  //             GET STARTED
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }