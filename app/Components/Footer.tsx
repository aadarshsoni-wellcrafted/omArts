// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 md:pt-20 pb-6 md:pb-10 px-6 md:px-20 ">
      {/* Quote Section */}
      <div className="max-w-[794px] mx-auto text-center mb-16 md:mb-28 border-b pb-8 md:pb-12 border-[#B0903D]">
        <p
          className="italic text-[#1A1A1A] text-2xl md:text-[36px] leading-relaxed md:leading-[64px] tracking-normal"
          style={{
            fontFamily: "var(--font-eb-garamond)",
            // fontSize: "36px",
            // lineHeight: "64px",
            // letterSpacing: "0px",
          }}
        >
          "We believe that every painting carries the breath of its maker—the
          patience of the hand, the devotion of the heart, and the wisdom of a
          lineage. Our mission is not to sell art, but to reunite masterworks
          with those who will honor them."
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-20">
        {/* Visit Us */}
        <div>
          <h4
            className="mb-4 text-lg md:text-[20px] font-medium text-[#1A1A1A] leading-normal md:leading-[30px]"
            style={{
              fontFamily: "var(--font-eb-garamond)",
              // fontSize: "20px",
              // fontWeight: 500, // Medium
              // color: "#1A1A1A",
              // lineHeight: "30px",
              // letterSpacing: "0px",
            }}
          >
            Visit Us
          </h4>
          <address
            className="not-italic text-sm md:text-[15px] font-normal text-[#4A4A4A] leading-relaxed md:leading-[22.5px]"
            style={{
              fontFamily: "var(--font-inter)",
              // fontSize: "15px",
              // fontWeight: 400,
              // color: "#4A4A4A",
              // lineHeight: "22.5px",
              // letterSpacing: "0px",
            }}
          >
            Om Arts & Crafts
            <br />
            City Palace Road
            <br />
            Udaipur, Rajasthan 313001
            <br />
            India
          </address>
        </div>

        {/* Viewing Hours - Applying same Body Styles */}
        <div>
          <h4
            className="mb-4 text-lg md:text-[20px] font-medium text-[#1A1A1A] leading-normal md:leading-[30px]"
            style={{
              fontFamily: "var(--font-eb-garamond)",
              // fontSize: "20px",
              // fontWeight: 500,
              // color: "#1A1A1A",
              // lineHeight: "30px",
            }}
          >
            Viewing Hours
          </h4>
          <p
            className="text-sm md:text-[15px] font-normal text-[#4A4A4A] leading-relaxed md:leading-[22.5px]"
            style={{
              fontFamily: "var(--font-inter)",
              // fontSize: "15px",
              // color: "#4A4A4A",
              // lineHeight: "22.5px",
            }}
          >
            By appointment only
            <br />
            Tuesday – Saturday
            <br />
            11:00 AM – 6:00 PM IST
          </p>
        </div>

        {/* Connect */}
        <div>
          <h4
            className="mb-4 text-lg md:text-[20px] font-medium text-[#1A1A1A] leading-normal md:leading-[30px]"
            style={{
              fontFamily: "var(--font-eb-garamond)",
              // fontSize: "20px",
              // fontWeight: 500,
              // color: "#1A1A1A",
              // lineHeight: "30px",
            }}
          >
            Connect
          </h4>
          <div className="flex flex-col gap-2">
            <a
              href="https://instagram.com"
              className="flex items-center gap-2 hover:text-[#B0903D] transition-colors text-sm md:text-[15px] font-normal text-[#4A4A4A] leading-relaxed md:leading-[22.5px]"
              style={{
                fontFamily: "var(--font-inter)",
                // fontSize: "15px",
                // color: "#4A4A4A",
                // lineHeight: "22.5px",
              }}
            >
              <span>@omartsandcrafts</span>
            </a>
            <a
              href="mailto:inquiry@omartsandcrafts.com"
              className="hover:text-[#B0903D] transition-colors text-sm md:text-[15px] font-normal text-[#4A4A4A] leading-relaxed md:leading-[22.5px]"
              style={{
                fontFamily: "var(--font-inter)",
                // fontSize: "15px",
                // color: "#4A4A4A",
                // lineHeight: "22.5px",
              }}
            >
              inquiry@omartsandcrafts.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 md:pt-8 border-t border-[#D4AF37] flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p
          className="text-xs md:text-[13px] text-[#6A6A6A] leading-relaxed md:leading-[19.5px]"
          style={{
            fontFamily: "var(--font-inter)",
            // fontSize: "13px",
            // color: "#6A6A6A",
            // lineHeight: "19.5px",
            // letterSpacing: "0px",
          }}
        >
          © 2025 Om Arts & Crafts. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link
            href="/privacy"
            className="hover:text-[#1A1A1A] transition-colors text-xs md:text-[13px] text-[#6A6A6A] leading-relaxed md:leading-[19.5px]"
            style={{
              fontFamily: "var(--font-inter)",
              // fontSize: "13px",
              // color: "#6A6A6A",
              // lineHeight: "19.5px",
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-[#1A1A1A] transition-colors text-xs md:text-[13px] text-[#6A6A6A] leading-relaxed md:leading-[19.5px]"
            style={{
              fontFamily: "var(--font-inter)",
              // fontSize: "13px",
              // color: "#6A6A6A",
              // lineHeight: "19.5px",
            }}
          >
            Terms of Service
          </Link>
          <Link
            href="/guarantee"
            className="hover:text-[#1A1A1A] transition-colors text-xs md:text-[13px] text-[#6A6A6A] leading-relaxed md:leading-[19.5px]"
            style={{
              fontFamily: "var(--font-inter)",
              // fontSize: "13px",
              // color: "#6A6A6A",
              // lineHeight: "19.5px",
            }}
          >
            Authenticity Guarantee
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
