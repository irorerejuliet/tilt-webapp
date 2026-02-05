"use client";
import React, { useState } from "react";
import Funding from "./Funding";

const LineCreditCustomer = () => {
  const testimonials = [
    {
      text: "They have helped me in clutch situations and I simply pay them back on my next pay period. Very good app and I have told several friends. Thank you [Tilt]",
      name: "Jason H. ",
      date: "February 2025",
    },
    {
      text: "Fast payout, convenient scheduling to pay back, Line of Credit is a game-changer!",
      name: "Brenda S.",
      date: "December 2024",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* MOBILE SLIDER */}
      <div className="md:hidden bg-[#F7F5EF] px-6 py-20 rounded-4xl  overflow-hidden">
        {/* header */}
        <div className="text-center space-y-6">
          <p className="text-[#64635C] tracking-widest text-sm font-medium">
            OUR CUSTOMERS
          </p>

          <p className="text-3xl font-bold font-abcgravity text-[#100F0F]">
            “Easy to understand and quick funding.”
          </p>

          <p className="text-lg font-bold text-[#100F0F]">
            Stephen W.{" "}
            <span className="text-sm font-medium text-[#64635C]">
              January 2025
            </span>
          </p>
        </div>

        {/* slider */}
        <div className="">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="min-w-full text-center space-y-6 px-2">
                <p className="text-lg font-thin font-gtamerica text-[#100F0F]">
                  “{item.text}”
                </p>

                <p className="text-lg font-bold font-abcgravity">
                  {item.name}{" "}
                  <span className="text-sm font-medium font-gtamerica text-[#64635C]">
                    {item.date}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* arrows */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-[#E6E4DC] flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>

      {/* DESKTOP  */}
      <div className="hidden md:block bg-white pt-20">
        <div className="wrapper bg-[#F7F5EF]  rounded-4xl">
          <div className="md:w-352 h-[832px] py-32">
            <div className="text-center mx-auto">
              <p className="text-[#64635C] font-gtamerica font-medium">
                OUR CUSTOMERS
              </p>
              <p className="md:text-8xl text-2xl font-bold font-abcgravity text-[#100F0F] py-8">
                “Instantly helped me!”
              </p>
              <p className="text-xl font-bold text-[#100F0F]">
                Kris M.{" "}
                <span className="text-base font-medium">March 2025</span>
              </p>
            </div>

            <div className="text-black px-28">
              <div className="md:flex flex-row justify-between gap-14 items-center py-24 text-xl font-thin font-gtamerica">
                <p>
                  Fast payout, convenient scheduling to pay back, Line of Credit
                  is a game-changer!”
                </p>
                <p>
                  “They have helped me in clutch situations and I simply pay
                  them back on my next pay period. Very good app and I have told
                  several friends. Thank you [Tilt].”
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-xl font-bold font-abcgravity">
                  Brenda S.
                  <span className="text-xs font-medium font-gtamerica">
                    December 2024
                  </span>
                </p>
                <p className="text-xl font-bold font-abcgravity">
                  Jason H.
                  <span className="text-xs font-medium font-gtamerica">
                    February 2025
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineCreditCustomer;
