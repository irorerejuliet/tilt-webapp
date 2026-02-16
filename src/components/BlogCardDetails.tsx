import BlogCard from "./BlogCard";


const posts = [
  {
    title: "AI DevOps: Building Intelligent Incident Response Systems",
    image: "/images/devops-ai.jpeg",
  },
  {
    title: "Embracing AI at Empower: Beyond Code Generation",
    image: "/images/embracing-ai.webp",
  },
  {
    title:
      "Building Bonds Beyond the Screen: How Onsites Bring Our Remote Team...",
    image: "/images/building-bonds.webp",
  },
  {
    title:
      "Managing Disagreements as a Software Developer: Lessons from Thin...",
    image: "/images/managing-disagreement.jpeg",
  },
];

const BlogCardDetails = () => {
  return (
    <section className="bg-[#0f0f0f] py-12 sm:py-20 px-4 sm:px-6">
      <div className="wrapper">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div>
            <p className="text-[#64635C] uppercase font-gtamerica text-base mb-10">
              TILT ENGINEERING BLOG
            </p>
            <p className="lg:text-[64px] text-3xl  font-abcgravity lg:w-[900px] leading-14 pb-12">
              Tilting the stack: Rewriting credit&apos;s backend
            </p>
          </div>
          <button className="bg-primary rounded-full text-black font-semibold px-6 py-3 ">
            SEE MORE
          </button>
        </div>

        <div className=" mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} title={post.title} image={post.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogCardDetails
