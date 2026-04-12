import { useEffect, useState } from "react";

export default function TopNavBar() {
  const [active, setActive] = useState("overview");
  const sections = ["overview", "about", "projects", "experience", "contact"];
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const el = document.getElementById(`nav-${active}`);
    if (el) {
      setUnderlineStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [active]);

  useEffect(() => {
    const observers = sections.map((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          threshold: 0.5,
        },
      );

      observer.observe(section);

      return observer;
    });

    // cleanup
    return () => {
      observers.forEach((obs) => obs && obs.disconnect());
    };
  }, []);
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl shadow-xl shadow-indigo-500/5">
      <div className=" max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-amber-50 font-inter">
          Portfolio
        </div>
        <div className="relative hidden md:flex gap-8 items-center">
          <a
            id="nav-overview"
            href="#overview"
            className={`pb-1 ${
              active === "overview"
                ? "text-indigo-400 "
                : "text-slate-400 hover:text-slate-100"
            }`}
          >
            Overview
          </a>
          <a
            id="nav-about"
            className={`pb-1 ${
              active === "about"
                ? "text-indigo-400 "
                : "text-slate-400 hover:text-slate-100"
            }`}
            href="#about"
          >
            About
          </a>
          <a
            id="nav-projects"
            className={`pb-1 ${
              active === "projects"
                ? "text-indigo-400 "
                : "text-slate-400 hover:text-slate-100"
            }`}
            href="#projects"
          >
            Projects
          </a>
          <a
            id="nav-experience"
            className={`pb-1 ${
              active === "experience"
                ? "text-indigo-400 "
                : "text-slate-400 hover:text-slate-100"
            }`}
            href="#experience"
          >
            Experience
          </a>
          <a
            id="nav-contact"
            className={`pb-1 ${
              active === "contact"
                ? "text-indigo-400 "
                : "text-slate-400 hover:text-slate-100"
            }`}
            href="#contact"
          >
            Contact
          </a>
          <div
            className="absolute bottom-0 h-[2px] bg-indigo-500 transition-all duration-300 ease-in-out"
            style={underlineStyle}
          />
        </div>
        <a
          href="/CV-FrontEnd.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-container text-on-primary-container px-6 py-2 rounded-xl font-semibold hover:opacity-90 transition-all active:scale-95"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
