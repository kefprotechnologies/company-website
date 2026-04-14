"use client";

import { Check } from "lucide-react";
import { processSteps } from "@/data/services";

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <p className="text-[#00a3e0] font-bold tracking-[0.2em] uppercase text-xs">
            OUR PROCESS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            How We Deliver Excellence
          </h2>
          <p className="text-gray-500 text-md md:text-lg font-medium">
            We don&apos;t just write code — <span className="italic">we engineer solutions that grow with
            your business.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="p-8 md:p-10 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-start gap-6"
            >
              <div
                className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center`}
              >
                <step.icon className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-6 w-full">
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium italic">
                    {step.description}
                  </p>
                </div>
                
                <div className="space-y-4 pt-2">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Key Activities</p>
                  <ul className="space-y-3">
                    {step.activities.map((activity) => (
                      <li key={activity} className="flex items-center gap-3 text-gray-500 text-sm font-medium">
                        <div className="w-5 h-5 rounded-full border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-blue-500" />
                        </div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
