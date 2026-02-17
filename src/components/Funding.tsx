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
};

const Funding = ({title, subTitle, description, button, image  }: fundingProps) => {
 
  return (
    <>
      <div className="bg-[#171616]">
        <div className="wrapper relative ">
          <h1 className="md:text-[205px] text-4xl font-abcgravity font-bold text-white absolute md:top-90 bottom-88 md:left-96 left-36">
            {title}
          </h1>
          <p className="md:text-[205px] text-4xl font-empowerserif font-bold text-white absolute md:bottom-96 bottom-60 md:left-110 left-40">
            {subTitle}
          </p>
          <span className="md:text-[205px] text-4xl font-abcgravity font-bold text-white absolute  md:bottom-48 bottom-48  md:left-150 left-44">
           {description}
          </span>
          <div className="md:w-[1308px] w-80  mx-auto text-center pt-52">
            <Image
              src={image}
              alt="fundingWoman"
              className="border-2 border-white mt-60"
              width={1312}
              height={1312}
            />
          </div>
          <div className="text-center mx-auto mt-10 pb-20">
            <button className="py-4 px-8  rounded-full text-black bg-primary text-lg font-semibold ">
              {button}
            </button>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Funding;
