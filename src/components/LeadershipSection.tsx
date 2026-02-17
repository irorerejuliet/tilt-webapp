"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const LeadershipSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leaders = [
    {
      id: 1,
      title: "Warren Hogarth",
      subTitle: "Co-Founder and CEO",
      image: "/images/warrenHogarth.webp",
    },
    {
      id: 2,
      title: "Justin Ammerlaan",
      subTitle: "Co-Founder and CTO",
      image: "/images/justinAmmerlaan.webp",
    },
    {
      id: 3,
      title: "Jan Chong",
      subTitle: "Vice President of Engineering",
      image: "/images/janChong.webp",
    },
    {
      id: 4,
      title: "Dom Quaranta",
      subTitle: "Head of Credit",
      image: "/images/domQuaranta.webp",
    },
    {
      id: 5,
      title: "Stephanie Lin",
      subTitle: "CMO",
      image: "/images/stephanieLin.webp",
    },
    {
      id: 6,
      title: "Ben Murray",
      subTitle: "Head of Product",
      image: "/images/benMurray.webp",
    },
    {
      id: 7,
      title: "Mac Muir",
      subTitle: "CFO",
      image: "/images/macMuir.webp",
    },
    {
      id: 8,
      title: "Christy Haller",
      subTitle: "Head of Compliance",
      image: "/images/christyHaller.webp",
    },
    {
      id: 9,
      title: "Louie Shansky",
      subTitle: "General Counsel",
      image: "/images/louieShansky.webp",
    },
    {
      id: 10,
      title: "Gena Stern",
      subTitle: "Head of People",
      image: "/images/igenaStern.webp",
    },
  ];

  const cardWidth = 320; // width of one card including gap
  const visibleCards = 3; // number of cards visible on screen

  const scrollLeft = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, leaders.length - visibleCards),
    );
  };

  return (
    <section className="bg-white py-24">
      <div className="wrapper">
        {/* Header */}
        <div className="text-center mb-12 text-black">
          <h2 className="text-6xl font-extrabold tracking-tight">
            United in purpose
          </h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Our leadership team shepherds the Tilt mission to expand access to
            credit and opportunity.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {leaders.map((leader) => (
              <div
                key={leader.id}
                className="w-[400px] flex-shrink-0  text-black"
              >
                <Image
                  src={leader.image}
                  alt={leader.title}
                  width={330}
                  height={436}
                  className="w-full h-auto rounded-lg border-4"
                />
                <p className="text-[32px] font-abcgravity mt-2">
                  {leader.title}
                </p>
                <p className="text-sm font-gtamerica">{leader.subTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
