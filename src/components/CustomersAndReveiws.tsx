import { DollarSign, Star, Users } from 'lucide-react'
import React from 'react'

const CustomersAndReveiws = () => {
  return (
 
    <section className="py-24 px-6 md:px-20 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-neutral-500 tracking-widest text-sm mb-16">
          IMPACT BY THE NUMBERS
        </p>

        <div className="grid md:grid-cols-3 gap-12">

          {/* Stat 1 */}
          <div className="space-y-4">
            <DollarSign className="mx-auto text-white" size={28} />
            <h3 className="text-2xl font-semibold">$1B+</h3>
            <p className="text-neutral-400">Extended</p>
          </div>

          {/* Stat 2 */}
          <div className="space-y-4">
            <Users className="mx-auto text-white" size={28} />
            <h3 className="text-2xl font-semibold">5M+</h3>
            <p className="text-neutral-400">Customers</p>
          </div>

          {/* Stat 3 */}
          <div className="space-y-4">
            <Star className="mx-auto text-white" size={28} />
            <h3 className="text-2xl font-semibold">450,000+</h3>
            <p className="text-neutral-400">5 star reviews</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CustomersAndReveiws
