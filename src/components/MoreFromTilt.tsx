import React from 'react'

const MoreFromTilt = () => {
  return (
    <section className="wrappper px-6 py-[120px] text-center bg-white text-black">
      {/* Eyebrow */}
      <p className="text-[12px] tracking-[0.15em] text-tiltGray mb-6 ">
        MORE FROM TILT
      </p>

      {/* Headline */}
      <h1 className="text-[64px] font-extrabold leading-[1.1] mb-20">
        Need another <span className="italic font-normal">path</span>
        to cash or credit?
      </h1>

      {/* Cards */}
      <div className="flex gap-8 justify-center">
        {/* Cash Advance */}
        <div className="w-[572px] rounded-[28px] bg-[#F7F5EF] px-16 py-20  text-blackp-12 text-left">
          <h2 className="text-6xl font-extrabold leading-[1.1] mb-6 font-abcgravity  w-[200px]">
            Cash Advance
          </h2>

          <p className="text-[16px] leading-[1.6] mb-10 font-gtamerica w-[300px]">
            Up to $400 with no interest or late fees.
          </p>

          <button className="bg-tiltYellow rounded-full px-7 py-3 text-[12px] font-bold tracking-[0.05em] font-gtamerica bg-primary px-7 py-5">
            LEARN MORE
          </button>
        </div>

        {/* Credit Cards */}
        <div className="w-[572px] rounded-[28px] bg-black px-16 py-20 text-left text-white font-abcgravity">
          <h2 className="text-6xl font-extrabold leading-[1.1] mb-6 w-[200px]">
            Credit Cards
          </h2>

          <p className="text-[16px] leading-[1.6] mb-10 font-gtamerica">
            Spending power and cash back for every type of builder.
          </p>

          <button className="bg-primary  rounded-full px-7 py-5 text-[12px] font-bold tracking-[0.05em] text-black font-gtamerica">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default MoreFromTilt
