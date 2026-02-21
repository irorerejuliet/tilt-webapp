import Explaination from "@/components/Explaination";
import Funding from "@/components/Funding";
import TiltDifference from "@/components/TiltDifference";

const page = () => {
  return (
    <div>
      <Funding
        title="People"
        subTitle="are"
        description="incredible"
        button="We're building a new credit system to prove it."
        image="/images/people-are-incrediblw.webp"
        titleClassName="lg:top-90 bottom-88 lg:left-120 left-36 font-abcgravity"
        subTitleClassName="md:bottom-96 bottom-60 lg:left-130 left-40 abcgravity"
        descriptionClassName="lg:text-[205px] text-4xl font-abcgravity font-bold text-white absolute  md:bottom-48 bottom-48  lg:left-80 left-44 "
        buttonClassName="text-5xl"
      />
      <Explaination />
      <TiltDifference />
    </div>
  );
};

export default page;
