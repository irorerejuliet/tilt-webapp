import Image from 'next/image';
import Button from './Button';
import HandHeldWithPhone from './HandHeldWithPhone';

const CreditCardHero = () => {
  return (
    <main className="bg-black ">
      <section className="pt-10 flex flex-col items-center justify-center px-6  md:px-4 space-y-8 ">
        {/* Top label */}
        <p className="text-base font-medium text-gray-500 font-gtamerica">
          CREDIT CARDS
        </p>
        {/* Main heading */}
        <p className="md:text-8xl text-5xl font-bold font-abcgravity md:w-[950px] w-80  text-center mx-auto text-white">
          Spending power with cash back
          <span className="font-empowerserif">rewards</span>
        </p>
        <p className="my-6 text-sm md:text-base text-white w-48 md:w-110 text-center ">
          Pre-qualify with no impact to your credit score — no security deposit
          or credit history required.
        </p>
        <Button />
        <div className="flex justify-center items-center gap-3 px-4 py-3  text-center">
          <Image
            src="/images/email.svg"
            alt="emailIcon"
            width={20}
            height={20}
            className="invert"
          />
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            respond to a mail offer
          </p>
          <Image
            src="/images/arrow-right.svg"
            alt="arrowRight"
            width={20}
            height={20}
          />
        </div>
        {/* Stats */}
      </section>

     <HandHeldWithPhone/>
    </main>
  );
}

export default CreditCardHero
