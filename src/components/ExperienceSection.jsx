export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full bg-surface relative border-b border-outline-variant py-24"
    >
      <div className="max-w-[1280px] mx-auto px-[32px] w-full">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-code-md text-label-sm text-primary-fixed-dim border border-primary-fixed-dim/30 px-2 py-1 bg-primary-fixed-dim/10">
            02
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Experience &amp; Training
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl">
          <div className="border-l border-outline-variant ml-4 pl-8 relative pb-4">
            {/* Glowing dot */}
            <div className="absolute w-3 h-3 bg-primary-fixed-dim rounded-full -left-[6.5px] top-1 shadow-[0_0_10px_rgba(0,220,229,0.6)]"></div>

            <span className="font-code-md text-label-sm text-primary-fixed-dim block mb-3 uppercase tracking-widest">
              Recent
            </span>
            <h3 className="font-headline-lg-mobile text-[20px] text-on-surface mb-1">
              First Cloud AI Journey (FCAJ)
            </h3>
            <p className="font-code-md text-sm text-on-surface-variant mb-3">
              Cloud &amp; DevOps Bootcamp · AWS Vietnam
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
              Intensive program focusing on practical cloud infrastructure
              deployment, AWS services, and modern DevOps methodologies.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["AWS", "Docker", "Linux", "CI/CD", "Nginx"].map((tag) => (
                <span
                  key={tag}
                  className="border border-outline-variant px-2 py-1 font-code-md text-[10px] text-on-surface-variant bg-surface-container-low"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
