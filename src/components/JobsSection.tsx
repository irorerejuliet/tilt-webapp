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
];

const  JobsSection = () => {
  return (
    <section className="bg-[#f3f1ed] py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {jobsData.map((group) => (
          <div key={group.category} className="mb-16">
            {/* Category Title */}
            <h2 className="text-sm tracking-[0.2em] text-neutral-500 mb-6">
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
      </div>
    </section>
  );
}
export default JobsSection