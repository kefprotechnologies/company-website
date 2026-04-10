"use client";

export default function TeamsHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-44 pb-24 hero-grid overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl text-center space-y-10 md:space-y-12">
        {/* Badge */}
        <p className="text-[#00a3e0] font-bold tracking-[0.2em] uppercase text-xs">
          OUR TEAM
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
          Meet the <span className="text-[#00a3e0]">people</span> <br />
          behind Kefpro
        </h1>

        {/* Subheading */}
        <p className="text-md md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-medium">
          A talented group of developers, designers, and innovators passionate
          about building solutions that matter.
        </p>
      </div>
    </section>
  );
}
