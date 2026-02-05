import Image from "next/image";
import { creditSteps} from "../components/constant/creditSteps"
import Button from "./Button";

const AllCreditScore = () => {
  return (
    <section className=" bg-white ">
      <div className="wrapper md:flex flex-row justify-center  flex-col md:flex-row items-start  p-8 md:px-16">
        {/* Left side */}
        <div className="flex-1">
          <h2 className="text-4xl text-black md:text-6xl font-bold font-abcgravity mb-6 md:w-[247px]">
            All credit <br />
            scores welcome
          </h2>
          <p className="mb-6 text-gray-700 md:w-[412px] md:pt-52 pt-5 text-sm md:text-xl font-gtamerica font-thin">
            A credit score isn&apos;t your whole story. Link a bank account to
            show real-time money habits and if you&apos;re ready for credit.
          </p>
          <Button/>
          <p className="mt-6 text-xs text-gray-500 font-medium">
            Tilt Line of Credit issued by FinWise Bank.
          </p>
        </div>

        {/* Right side */}
        <div className="flex-1 flex flex-col gap-6">
          {creditSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#F7F5EF] p-6 rounded-xl shadow-sm"
            >
              {/* Step info */}
              <div className="text-black">
                <button className="text-xs font-bold rounded-full text-white bg-black py-1 px-3 mb-1">
                  STEP {step.step}
                </button>
                <h3 className="font-medium  text-xl  mb-1 font-gtamerica">
                  {step.title}
                </h3>
                <p className="text-[#939495] text-sm font-gtamerica">{step.description}</p>
              </div>
              <div className="text-3xl">
                <Image src={step.image} alt="" width={200} height={200} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCreditScore;
