"use client"
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';



const LeadershipSection = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -320, // move left
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 320, // move right
      behavior: "smooth",
    });
  };


    const leaders = [
  { id: 1, title: "Warren Hogarth", image: "/images/warrenHogarth.webp" },
  { id: 2, title: "Justin Ammerlaan", image: "/images/justinAmmerlaan.webp" },
  { id: 3, title: "Jan Chong", image: "/images/janChong.webp" },
  { id: 4, title: "Dom Quaranta", image: "/images/domQuaranta.webp" },
  { id: 5, title: "Stephanie Lin", image: "/images/stephanieLin.webp" },
  { id: 6, title: "Ben Murray", image: "/images/benMurray.webp" },
  { id: 7, title: "Mac Muir", image: "/images/macMuir.webp" },
  { id: 8, title: "Christy Haller", image: "/images/christyHaller.webp" },
  { id: 9, title: "Louie Shansky", image: "/images/louieShansky.webp" },
  { id: 10, title: "Gena Stern", image: "/images/igenaStern.webp" },
];
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
        <div ref={sliderRef} className="flex items-center gap-6 ">
          {leaders.map((leader) => (
            <div key={leader.id} className="w-[300px] flex-shrink-0 ">
              <Image
                src={leader.image}
                alt={leader.title}
                width={330}
                height={436}
                className="w-full h-auto"
              />
              <p className="text-black">{leader.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection
