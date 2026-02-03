
import Herosection from "@/components/layouts/HeroSection";
import OurAproach from "@/components/OurAproach";
import OurCustomers from "@/components/OurCustomers";
import OurGoal from "@/components/OurGoal";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <Herosection />
      <div className="  bg-[#F7F5EF]">
        <div className="wrapper">
          <div className=" md:flex flex-row justify-between items-center pt-10 md:px-0 px-4">
            <div className="space-y-2">
              <p className="text-[#64635c] text-xl font-medium">Our Products</p>
              <h2 className="md:text-5xl text-3xl font-bold md:w-150 w-96">
                Cash and credit designed for your success
              </h2>
              <p className="text-lg font-medium">
                Easy to apply. Quick to qualify.
              </p>
            </div>
            <div className="flex items-center gap-6 shadow py-8 px-12 rounded-full bg-white text-base font-medium">
              <Link
                href={"/"}
                className="hover:bg-[#EBEAE1] hover:rounded-full"
              >
                CASH ADVANCE
              </Link>
              <Link href={"/"}>LINE OF CREDIT</Link>
              <Link href={"/"}>CREDIT CARD</Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl px-8 flex justify-between mb-40">
            <div>
              <h3 className="text-4xl font-bold font-abcgravity pt-6">
                Line of Credit
              </h3>
              <p className="text-base font-medium py-4">
                Up to $1,000 available when you need it
              </p>
              <button className="py-4 px-8  rounded-full text-black bg-[#E4E24E] text-lg font-semibold">
                GET STARTED
              </button>
              <div className="">
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-full invert bg-red-700">
                    <Image
                      src="/images/arrow-top.svg"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </button>
                  <div>
                    <p className="text-xl font-normal">$10–$400 instantly‡</p>
                    <p className="text-xs font-medium">
                      Instant delivery is optional. Fees may apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <Image
                src="/images/cash_background.webp"
                alt=""
                width={400}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <OurAproach/>
      <OurGoal/>
    </>
  );
}
