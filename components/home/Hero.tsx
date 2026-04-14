"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(0, 163, 224, 0.06), transparent 80%)`,
        }}
        animate={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(0, 163, 224, 0.06), transparent 80%)`,
        }}
      />
      
      <div className="container mx-auto px-6 max-w-5xl text-center space-y-10 md:space-y-12 relative z-10">
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] md:leading-[1.05]"
        >
          Building <span className="text-[#00a3e0] italic">Smart</span>{" "}
          <br className="hidden md:block" />
          <span className="text-[#00a3e0]">Software</span> Solutions for{" "}
          <br className="hidden md:block" />
          Businesses
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-md md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-medium"
        >
          Kefpro Technologies helps businesses and organizations grow through
          innovative digital solutions — web apps, mobile apps, and business
          automation systems.
        </motion.p>

        {/* Buttons - Mobile Stacked */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-sm mx-auto sm:max-w-none pt-4"
        >
          <Link
            href="/services"
            className="w-full sm:w-auto px-10 py-4 bg-[#00a3e0] text-white font-bold rounded-md hover:bg-[#0092c9] transition-all text-center"
          >
            Get Started
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-4 bg-white border border-gray-200 text-gray-900 font-bold rounded-md hover:bg-gray-50 transition-all shadow-sm text-center"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
