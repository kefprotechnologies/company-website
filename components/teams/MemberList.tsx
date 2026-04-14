"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { teamMembers } from "@/data/team";
import { motion } from "framer-motion";



export default function MemberList() {
  return (
    <section className="py-24 md:py-32 bg-[#0f172a] overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col mb-16 md:mb-20 space-y-4 text-left">
          <p className="text-[#00a3e0] font-bold tracking-[0.2em] uppercase text-xs">
            MEET OUR TEAM
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Team Members
          </h2>
          <p className="text-gray-400 text-md md:text-lg leading-relaxed max-w-xl font-medium">
            A crew of builders turning bold ideas into impactful products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-6 group overflow-hidden relative transition-colors"
            >

              <div
                className={`w-20 h-20 md:w-24 md:h-24 ${member.color} rounded-full border-4 border-white/10 flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-xl`}
              >
                {member.initials}
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-[#00a3e0] text-xs md:text-sm font-bold uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
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
            className="p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-6 relative group overflow-hidden"
          >

            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  Join Our Team
                </h3>
                <p className="text-[#00a3e0] text-xs md:text-sm font-bold uppercase tracking-wider">
                  Open Positions
                </p>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                We&apos;re always looking for talented individuals passionate about
                building impactful software solutions.
              </p>
              <button className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all text-sm">
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
