import React from 'react'
import { creditCanBeBuiltDetails } from './constant/creditCanBeBuiltDetails';
import CreditCardFeatures from './CreditCardFeatures';
import Image from 'next/image';
import Button from './Button';



const CreditCardPricing = () => {
  return (
    // min-h-screen
    <section className="relative wrapper">
      <div className=" bg-[#262525] py-20 -mb-40 w-[1392px] h-[1343px] mx-auto ">
        <p className="md:text-8xl text-5xl font-bold font-abcgravity md:w-[700px] w-80  text-center mx-auto text-white">
          <span className="font-empowerserif">Better</span> credit can be built
        </p>
        <div className=" flex items-center justify-center px-6 py-20 mb-60 z-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
            {creditCanBeBuiltDetails.map((card, index) => (
              <div
                key={index}
                className="bg-black rounded-2xl p-8 flex flex-col justify-between shadow-xl border border-neutral-800"
              >
                <div>
                  {/* Card Image */}
                  <Image src={card.image} alt="" width={182} height={115} />
                  {/* Title */}
                  <h2 className="text-5xl font-extrabold text-white leading-tight mb-8 font-abcgravity py-8">
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
                  <div className="mt-8 space-y-2 text-base font-gtamerica mb-10">
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
                {/* please remi, the arrow is suppose to take the color of the text but i dont know how to chnage it */}
                <div className="flex items-center gap-2 py-8">
                  <span className="text-[#54535C] text-sm font-gtamerica">
                    Learn More
                  </span>
                  <Image
                    src="/images/learnMoreArrow.svg"
                    alt="arrowtop"
                    width={16}
                    height={16}
                    className="invert"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs font-gtamerica text-[#c8c8b6] text-center mx-auto">
          Tilt Credit Cards issued by WebBank.
        </p>
      </div>
    </section>
  );
}


export default CreditCardPricing
