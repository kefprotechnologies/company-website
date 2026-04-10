import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/shared/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <WhyChooseUs />
      <CTA />
    </div>
  );
}
