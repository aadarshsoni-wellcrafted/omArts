"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const TrustedSlider = () => {
  // Infinite scroll configuration
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 900, stopOnInteraction: false }),
  ]);

  const partners = [
    { name: "Konrad Seitz", type: "doc" },
    { name: "Vicky Ducrot", type: "doc" },
    { name: "Kankarwa Haveli", type: "home" },
    { name: "Kaner Bagh", type: "home" },
    { name: "City Palace", type: "home" },
  ];

  return (
    <section className="bg-[#FAF8F4] py-16 md:py-24 px-6 overflow-hidden">
      {/* Header Text - Exact Figma Config */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
        <h2
          className="text-[#1A1A1A] mb-6 md:mb-8 text-3xl md:text-[44px] leading-tight md:leading-[63px] tracking-tight md:tracking-[-0.42px]"
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontWeight: 400,
          }}
        >
          Trusted by Curators, Critique & Heritage Properties
        </h2>
        <p
          className="max-w-[600px] mx-auto text-[#4A4A4A] text-base md:text-[16px] leading-relaxed md:leading-[28px] tracking-[0.02em]"
          style={{
            fontFamily: "var(--font-inter)",
          }}
        >
          Works from our Collection are held in esteemed private collections,
          notable galleries, and heritage hospitality spaces worldwide.
        </p>
      </div>

      {/* Slider Viewport */}
      <div className="max-w-[1440px] mx-auto overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {partners.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_auto] px-[5px] md:px-[10px] w-[260px] md:w-auto" // Space between cards
            >
              {/* Card - Exact Figma Config */}
              <div
                style={{
                  // width: "302px", // Removed fixed width
                  // height: "127px",
                  // padding: "33px 17px 1px 17px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D4AF37",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
                className="transition-shadow hover:shadow-sm w-[260px] md:w-[302px] h-[110px] md:h-[127px] pt-[20px] md:pt-[33px] pb-[10px] px-[10px] md:px-[17px]"
              >
                {/* Gold Icon Placeholder */}
                <div className="text-[#D4AF37] mb-3">
                  {item.type === "doc" ? (
                    <svg
                      width="22"
                      height="26"
                      viewBox="0 0 22 26"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M13 1H5C2.79086 1 1 2.79086 1 5V21C1 23.2091 2.79086 25 5 25H17C19.2091 25 21 23.2091 21 21V9L13 1Z" />
                      <path d="M13 1V9H21" />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="22"
                      viewBox="0 0 24 22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M3 9.5L12 2L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z" />
                      <path d="M9 21V12H15V21" />
                    </svg>
                  )}
                </div>

                <p
                  className="text-sm md:text-[16px] text-center"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    color: "#1A1A1A",
                  }}
                >
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSlider;
