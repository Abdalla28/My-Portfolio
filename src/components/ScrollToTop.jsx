import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        bottom-6 right-6
        sm:bottom-8 sm:right-8
        xs:bottom-4 xs:right-4
        p-3 sm:p-4
        rounded-full
        bg-blue-500 hover:bg-blue-600
        text-white
        shadow-lg
        transition-opacity duration-300
        z-50
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      style={{
        // Make sure it doesn't overflow on very small screens
        maxWidth: "90vw",
        maxHeight: "90vw",
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
}