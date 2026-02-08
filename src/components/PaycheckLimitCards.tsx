import { BiCheck } from "react-icons/bi";

const PaycheckLimitCards = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Card 1 */}
        <div className="bg-[#e7e2dc] rounded-2xl p-6 shadow-sm">
          <div className="bg-[#7fb0be] rounded-2xl p-8 flex items-center justify-center mb-6 relative">
            <div className="bg-white rounded-2xl shadow-md px-6 py-5 w-full max-w-xs">
              <div className="text-center font-extrabold text-lg mb-4">
                Your paycheck account
              </div>

              <div className="text-xs text-gray-400 mb-2">Selected account</div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    🏦
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Primary account</div>
                    <div className="text-xs text-gray-500">Checking • 0000</div>
                  </div>
                </div>

                <button className="text-xs bg-gray-100 px-3 py-1 rounded-full font-semibold">
                  CHANGE
                </button>
              </div>
            </div>

            {/* money illustration */}
            <div className="absolute -top-4 text-3xl">💵</div>
          </div>
          <h2 className="text-2xl font-extrabold leading-tight mb-3">
            A limit increase when you link your bank
          </h2>
          <p className="text-sm text-gray-700">
            Didn&apos;t link during your application? Get an automatic increase when
            you do.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#e7e2dc] rounded-2xl p-6 shadow-sm">
          <div className="bg-[#7fc3a7] rounded-2xl p-8 flex items-center justify-center mb-6">
            <div className="flex gap-4">
              {[
                { label: "Dec" },
                { label: "Jan" },
                { label: "Feb" },
                { label: "Mar" },
              ].map((month) => (
                <div
                  key={month.label}
                  className="bg-white rounded-2xl w-20 h-24 flex flex-col items-center justify-center gap-2 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-[#7fc3a7] flex items-center justify-center">
                    <BiCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {month.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-2xl font-extrabold leading-tight mb-3">
            And when you hit 4 months
          </h2>
          <p className="text-sm text-gray-700">
            Be automatically considered for a higher limit as early as 4 months.
            Terms apply.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaycheckLimitCards
