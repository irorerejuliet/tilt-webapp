import { ArrowRight } from "lucide-react";
import Image from "next/image";

type BlogCardProps = {
  title: string;
  image: string;
};

const BlogCard = ({ title, image }: BlogCardProps) => {
  return (
    <section
      className="
      flex justify-between flex-col md:flex-row
      gap-6
      bg-[#1f1f1f]
      rounded-3xl
      p-4 sm:p-6 
    "
    >
      {/* Image */}
      <div className="relative w-full md:w-[353px] h-[220px] md:h-[309px] shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1">
        <h3
          className="
          text-white
          text-lg sm:text-xl
          leading-snug
          font-medium
          max-w-md
        "
        >
          {title}
        </h3>

        <button
          className="
          mt-6
          w-12 h-12
          rounded-full
          bg-[#e7e5e4]
          flex items-center justify-center
          hover:scale-105
          transition
        "
        >
          <ArrowRight className="text-black" size={20} />
        </button>
      </div>
    </section>
  );
};

export default BlogCard;
