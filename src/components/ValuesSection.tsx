import React from 'react'

const ValuesSection = () => {
    const values = [
      {
        title: "Own it",
        description: "Leadership happens at every level.",
      },
      {
        title: "Impact > activity",
        description:
          "Busyness isn't a badge of honor. We measure what tilts the scales.",
      },
      {
        title: "No risk, no real reward",
        description:
          "When others fear bold moves, we see value in taking the swing.",
      },
    ];

  return (
    <section className="bg-black text-center text-white py-20 px-4">
      <p className="text-[#64635C] text-base font-gtamerica uppercase tracking-widest mb-8">
        The values we live by
      </p>

      <div className="space-y-16 max-w-2xl mx-auto">
        {values.map((value, index) => (
          <div key={index} className="space-y-4">
            <div className="flex justify-center mb-2">
              <div className="bg-primary text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {index + 1}
              </div>
            </div>
            <h2 className="text-6xl font-abcgravity">{value.title}</h2>
            <p className="text-[#C8C8B6] font-gtamerica text-base">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-12 bg-primary  text-black px-8 py-3 rounded-full font-semibold  ">
        SEE MORE ▼
      </button>
    </section>
  );
}

export default ValuesSection
