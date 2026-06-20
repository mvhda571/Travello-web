import { FaPlay } from "react-icons/fa";
import hero from "../assets/hero.svg";
import heroBg from "../assets/herobg.svg";
import { useEffect, useRef } from "react";

function Hero() {
  const bgRef = useRef(null);
  const subtitleRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const items = [
      { ref: bgRef, delay: 0, from: "translateX(60px)" },
      { ref: imageRef, delay: 200, from: "translateX(40px)" },
      { ref: subtitleRef, delay: 300, from: "translateY(24px)" },
      { ref: headingRef, delay: 420, from: "translateY(28px)" },
      { ref: descRef, delay: 540, from: "translateY(20px)" },
      { ref: btnsRef, delay: 660, from: "translateY(20px)" },
    ];

    items.forEach(({ ref, delay, from }) => {
      if (!ref.current) return;
      ref.current.style.opacity = "0";
      ref.current.style.transform = from;
      setTimeout(() => {
        ref.current.style.transition =
          "opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)";
        ref.current.style.opacity = "1";
        ref.current.style.transform = "translate(0, 0)";
      }, delay);
    });
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ minHeight: "100vh" }}
    >
      <img
        ref={bgRef}
        src={heroBg}
        alt=""
        className="absolute right-0 top-0 z-0 hidden lg:block"
        style={{ width: "50%", maxWidth: "720px" }}
      />

      <div
        className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2"
        style={{
          maxWidth: "1440px",
          minHeight: "100vh",
          paddingLeft: "clamp(1.5rem, 5vw, 6rem)",
          paddingRight: "clamp(1.5rem, 5vw, 6rem)",
          paddingTop: "80px" /* navbar height */,
          alignItems: "center",
        }}
      >
        <div style={{ paddingBottom: "2rem" }}>
          <p
            ref={subtitleRef}
            className="font-bold uppercase tracking-wide"
            style={{
              color: "#DF6951",
              fontSize: "clamp(13px, 1.2vw, 18px)",
              marginBottom: "1.25rem",
            }}
          >
            Best destinations around the world
          </p>

          <h1
            ref={headingRef}
            className="font-serif font-bold leading-[1.05] tracking-tight"
            style={{
              color: "#181E4B",
              fontSize: "clamp(40px, 5.5vw, 80px)",
              maxWidth: "560px",
            }}
          >
            Travel, enjoy and live a new and full life
          </h1>

          <p
            ref={descRef}
            className="font-medium leading-8"
            style={{
              color: "#5E6282",
              fontSize: "clamp(14px, 1.1vw, 16px)",
              maxWidth: "430px",
              marginTop: "1.75rem",
            }}
          >
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div
            ref={btnsRef}
            className="flex flex-wrap items-center"
            style={{ gap: "2rem", marginTop: "2rem" }}
          >
            <button
              className="font-medium text-white"
              style={{
                background: "#F1A501",
                borderRadius: "10px",
                padding: "16px 32px",
                fontSize: "15px",
                boxShadow: "0 20px 35px rgba(241,165,1,0.25)",
                transition:
                  "transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#d49200";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 28px 42px rgba(241,165,1,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#F1A501";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 20px 35px rgba(241,165,1,0.25)";
              }}
            >
              Find out more
            </button>

            <button
              className="flex items-center font-medium"
              style={{
                gap: "1.1rem",
                color: "#686D77",
                fontSize: "17px",
                background: "none",
                border: "none",
              }}
            >
              <span
                className="grid place-items-center rounded-full text-white"
                style={{
                  width: "52px",
                  height: "52px",
                  background: "#DF6951",
                  boxShadow: "0 15px 30px rgba(223,105,81,0.35)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.12) rotate(12deg)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 36px rgba(223,105,81,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px rgba(223,105,81,0.35)";
                }}
              >
                <FaPlay size={13} style={{ marginLeft: "3px" }} />
              </span>
              Play Demo
            </button>
          </div>
        </div>

        <div
          ref={imageRef}
          className="flex items-end justify-center lg:justify-end"
          style={{ alignSelf: "stretch", position: "relative" }}
        >
          <img
            src={hero}
            alt="Traveler"
            style={{
              width: "100%",
              maxWidth: "620px",
              objectFit: "contain",
              objectPosition: "bottom",
              transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
              transformOrigin: "bottom center",
              transform: "scale(1.05)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
