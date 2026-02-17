import Explaination from "@/components/Explaination";
import Funding from "@/components/Funding";

const page = () => {
  return (
    <div>
      <Explaination />
      <Funding
        title="People"
        subTitle="are"
        description="incredible"
        button="Get started"
        image="/images/people-are-incrediblw.webp"
      />
    </div>
  );
};

export default page;
