"use client";

import { whyChooseUs } from "@/data/services";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Why Choose Kefpro Technologies
          </h2>
          <p className="text-gray-500 text-md md:text-lg font-medium">
            We don&apos;t just write code — <span className="italic">we engineer solutions that grow with
            your business.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {whyChooseUs.map((reason, idx) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-10 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-start gap-4"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl md:text-2xl font-black text-[#00a3e0] select-none px-1 md:px-2">
                  {reason.number}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-500 leading-relaxed text-sm md:text-md font-medium px-8 md:px-12 -mt-1 md:-mt-2">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
