"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { serviceList } from "@/data/services";

export default function ServiceList() {
  return (
    <section className="py-24 md:py-32 bg-[#0f172a] overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col mb-16 md:mb-20 space-y-4 text-left">
          <p className="text-[#00a3e0] font-bold tracking-[0.2em] uppercase text-xs">
            WHAT WE DO
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Our Services
          </h2>
          <p className="text-gray-400 text-md md:text-lg leading-relaxed max-w-xl font-medium">
            We provide modern and scalable digital solutions tailored to your
            business needs.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {serviceList.map((service) => (
            <div
              key={service.title}
              className="p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-start gap-8"
            >
              <div
                className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}
              >
                <service.icon className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-6 w-full">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#00a3e0] font-bold text-sm group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="px-10 py-4 bg-white text-gray-900 font-bold rounded-md hover:bg-gray-50 transition-all text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
