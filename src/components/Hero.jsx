import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
      {/* Background circles for a modern effect */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400 rounded-full opacity-30 animate-pulse"></div>

      <div className="z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Trevor Madara Kayeyia</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Full-Stack Software Engineer | SaaS Entrepreneur | Cybersecurity Enthusiast
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-indigo-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}