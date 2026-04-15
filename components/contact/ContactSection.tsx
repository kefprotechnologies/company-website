"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const phoneNumbers = [
  "0532761726",
  "0544131731",
  "0550398837",
  "0536610003",
  "0123855131",
];

const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter / X" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simulate async submit — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="bg-[#0f172a] py-24 md:py-32 relative overflow-hidden">
      {/* subtle grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ── Left: Contact Info ── */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Contact Information
              </h2>
              <p className="text-slate-400 font-medium leading-relaxed">
                Reach out through any of the channels below.
              </p>
            </div>

            {/* Phone */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00a3e0]" />
                <h3 className="text-white font-bold text-lg">Phone Numbers</h3>
              </div>
              <ul className="ml-8 space-y-2">
                {phoneNumbers.map((num) => (
                  <li key={num}>
                    <a
                      href={`tel:${num}`}
                      className="text-slate-400 hover:text-[#00a3e0] transition-colors font-medium"
                    >
                      {num}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00a3e0]" />
                <h3 className="text-white font-bold text-lg">Email</h3>
              </div>
              <a
                href="mailto:info@kefprotechnologies.com"
                className="ml-8 text-slate-400 hover:text-[#00a3e0] transition-colors font-medium block"
              >
                info@kefprotechnologies.com
              </a>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Follow Us</h3>
              <div className="flex items-center gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00a3e0] hover:text-[#0092c9] transition-all duration-200"
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <div className="space-y-2 mb-8">
              <h2 className="text-2xl font-bold text-white">Send us a message</h2>
              <p className="text-[#00a3e0] text-sm font-semibold">
                Fill out the form and we&apos;ll respond promptly.
              </p>
            </div>

            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#00a3e0]/15 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-[#00a3e0]" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-400 max-w-xs font-medium">
                  Thanks for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-[#00a3e0] hover:underline font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-white"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm font-medium focus:outline-none focus:border-[#00a3e0] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-white"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm font-medium focus:outline-none focus:border-[#00a3e0] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you"
                    className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm font-medium focus:outline-none focus:border-[#00a3e0] transition-colors resize-none"
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#00a3e0] hover:bg-[#0092c9] disabled:opacity-60 text-white font-bold py-4 rounded-lg transition-all duration-200 text-sm tracking-wide"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
