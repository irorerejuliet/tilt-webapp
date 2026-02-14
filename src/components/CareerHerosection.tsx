import Image from "next/image";
import Marquee from "react-fast-marquee";
import ValuesSection from "./ValuesSection";


const CareerHerosection = () => {
    const images = [
      "/images/explore-1.webp",
      "/images/explorer-2.webp",
      "/images/explorer-3.webp",
      "/images/explorer-4.webp",
      "/images/explorer-5.webp",
      "/images/explorer-6.webp",
      "/images/explorer-7.webp",
    ];

  return (
    <section className="">
      <div className="wrapper">
        <div className="text-center mx-auto my-20">
          <p className="text-base font-medium text-gray-500 font-gtamerica">
            CAREERS
          </p>
          {/* Main heading */}
          <p className="lg:text-8xl  text-5xl font-bold font-abcgravity lg:w-[950px] w-80  text-center mx-auto text-white">
            People are
            <span className="font-empowerserif">incredible</span>
          </p>
          <p className="my-6 text-sm md:text-base text-white w-48 md:w-110 text-center mx-auto ">
            We’re building an extraordinary team to build the credit system
            people deserve.
          </p>
          <button className="bg-primary rounded-full text-black font-semibold px-6 py-3  hover:bg-yellow-500 transition">
            SEE OPEN ROLES
          </button>
        </div>
      </div>
      <Marquee>
        <div className="flex items-center gap-4">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Explore image ${index + 1}`}
              width={437}
              height={327}
              className="border-2 border-white"
            />
          ))}
        </div>
      </Marquee>
      <ValuesSection/>
    </section>
  );
}

export default CareerHerosection
