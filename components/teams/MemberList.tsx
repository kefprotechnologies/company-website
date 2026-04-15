"use client";

import Link from "next/link";
import { Search, UserSearch, Plus } from "lucide-react";
import { teamMembers } from "@/data/team";
import { motion } from "framer-motion";



export default function MemberList() {
  return (
    <section className="py-24 md:py-32 bg-[#0b1221] overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,224,0.08),transparent_70%)] pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-1/3 top-0 bottom-0 border-l border-dashed border-[#00a3e0]/40 hidden lg:block" />
        <div className="absolute left-2/3 top-0 bottom-0 border-l border-dashed border-[#00a3e0]/40 hidden lg:block" />
        <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-[#00a3e0]/40 hidden lg:block" />
        
        {/* Intersection Markers (X) */}
        <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#00a3e0] hidden lg:block">
          <Plus className="w-8 h-8 rotate-45 stroke-[1px]" />
        </div>
        <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#00a3e0] hidden lg:block">
          <Plus className="w-8 h-8 rotate-45 stroke-[1px]" />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col mb-16 md:mb-24 space-y-4 text-center">
          <p className="text-[#00a3e0] font-bold tracking-[0.2em] uppercase text-xs">
            MEET OUR TEAM
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            The Minds Behind Kefpro
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            A crew of builders turning bold ideas into impactful products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-12 rounded-[2.5rem] bg-[#111827]/40 border border-white/10 flex flex-col items-center gap-6 group hover:border-[#00a3e0]/30 transition-all duration-300"
            >
              <div
                className={`w-28 h-28 md:w-36 md:h-36 rounded-full flex-shrink-0 relative overflow-hidden flex items-center justify-center ${!member.image ? 'bg-[#1e293b]' : ''}`}
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover scale-[1.15] group-hover:scale-[1.2] transition-all duration-500 object-center"
                  />
                ) : (
                  <span className="text-white font-bold text-2xl md:text-4xl tracking-tighter relative z-10">
                    {member.initials}
                  </span>
                )}
              </div>
              <div className="space-y-4 text-center">
                <div className="space-y-1">
                  <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-[#00a3e0] text-sm md:text-base font-semibold">
                    {member.role}
                  </p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Join Our Team Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-[#111827]/40 border border-white/10 flex flex-col items-center justify-center text-center gap-6 group hover:border-[#00a3e0]/30 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/5">
              <UserSearch className="w-8 h-8" />
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  Join Our Team
                </h4>
                <p className="text-[#00a3e0] text-sm md:text-base font-semibold">
                  Open Positions
                </p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                We're always looking for talented individuals passionate about
                building impactful software solutions.
              </p>
              <button className="w-full mt-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all text-base shadow-lg shadow-white/5">
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
