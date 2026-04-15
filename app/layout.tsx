import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import MouseFollower from "@/components/shared/MouseFollower";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Kefpro Technologies | Building Smart Software Solutions",
  description: "Kefpro Technologies helps businesses grow through innovative digital solutions — web apps, mobile apps, and business automation systems.",
  keywords: ["Software Development", "Web Development", "Mobile Apps", "Business Automation", "Kefpro Technologies"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <MouseFollower />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

