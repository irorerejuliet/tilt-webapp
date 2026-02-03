import Image from "next/image";



const CreditBuildingBlock = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <h1 className="text-white font-extrabold leading-tight">
            <span className="block text-6xl">Your credit</span>
            <span className="block text-6xl">
              <em className="font-serif italic font-medium">building</em> blocks
            </span>
          </h1>

          <button className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition">
            GET STARTED
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-2xl p-8 text-center shadow-lg"
            >
              <h3 className="text-white text-2xl font-bold mb-6">
                {card.title}
              </h3>

              <Image
                src={card.image}
                alt={card.alt}
                width={200}
                height={200}
                className="mx-auto mb-6 w-32 h-32 object-contain"
              />

              <p className="text-gray-300 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CreditBuildingBlock
