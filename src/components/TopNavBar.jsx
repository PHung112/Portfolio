import { useEffect, useState } from "react";

const SECTIONS = ["overview", "about", "projects", "experience", "contact"];

export default function TopNavBar() {
  const [active, setActive] = useState("overview");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = SECTIONS.map((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          threshold: 0.3,
        }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs && obs.disconnect());
    };
  }, []);

  return (
    <div
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-surface-container-high transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <header className="flex items-center justify-between whitespace-nowrap px-margin_mobile md:px-margin_desktop py-4 max-w-container_max mx-auto w-full">
        <a href="#overview" className="flex items-center gap-4 text-primary">
          <div className="size-6">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold font-display tracking-tight text-on-surface">
            Phi Hung <span className="text-primary font-medium text-sm">/ Web Developer</span>
          </h2>
        </a>

        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-8">
            {SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link text-on-surface-variant hover:text-on-surface text-sm font-medium transition-colors py-1 capitalize ${
                  active === id ? "active" : ""
                }`}
              >
                {id}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary hover:bg-primary/90 text-on-primary text-sm font-bold transition-colors shadow-sm"
          >
            Contact
          </a>
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden text-on-surface p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-surface-container-high px-6 py-4 flex flex-col gap-4">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`nav-link text-on-surface-variant hover:text-on-surface text-base font-medium py-1 capitalize ${
                active === id ? "active" : ""
              }`}
            >
              {id}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary hover:bg-primary/90 text-on-primary text-sm font-bold transition-colors shadow-sm"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

