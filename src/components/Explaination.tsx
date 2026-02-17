import Image from "next/image";

const Explaination = () => {
  return (
    <section className="bg-white px-4 py-12 md:flex md:items-center md:gap-12">
      <div className="wrapper flex gap-10 justify-center">
        {/* Left column - Image */}
        <div className="md:w-1/2">
          <Image
            src="/images/explanation-image.webp"
            alt="Father with children in kitchen"
            className="w-full h-auto rounded-lg object-cover"
            width={600}
            height={717}
          />
        </div>

        {/* Right column - Text */}
        <div className=" md:mt-0 space-y-6 text-gray-800 text-3xl leading-60 tracking-widest font-gtamerica w-[520px] h-[708px]">
          <p className="text-lg ">
            Today, over 100 million Americans, and billions more globally, lack
            reliable access to fair credit. But we see a side of people that
            traditional lenders don&apos;t care to. We see the hard work
            they&apos;re putting in and how far they&apos;ve come, and we think
            that should count for something. So we&apos;ve created our own way
            of underwriting that credits the working, whatever they&apos;re
            working toward.
          </p>
          <p className="text-lg  pt-96">
            We won&apos;t pretend we&apos;ve perfected it. We&apos;re still
            learning, refining our approach, and striving to improve — just like
            anyone pushing for something better.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Explaination
