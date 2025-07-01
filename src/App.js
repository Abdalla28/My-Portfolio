import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from "./components/Footer";
import Certificates from './components/Certificates';
import './index.css';
import './GlobalStyles.css';

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CustomCursor() {
  const cursorRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ripplePos, setRipplePos] = useState(null);
  const rippleTimeout = useRef(null);

  // For smooth trailing effect
  const trailingRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Hover effect on links/buttons/hoverable
    const hoverEls = document.querySelectorAll("a, button, .hoverable");
    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
      el.addEventListener("click", (ev) => {
        setRipplePos({ x: ev.clientX, y: ev.clientY });
        clearTimeout(rippleTimeout.current);
        rippleTimeout.current = setTimeout(() => setRipplePos(null), 600);
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      clearTimeout(rippleTimeout.current);
    };
  }, []);

  // Animate trailing cursor position
  useEffect(() => {
    let animationFrame;

    const followMouse = () => {
      const { x, y } = trailingRef.current;
      const dx = position.x - x;
      const dy = position.y - y;
      trailingRef.current = {
        x: x + dx * 0.15,
        y: y + dy * 0.15,
      };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${trailingRef.current.x}px, ${trailingRef.current.y}px, 0)`;
      }
      animationFrame = requestAnimationFrame(followMouse);
    };

    followMouse();

    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${hovered ? "hovered" : ""}`}
        style={{
          left: 0,
          top: 0,
          position: "fixed",
          pointerEvents: "none",
          width: hovered ? 48 : 24,
          height: hovered ? 48 : 24,
          borderRadius: "50%",
          border: "2px solid white",
          backgroundColor: hovered ? "rgba(167,139,250,0.3)" : "transparent",
          transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",
          mixBlendMode: "difference",
          transform: "translate3d(-50%, -50%, 0)",
          zIndex: 9999,
        }}
      />

      {ripplePos && (
        <span
          style={{
            position: "fixed",
            left: ripplePos.x,
            top: ripplePos.y,
            width: 60,
            height: 60,
            borderRadius: "50%",
            backgroundColor: "rgba(167,139,250,0.4)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            animation: "ripple 0.6s ease-out",
            zIndex: 9998,
          }}
        />
      )}

      <style>{`
        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}


function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        key="main-app"
      >
        <CustomCursor />
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <About />
        <Projects />
        <Certificates />
        <Contact />
        <ScrollToTop />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}


export default App;
