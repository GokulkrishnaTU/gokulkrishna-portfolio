"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Fine-tuning the scroll range based on the 600vh parent
  // We'll scale sections inside 0% to 80% scroll out of the full container.

  // Section 1: Hero (0% to 15%)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // Section 2: Experience (30% to 45%)
  const expOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const expY = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [50, 0, 0, -50]);

  // Section 3: Stats (60% to 75%)
  const statsOpacity = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
  const statsY = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [50, 0, 0, -50]);

  // Section 4: Skills (85% to 95%) 
  const skillsOpacity = useTransform(scrollYProgress, [0.85, 0.9, 0.95, 1], [0, 1, 1, 0]);
  const skillsY = useTransform(scrollYProgress, [0.85, 0.9, 0.95, 1], [50, 0, 0, -50]);

  // Subtle blur effect using a scale or direct CSS filter on transforms wasn't directly requested,
  // but we can add filter: blur(x) with useTransform by composing it:
  const heroBlur = useTransform(scrollYProgress, [0.1, 0.15], [0, 10]);
  const expBlur = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [10, 0, 0, 10]);
  const statsBlur = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [10, 0, 0, 10]);
  const skillsBlur = useTransform(scrollYProgress, [0.85, 0.9, 0.95, 1], [10, 0, 0, 10]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex flex-col items-center justify-center">

      {/* Hero Section */}
      <motion.div
        style={{
          opacity: heroOpacity,
          y: heroY,
          filter: useTransform(heroBlur, (b) => `blur(${b}px)`)
        }}
        className="absolute flex flex-col items-center text-center px-4"
      >
        <h1 className="tracking-tighter text-6xl md:text-8xl font-bold mb-4 drop-shadow-2xl">
          Gokul Krishna
        </h1>
        <p className="text-xl md:text-3xl text-white/60 font-medium">
          Fullstack Developer & UI Engineer
        </p>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        style={{
          opacity: expOpacity,
          y: expY,
          filter: useTransform(expBlur, (b) => `blur(${b}px)`)
        }}
        className="absolute flex flex-col items-center text-center max-w-3xl px-6"
      >
        <h2 className="tracking-tight text-4xl md:text-6xl font-semibold mb-6 drop-shadow-lg">
          Based in Dubai, UAE.
        </h2>
        <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl">
          Specializing in the MERN stack and high-performance web ecosystems for the Automillennium Group.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        style={{
          opacity: statsOpacity,
          y: statsY,
          filter: useTransform(statsBlur, (b) => `blur(${b}px)`)
        }}
        className="absolute flex flex-col items-center text-center max-w-3xl px-6"
      >
        <h2 className="tracking-tight text-4xl md:text-6xl font-semibold mb-6 drop-shadow-lg">
          Performance Engineering.
        </h2>
        <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
          <span className="text-white font-semibold">60%</span> improvement in data fetching.<br />
          <span className="text-white font-semibold">40%</span> increase in system efficiency.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        style={{
          opacity: skillsOpacity,
          y: skillsY,
          filter: useTransform(skillsBlur, (b) => `blur(${b}px)`)
        }}
        className="absolute flex flex-col items-center text-center px-4 w-full"
      >
        <h2 className="tracking-widest text-lg md:text-2xl font-medium text-white/80 uppercase">
          Next.js • TypeScript • Cloudflare • Framer Motion • Node.js
        </h2>
      </motion.div>

    </div>
  );
}
