import JobRow from "./JobRow";

const jobsData = [
  {
    category: "COMPLIANCE",
    jobs: [
      {
        title: "Company Secretary, NIRA",
        location: "Hybrid - Bengaluru, India",
      },
      {
        title: "Compliance Analyst, Testing",
        location: "Remote - US",
      },
    ],
  },
  {
    category: "CREDIT",
    jobs: [
      {
        title: "Credit Analyst, NIRA",
        location: "Hybrid - Bengaluru, India",
      },
      {
        title: "Head of Credit, Cashalo",
        location: "Remote - APAC",
      },
      {
        title: "Lead Data Scientist, Methodologies",
        location: "Remote - EU",
      },
      {
        title: "Senior Credit Analyst, MX",
        location: "Remote - Global",
      },
    ],
  },
  {
    category: "MARKETING",
    jobs: [
      {
        title: "Direct Mail Lead",
        location: "Remote - US",
      },
      {
        title: "Head of AEO/SEO",
        location: "Remote - US",
      },
      {
        title: "Senior Marketing Analytics Manager, AI & Data",
        location: "Remote - US",
      },
    ],
  },
  {
    category: "Engineering",
    jobs: [
      {
        title: "Senior Backend Engineer, MX",
        location: "Remote - Mexico",
      },
      {
        title: "Senior Backend Engineer, NIRA",
        location: "Hybrid - Bengaluru, India",
      },
      {
        title: "Senior Backend Engineer, NIRA",
        location: "Remote - India",
      },
      {
        title: "Senior Software Engineer, Backend",
        location: "Remote - US",
      },
    ],
  },
  {
    category: "Finance",
    jobs: [
      {
        title: "Senior Business Intelligence Analyst, NIRA",
        location: "Hybrid - Bengaluru, India",
      },
    ],
  },
  {
    category: "Customer Support & Operations",
    jobs: [
      {
        title: "Senior Risk Analyst",
        location: "Remote - US",
      },
    ],
  },
];

const  JobsSection = () => {
  return (
    <section className="bg-white py-24 px-6 lg:px-20">
      <div className="wrapper bg-[#F7F5EF] lg:p-20 p-10  rounded-4xl">
        {/* Main heading */}
        <div className=" lg:w-100 w-60  lg:text-center mx-auto">
          <p className="lg:text-8xl text-5xl font-bold font-abcgravity mx-auto text-center  text-black">
            Ambition <span className="font-empowerserif">works</span>Here
          </p>
          <p className="my-6 text-sm lg:text-lg font-gtamerica text-black mx-auto  text-center ">
            We&apos;re hiring changemakers to transform credit access.
          </p>
        </div>
        {jobsData.map((group) => (
          <div key={group.category} className="mb-16">
            {/* Category Title */}
            <h2 className="text-[#64635C] font-gtamerica text-base mb-6">
              {group.category}
            </h2>

            {/* Job Rows */}
            <div>
              {group.jobs.map((job, index) => (
                <JobRow key={index} title={job.title} location={job.location} />
              ))}
            </div>
          </div>
        ))}
        <div className="text-center mx-auto">
          <button className="bg-primary rounded-full text-black font-semibold px-6 py-3  ">
            SEE MORE ROLES
          </button>
        </div>
        x
      </div>
    </section>
  );
}
export default JobsSection