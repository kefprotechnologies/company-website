"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-16 md:h-20">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/KefproDark.png"
            alt="Kefpro Technologies"
            width={140}
            height={40}
            className="h-8 md:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                pathname === link.href
                  ? "text-[#00a3e0]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>


        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-[#00a3e0] text-white text-sm font-bold px-8 py-3 rounded-md hover:bg-[#0092c9] transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 md:hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-bold transition-colors ${
                  pathname === link.href ? "text-[#00a3e0]" : "text-gray-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="w-full bg-[#00a3e0] text-white text-center font-bold py-4 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}
