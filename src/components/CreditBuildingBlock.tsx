import Image from "next/image";
import { creditBuildingCards } from "./constant/creditBuildingCards";



const CreditBuildingBlock = () => {
  return (
    <section className=" flex items-center justify-center px-6  bg-white">
      <div className="w-[1408px] h-[875px] py-20 px-20 wrapper bg-black rounded-3xl">
        {/* Header */}
        <div className="flex items-start justify-between ">
          <h1 className="text-white mt-6 text-3xl md:text-8xl font-extrabold leading-tight font-abcgravity w-[350px] md:w-[700px]">
            Your credit{" "}
            <span className="fitalic font-medium font-empowerserif">
              building blocks
            </span>
          </h1>
          

          <button className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition">
            GET STARTED
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creditBuildingCards.map((card, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-2xl py-28 px-8 text-center shadow-lg"
            >
              <h3 className="text-white text-2xl font-bold mb-6">
                {card.title}
              </h3>

              <Image
                src={card.image}
                alt=""
                width={200}
                height={200}
                className="mx-auto mb-6 w-32 h-32 object-contain"
              />

              <p className="text-gray-300 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CreditBuildingBlock
