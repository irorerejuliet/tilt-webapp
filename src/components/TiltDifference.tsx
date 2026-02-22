import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import CustomersAndReveiws from './CustomersAndReveiws';


const TiltDifference = () => {
 const readiness = [
   {
     title: "Seeing real-time readiness",
     description:
       "Traditional credit scores often miss the full picture of today's working lives. Using 250+ non-traditional signals of financial health, we can qualify people for the cash and credit they need.",
     number: 1,
   },
   {
     title: "Expanding access to fair credit",
     description: "With our underwriting technology, we can pair people with an offer they can reliably pay back and find success with. That's how even more people find a product match with Tilt.",
     number: 2,
   },
 ];
  return (
    <section className="py-24 px-6 md:px-20 relative wrapper">
      <div className=" mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
          <Image
            src="/images/readiness.webp"
            alt="tilt"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        {readiness.map((item, index) => (
          <div className="space-y-6" key={index}>
            {/* Slide indicator */}
            <button className='rounded-full bg-primary p-1 w-10 h-10 text-black'>{item.number}</button>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
             {item.title}
            </h2>
            <p className="text-neutral-400 leading-relaxed max-w-lg">
             {item.description}
            </p>

            {/* Navigation buttons */}
            <div className="flex gap-4 pt-4">
              <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
                <ArrowLeft size={20} />
              </button>

              <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <CustomersAndReveiws />
    </section>
  );
}

export default TiltDifference
