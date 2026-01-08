"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Common style for all links to ensure 16px size and 2% letter spacing
  const linkStyle = {
    fontFamily: "var(--font-inter)",
    fontSize: "16px",
    letterSpacing: "0.02em", // 2% letter spacing
    lineHeight: "100%",
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md py-2 px-4 md:px-8 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50">

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#36454F] focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Left Links - Desktop */}
      <div className="hidden md:flex gap-10 items-center flex-1 justify-end pr-12">
        <Link
          href="/"
          style={linkStyle}
          className="text-[#B0903D] font-semibold border-b-2 border-[#B0903D] pb-1"
        >
          Home
        </Link>
        <Link
          href="/our-story"
          style={linkStyle}
          className="text-[#36454F] font-normal hover:text-[#B0903D] transition-colors"
        >
          Our Story
        </Link>
        <Link
          href="/gallery"
          style={linkStyle}
          className="text-[#36454F] font-normal hover:text-[#B0903D] transition-colors"
        >
          The Gallery
        </Link>
      </div>

      {/* Center Logo */}
      <div className="flex-shrink-0 px-2 md:px-6 mx-auto md:mx-0">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Om Arts & Crafts Logo"
            width={124}
            height={114}
            className="object-contain w-[100px] md:w-[124px]"
            priority
          />
        </Link>
      </div>

      {/* Right Links - Desktop */}
      <div className="hidden md:flex gap-10 items-center flex-1 justify-start pl-12">
        <Link
          href="/masterpieces"
          style={linkStyle}
          className="text-[#36454F] font-normal hover:text-[#B0903D] transition-colors"
        >
          Masterpieces
        </Link>
        <Link
          href="/services"
          style={linkStyle}
          className="text-[#36454F] font-normal hover:text-[#B0903D] transition-colors"
        >
          Services
        </Link>
        <Link
          href="/contact"
          style={linkStyle}
          className="text-[#36454F] font-normal hover:text-[#B0903D] transition-colors"
        >
          Contact Us
        </Link>
      </div>

      {/* Right Placeholder for Mobile (to balance logo) */}
      <div className="md:hidden w-6"></div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden flex flex-col items-center py-4 gap-4">
          <Link
            href="/"
            style={linkStyle}
            className="text-[#B0903D] font-semibold border-b-2 border-[#B0903D] pb-1"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/our-story"
            style={linkStyle}
            className="text-[#36454F] font-normal hover:text-[#B0903D] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Our Story
          </Link>
          <Link
            href="/gallery"
            style={linkStyle}
            className="text-[#36454F] font-normal hover:text-[#B0903D] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            The Gallery
          </Link>
          <Link
            href="/masterpieces"
            style={linkStyle}
            className="text-[#36454F] font-normal hover:text-[#B0903D] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Masterpieces
          </Link>
          <Link
            href="/services"
            style={linkStyle}
            className="text-[#36454F] font-normal hover:text-[#B0903D] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            style={linkStyle}
            className="text-[#36454F] font-normal hover:text-[#B0903D] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
