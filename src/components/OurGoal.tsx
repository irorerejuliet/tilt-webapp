"use client";

import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import OurCustomers from "./OurCustomers";


const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

const OurGoal = () => {
  const goals = [
    {
      image: "/images/creditScoreMonitor.webp",
      title: "Credit Score Monitoring",
      description:
        "Track your score and get personalized tips on how to boost it.",
    },
    {
      image: "/images/PersonalizedBudgeting.webp",
      title: "Personalized Budgeting",
      description:
        "Stay responsible with spend breakdowns and customizable budget caps.",
    },
    {
      image: "/images/AutomaticSaving.webp",
      title: "Automatic Savings†",
      subTilte: "when you repay",
      description:
        "Only save what you can afford — Tilt AI can do it automatically.",
    },
  ];

  // Slider setting
  const settings = {
    dots: true,
    centerMode: true,
    centerPadding: "24px",
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    cssEase: "linear",
  };

  return (
    <div className="bg-white text-white py-24">
      <div className="wrapper">
        <div className="md:ml-0 ml-20">
          <p className="text-base font-medium text-[#64635c] font-gtamerica">
            OUR APP
          </p>
          <p className="md:text-8xl text-5xl font-bold font-abcgravity md:w-200 w-80 pt-4 text-black">
            Your <span className="font-empowerserif">goals,</span>
            <span>our game plan</span>
          </p>
          <button className="py-4 px-8  rounded-full mt-6 text-black bg-primary text-lg font-semibold">
            GET STARTED
          </button>
        </div>
        <div className="md:flex items-center gap-6 mt-20  md:space-y-0 space-y-10 hidden">
          {goals.map((item, index) => (
            <div
              key={index}
              className="bg-[#F7F5EF] text-center mx-auto py-6 px-4 w-120"
            >
              <p className="font-gtamerica font-bold text-2xl text-black w-60 text-center mx-auto">
                {item.title}
              </p>
              <div className="ml-20">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-contain w-60 h-72"
                />
              </div>

              <p className="text-sm font-gtamerica leading-none  text-[#64635c]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {/*For Mobile */}
        <div className="mt-20 mx-4 md:hidden block slider-container ">
          <Slider {...settings}>
            {goals.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-[#F7F5EF] text-center mx-auto py-6 px-4">
                  <p className="font-gtamerica font-bold text-2xl text-black w-60 text-center mx-auto">
                    {item.title}
                  </p>
                  <div className="ml-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="object-contain w-60 h-72"
                    />
                  </div>

                  <p className="text-sm font-gtamerica leading-none  text-[#64635c]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <OurCustomers/>
    </div>
  );
};

export default OurGoal;
