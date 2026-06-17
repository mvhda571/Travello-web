import calculatedWeather from "../assets/calculatedweather.svg";
import bestFlights from "../assets/bestflights.svg";
import localEvents from "../assets/localevents.svg";
import customization from "../assets/customization.svg";

const services = [
  {
    title: "Calculated Weather",
    text: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: calculatedWeather,
  },
  {
    title: "Best Flights",
    text: "Engrossed listening. Park gate sell they west hard for the.",
    icon: bestFlights,
    active: true,
  },
  {
    title: "Local Events",
    text: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    icon: localEvents,
  },
  {
    title: "Customization",
    text: "We deliver outsourced aviation services for military customers",
    icon: customization,
  },
];

function Services() {
  return (
    <section className="relative mx-auto max-w-290 px-6 py-24">
      <div className="text-center">
        <p className="text-[18px] font-semibold uppercase text-[#5E6282]">
          Category
        </p>
        <h2 className="mt-2 font-serif text-[48px] font-bold text-[#14183E]">
          We Offer Best Services
        </h2>
      </div>

      <div className="absolute right-8 top-20 hidden grid-cols-5 gap-5 text-2xl font-light text-[#E5E5E5] lg:grid">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className={
              index === 0
                ? "text-[#FF7152]"
                : index === 12
                ? "text-[#6246E5]"
                : ""
            }
          >
            +
          </span>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div key={service.title} className="relative group">
            {service.active && (
              <span className="absolute -bottom-8 -left-8 h-25 w-25 rounded-br-[10px] rounded-tl-[30px] bg-[#DF6951] transition-transform duration-300 ease-out group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:scale-105" />
            )}

            <article
              className={`relative z-10 flex min-h-65 flex-col items-center px-8 py-10 text-center cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2.5 hover:scale-[1.04] hover:shadow-[0_30px_60px_rgba(0,0,0,0.13)] ${
                service.active
                  ? "rounded-[36px] bg-white shadow-[0_45px_70px_rgba(0,0,0,0.08)]"
                  : "rounded-[36px] hover:bg-white hover:border hover:border-[#E8E4FF]"
              }`}
            >
              <img
                src={service.icon}
                alt=""
                className="mb-8 h-19.5 w-auto transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6"
              />
              <h3 className="text-[16px] font-semibold text-[#1E1D4C]">
                {service.title}
              </h3>
              <p className="mt-4 text-[16px] font-medium leading-7 text-[#5E6282]">
                {service.text}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;