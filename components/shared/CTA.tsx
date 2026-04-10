"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-gray-100/50">
      <div className="container mx-auto px-6 max-w-4xl text-center space-y-10">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
          Ready to transform your <br />
          business with technology?
        </h2>

        <p className="text-lg md:text-xl text-gray-500 font-medium max-w-xl mx-auto italic">
          Let&apos;s build something amazing together. Reach out today.
        </p>

        <Link
          href="/contact"
          className="inline-flex px-12 py-4 bg-primary text-white font-bold text-lg rounded-md hover:bg-[#0092c9] transition-all"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
