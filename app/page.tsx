import ArtSchools from "./Components/ArtSchools";
import TrustedSlider from "./Components/TrustedSlider";
import CollectorsCircle from "./Components/CollectorsCircle";
import HeroSectionAnimate from "./HeroSectionAnimate";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <HeroSectionAnimate/> 
      <ArtSchools />
      <CollectorsCircle />
      <TrustedSlider />
      {/* 3. Additional Content Area */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        {/* You can add more sections here as you build the site */}
      </section>
    </main>
  );
}
