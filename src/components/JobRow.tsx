type JobRowProps = {
  title: string;
  location: string;
};

const JobRow =({ title, location }: JobRowProps)=> {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center py-6 border-b border-neutral-200">
      {/* Job Title */}
      <p className="text-black font-medium text-lg">{title}</p>

      {/* Location */}
      <p className="text-neutral-700 md:text-center mt-2 md:mt-0">{location}</p>

      {/* Apply Button */}
      <div className="flex md:justify-end mt-4 md:mt-0">
        <button className="bg-lime-400 hover:bg-lime-300 transition px-5 py-2 rounded-full text-sm font-semibold">
          APPLY
        </button>
      </div>
    </div>
  );
}
 export default JobRow