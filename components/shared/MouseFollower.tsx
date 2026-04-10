"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseFollower() {
  const [mounted, setMounted] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create staggered springs
  const s1 = { x: useSpring(mouseX, { stiffness: 500, damping: 28 }), y: useSpring(mouseY, { stiffness: 500, damping: 28 }) };
  const s2 = { x: useSpring(mouseX, { stiffness: 250, damping: 24 }), y: useSpring(mouseY, { stiffness: 250, damping: 24 }) };
  const s3 = { x: useSpring(mouseX, { stiffness: 150, damping: 20 }), y: useSpring(mouseY, { stiffness: 150, damping: 20 }) };
  const s4 = { x: useSpring(mouseX, { stiffness: 100, damping: 18 }), y: useSpring(mouseY, { stiffness: 100, damping: 18 }) };
  const s5 = { x: useSpring(mouseX, { stiffness: 80, damping: 16 }), y: useSpring(mouseY, { stiffness: 80, damping: 16 }) };

  const trail = [s1, s2, s3, s4, s5];

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {trail.map((pos, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 rounded-full bg-[#00a3e0] pointer-events-none z-[9999] hidden md:block"
          style={{
            x: pos.x,
            y: pos.y,
            translateX: "-50%",
            translateY: "-50%",
            width: 12 - i * 2,
            height: 12 - i * 2,
            opacity: 0.4 - i * 0.07,
          }}
        />
      ))}
    </>
  );
}
