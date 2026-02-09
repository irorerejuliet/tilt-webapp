"use client"

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


type card = {
  
  title?: string;
  image: string;
  text?: string;
  description?: string;
  
}

type CreditBuildingBlockProps = {
  creditBuildingCards: card[];
  title: string;
  buttonText: string;
  highlightTitle?: string; //Optional
}




const CreditBuildingBlock = ({ title, buttonText, creditBuildingCards, highlightTitle }: CreditBuildingBlockProps) => {
  // Slider setting
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
  };
console.log(creditBuildingCards);
  return (
    <section className=" flex items-center justify-center px-6  bg-white">
      <div className="w-[1408px] md:h-[875px]  md:px-20 wrapper bg-black rounded-3xl">
        {/* Header */}
        <div className="md:flex flex-row items-start justify-between my-10 ">
          <h1 className="text-white text-3xl md:text-8xl font-extrabold leading-tight font-abcgravity w-[350px] md:w-[700px]">
            {title}
            {highlightTitle && (
              <span className="italic font-medium font-empowerserif">
                {highlightTitle}
              </span>
            )}
          </h1>

          <button className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition">
            {buttonText}
          </button>
        </div>

        {/* Cards Desktop*/}
        <div className="md:grid  md:grid-cols-3 gap-8 text-white hidden ">
          {creditBuildingCards?.map((card, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-2xl py-16 px-8 text-center shadow-lg font-gtamerica "
            >
              <h3 className="text-white text-4xl font-bold mb-6  tracking-tight ">
                {card.title}
              </h3>

              <Image
                src={card.image}
                alt=""
                width={200}
                height={200}
                className="mx-auto mb-6 w-32 h-32 object-contain"
              />

              <p className=" text-lg leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
        <div className="gap-8 text-white md:hidden block slider-container mb-20  pb-10">
          <Slider {...settings}>
            {creditBuildingCards?.map((card, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-2xl py-16  text-center shadow-lg font-gtamerica "
              >
                <h3 className="text-white md:text-4xl text-2xl font-bold mb-6  tracking-tight ">
                  {card.title}
                </h3>

                <Image
                  src={card.image}
                  alt=""
                  width={200}
                  height={200}
                  className="mx-auto mb-6 w-32 h-32 object-contain"
                />

                <p className="md:text-lg leading-relaxed">{card.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CreditBuildingBlock
