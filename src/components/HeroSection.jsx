export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-fixed-dim/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-fixed-dim/5 rounded-full blur-[150px]"></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto px-[32px] grid grid-cols-1 lg:grid-cols-12 gap-[16px] items-center z-10 py-16">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 border border-outline-variant rounded-full px-4 py-1.5 w-fit bg-surface-container/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              System Online
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-on-surface">
            Cloud &amp; DevOps{" "}
            <span className="text-primary-fixed-dim">Fresher</span>
          </h1>

          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl text-lg">
            Final-year Software Engineering student transitioning from Frontend Development to Cloud & DevOps.
          </p>

          <p className="font-code-md text-code-md text-on-surface-variant max-w-2xl border-l-2 border-primary-fixed-dim/50 pl-4 py-2 bg-surface-container-low/30">
            Hands-on experience with AWS, Docker, Linux, CI/CD, Nginx, and
            application deployment pipelines.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="/Tran-Dinh-Phi-Hung-DevOps.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-6 py-3 rounded hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                description
              </span>
              View Resume
            </a>
          </div>
        </div>

        {/* Terminal Visual */}
        <div className="lg:col-span-5 w-full mt-12 lg:mt-0">
          <div className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-2xl relative">
            {/* Terminal Header */}
            <div className="bg-surface-container-high border-b border-outline-variant px-4 py-2 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error/80"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim/80"></div>
                <div className="w-3 h-3 rounded-full bg-primary-fixed-dim/80"></div>
              </div>
              <span className="font-code-md text-label-sm text-on-surface-variant">
                bash - hng.dev
              </span>
              <div className="w-4"></div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-code-md text-code-md text-on-surface-variant flex flex-col gap-3">
              <div className="flex gap-2">
                <span className="text-primary-fixed-dim">hng@system:~$</span>
                <span className="text-on-surface">whoami</span>
              </div>
              <div className="pl-4 text-on-surface">Tran Dinh Phi Hung</div>

              <div className="flex gap-2 mt-2">
                <span className="text-primary-fixed-dim">hng@system:~$</span>
                <span className="text-on-surface">role</span>
              </div>
              <div className="pl-4 text-on-surface">Cloud &amp; DevOps Fresher</div>

              <div className="flex gap-2 mt-2">
                <span className="text-primary-fixed-dim">hng@system:~$</span>
                <span className="text-on-surface">focus</span>
              </div>
              <div className="pl-4 text-secondary-fixed-dim">
                AWS • Docker • Linux • CI/CD
              </div>

              <div className="flex gap-2 mt-2">
                <span className="text-primary-fixed-dim">hng@system:~$</span>
                <span className="text-on-surface">status</span>
              </div>
              <div className="pl-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-ping"></div>
                <span className="text-primary-fixed-dim">
                  Open to opportunities
                </span>
              </div>

              <div className="flex gap-2 mt-2">
                <span className="text-primary-fixed-dim">hng@system:~$</span>
                <span className="w-2 h-5 bg-on-surface-variant animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Ticker */}
      <div className="absolute bottom-0 w-full border-t border-b border-outline-variant bg-surface-container-low py-3 overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-[32px] flex items-center gap-8 font-code-md text-label-sm text-on-surface-variant/70 whitespace-nowrap">
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-primary-fixed-dim">
              cloud
            </span>{" "}
            AWS
          </span>
          <span className="text-outline-variant">/</span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-primary-fixed-dim">
              deployed_code
            </span>{" "}
            Docker
          </span>
          <span className="text-outline-variant">/</span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-primary-fixed-dim">
              terminal
            </span>{" "}
            Linux
          </span>
          <span className="text-outline-variant">/</span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-primary-fixed-dim">
              integration_instructions
            </span>{" "}
            GitLab CI/CD
          </span>
          <span className="text-outline-variant">/</span>
          <span>Nginx</span>
          <span className="text-outline-variant">/</span>
          <span>PostgreSQL</span>
          <span className="text-outline-variant">/</span>
          <span>Redis</span>
          <span className="text-outline-variant">/</span>
          <span>React</span>
          <span className="text-outline-variant">/</span>
          <span>Spring Boot</span>
        </div>
      </div>
    </section>
  );
}
