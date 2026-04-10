"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import BorderBeam from "@/components/shared/BorderBeam";

interface ProjectListProps {
  activeFilter: string;
  viewMode: "grid" | "list";
}


export default function ProjectList({ activeFilter, viewMode }: ProjectListProps) {
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

  const filteredProjects = projects.filter(
    (p) => activeFilter === "All work" || p.category === activeFilter
  );

  return (
    <section className="py-24 md:py-32 bg-[#0f172a] overflow-hidden relative border-t border-white/5 group/projects">
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/projects:opacity-100"
        style={{
          background: `radial-gradient(800px circle at ${springX}px ${springY}px, rgba(0, 163, 224, 0.08), transparent 80%)`,
        }}
      />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-16 md:mb-24 text-left gap-4"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight">
            Our Works
          </h2>
          <p className="text-gray-400 text-sm md:text-xl font-medium leading-relaxed max-w-4xl">
            Here are some of the solutions we have built to solve real business challenges across industries.
          </p>
        </motion.div>

        {/* Projects Display */}
        {viewMode === "list" ? (
          /* List Mode (Custom Wide Cards) - Using Grid for alignment */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/10 ${
                  idx < 4 ? "md:col-span-2 aspect-[4/5] md:aspect-[21/9]" : "col-span-1 aspect-[4/5] md:aspect-[4/3]"
                }`}
              >
                <BorderBeam />
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes={idx < 4 ? "(max-width: 1280px) 100vw, 1280px" : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 bg-gradient-to-t from-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <span className="text-[#00a3e0] text-xs font-bold uppercase tracking-widest">{project.category}</span>
                  <p className="text-white text-xl md:text-2xl font-bold mt-2">{project.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Grid Mode (Standard Columns) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative aspect-[4/5] rounded-2xl md:rounded-[2rem] overflow-hidden group cursor-pointer border border-white/10"
              >
                <BorderBeam />
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <span className="text-[#00a3e0] text-xs font-bold uppercase tracking-widest">{project.category}</span>
                  <p className="text-white text-lg md:text-xl font-bold mt-1">{project.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Footer Button */}
        <div className="flex justify-center mt-20 md:mt-32">
          <Link
            href="/teams"
            className="px-12 py-4 bg-white text-gray-900 font-bold rounded-md hover:bg-gray-100 transition-all text-center tracking-tight"
          >
            Our Team Project
          </Link>
        </div>
      </div>
    </section>
  );
}
