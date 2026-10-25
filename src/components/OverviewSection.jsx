export default function OverviewSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-margin_mobile md:px-margin_desktop relative bg-background"
      id="overview"
    >
      <div className="max-w-container_max w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Content (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 z-10">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-md text-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              Available for Intern / Fresher Roles
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-container border border-outline-variant text-on-surface-variant">
              Frontend &amp; Fullstack
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-on-surface tracking-tight leading-tight">
            Hi, I'm <span className="text-primary">Tran Dinh Phi Hung</span>.
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-on-surface-variant">
            Junior Web Developer <span className="text-primary font-normal">|</span> React &amp; Spring Boot / Node.js
          </h2>

          <p className="text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Final-year Software Engineering student passionate about building
            clean, responsive web applications and practical AI-assisted features.
            Hands-on experience in <strong>React</strong>, <strong>TypeScript</strong>,{" "}
            <strong>Spring Boot</strong>, and integrating <strong>Google Gemini API</strong>{" "}
            to deliver intuitive user experiences.
          </p>

          {/* Key Metric Tags */}
          <div className="grid grid-cols-3 gap-3 py-2 max-w-lg border-y border-outline-variant/60 my-1">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary font-display">3 Projects</span>
              <span className="text-xs text-on-surface-variant">Hands-on Web Apps</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary font-display">Gemini API</span>
              <span className="text-xs text-on-surface-variant">Task WBS &amp; Chatbots</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary font-display">Full-Stack</span>
              <span className="text-xs text-on-surface-variant">React + Spring Boot</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              className="flex items-center justify-center rounded-xl h-12 px-6 bg-primary hover:bg-primary/90 text-on-primary text-base font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 gap-2"
              href="#projects"
            >
              <span className="material-symbols-outlined text-lg">explore</span>
              View My Projects
            </a>
            <a
              className="flex items-center justify-center rounded-xl h-12 px-6 bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant hover:border-outline text-base font-bold transition-all shadow-sm gap-2"
              href="#contact"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Avatar & Glow Card (5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-2xl opacity-60"></div>

            {/* Avatar Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2.5 bg-gradient-to-tr from-primary to-secondary image-glow shadow-2xl">
              <img
                alt="Tran Dinh Phi Hung"
                className="w-full h-full object-cover rounded-full border-4 border-surface-container-lowest"
                src="/ai.png"
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute -bottom-3 -left-4 bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/80 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary text-xl">smart_toy</span>
              <div className="text-left">
                <p className="text-[10px] text-outline uppercase font-bold tracking-wider">Applied AI</p>
                <p className="text-xs font-bold text-on-surface">Gemini API &amp; JSON Parsing</p>
              </div>
            </div>

            <div className="absolute -top-3 -right-4 bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/80 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary text-xl">speed</span>
              <div className="text-left">
                <p className="text-[10px] text-outline uppercase font-bold tracking-wider">Web Features</p>
                <p className="text-xs font-bold text-on-surface">WebSocket &amp; Redis Cache</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors animate-bounce"
        href="#about"
      >
        <span className="text-xs font-semibold tracking-wider uppercase">Scroll Down</span>
        <span className="material-symbols-outlined text-base">arrow_downward</span>
      </a>
    </section>
  );
}
