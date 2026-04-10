"use client";

import { useState } from "react";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectList from "@/components/projects/ProjectList";
import CTA from "@/components/shared/CTA";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All work");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="flex flex-col">
      <ProjectsHero 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <ProjectList 
        activeFilter={activeFilter} 
        viewMode={viewMode}
      />
      <CTA />
    </div>
  );
}
