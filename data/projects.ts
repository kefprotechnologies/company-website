export interface Project {
  src: string;
  alt: string;
  category: "Web" | "UI/UX" | "Mobile" | "Branding";
}

export const projects: Project[] = [
  { src: "/projects/electronics.png", alt: "Electronics Repair", category: "Web" },
  { src: "/projects/car.png", alt: "Driving Experience", category: "UI/UX" },
  { src: "/projects/markets.png", alt: "Market App Interface", category: "Mobile" },
  { src: "/projects/farming.png", alt: "Agricultural Technology", category: "Branding" },
  { src: "/projects/robot.png", alt: "Robotic Hand", category: "Web" },
  { src: "/projects/ai.png", alt: "AI 3D Render", category: "UI/UX" },
];

export const projectFilters = ["All work", "UI/UX", "Web", "Mobile", "Branding"];
