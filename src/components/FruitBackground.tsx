import Image from 'next/image'
import React from 'react'

const FruitBackground = () => {
  return (
    <div>
      <div>
        <div className="md:w-[1308px] w-80  mx-auto text-center py-12">
                    <Image
                      src="/images/herobgLineCredit.webp"
                      alt="fundingWoman"
                      className="border-2 border-white  rounded-3xl"
                      width={1312}
                      height={1312}
                    />
                  </div>
      </div>
    </div>
  )
}

export default FruitBackground
