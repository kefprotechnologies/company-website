"use client";

import { processBenefits } from "@/data/services";
import { motion } from "framer-motion";


export default function WhyProcessWorks() {
  return (
    <section className="py-24 md:py-32 bg-[#0f172a] overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col mb-16 md:mb-20 space-y-4 text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Why Our Process Works
          </h2>
          <p className="text-gray-400 text-md md:text-lg leading-relaxed max-w-xl font-medium italic">
            Focusing on what truly matters to you.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {processBenefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-start gap-6 hover:bg-white/10 transition-colors group cursor-default relative overflow-hidden"
            >

              <div className="w-12 h-12 bg-[#00a3e0]/10 rounded-lg flex items-center justify-center text-[#00a3e0] group-hover:bg-[#00a3e0] group-hover:text-white transition-all relative z-10">
                <benefit.icon className="w-6 h-6" />
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
