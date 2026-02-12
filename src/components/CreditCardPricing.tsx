import React from "react";
import { creditCanBeBuiltDetails } from "./constant/creditCanBeBuiltDetails";
import CreditCardFeatures from "./CreditCardFeatures";
import Image from "next/image";
import Button from "./Button";

const CreditCardPricing = () => {
  return (
    <section className="wrapper px-4 sm:px-6 lg:px-8">
      <div className="bg-[#262525] max-w-7xl mx-auto py-16 rounded-2xl">
        {/* Heading */}
        <p className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-abcgravity text-center text-white max-w-3xl mx-auto leading-tight">
          <span className="font-empowerserif">Better</span> credit can be built
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-0 px-6">
          {creditCanBeBuiltDetails.map((card, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Card Image */}
                <Image
                  src={card.image}
                  alt=""
                  width={182}
                  height={115}
                  className="mb-6"
                />

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-abcgravity mb-8">
                  {card.title}
                </h2>

                {/* Features */}
                <div className="space-y-6">
                  <CreditCardFeatures
                    icon="/images/user.svg"
                    title={card.fee}
                    subtitle={card.feeText}
                  />
                  <CreditCardFeatures
                    icon="/images/repaymentOption.svg"
                    title={card.cashback}
                    subtitle={card.cashbackSub}
                  />
                  <CreditCardFeatures
                    icon="/images/percentagecredit.svg"
                    title={card.apr}
                    subtitle={card.aprValue}
                  />
                  <CreditCardFeatures
                    icon="/images/flower.svg"
                    title="Early path to limit increases"
                    subtitle="Qualify as early as 4 months"
                  />
                </div>

                {/* Links */}
                <div className="mt-8 space-y-2 text-sm sm:text-base font-gtamerica mb-10">
                  <p className="text-neutral-400 underline cursor-pointer">
                    Cash back terms
                  </p>
                  <p className="text-neutral-400 underline cursor-pointer">
                    Limit increase terms
                  </p>
                  <p className="text-neutral-400 underline cursor-pointer">
                    Full terms
                  </p>
                </div>
              </div>

              {/* Button */}
              <Button />

              {/* Learn More */}
              <div className="flex items-center gap-2 py-6 text-[#54535C] hover:text-white cursor-pointer transition-colors">
                <span className="text-sm font-gtamerica">Learn More</span>

                {/* Arrow that inherits text color */}
                <Image
                  src="/images/learnMoreArrow.svg"
                  alt="arrowtop"
                  width={16}
                  height={16}
                  className="brightness-0 invert-0"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <p className="text-xs font-gtamerica text-[#c8c8b6] text-center mt-16">
          Tilt Credit Cards issued by WebBank.
        </p>
      </div>
    </section>
  );
};

export default CreditCardPricing;
