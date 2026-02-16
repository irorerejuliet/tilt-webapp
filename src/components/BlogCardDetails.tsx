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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
        {posts.map((post, index) => (
          <BlogCard key={index} title={post.title} image={post.image} />
        ))}
      </div>
    </section>
  );
}

export default BlogCardDetails
