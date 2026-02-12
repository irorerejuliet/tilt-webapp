import Image from "next/image";
import { creditBenefits } from "./constant/creditBenefits";

const PaycheckLimitCards = () => {
  return (
    <section className="bg-white ">
      <div className="wrapper text-black py-20">
        
          <p className="md:text-8xl text-5xl font-bold font-abcgravity lg:w-[950px]  w-80  text-center mx-auto ">
            You&apos;re pushing
            <span className="font-empowerserif">ahead.</span>
            We&apos;re pulling for you.
          </p>
          <p className="my-6 text-sm lg:text-xl  w-48 lg:w-110 text-center mx-auto font-gtamerica">
            You&apos;ve got 4 ways to be considered for a credit limit increase.
          </p>
        

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl w-full mx-auto">
  {creditBenefits.map((card, index) => (
    <div
      key={index}
      className="bg-[#F7F5EF] rounded-3xl shadow-sm p-2"
    >
      <Image
        src={card.image}
        alt={card.title}
        width={484}
        height={372}
        className="w-full h-auto rounded-2xl"
      />

      <div className="p-6 space-y-4">
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight font-abcgravity">
          {card.title}
        </h2>

        <p className="text-sm md:text-base text-[#100F0F] font-gtamerica">
          {card.description}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

export default PaycheckLimitCards
