import SectionCamp from "@/components/SectionCamp";
import SectionFeatures from "@/components/SectionFeatures";
import SectionGetApp from "@/components/SectionGetApp";
import SectionGuide from "@/components/SectionGuide";
import SectionHero from "@/components/SectionHero";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionCamp />
      <SectionGuide />
      <SectionFeatures />
      <SectionGetApp />
    </>
  );
}
