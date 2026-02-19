"use client";
import React, { useState } from "react";
import Funding from "./Funding";

const OurCustomers = () => {
  const testimonials = [
    {
      text: "Thank you [Tilt] for giving me a chance when nobody else would.",
      name: "Dawn B.",
      date: "January 2025",
    },
    {
      text: "Be responsible and [Tilt] is here when you need them. Simple.",
      name: "Trevor H.",
      date: "January 2025",
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
      <div className="md:hidden bg-[#F7F5EF] px-6 py-20 rounded-4xl relative z-50 overflow-hidden">
        {/* header */}
        <div className="text-center space-y-6">
          <p className="text-[#64635C] tracking-widest text-sm font-medium">
            OUR CUSTOMERS
          </p>

          <p className="text-3xl font-bold font-abcgravity text-[#100F0F]">
            “Instantly helped me!”
          </p>

          <p className="text-lg font-bold text-[#100F0F]">
            Kris M.{" "}
            <span className="text-sm font-medium text-[#64635C]">
              March 2025
            </span>
          </p>
        </div>

        {/* slider */}
        <div className="mt-14 overflow-hidden">
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
      <div className="hidden md:block mt-40">
        <div className="wrapper bg-[#F7F5EF] md:-mb-60 -mb-40 rounded-4xl z-50 relative">
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

            <div className="text-black px-32">
              <div className="md:flex flex-row justify-between gap-10 items-center py-24 text-xl font-thin font-gtamerica">
                <p>
                  “Thank you [Tilt] for giving me a chance when nobody else
                  would.”
                </p>
                <p>
                  “Be responsible and [Tilt] is here when you need them.
                  Simple.”
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-xl font-bold font-abcgravity">
                  Dawn B.
                  <span className="text-xs font-medium font-gtamerica">
                    January 2025
                  </span>
                </p>
                <p className="text-xl font-bold font-abcgravity">
                  Trevor H.
                  <span className="text-xs font-medium font-gtamerica">
                    January 2025
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Funding
        title="Funding"
        subTitle="future"
        description="you"
        button="Get started"
        image="/images/FundingForYouwoman.webp"
        titleClassName="md:top-90 bottom-88 md:left-96 left-36"
        subTitleClassName="md:bottom-96 bottom-60 md:left-110 left-40"
        descriptionClassName="md:text-[205px] text-4xl font-abcgravity font-bold text-white absolute  md:bottom-48 bottom-48  md:left-150 left-44 "
        buttonClassName="rounded-full text-black bg-primary text-lg"
      />
    </div>
  );
};

export default OurCustomers;




