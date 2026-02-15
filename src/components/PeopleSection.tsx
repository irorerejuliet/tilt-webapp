import ValueCard from "./ValueCard";

const trustItems = [
  {
    icon: "/images/virtualFirst.svg",
    title: "Virtual-first teamwork",
    description:
      "Great work happens anywhere. We're collaborating across 14 countries, 12 time zones.",
    bgColor: "bg-[#67AABE]",
  },
  {
    icon: "/images/low-meeting.svg",
    title: "Low meeting culture",
    description:
      "Give us the data-driven recommendation on Slack over the meeting and multi slide deck.",
    bgColor: "bg-[#E27F63]",
  },
  {
    icon: "/images/recongnizing-impact.svg",
    title: "Recognizing impact",
    description:
      "Growth opportunities follow your contributions, not rigid promotion timelines.",
    bgColor: "bg-[#E59F4D]",
  },
  {
    icon: "/images/all-background.svg",
    title: "All backgrounds welcome",
    description:
      "No prior experience in consumer finance? We value diverse, unique backgrounds.",
    bgColor: "bg-[#5CB898]",
  },
  {
    icon: "/images/feedback.svg",
    title: "Feedback in all directions",
    description:
      "Up, down, sideways — we help each other grow with honest, constructive conversations.",
    bgColor: "bg-[#C195D3]",
  },
];

const investItems = [
  {
    icon: "/images/competitive.svg",
    title: "Competitive pay",
    description:
      "We're good at seeing potential and it's reflected in our above-market compensation.",
    bgColor: "bg-[#E59F4D]",
  },
  {
    icon: "/images/heart.svg",
    title: "Full health coverage",
    description:
      "Find flexible plans at every premium level, and substantial employer contributions.",
    bgColor: "bg-[#67AABE]",
  },
  {
    icon: "/images/paid-global.svg",
    title: "Paid global onsites",
    description:
      "Magic happens IRL: we gather twice a year to reconnect over shared experiences.",
    bgColor: "bg-[#AACD65]",
  },
  {
    icon: "/images/home-office.svg",
    title: "Home office subsidy",
    description: "You're funded to get the gear you need to do your best work.",
    bgColor: "bg-[#B39718]",
  },
  {
    icon: "/images/tv.svg",
    title: "Flexible time off",
    description:
      "Take the time you need to stay at the top of your game — we mean it.",
    bgColor: "bg-[#8593C1]",
  },
];

 const PeopleSection = () => {
  return (
    <section className="bg-[#0f0f0f] py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* IN PEOPLE WE TRUST */}
        <div>
          <p className="text-[#64635C] uppercase font-gtamerica text-base mb-10">
            In people we trust
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-20">
            {trustItems.map((item, index) => (
              <ValueCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* IN PEOPLE WE INVEST */}
        <div>
          <p className="text-[#64635C] uppercase font-gtamerica text-sm mb-10">
            In people we invest
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-20">
            {investItems.map((item, index) => (
              <ValueCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default PeopleSection