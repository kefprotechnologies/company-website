"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-44 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl text-center space-y-10 md:space-y-12">
        {/* Badge */}
        <p className="text-[#00a3e0] font-bold tracking-[0.2em] uppercase text-xs">
          ABOUT US
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] md:leading-[1.1]">
          We build the future, <br className="md:hidden" />
          <span className="text-[#00a3e0]">
            one <br className="hidden md:block" />
            solution at a time
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-md md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-medium">
          A team of passionate developers and designers committed to building
          innovative software solutions that solve real-world problems.
        </p>

        {/* Button */}
        <div className="flex justify-center pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-12 py-4 bg-[#00a3e0] text-white font-bold rounded-md hover:bg-[#0092c9] transition-all text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
