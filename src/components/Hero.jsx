import React from "react";
export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center px-4">
    <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Abdalla Gamal</h1>
        <p className="text-xl md:text-2xl mb-6">
        Front-End Developer & Graphic Designer ✨
        </p>
        <a
        href="#projects"
        className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
        View My Projects
        </a>
    </div>
    </section>
  );
}
