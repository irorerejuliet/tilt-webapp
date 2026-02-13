import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiArrowFromTop, BiArrowToTop } from "react-icons/bi";

interface Feature {
  image: string;
  title: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    image: "/images/GoodIcon.svg",
    title: "See if you're approved in minutes",
    bgColor: "bg-[#AEB7D6]",
  },
  {
    image: "/images/iconOncgas.svg",
    title: "Earn cash back rewards when you spend",
    bgColor: "bg-[#8BC8DA]",
  },
  {
    image: "/images/flower.svg",
    title: "Automatic consideration for credit limit increases",
    bgColor: "bg-[#88DAC1]",
  },
];

const CardFeaturs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-12">
          Better credit can be built
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:px-0 px-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F7F5EF] p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center w-full min-h-[210px]"
            >
              <div className={`mb-4 rounded-full p-2 ${feature.bgColor}`}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={24}
                  height={24}
                />
              </div>

              <h3 className="text-lg md:text-xl font-gtamerica text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        <Link
          href="#"
          className="inline-flex items-center gap-2 mt-8 text-[#64635C] text-sm font-gtamerica underline"
        >
          <ArrowUp className="size-5 text-[#64635C]" />
          Unlock your offer
        </Link>
      </div>
    </section>
  );
};

export default CardFeaturs;
