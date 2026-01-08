// // components/Hero.tsx
// const Hero = () => {
//   return (
//     <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
//       {/* Background Image with Dark Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
//         style={{
//           backgroundImage: "url('/HeroSectionImg.png')", // Replace with your image
//         }}
//       >
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 text-center text-white px-4">
//         <h1 className="text-5xl md:text-[64px] font-serif mb-4 tracking-wide">
//           A Window to Indias Soul
//         </h1>
//         <p className="text-sm md:text-base uppercase tracking-[0.3em] font-light">
//           A Piece of Jewellery for your Home
//         </p>
//       </div>

//       {/* Optional Music Icon (Top Right) */}
//       <div className="absolute top-10 right-10 z-20">
//         <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition">
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
//           </svg>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// components/Hero.tsx
const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: "url('/HeroSectionImg.png')", // Replace with your image
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content - Added pt-24 to push it "a little down" from center */}
      <div className="absolute bottom-20 md:bottom-[124px] z-10 text-center text-white px-4 w-full">
        <h1
          className="font-serif leading-[100%] mb-4 text-[42px] md:text-[64px]"
          style={{
            fontFamily: 'var(--font-eb-garamond)',
            // fontSize: '64px', // Removed fixed size
            letterSpacing: '1px',
            fontWeight: '400'
          }}
        >
          A Window to Indias Soul
        </h1>

        <p
          className="uppercase text-xs md:text-[16px]"
          style={{
            fontFamily: 'var(--font-inter)',
            // fontSize: '16px', // Removed fixed size
            letterSpacing: '4px',
            lineHeight: '24px',
            fontWeight: '400'
          }}
        >
          A Piece of Jewellery for your Home
        </p>
      </div>

      {/* Music Icon */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20">
        <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition">
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;