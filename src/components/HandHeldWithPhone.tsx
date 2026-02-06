import Image from 'next/image';
import React from 'react'

const HandHeldWithPhone = () => {
  return (
    <section className="wrapper">
      {/* handheldImage */}
      <div className="md:w-[1308px] w-80  mx-auto text-center py-20">
        <Image
          src="/images/handheld-with-card.webp"
          alt="fundingWoman"
          className="border-2 border-white  rounded-3xl"
          width={1312}
          height={1312}
        />
      </div>
      <div className="mt-20 flex-row md:flex items-center justify-center gap-20 font-gtamerica">
        <div className="w-[374px] mx-auto">
          <div className="mb-2 flex justify-center">
            <Image
              src="/images/percentage.svg"
              alt=""
              width={24}
              height={24}
              className="invert"
            />
          </div>

          <p className="font-semibold text-center">Over 50%</p>
          <p className="text-sm text-center">
            Of customers approved via our website were denied credit elsewhere
          </p>
        </div>

        <div className="h-10 w-px bg-gray-300" />
        <div className="w-[374px] mx-auto">
          <div className="mb-2 flex justify-center">
            <Image
              src="/images/percentage.svg"
              alt=""
              width={24}
              height={24}
              className="invert"
            />
          </div>

          <p className="font-semibold text-center">$2.5B+</p>
          <p className="text-sm text-center">Purchases made possible</p>
        </div>

        <div className="h-10 w-px bg-gray-300" />

        <div className="w-[374px] mx-auto">
          <div className="mb-2 flex justify-center">
            <Image
              src="/images/percentage.svg"
              alt=""
              width={24}
              height={24}
              className="invert"
            />
          </div>

          <p className="font-semibold text-center">2 out of 3</p>
          <p className="text-sm text-center">
            Customers receive a limit increase in their first 6 months
          </p>
        </div>
      </div>
    </section>
  );
}

export default HandHeldWithPhone
