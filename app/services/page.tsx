import ServicesHero from "@/components/services/ServicesHero";
import ServiceList from "@/components/services/ServiceList";
import Process from "@/components/services/Process";
import WhyProcessWorks from "@/components/services/WhyProcessWorks";
import CTA from "@/components/shared/CTA";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <ServiceList />
      <Process />
      <WhyProcessWorks />
      <CTA />
    </div>
  );
}
