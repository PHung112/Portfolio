import { useState, useEffect, useRef, useLayoutEffect } from "react";

const NAV_ITEMS = [
  { label: "HOME", href: "hero" },
  { label: "ABOUT", href: "about" },
  { label: "EXPERIENCE", href: "experience" },
  { label: "SKILLS", href: "skills" },
  { label: "PROJECTS", href: "projects" },
  { label: "CONTACT", href: "contact" },
];

const NAVBAR_HEIGHT = 64;

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  // Key refs by section href (= section id) for direct lookup
  const navRefs = useRef({});
  const navContainerRef = useRef(null);

  useEffect(() => {
    const TRACK_SECTIONS = ["hero", "about", "experience", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // At top
      if (scrollY < 50) {
        setActiveSection("hero");
        return;
      }

      let current = "hero";
      // Threshold: a section is considered active if its top is above 1/3 of the screen height
      const threshold = NAVBAR_HEIGHT + (window.innerHeight / 3);

      for (const id of TRACK_SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= threshold) {
            current = id;
          }
        }
      }

      // If user scrolled to the absolute bottom of the page, force "contact" as active
      if (window.innerHeight + Math.round(scrollY) >= document.body.offsetHeight - 20) {
        current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Move the sliding indicator to the active nav element
  useLayoutEffect(() => {
    const updateIndicator = () => {
      // activeSection === href === section id, so look up by activeSection directly
      const el = navRefs.current[activeSection];
      const container = navContainerRef.current;
      if (el && container) {
        const elRect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setIndicatorStyle({
          left: elRect.left - containerRect.left,
          width: elRect.width,
          opacity: 1,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href);
    if (el) {
      const elementTop = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementTop - NAVBAR_HEIGHT, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant">
      <div className="h-16 w-full max-w-[1280px] mx-auto px-[32px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            alt="Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEwGp7Ptf1oHNNJAHBm35xrkN9gusodYumNYYUwiXQPHVKGFV2oo-8VYXG3o1LTVnIrdXiAlHJHcmZxaH27rE2AJD3tMXx2W-nLJRPHIQGmMa65V_Qkczz2tex-XAcReghC_T8ErcMuDG-wsU3U8gisirLU6D7jpgE6ZblluCFXUDa1ivrdusyDGNQD8HZ-QdruJXqmDMQvjEMjq9DDBx7QDvC3J4t8ffjXy_S8L9KFQ-AKX2TC5yF"
          />
          <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight hidden sm:block">
            Portfolio
          </span>
        </div>

        {/* Nav with sliding indicator */}
        <nav ref={navContainerRef} className="hidden lg:flex items-center gap-8 relative">
          {/* Sliding underline */}
          <span
            className="absolute bottom-[-22px] h-0.5 bg-primary-fixed-dim rounded-full transition-all duration-300 ease-in-out"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              opacity: indicatorStyle.opacity,
            }}
          />

          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = activeSection === href;
            return (
              <a
                key={href}
                // Store ref keyed by href (= section id) so lookup is trivial
                ref={(el) => { navRefs.current[href] = el; }}
                href={`#${href}`}
                onClick={(e) => scrollToSection(e, href)}
                className={`font-label-sm text-label-sm transition-colors duration-200 cursor-pointer ${isActive
                    ? "text-primary-fixed-dim font-bold"
                    : "text-on-surface-variant hover:text-on-surface"
                  }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <a
            className="hidden md:flex h-9 items-center px-4 rounded border border-outline text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-all"
            href="/Tran-Dinh-Phi-Hung-DevOps.pdf"
            download="Tran-Dinh-Phi-Hung-DevOps.pdf"
          >
            Download CV
          </a>
          <a
            className="flex h-9 items-center px-4 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-all"
            href="https://github.com/PHung112"
            target="_blank"
            rel="noreferrer"
          >
            View Github
          </a>
        </div>
      </div>
    </header>
  );
}
