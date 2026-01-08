import React from 'react';

const WorldWithinFrame = () => {
  return (
    <section className="bg-white py-12 md:py-24 px-6 md:px-12 lg:px-24 text-[#333333]">
      <div className="max-w-[1440px] mx-auto">

        {/* Main Title - Matches Figma 56px/84px */}
        <h2
          className="text-center mb-10 md:mb-20 font-normal text-3xl md:text-[56px] leading-tight md:leading-[84px]"
          style={{
            fontFamily: 'var(--font-eb-garamond)',
          }}
        >
          The World Within a Frame
        </h2>

        {/* Two Column Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 relative max-w-[1200px] mx-auto">

          {/* Decorative Corner Brackets from Figma - Hidden on mobile to avoid clutter/overflow */}
          <div className="hidden md:block absolute -top-6 -left-6 w-10 h-10 border-t border-l border-[#D4AF37]/40" />
          <div className="hidden md:block absolute -top-6 -right-6 w-10 h-10 border-t border-r border-[#D4AF37]/40" />

          {/* Left Column - Matches Figma 21px/44px */}
          <div
            className="text-justify font-normal text-base md:text-[21px] leading-relaxed md:leading-[44px]"
            style={{
              fontFamily: 'var(--font-eb-garamond)',
            }}
          >
            For centuries, Rajasthan has been the heart of India's miniature painting
            tradition—an artform nurtured by royal patrons, temple custodians, and
            generations of master artisans. Within palace ateliers and sacred shrines,
            artists created exquisite worlds (imaginative or inspired by reality) on
            walls, paper and cloth.
          </div>

          {/* Right Column */}
          <div
            className="text-justify font-normal text-base md:text-[21px] leading-relaxed md:leading-[44px]"
            style={{
              fontFamily: 'var(--font-eb-garamond)',
            }}
          >
            Nowhere is this legacy more profound than in Mewar, the birthplace of
            some of India's earliest and most emotionally expressive miniatures. Long
            before these artworks became collectible treasures, Mewar's artisans were
            quietly shaping a visual language that blended spirituality with statecraft:
            documenting royal chronicles, scenes of devotion, mapping festivals, and
            even encoding astronomy, musical ragas and seasonal cycles into art.
          </div>
        </div>

        {/* Divider and Call to Action */}
        <div className="mt-16 md:mt-32 flex flex-col items-center">
          {/* <div className="w-[194px] h-[2px] bg-[#D4AF37] rounded-sm border-r-2 mb-16" /> */}
          <div className="w-[100px] md:w-[194px] h-[2px] bg-[#D4AF37] rounded-full mb-8 md:mb-16" />


          <p
            className="text-center italic max-w-4xl mb-8 md:mb-12 font-medium text-xl md:text-[32px] leading-normal md:leading-[48px]"
            style={{
              fontFamily: 'var(--font-eb-garamond)',
            }}
          >
            "Find the subject that speaks to your aesthetic sensibility—art that reflects who
            you are and what you choose to preserve."
          </p>

          <button className="bg-[#333333] text-white px-8 py-3 md:px-10 md:py-4 flex items-center gap-3 hover:bg-black transition-all group">
            <span
              className="uppercase tracking-[0.2em] font-light text-xs md:text-[14px]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              → Discover Your Subject
            </span>
          </button>

          <div className="w-[100px] md:w-[194px] h-[2px]  bg-[#D4AF37] rounded-full mt-10 md:mt-20" />
        </div>

      </div>
    </section>
  );
};

export default WorldWithinFrame;