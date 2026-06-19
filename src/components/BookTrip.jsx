const DestinationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="white"/>
  </svg>
);

const PaymentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H4V10h16v10zm-6-3h-4v-2h4v2z" fill="white"/>
  </svg>
);

const AirportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.91 9H15.5L12 4.5 8.5 9H4.09L4 11h2l-2 8v2h2v2h3v-2h8v2h3v-2h2v-8l-2-2h2v-2zM9 15l2-5 2 5H9z" fill="white"/>
  </svg>
);

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" fill="currentColor"/>
  </svg>
);

const TargetIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11 10.07 7.5 12 7.5s3.5 1.57 3.5 3.5z" fill="currentColor"/>
  </svg>
);

const steps = [
  {
    icon: DestinationIcon,
    title: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: PaymentIcon,
    title: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: AirportIcon,
    title: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

function BookTrip() {
  return (
    <section className="mx-auto max-w-290 px-6 py-20">
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <p className="text-[14px] font-semibold text-[#5E6282]">
            Easy and Fast
          </p>
          <h2 className="mt-4 font-serif text-[48px] font-bold text-[#14183E]">
            <strong>Book Your Next Trip</strong>
          </h2>
          <h2 className="font-serif text-[48px] font-bold text-[#14183E]">
            <strong>In 3 Easy Steps</strong>
          </h2>

          <div className="mt-16 space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-5">
                <div
                  className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg ${
                    index === 0
                      ? "bg-[#FCC927]"
                      : index === 1
                        ? "bg-[#FF7152]"
                        : "bg-[#006B63]"
                  }`}
                >
                  <step.icon />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#1E1D4C]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[14px] font-medium text-[#5E6282]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg">
            <img
              src="https://www.adventuredragon.com/wp-content/uploads/2022/05/Dress-for-Santorini-Greece-Outfits.jpg"
              alt="Trip to Greece"
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-[18px] font-bold text-[#1E1D4C]">
                Trip To Greece
              </h3>

              <div className="mt-4 flex items-center justify-between text-[12px]">
                <span className="text-[#5E6282]">14-29 June</span>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 overflow-hidden rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop"
                      alt="Robbin k"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="font-semibold text-[#1E1D4C]">by Robbin k</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <PinIcon />
                <ChartIcon />
                <TargetIcon />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto text-[#FF6B6B]">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
                </svg>
              </div>

              <div className="mt-4 border-t border-[#E5E5E5] pt-4">
                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-[#5E6282]">Ongoing</span>
                  <span className="font-semibold text-[#006B63]">Trip to rome</span>
                </div>

                <div className="mt-3 flex items-center gap-2 text-[11px]">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-300">
                    <div className="h-full w-2/5 bg-[#3B82F6]" />
                  </div>
                  <span className="font-semibold text-[#1E1D4C]">40%</span>
                </div>

                <p className="mt-3 text-[12px] text-[#5E6282]">
                  👥 24 people going
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookTrip;
