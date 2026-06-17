import { IoChevronDown } from "react-icons/io5";
import logo from "../assets/logo.svg";
import { useEffect, useRef } from "react";

function Navbar() {
  const links = ["Desitnations", "Hotels", "Flights", "Bookings"];
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const actionsRef = useRef([]);

  useEffect(() => {
    if (!logoRef.current) return;

    logoRef.current.style.opacity = "0";
    logoRef.current.style.transform = "translateX(-24px)";
    setTimeout(() => {
      logoRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      logoRef.current.style.opacity = "1";
      logoRef.current.style.transform = "translateX(0)";
    }, 100);

    linksRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(-16px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 + i * 100);
    });

    actionsRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateX(24px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      }, 500 + i * 100);
    });
  }, []);

  return (
    <header className="absolute left-0 top-0 z-30 w-full">
      <nav className="mx-auto flex max-w-360px items-center justify-between px-6 py-7 xl:px-16">
        <img ref={logoRef} src={logo} alt="Travello" className="h-8 w-auto" />

        <div className="hidden items-center gap-10 text-[14px] font-medium text-[#212832] lg:flex xl:gap-14">
          {links.map((link, i) => (
            <a
              key={link}
              href="#"
              ref={(el) => (linksRef.current[i] = el)}
              className="relative transition-colors duration-200 hover:text-[#DF6951] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#DF6951] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-6 text-[14px] font-medium text-[#212832] lg:flex xl:gap-9">
          <button
            ref={(el) => (actionsRef.current[0] = el)}
            className="transition-colors duration-200 hover:text-[#DF6951]"
          >
            Login
          </button>
          <button
            ref={(el) => (actionsRef.current[1] = el)}
            className="rounded-md border border-[#212832] px-5 py-2.5 transition-all duration-200 hover:border-[#DF6951] hover:text-[#DF6951]"
          >
            Sign up
          </button>
          <button
            ref={(el) => (actionsRef.current[2] = el)}
            className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#DF6951]"
          >
            EN <IoChevronDown size={14} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;