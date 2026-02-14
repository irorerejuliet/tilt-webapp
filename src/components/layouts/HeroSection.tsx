import Image from "next/image";
import Link from "next/link";
import MobileHerosection from "./MobileHeroSection";


const Herosection = () => {
  return (
    <div className="bg-[#171616]">
      <div className="w-360 mx-auto pt-4 md:pt-12  hidden lg:block">
        <div className="flex items-center justify-between gap-10">
          {/* LEFT IMAGE */}
          <div className="w-44 h-60  border-2 border-white relative">
            <Image
              src="/images/image-1.jpeg"
              alt="picture"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
            <div className="flex items-center p-1 rounded-full bg-white text-black w-24 absolute bottom-2 left-10">
              <Image
                src="/images/pot.svg"
                alt=""
                className="bg-primary p-2 rounded-full"
                width={30}
                height={30}
              />
              <button className="text-base font-medium">+$200</button>
            </div>
          </div>

          {/* TEXT */}
          <h1 className="text-white max-w-3xl text-8xl font-bold text-center font-abcgravity ">
            Cash and credit powered by your potential™
          </h1>
          {/* RIGHT IMAGE */}
          <div className="w-40 h-52  border-2 border-white">
            <Image
              src="/images/image-2.webp"
              alt=""
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
            <div className="flex items-center p-1 rounded-full bg-white text-black w-24 absolute bottom-120 left-386">
              <Image
                src="/images/network.svg"
                alt=""
                className="bg-primary p-2 rounded-full"
                width={30}
                height={30}
              />
              <button className="text-base font-medium">+$200</button>
            </div>
          </div>
        </div>

        <div className=" hidden md:block">
          <div className="flex justify-between">
            <div className="w-60 h-72  border-2 border-white ml-40 mt-16">
              <Image
                src="/images/image-3.webp"
                alt="picture"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
              <p className="text-white text-xs font-gtamerica pt-3 leading-none">
                Credit history<span className="italic">to buy a home</span>
              </p>
              <div className="flex items-center p-1 rounded-full bg-white text-black w-24 absolute bottom-20 left-115">
                <Image
                  src="/images/tv.svg"
                  alt="tv"
                  className="bg-primary p-2 rounded-full"
                  width={30}
                  height={30}
                />
                <button className="text-base font-medium">+$200</button>
              </div>
            </div>
            <div className="py-16 mx-auto text-center">
              <button className="py-4 px-8  rounded-full text-black bg-primary text-lg font-semibold">
                GET STARTED
              </button>
              <div className="flex items-center gap-1 pt-4">
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
            <div className="w-40 h-52  border-2 border-white mr-32 mt-12">
              <Image
                src="/images/image-4.webp"
                alt="picture"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
              <div className="flex items-center p-1 rounded-full bg-white text-black w-24 absolute bottom-44 left-355">
                <Image
                  src="/images/pot.svg"
                  alt=""
                  className="bg-primary p-2 rounded-full"
                  width={30}
                  height={30}
                />
                <button className="text-base font-medium">+$200</button>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-10 ">
            <div className="w-40 h-50  border-2 border-white ml-24 mt-28">
              <Image
                src="/images/image-5.webp"
                alt="picture"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
              <div className="flex items-center p-1 rounded-full bg-white text-black w-24 absolute top-276 left-90">
                <Image
                  src="/images/tv.svg"
                  alt="tv"
                  className="bg-primary p-2 rounded-full"
                  width={30}
                  height={30}
                />
                <button className="text-base font-medium">+$200</button>
              </div>
            </div>
            <div className="w-90 h-115  border-2 border-white ml-16">
              <Image
                src="/images/CashForGas.webp"
                alt=""
                className="w-full h-full border-white border-2"
                width={500}
                height={500}
              />
              <p className="text-white text-xs font-gtamerica pt-3 leading-none">
                Cash<span className="italic">for cash and groceries</span>{" "}
              </p>
              <div className="flex items-center p-1 rounded-full bg-white text-black w-24 absolute -bottom-88 left-240">
                <Image
                  src="/images/pot.svg"
                  alt=""
                  className="bg-primary p-2 rounded-full"
                  width={30}
                  height={30}
                />
                <button className="text-base font-medium">+$200</button>
              </div>
            </div>
            <div className="w-56 h-72 mb-72  border-2 border-white mt-20  ">
              <Image
                src="/images/image-6.webp"
                alt="picture"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
              <p className="text-white  text-xs font-gtamerica pt-3 leading-none">
                High limit<span className="italic">to help the family</span>
              </p>
              <div className="flex items-center p-1 rounded-full bg-white text-black w-24 absolute -bottom-72 left-380">
                <Image
                  src="/images/tv.svg"
                  alt="tv"
                  className="bg-primary p-2 rounded-full"
                  width={30}
                  height={30}
                />
                <button className="text-base font-medium">+$200</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <MobileHerosection />
    </div>
  );
};

export default Herosection;
