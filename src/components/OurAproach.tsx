import Image from "next/image";

const OurAproach = () => {
  const linkAccount = [
    {
      image: "/images/ink-bank-account.webp",
      title: "Yes",
      subTilte: "when you apply",
      description:
        "We consider your real-time money habits with bank linking, even without a credit score.",
    },
    {
      image: "/images/youve-qualified..webp",
      title: "Yes",
      subTilte: "when you qualify",
      description:
        "Receive the best offer that fits your current income and expenses.",
    },
    {
      image: "/images/earned-higher.webp",
      title: "Yes",
      subTilte: "when you repay",
      description:
        "Boost your odds for higher offers or qualify for new products when you pay on time.",
    },
  ];
  return (
    <div className="bg-black text-white py-24">
      <div className="wrapper">
        <div className="mx-auto text-center">
          <p className="text-base font-medium text-[#C8C8b6] font-gtamerica">
            Our Approach
          </p>
          <p className="md:text-8xl text-5xl font-bold font-abcgravity md:w-200 w-80  text-center mx-auto">
            Always looking for ways to say{" "}
            <span className="font-empowerserif">yes</span>
          </p>
          <p className="text-lg font-medium font-gtamerica md:w-170 w-97 text-center mx-auto">
            We consider your finances today, not just your history, to see if
            youre ready for cash or credit.
          </p>
        </div>
        <div className="md:flex flex-row items-center gap-6 mt-20 md:mx-0 mx-4 md:space-y-0 space-y-10">
          {linkAccount.map((item, index) => (
            <div key={index} className="">
              <Image
                src={item.image}
                alt={item.subTilte}
                width={500}
                height={500}
                className="w-full h-full object-center"
              />
              <div className="bg-[#262525] py-12 px-6 rounded-b-3xl space-y-5">
                <p className="font-empowerserif font-bold text-4xl">
                  {item.title}{" "}
                  <span className="font-abcgravity">{item.subTilte}</span>
                </p>
                <p className="text-sm font-gtamerica leading-none md:w-120 w-72">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAproach;
