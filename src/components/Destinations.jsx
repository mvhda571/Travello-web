import { FaLocationArrow } from "react-icons/fa";
import italy from "../assets/italy.svg";
import london from "../assets/london.svg";
import europe from "../assets/europe.svg";

const destinations = [
  {
    city: "Rome, Italy",
    price: "$5.42k",
    days: "10 Days Trip",
    image: italy,
  },
  {
    city: "London, UK",
    price: "$4.2k",
    days: "12 Days Trip",
    image: london,
  },
  {
    city: "Full Europe",
    price: "$15k",
    days: "28 Days Trip",
    image: europe,
  },
];

function Destinations() {
  return (
    <section className="relative mx-auto max-w-290 px-6 pb-28 pt-10">
      <div className="text-center">
        <p className="text-[18px] font-semibold text-[#5E6282]">Top Selling</p>
        <h2 className="mt-2 font-serif text-[50px] font-bold text-[#14183E]">
          Top Destinations
        </h2>
      </div>

      <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="absolute -right-12 bottom-12 hidden h-62.5 w-30 rounded-full border border-[#84829A] lg:block" />

        {destinations.map((item) => (
          <article
            key={item.city}
            className="group relative z-10 overflow-hidden rounded-3xl bg-white shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(0,0,0,0.18)]"
          >
<img
  src={item.image}
  alt={item.city}
  style={{
    width: "100%",
    height: "330px",
    objectFit: "cover",
    objectPosition: "top",
    display: "block",
  }}
  className="transition-transform duration-300 group-hover:scale-110"
/>

            <div className="px-6 py-6 text-[#5E6282]">
              <div className="flex items-center justify-between text-[18px] font-medium">
                <h3>{item.city}</h3>
                <span>{item.price}</span>
              </div>

              <div className="mt-5 flex items-center gap-4 text-[16px] font-medium">
                <FaLocationArrow className="text-black" size={18} />
                <span>{item.days}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Destinations;