import type { ElementType } from "react";
import { Code, Smartphone, LayoutDashboard, Palette, Search, PenTool, Braces, Rocket, MessageSquare, Clock, TrendingUp, ShieldCheck, LifeBuoy, Users } from "lucide-react";

// --- Home page: Services summary cards ---
export const homeServices = [
  {
    title: "Web Development",
    description: "Modern, responsive websites and web applications built for performance.",
    icon: Code,
    color: "bg-emerald-500",
  },
  {
    title: "Mobile Apps",
    description: "Scalable Android and iOS apps to reach your customers everywhere.",
    icon: Smartphone,
    color: "bg-purple-500",
  },
  {
    title: "Business Systems",
    description: "Custom management systems for sales, inventory, and reporting.",
    icon: LayoutDashboard,
    color: "bg-rose-500",
  },
  {
    title: "UI/UX Design",
    description: "Clean, intuitive interfaces that deliver exceptional user experiences.",
    icon: Palette,
    color: "bg-sky-500",
  },
];

// --- Home page: Why choose us reasons ---
export const whyChooseUs = [
  {
    number: "1",
    title: "Skilled & Passionate Team",
    description: "A dedicated crew of developers and designers who care deeply about quality and impact.",
  },
  {
    number: "2",
    title: "Modern Technologies",
    description: "We use cutting-edge, reliable tools to build future-proof digital products.",
  },
  {
    number: "3",
    title: "Scalable Solutions",
    description: "Software architected to grow alongside your business without limitation.",
  },
  {
    number: "4",
    title: "Dedicated Support",
    description: "Continuous improvement and responsive support long after delivery.",
  },
];

// --- Services page: Full service list ---
export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  features: string[];
}

export const serviceList: ServiceItem[] = [
  {
    title: "Mobile Apps",
    description: "Building world-class mobile experiences for every screen.",
    icon: Smartphone,
    color: "bg-emerald-500",
    features: [
      "Native iOS & Android Apps",
      "Full Mobile Product Architecture",
      "App Development Consulting",
      "Robust Backend Portfolio",
    ],
  },
  {
    title: "Web Development",
    description: "Building scalable and performant web applications for modern tasks.",
    icon: Code,
    color: "bg-blue-500",
    features: [
      "Progressive Web Applications",
      "E-commerce Development",
      "Custom CMS Solutions",
      "Legacy System Migration",
    ],
  },
  {
    title: "Full Digital Environment",
    description: "Creating a complete and robust digital ecosystem for your business.",
    icon: Palette,
    color: "bg-purple-500",
    features: [
      "Full UI & UX Design",
      "Detailed Brand Identity",
      "Dynamic Icon Design",
      "Ready-to-use Prototypes",
    ],
  },
];

// --- Services page: Process steps ---
export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  activities: string[];
}

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description: "Understanding your goals, audience, and challenges.",
    icon: Search,
    color: "bg-blue-500",
    activities: [
      "Target Audience Surveys",
      "Analysis Of Existing Solutions",
      "Market Analytics Research",
      "Problem Diagnosis Reporting",
      "Formation Of Usability Documents",
    ],
  },
  {
    title: "Design",
    description: "Creating beautiful, functional designs.",
    icon: PenTool,
    color: "bg-emerald-500",
    activities: [
      "UI Style Guide Definitions",
      "Wireframing & Story-boarding",
      "Visual Identity Consistency",
      "Responsive Site Architecture",
      "Usability Testing",
    ],
  },
  {
    title: "Develop",
    description: "Building your solution with best practices.",
    icon: Braces,
    color: "bg-purple-500",
    activities: [
      "Front End Coding (NEXT.JS)",
      "Back End Logic Development",
      "Database Creation",
      "Quality Assurance Testing",
      "Final Bug Review Sessions",
    ],
  },
  {
    title: "Deploy",
    description: "Launch your solution to the world.",
    icon: Rocket,
    color: "bg-rose-500",
    activities: [
      "Final Sandbox Review",
      "Deployment To Production Environment",
      "Ongoing Performance Monitoring",
      "Post-Launch Support Session",
      "Cloud Integration",
    ],
  },
];

// --- Services page: Why our process works benefits ---
export interface ProcessBenefit {
  title: string;
  description: string;
  icon: React.ElementType;
}

export const processBenefits: ProcessBenefit[] = [
  {
    title: "Clear communication at every stage",
    description: "Stay informed with regular updates and transparent workflows.",
    icon: MessageSquare,
  },
  {
    title: "On-time delivery",
    description: "We value your time and deliver robust solutions within agreed timelines.",
    icon: Clock,
  },
  {
    title: "Scalable solutions",
    description: "Built to grow with your business without technical debt.",
    icon: TrendingUp,
  },
  {
    title: "Quality assurance throughout",
    description: "Rigorous testing protocols to ensure your solution remains error-free.",
    icon: ShieldCheck,
  },
  {
    title: "Post-launch support",
    description: "We remain with you long after deployment to ensure success.",
    icon: LifeBuoy,
  },
  {
    title: "Collaborative decision-making",
    description: "Your input shapes the architecture at every critical junction.",
    icon: Users,
  },
];
