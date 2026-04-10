"use client";

import Link from "next/link";

export default function TeamsCTA() {
  return (
    <section className="py-24 md:py-32 bg-white text-center">
      <div className="container mx-auto px-6 max-w-4xl space-y-8 md:space-y-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Want to work with <br />
          this team?
        </h2>
        <p className="text-gray-500 text-md md:text-lg font-medium leading-relaxed max-w-xl mx-auto">
          We&apos;d love to collaborate on your next project. Let&apos;s connect.
        </p>
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-[#00a3e0] text-white font-bold rounded-md hover:bg-[#0092c9] transition-all text-center shadow-lg shadow-blue-100"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
