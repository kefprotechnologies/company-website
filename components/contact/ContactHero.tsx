"use client";

export default function ContactHero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-44 pb-24 overflow-hidden">
      {/* Subtle grid pattern for premium feel */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,163,224,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-4xl text-center space-y-8 relative z-10">
        {/* Badge */}
        <p className="text-[#00a3e0] font-bold tracking-[0.2em] uppercase text-xs">
          Contact Us
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
          Get in{" "}
          <span className="text-[#00a3e0]">touch</span>{" "}
          with us
        </h1>

        {/* Subheading */}
        <p className="text-md md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-medium">
          We&apos;d love to hear from you. Reach out to us and let&apos;s build
          something amazing together.
        </p>
      </div>
    </section>
  );
}
