import React from 'react';
import Image from 'next/image';
const ArtSchools = () => {
  return (
    <section className="bg-[#E5E4E2]/20 py-16 md:py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-12 md:mb-20 max-w-4xl mx-auto">
          <h2 className="mb-6 md:mb-10 font-normal text-3xl md:text-[48px] leading-tight md:leading-[56px]"
            style={{ fontFamily: 'var(--font-eb-garamond)' }}>
            Journey Through Indian Art Schools
          </h2>
          <p className="text-[#333333]/70 mb-6 md:mb-8 text-base md:text-[18px] leading-relaxed md:leading-[28px]"
            style={{ fontFamily: 'var(--font-eb-garamond)' }}>
            Miniature painting in India was never a single style — it was a universe unfolding in fragments...
          </p>
          <span className="italic text-[#D4AF37]/80 text-lg md:text-[20px]"
            style={{ fontFamily: 'var(--font-eb-garamond)' }}>
            Important centres of Miniature Paintings in India
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          {/* Vertical Timeline */}
          <div className="flex flex-col gap-8 md:gap-12 border-l border-[#D4AF37]/30 pl-6 md:pl-8 relative w-full lg:w-auto">
            <SchoolItem year="11TH-16TH CENTURY" title="Jain Manuscript Tradition" desc="Illuminated texts with celestial beings and cosmic narratives" />
            <SchoolItem active year="16TH-19TH CENTURY" title="Rajput Courts" desc="Heroic legends, courtly romance, and devotional themes" />
            <SchoolItem year="16TH-19TH CENTURY" title="Mughal Ateliers" desc="Imperial portraiture with Persian influence and naturalistic detail" />
            <SchoolItem year="17TH-19TH CENTURY" title="Pahari Schools" desc="Lyrical devotion rendered in mountain courts of the Himalayas" />
            <SchoolItem year="17TH-20TH CENTURY" title="Nathdwara Temple Art" desc="Pichwai paintings celebrating the divine play of Shrinathji" />
          </div>

          {/* Map Image Placeholder */}
          <div className="flex-1 flex justify-center w-full">
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Place your Map SVG or Image here */}
              <Image src="/Map.png" alt="Indian Art Map" fill className="object-contain opacity-40 grayscale" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 md:mt-24">
          <button className="bg-[#333333] text-white px-8 py-3 md:px-10 md:py-4 uppercase tracking-[0.1em] text-xs md:text-[13px] cursor-pointer hover:bg-black transition-colors">
            Discover India&apos;s Many Courts of Art
          </button>
        </div>
      </div>
    </section>
  );
};

const SchoolItem = ({ year, title, desc, active = false }: any) => (
  <div className={`flex flex-col gap-1 ${active ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300 hover:opacity-100 cursor-default`}>
    <span className="text-[10px] md:text-[12px] tracking-[0.1em] text-[#D4AF37]" style={{ fontFamily: 'var(--font-inter)' }}>{year}</span>
    <h4 className="text-2xl md:text-[32px] leading-tight" style={{ fontFamily: 'var(--font-eb-garamond)' }}>{title}</h4>
    <p className="text-sm md:text-[14px] leading-normal" style={{ fontFamily: 'var(--font-eb-garamond)' }}>{desc}</p>
    {active && <div className="absolute left-[-5px] w-[10px] h-[10px] bg-[#D4AF37] rounded-full top-[10px]" />}
  </div>
);

export default ArtSchools;