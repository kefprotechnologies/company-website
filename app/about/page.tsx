import AboutHero from "@/components/about/AboutHero";
import VisionMission from "@/components/about/VisionMission";
import CTA from "@/components/shared/CTA";

export default function About() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <VisionMission />
      <CTA />
    </div>
  );
}
