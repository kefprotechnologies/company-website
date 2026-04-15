"use client";

import Link from "next/link";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function CTA({ 
  title = "Want to work with this team?", 
  subtitle = "We'd love to collaborate on your next project. Let's connect.",
  buttonText = "Get Started"
}: CTAProps) {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-gray-100/50">
      <div className="container mx-auto px-6 max-w-4xl text-center space-y-10">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
          {title}
        </h2>

        <p className="text-lg md:text-xl text-gray-500 font-medium max-w-xl mx-auto italic">
          {subtitle}
        </p>

        <Link
          href="/contact"
          className="inline-flex px-12 py-4 bg-primary text-white font-bold text-lg rounded-md hover:bg-[#0092c9] transition-all"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
