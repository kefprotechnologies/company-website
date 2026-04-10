"use client";

import Link from "next/link";

export default function VisionMission() {
  return (
    <section className="py-24 md:py-32 bg-[#0f172a] overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Column - Who We Are */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <p className="text-[#00a3e0] font-bold tracking-[0.2em] uppercase text-xs">
                WHO WE ARE
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Passionate builders, <br className="hidden md:block" />
                real results
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-400 text-sm md:text-lg leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
              <p>
                Kefpro Technologies is a team of passionate developers and
                designers committed to building innovative software solutions
                that solve real-world problems.
              </p>
              <p>
                We focus on delivering high-quality digital products that help
                businesses grow and operate efficiently — from startups
                finding their footing, to established businesses ready to scale.
              </p>
            </div>

            <Link
              href="/teams"
              className="inline-block px-10 py-4 bg-white text-gray-900 font-bold rounded-md hover:bg-gray-100 transition-all text-center"
            >
              Meet Our Team
            </Link>
          </div>


          {/* Right Column - Vision/Mission Cards */}
          <div className="space-y-6">
            <div className="p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-[#00a3e0]">
              <h3 className="text-lg md:text-xl font-bold text-[#00a3e0] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-400 text-sm md:text-md leading-relaxed font-medium">
                To become a leading technology company delivering innovative and
                impactful digital solutions across Africa and beyond.
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-[#00a3e0]">
              <h3 className="text-lg md:text-xl font-bold text-[#00a3e0] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-400 text-sm md:text-md leading-relaxed font-medium">
                To empower businesses and organizations through reliable,
                scalable, and user-friendly software systems that drive real
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
