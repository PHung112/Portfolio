export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-[calc(100vh-4rem)] flex items-center bg-surface relative border-b border-outline-variant py-16"
    >
      <div className="max-w-[1280px] mx-auto px-[32px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: Text */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="font-code-md text-label-sm text-primary-fixed-dim border border-primary-fixed-dim/30 px-2 py-1 bg-primary-fixed-dim/10">
                01
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                About Me
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              My background started in frontend development,
              where I worked with React and full-stack applications.
              Through hands-on AWS training and deployment projects,
              I became increasingly interested in the infrastructure behind applications.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              I am now focusing on Cloud & DevOps, with practical experience in AWS,
              Docker, Linux, CI/CD, Nginx, and application deployment.
            </p>
          </div>

          {/* Right: Evolution Timeline */}
          <div className="md:col-span-7 bg-surface-container border border-outline-variant p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 font-code-md text-[10px] text-outline-variant">
              My Learning Path
            </div>
            <h3 className="font-label-sm text-label-sm text-on-surface mb-8 uppercase tracking-widest text-center">
              Evolution of Competence
            </h3>

            <div className="flex flex-col gap-2 w-full max-w-md mx-auto font-code-md text-code-md relative">
              {/* Connecting Line */}
              <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-outline-variant z-0"></div>

              {[
                { icon: "code", label: "Software Development" },
                { icon: "cloud_queue", label: "Cloud Fundamentals" },
                { icon: "terminal", label: "Docker & Linux" },
                { icon: "sync_alt", label: "CI/CD Pipelines" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-6 relative z-10 group"
                >
                  <div className="w-12 h-12 rounded-full bg-surface border border-outline flex items-center justify-center shrink-0 group-hover:border-primary-fixed-dim transition-colors">
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                      {icon}
                    </span>
                  </div>
                  <div className="flex-1 bg-surface border border-outline-variant p-3 group-hover:border-primary-fixed-dim/50 transition-colors">
                    {label}
                  </div>
                </div>
              ))}

              {/* Final / Active */}
              <div className="flex items-center gap-6 relative z-10 group">
                <div className="w-12 h-12 rounded-full bg-primary-container border border-primary-fixed-dim shadow-[0_0_15px_rgba(0,245,255,0.2)] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary-container text-[20px]">
                    architecture
                  </span>
                </div>
                <div className="flex-1 bg-surface-container-high border border-primary-fixed-dim/50 text-primary-fixed-dim p-3 font-bold">
                  Cloud &amp; DevOps
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
