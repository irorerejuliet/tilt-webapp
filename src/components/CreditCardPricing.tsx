import React from 'react'
import { creditCanBeBuiltDetails } from './constant/creditCanBeBuiltDetails';
import CreditCardFeatures from './CreditCardFeatures';



const CreditCardPricing = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {creditCanBeBuiltDetails.map((card, index) => (
          <div
            key={index}
            className="bg-black rounded-2xl p-8 flex flex-col justify-between shadow-xl border border-neutral-800"
          >
            <div>
              {/* Card Image */}
              <div
                className={`w-40 h-24 rounded-xl mb-8 flex items-center justify-end p-3 ${card.imageBg}`}
              >
                <span className="text-xs font-bold text-black">VISA</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-extrabold text-white leading-tight mb-8">
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
              <div className="mt-8 space-y-2 text-sm">
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
            <button className="mt-10 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-full transition">
              GET STARTED
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default CreditCardPricing
