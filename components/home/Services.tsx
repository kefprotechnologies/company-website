"use client";

import { homeServices } from "@/data/services";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import BorderBeam from "@/components/shared/BorderBeam";

export default function Services() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="py-24 md:py-32 bg-[#0f172a] overflow-hidden relative border-t border-white/5 group/services">
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/services:opacity-100"
        style={{
          background: `radial-gradient(800px circle at ${springX}px ${springY}px, rgba(0, 163, 224, 0.08), transparent 80%)`,
        }}
      />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-16 md:mb-20 space-y-4 text-left"
        >
          <p className="text-[#00a3e0] font-bold tracking-widest uppercase text-xs">
            WHAT WE DO
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Modern solutions for <br />
            modern businesses
          </h2>
          <p className="text-gray-400 text-md md:text-lg leading-relaxed max-w-xl font-medium">
            We provide modern and scalable digital solutions tailored to your
            business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {homeServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-start gap-6 md:gap-8 hover:bg-white/10 transition-colors relative group overflow-hidden"
            >
              <BorderBeam />
              <div
                className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}
              >
                <service.icon className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed leading-6 font-medium">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
