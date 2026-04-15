import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import CTA from "@/components/shared/CTA";

export const metadata = {
  title: "Contact Us | Kefpro Technologies",
  description: "Reach out to Kefpro Technologies for smart software solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <ContactSection />
      <CTA />
    </main>
  );
}
