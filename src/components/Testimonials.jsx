import { useState } from "react";
import { MdFormatQuote } from "react-icons/md";

const testimonials = [
  {
    id: 1,
    name: "Mike taylor",
    location: "Lahore, Pakistan",
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop",
  },
  {
    id: 2,
    name: "Chris Thomas",
    location: "CEO of Red Button",
    quote:
      "Amazing experience with their service. The team was professional and the results exceeded my expectations.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "New York, USA",
    quote:
      "Fantastic trip planning and execution. Would definitely recommend to anyone looking for a hassle-free vacation.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mx-auto max-w-290 px-6 py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <p className="text-[14px] font-semibold text-[#5E6282]">
            TESTIMONIALS
          </p>
          <h2 className="mt-4 font-serif text-[48px] font-bold text-[#14183E]">
            <strong>What People Say</strong>
          </h2>
          <h2 className="font-serif text-[48px] font-bold text-[#14183E]">
            <strong>About Us.</strong>
          </h2>

          {/* Navigation Dots */}
          <div className="mt-12 flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  index === activeIndex ? "bg-[#14183E] w-8" : "bg-[#BDB8C1]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Testimonial Card */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-300 ${
                  index === activeIndex ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                {/* Quote Icon */}
                <MdFormatQuote className="mb-4 text-[#FF7152]" size={32} />

                {/* Quote */}
                <p className="text-[14px] leading-7 text-[#5E6282]">
                  {testimonial.quote}
                </p>

                {/* Profile */}
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[16px] font-bold text-[#1E1D4C]">
                      {testimonial.name}
                    </h4>
                    <p className="text-[12px] text-[#5E6282]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
