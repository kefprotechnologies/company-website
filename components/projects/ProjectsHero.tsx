import { Grid3X3, LayoutGrid } from "lucide-react";
import { projectFilters } from "@/data/projects";

interface ProjectsHeroProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

export default function ProjectsHero({
  activeFilter,
  setActiveFilter,
  viewMode,
  setViewMode,
}: ProjectsHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-44 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl space-y-8 md:space-y-10">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <p className="text-[#00a3e0] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
            SELECTED WORKS
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            Solutions we&apos;ve <br />
            <span className="text-[#00a3e0]">built & shipped</span>
          </h1>

          {/* Subheading */}
          <p className="text-sm md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-medium">
            Explore our portfolio of successful projects where creativity meets
            technology to deliver exceptional digital experiences.
          </p>
        </div>

        {/* Filters & Switcher Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 md:pt-16 border-t border-gray-100/50">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${
                  activeFilter === filter
                    ? "bg-[#00a3e0] text-white shadow-lg shadow-blue-200"
                    : "bg-[#475569] text-white hover:bg-[#334155]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#0f172a] p-1.5 rounded-full shadow-inner">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-full transition-all ${
                viewMode === "grid"
                  ? "bg-[#00a3e0] text-white shadow-md"
                  : "text-gray-500 hover:text-gray-300"
              }`}
              title="Grid View"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-full transition-all ${
                viewMode === "list"
                  ? "bg-[#00a3e0] text-white shadow-md"
                  : "text-gray-500 hover:text-gray-300"
              }`}
              title="List View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
