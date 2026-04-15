export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  color: string;
  description: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Daniel Amankwaah Debrah",
    role: "Founder & CEO",
    initials: "DD",
    color: "bg-blue-600",
    description: "Visionary leader driving Kefpro's mission to deliver innovative digital solutions across Africa and beyond.",
    image: "/team/daniel.png",
  },
  {
    name: "Kephas Tetteh",
    role: "Chief Technology Officer",
    initials: "KT",
    color: "bg-[#0f172a]",
    description: "Technical strategist ensuring Kefpro leverages the most modern, reliable, and scalable technologies available.",
  },
  {
    name: "Fred Amuzu",
    role: "Full Stack Developer",
    initials: "FA",
    color: "bg-[#0f172a]",
    description: "Versatile engineer who brings ideas to life across the full software stack from database to user interface.",
  },
  {
    name: "Ebenezer Abioye",
    role: "Product Designer",
    initials: "EA",
    color: "bg-amber-600",
    description: "Product thinker who bridges user needs and business goals to craft thoughtful, purposeful digital experiences.",
    image: "/team/eben.png",
  },
  {
    name: "Prosper Nsohlebna Atiah",
    role: "UI/UX & Brand Designer",
    initials: "PA",
    color: "bg-slate-700",
    description: "Creative force shaping Kefpro's visual identity and ensuring every interface is beautiful and intuitive.",
    image: "/team/prosper.png",
  },
];
