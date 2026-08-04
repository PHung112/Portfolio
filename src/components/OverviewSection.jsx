export default function OverviewSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center pt-20 px-margin_mobile md:px-margin_desktop relative bg-background"
      id="overview"
    >
      <div className="max-w-container_max w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-grid_gutter items-center">
        <div className="flex flex-col gap-6 z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-surface-container border border-outline-variant w-max">
            <span className="text-primary text-sm font-medium font-label-md">
              Available for work
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-on-surface">
            Hi, I'm <span className="text-primary">Tran Dinh Phi Hung</span>.
          </h1>
          <h2 className="text-headline-md font-headline-md text-on-surface-variant">
            FrontEnd Developer (Open to Fullstack)
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-lg mt-2">
            Final-year Software Engineering student seeking a Frontend Intern
            position. Strong in ReactJS and building responsive web
            applications, with hands-on experience in real-world projects
            involving authentication, dashboards, and performance optimization.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-on-primary text-base font-bold transition-all shadow-sm hover:shadow-md"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="flex items-center justify-center rounded-lg h-12 px-6 bg-surface hover:bg-surface-container text-on-surface border border-outline text-base font-bold transition-colors"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-primary-container to-secondary-container image-glow shadow-xl">
            <img
              alt="Tran Dinh Phi Hung"
              className="w-full h-full object-cover rounded-full border-4 border-surface-container-lowest"
              src="/ai.png"
            />
          </div>
        </div>
      </div>
      <a
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-on-surface-variant hover:text-primary transition-colors animate-bounce"
        href="#about"
      >
        <span className="text-sm font-medium">Scroll Down</span>
        <span className="material-symbols-outlined">arrow_downward</span>
      </a>
    </section>
  );
}

