"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    label: "SHRINATHJI'S ARRIVAL TO NATHDWARA",
    title: "The Divine Journey",
    description: "When Shrinathji made His divine journey to the sanctuary of Nathdwara, He didn't just bring His presence; He brought a spiritual and artistic renaissance. This is the origin of Pichwai, a magnificent tapestry of devotion.",
    image: "/Pichwai.png"
  },
  {
    label: "TRADITION OF EXCELLENCE",
    title: "Heritage in Every Stroke",
    description: "Each painting is a universe compressed into a hand-painted masterpiece, utilizing techniques passed down through generations of master artisans in Rajasthan.",
    image: "/HeroSectionImg.png" 
  },
  {
    label: "TRADITION OF EXCELLENCE",
    title: "Heritage in Every Stroke",
    description: "Each painting is a universe compressed into a hand-painted masterpiece, utilizing techniques passed down through generations of master artisans in Rajasthan.",
    image: "/slider.png" 
  }  
];

const featureStyles = {
    title: { fontFamily: 'var(--font-eb-garamond)' },
    desc: { fontFamily: 'var(--font-eb-garamond)' }
};

const Feature = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex flex-col items-center text-center">
    {/* Refined Circle Placeholder */}
    <div className="w-16 h-16 md:w-[100px] md:h-[100px] rounded-full border border-[#D4AF37] mb-6 md:mb-8 flex items-center justify-center bg-transparent" />
    
    <h4 
      className="mb-4 font-normal text-xl md:text-[28px] text-black leading-tight md:leading-[32px]" 
      style={featureStyles.title}
    >
      {title}
    </h4>
    
    <p 
      className="text-[#333333] font-normal text-base md:text-[18px] leading-relaxed md:leading-[28px] max-w-[280px] md:max-w-[320px]" 
      style={featureStyles.desc}
    >
      {desc}
    </p>
  </div> 
);

const PichwaiSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="w-full">
      {/* Top Section: Cream Background */}
      <section className="bg-[#F9F6EE] pt-12 md:pt-24 pb-16 md:pb-32 text-[#333333] overflow-hidden"> 
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-32">
          
          {/* Main Section Header */}
          <h2 
            className="text-center mb-12 md:mb-24 font-normal text-3xl md:text-[56px] leading-tight md:leading-[62.4px] tracking-tight md:tracking-[-0.48px]"
            style={{ 
              fontFamily: 'var(--font-eb-garamond)', 
            }}
          >
            Pichwai — Where Devotion Becomes Art
          </h2>

          {/* Hero Content Area */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 mb-12 md:mb-24 relative">
            
            {/* Left: Image Container */}
            <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-[600/742] flex items-center justify-center">
              {/* Gold Corner Brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-[#D4AF37] z-10" />
              <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-[#D4AF37] z-10" />
              <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-[#D4AF37] z-10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-[#D4AF37] z-10" />
              
              {/* Inner Image Wrapper */}
              <div className="relative w-[93%] h-[94%] bg-white overflow-hidden shadow-sm">
                <Image 
                  src={slides[current].image} 
                  alt={slides[current].title}
                  fill
                  className="object-cover transition-opacity duration-500"
                  priority
                />
              </div>
              
              {/* Carousel Nav Buttons - Mobile: on top of image, Desktop: outside */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 w-9 h-9 border border-[#D4AF37]/30 rounded-full flex items-center justify-center bg-white/80 md:bg-[#D4AF37]/10 hover:bg-white transition-all cursor-pointer z-20 shadow-md md:shadow-none"
              >
                <span className="text-[#333333] text-lg">‹</span>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 w-9 h-9 border border-[#D4AF37]/30 rounded-full flex items-center justify-center bg-white/80 md:bg-[#D4AF37]/10 hover:bg-white transition-all cursor-pointer z-20 shadow-md md:shadow-none"
              >
                <span className="text-[#333333] text-lg">›</span>
              </button>
            </div>

            {/* Right: Narrative Content */}
            <div className="flex flex-col gap-4 w-full max-w-[616px]">
              <span 
                className="uppercase text-[#D4AF37] text-xs md:text-[14px] font-semibold leading-relaxed md:leading-[21px] tracking-[1.4px]"
                style={{ 
                  fontFamily: 'var(--font-inter)', 
                }}
              >
                {slides[current].label}
              </span>

              <h3 
                className="font-medium text-2xl md:text-[42px] leading-tight md:leading-[63px]"
                style={{ 
                  fontFamily: 'var(--font-eb-garamond)', 
                }}
              >
                {slides[current].title}
              </h3>

              <p 
                className="font-normal text-justify text-base md:text-[20px] leading-relaxed md:leading-[32px]"
                style={{ 
                  fontFamily: 'var(--font-eb-garamond)', 
                }}
              >
                {slides[current].description}
              </p>

              {/* Slide Indicators */}
              <div className="flex gap-2 mt-4 items-center">
                {slides.map((_, i) => (
                  <div 
                    key={i}
                    className={`h-[2px] transition-all duration-300 ${i === current ? 'w-12 bg-[#D4AF37]' : 'w-4 bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Italic Callout Section */}
          <div className="flex flex-col items-center text-center mt-16 md:mt-32">
            <p 
              className="italic font-medium text-[#333333] text-lg md:text-[24px] leading-relaxed md:leading-[48px] tracking-[1px] max-w-[793px]"
              style={{ 
                fontFamily: 'var(--font-eb-garamond)', 
              }}
            >
              Let every stroke draw you closer to Shrinathji&apos;s world.
            </p>
            
            <button className="mt-6 md:mt-10 bg-[#333333] text-white px-8 py-3 md:px-10 md:py-4 flex items-center gap-3 hover:bg-black transition-all cursor-pointer group">
              <span className="text-xs md:text-[14px] tracking-[0.2em] font-light uppercase">
                 → Explore our handpicked Pichwais
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Section: White Background */}
      <section className="bg-white h-auto md:h-[542px] py-16 md:py-32 border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-32">
          <h2 
            className="text-center text-black mb-12 md:mb-24 font-normal text-3xl md:text-[48px] leading-[1.2]" 
            style={{ 
              fontFamily: 'var(--font-eb-garamond)', 
            }}
          >
            Made by Hand, Guided by Legacy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
            <Feature 
              title="Generational Mastery" 
              desc="Inherited methods of families who painted temples and palaces." 
            />
            <Feature 
              title="Timeless Mediums" 
              desc="Crafted with mineral pigments, squirrel-hair brushes, and real gold." 
            />
            <Feature 
              title="Artisan's Devotion" 
              desc="Curation respecting the slow, authentic rhythm of creation." 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PichwaiSection;
