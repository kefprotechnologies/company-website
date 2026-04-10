import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] pt-16 md:pt-24 pb-12 text-slate-400 overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 mb-16 md:mb-24">
          {/* Logo & Info */}
          <div className="space-y-6 md:space-y-8 max-w-sm">
            <Link href="/" className="flex items-center">
              <Image
                src="/KefproLight.png"
                alt="Kefpro Technologies"
                width={140}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm md:text-md leading-relaxed text-slate-500 font-medium font-medium">
              Kefpro Technologies builds smart software solutions for businesses
              and organizations. Your Concern, Our Solution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 md:gap-24 lg:contents">
            {/* Quick Links */}
            <div className="space-y-6 md:space-y-8">
              <h4 className="text-white font-bold text-lg md:text-xl tracking-tight">
                Quick Links
              </h4>
              <ul className="grid grid-cols-1 gap-4 font-medium">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-[#00a3e0] transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="space-y-6 md:space-y-8">
              <h4 className="text-white font-bold text-lg md:text-xl tracking-tight">
                Get in Touch
              </h4>
              <div className="space-y-2 font-medium text-slate-500">
                <p>{footerLinks.contact.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900/50 text-center">
          <p className="text-gray-500 text-xs md:text-sm font-medium">
            © 2026 <span className="text-gray-400">Kefpro Technologies</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
