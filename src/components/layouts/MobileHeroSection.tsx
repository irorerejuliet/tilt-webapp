"use client"

import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
      

      const MobileHerosection = () => {
        const sliderItems = [
          {
            image: "/images/image-1.jpeg",
            text: "High limit",
            subText: "Cash for a surprise bill",
            icon: "/images/pot.svg",
            iconBg: "bg-[#E4E24E]",
            left: "left-20",
          },
          {
            image: "/images/image-2.webp",
            text: "High limit",
            subText: "to chase your goals",
            icon: "/images/network.svg",
            iconBg: "bg-[#E4E24E]",
            left: "left-20",
          },
          {
            image: "/images/image-3.webp",
            text: "Credit history",
            subText: "to buy a home",
            icon: "/images/tv.svg",
            iconBg: "bg-[#E4E24E]",
            left: "left-16",
          },
          {
            image: "/images/image-4.webp",
            text: "High limit",
            subText: "to help the family",
            icon: "/images/pot.svg",
            iconBg: "bg-[#E4E24E]",
            left: "left-16",
          },
          {
            image: "/images/image-5.webp",
            text: "Cash",
            subText: "to bridge the gap",
            icon: "/images/tv.svg",
            iconBg: "bg-[#E4E24E]",
            left: "left-16",
          },
          {
            image: "/images/CashForGas.webp",
            text: "Cash",
            subText: "for cash and groceries",
            icon: "/images/pot.svg",
            iconBg: "bg-[#E4E24E]",
            left: "left-20",
          },
          {
            image: "/images/image-6.webp",
            text: "Higher limits",
            subText: "to help the family",
            icon: "/images/tv.svg",
            iconBg: "bg-[#E4E24E]",
            left: "left-20",
          },
        ];

        // Slider setting
        const settings = {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 8000,
          cssEase: "linear",
        };
        return (
          <div className="md:hidden block">
            <h1 className="text-white max-w-3xl text-3xl font-bold text-center font-abcgravity ">
              Cash and credit powered by your potential™
            </h1>
            <div className="py-16 mx-auto text-center md:hidden block flex-row">
              <button className="py-4 px-8  rounded-full text-black bg-primary text-lg font-semibold">
                GET STARTED
              </button>
              <div className="flex justify-center items-center gap-1 pt-4">
                <p className="text-base font-medium text-gray-400">
                  Already have an account
                </p>
                <Link
                  href={"/"}
                  className="text-base font-normal text-primary underline"
                >
                  Login
                </Link>
              </div>
            </div>
            {/* Mobile Herosection with carousel */}

            <div className="slider-container px-15 pb-10">
              <Slider {...settings} className="flex gap-6">
                {sliderItems.map((item, index) => (
                  <div className="mx-1" key={index}>
                    <div className="w-60 h-72 min-w-60 min-h-72 border-2 border-white relative ">
                      <Image
                        src={item.image}
                        alt="picture"
                        className="w-full h-full object-cover"
                        width={500}
                        height={500}
                      />

                      <p className="text-white text-xs font-gtamerica leading-none p-2">
                        {item.text}
                        <span className="italic">{item.subText}</span>
                      </p>

                      <div
                        className={`flex items-center p-1 rounded-full bg-white text-black w-24 absolute bottom-2 ${item.left}`}
                      >
                        <Image
                          src={item.icon}
                          alt=""
                          className={`${item.iconBg} p-2 rounded-full`}
                          width={30}
                          height={30}
                        />
                        <button className="text-base font-medium">+$200</button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        );
      };

      export default MobileHerosection;
