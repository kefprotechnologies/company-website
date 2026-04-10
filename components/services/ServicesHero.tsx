"use client";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-44 pb-24 hero-grid overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl text-center space-y-10 md:space-y-12">
        {/* Badge */}
        <p className="text-[#00a3e0] font-bold tracking-[0.2em] uppercase text-xs">
          SERVICES
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
          Premium Digital <br />
          <span className="text-[#00a3e0]">Solutions</span>
        </h1>

        {/* Subheading */}
        <p className="text-md md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-medium">
          From branding and UI/UX design to full-stack dev and custom
          automation, we build digital products that scale with your business
          and help it grow.
        </p>
      </div>
    </section>
  );
}
