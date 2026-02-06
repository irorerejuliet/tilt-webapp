
import Button from './Button';
import Image from 'next/image';
import FruitBackground from './FruitBackground';

const CreditHero = () => {
  return (
    <section className="bg-white">
      <section className="pt-10 flex flex-col items-center justify-center px-6  md:px-4">
        {/* Top label */}
        <p className="text-base font-medium text-gray-500 font-gtamerica">
          Line of Credit
        </p>
        {/* Main heading */}
        <p className="md:text-8xl text-5xl font-bold font-abcgravity md:w-200 w-80  text-center mx-auto text-black">
          $200–$400 with room to
           <span className="font-empowerserif">grow</span>
        </p>
        <p className="my-6 text-sm md:text-base text-gray-600 w-48 md:w-110 text-center ">
          A flexible credit line that can stretch to $1,000 over time.*
        </p>
        <Button />
        {/* Stats */}
        <div className="mt-20 flex-row md:flex items-center gap-10 text-center">
          <div>
            <div className="mb-2 text-lg md:ml-4 ml-20">
              <Image
                src="/images/numberofCustomer.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
            <p className="font-semibold text-gray-700">300K+</p>
            <p className="text-sm text-gray-600">Customers</p>
          </div>

          <div className="h-10 w-px bg-gray-300" />

          <div className="">
            <div className="mb-2 text-lg ml-20">
              <Image
                src="/images/clock.svg"
                alt=""
                width={24}
                height={24}
                className=""
              />
            </div>
            <p className="font-semibold text-gray-700">&lt;3 minutes</p>
            <p className="text-sm text-gray-600 max-w-[180px]">
              To get cash with optional instant delivery
            </p>
          </div>

          <div className="h-10 w-px bg-gray-300" />

          <div>
            <div className="mb-2 text-lg md:ml-12 ml-20">
              <Image
                src="/images/repaymentOption.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
            <p className="font-semibold text-gray-600">3</p>
            <p className="text-sm text-gray-600">Repayment options</p>
          </div>
        </div>
      </section>
      <FruitBackground />
    </section>
  );
}

export default CreditHero
