"use client";

import Image from "next/image";


type Funding = {
  title: string;
  description: string;
  image: string;
};

type fundingProps = {
  title: string;
  subTitle: string;
  description: string;
  button: string;
  image: string;
  titleClassName?: string;
  subTitleClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
};

const Funding = ({
  title,
  subTitle,
  description,
  button,
  image,
  titleClassName = "",
  subTitleClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
}: fundingProps) => {
  return (
    <>
      <div className="bg-[#171616]">
        <div className="wrapper relative ">
          <h1
            className={`md:text-[205px] text-4xl font-abcgravity font-bold text-white absolute ${titleClassName}`}
          >
            {title}
          </h1>
          <p
            className={`md:text-[205px] text-4xl font-empowerserif font-bold text-white absolute ${subTitleClassName}`}
          >
            {subTitle}
          </p>
          <span
            className={`md:text-[205px] text-4xl font-abcgravity font-bold text-white absolute  md:bottom-48 bottom-48  md:left-150 left-44 ${descriptionClassName}`}
          >
            {description}
          </span>
          <div className="lg:w-[1308px]  md:h-[371px] w-80  mx-auto text-center pt-52 ">
            <Image
              src={image}
              alt="fundingWoman"
              className="border-2 border-white mt-60"
              width={1312}
              height={1312}
            />
          </div>
          <div className="text-center mx-auto mt-10 pb-20">
            <button
              className={`py-4 px-8  text-2xl font-semibold ${buttonClassName}`}
            >
              {button}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funding;
