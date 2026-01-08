"use client";
import { ReactLenis } from "lenis/react";
import Hero from "./Components/Hero";
import { JSX } from "react";
import ArtSchools from "./Components/ArtSchools";
import CollectorsCircle from "./Components/CollectorsCircle";
import WorldWithinFrame from "./Components/WorldWithinFrame";
import PichwaiSection from "./Components/PichwaiSection";
export default function index(): JSX.Element {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          <section className="text-white h-[80vh] md:h-[571px] w-full bg-slate-950 sticky top-0">
            {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}

            <Hero />
          </section>

          <section className="text-white  h-fit  w-full bg-slate-950  sticky top-0">
            <WorldWithinFrame />
            <PichwaiSection />
          </section>
        </div>
      </main>
    </ReactLenis>
  );
}
