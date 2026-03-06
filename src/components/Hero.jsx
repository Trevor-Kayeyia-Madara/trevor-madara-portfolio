import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const tagline = 'Full-Stack Software Engineer | SaaS & Cybersecurity';
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < tagline.length) {
      const timeout = setTimeout(() => {
        setText(text + tagline[idx]);
        setIdx(idx + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [idx, text]);

  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-5 bg-[#0F111A] relative overflow-hidden">
      
      {/* Floating neon circles */}
      <div className="absolute w-full h-full top-0 left-0">
        <motion.div
          className="absolute w-40 h-40 bg-[#00FFA3]/20 rounded-full top-10 left-10 animate-pulse-slow"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
        <motion.div
          className="absolute w-60 h-60 bg-[#DC1FFF]/20 rounded-full bottom-20 right-20 animate-pulse-slow"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
      </div>

      <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-4 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Trevor Madara Kayeyia
      </motion.h1>

      <motion.p className="text-lg md:text-xl text-gray-400 mb-8 z-10">
        {text}<span className="text-[#00FFA3]">|</span>
      </motion.p>

      <motion.a
        href="#contact"
        className="px-8 py-4 bg-gradient-to-br from-[#00FFA3] to-[#DC1FFF] text-white rounded-xl shadow-[0_0_20px_rgba(0,255,163,0.45)] hover:scale-105 animate-pulse-button transition font-medium z-10"
      >
        Contact Me
      </motion.a>
    </section>
  );
}