import Image from "next/image";
import Link from "next/link";
import React from "react";

const CreditCardOffer = () => {
  return (
    <section className="bg-white">
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
    </section>
  );
};

export default CreditCardOffer;
