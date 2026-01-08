import React from "react";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";



const masterpieces = [
  {
    title: "Royal Procession",
    subtitle: "Divine love in eternal play",
    src: "/CardImg.png", // Replace with your image paths
  },
  {
    title: "Radha Krishna",
    subtitle: "Divine love in eternal play",
    src: "/CardImg.png",
  },
  {
    title: "Radha Krishna",
    subtitle: "Divine love in eternal play",
    src: "/CardImg.png",
  },
];

const CollectorsCircle = () => {
  return (
    <>
      <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden mb-6 shadow-xl">
        <Image
          src="/MaskGroup.png"
          alt="/CardImg.png"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <section className="bg-white py-16 md:py-24 px-6 md:px-12 flex flex-col items-center">

        {/* Header Section */}
        <div className="max-w-4xl text-center mb-10 md:mb-16">
          <h2
            className="text-zinc-800 mb-6 md:mb-8 text-4xl md:text-[56px] leading-tight md:leading-[84px] tracking-tight md:tracking-[-0.56px]"
            style={{
              fontFamily: "var(--font-eb-garamond)",
              fontWeight: 400,
            }}
          >
            The Collector&apos;s Circle
          </h2>

          <p
            className="text-[#333333] leading-relaxed mb-4 md:mb-6 pb-2 md:pb-4 inline-block text-lg md:text-[21px] md:leading-[44px]"
            style={{
              fontFamily: "var(--font-eb-garamond)",
              fontWeight: 400,
            }}
          >
            Art endures most deeply in the hands of those who understand its
            language. For collectors who seek not decoration, but meaning,
            provenance, and permanence, this is a place of belonging.
          </p>

          <p
            className="text-[#333333] mx-auto mt-2 md:mt-4 text-base md:text-[21px] leading-relaxed md:leading-[44px]"
            style={{
              fontFamily: "var(--font-eb-garamond)",
              fontWeight: 400,
            }}
          >
            Spanning early-school miniatures to contemporary masterworks that
            mature with time, our collection is meticulously curated to serve a
            higher purpose — the building of a legacy shaped by discernment,
            heritage, and lasting value.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mb-12 md:mb-16">
          {masterpieces.map((item, index) => (
            <div key={index} className="group cursor-pointer flex flex-col items-center md:items-start">
              <div className="relative h-[350px] md:h-[417px] w-full max-w-[394px] overflow-hidden mb-6 shadow-xl">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-left w-full max-w-[394px]">
                <h3
                  className="text-[#333333] mb-1 text-2xl md:text-[36px] leading-tight md:leading-[54px] tracking-wide"
                  style={{
                    fontFamily: "var(--font-eb-garamond)",
                    fontWeight: 400,
                  }}
                >
                  {item.title}
                </h3>
                <div className="w-16 md:w-24 h-[2px] bg-[#D4AF37] mb-3" />
                <p
                  className="text-[#444444] text-[12px] md:text-[14px] leading-relaxed tracking-wider"
                  style={{
                    fontFamily: "var(--font-eb-inter)",
                    fontWeight: 400,
                  }}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className="bg-[#333333] text-white px-8 py-3 md:px-10 md:py-4 flex items-center gap-3 hover:bg-black transition-colors duration-300">
          <span className="text-xs md:text-sm tracking-widest uppercase">
            → Preview Our Masterpieces
          </span>
        </button>
      </section>
    </>
  );
};

export default CollectorsCircle;
