import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-8 right-8 z-50
        w-11 h-11 rounded-full
        bg-primary-container border border-primary-fixed-dim/50
        text-on-primary-container
        flex items-center justify-center
        shadow-[0_0_20px_rgba(0,220,229,0.25)]
        hover:bg-primary-fixed-dim hover:text-on-primary-fixed hover:shadow-[0_0_28px_rgba(0,220,229,0.45)]
        transition-all duration-300 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
    </button>
  );
}
