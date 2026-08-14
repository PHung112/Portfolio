export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full min-h-[calc(100vh-4rem)] flex items-center bg-surface-container-lowest border-b border-outline-variant relative overflow-hidden py-16"
    >
      {/* Matrix BG */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, #dce4e4 1px, #dce4e4 2px)",
          backgroundSize: "100% 4px",
        }}
      ></div>

      <div className="max-w-[1280px] mx-auto px-[32px] relative z-10 w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <span className="font-code-md text-label-sm text-primary-fixed-dim border border-primary-fixed-dim/30 px-2 py-1 bg-primary-fixed-dim/10">
              03
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Technical Skills
            </h2>
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* DevOps & Automation */}
          <div className="bg-surface border border-outline-variant p-6 hover:border-primary-fixed-dim/50 transition-colors group flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">
                DevOps &amp; Automation
              </span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-fixed-dim transition-colors">
                settings_applications
              </span>
            </div>
            <div className="flex flex-col gap-3 font-code-md text-code-md text-on-surface-variant flex-1">
              {[
                { name: "Docker", desc: "Containerization & application packaging" },
                { name: "Docker Compose", desc: "Multi-container deployment" },
                { name: "GitLab CI/CD", desc: "Automated build & deployment" },
                { name: "Nginx", desc: "Reverse proxy & traffic routing" },
                { name: "Linux/Ubuntu", desc: "OS & server administration" },
                { name: "Cloudflare", desc: "DNS & edge security" },
              ].map(({ name, desc }) => (
                <div
                  key={name}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-outline-variant/30 pb-2 last:border-0 last:pb-0 gap-1"
                >
                  <span className="text-on-surface font-semibold shrink-0">{name}</span>
                  <span className="text-[11px] sm:text-[12px] text-on-surface-variant/70 sm:text-right">
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud Infrastructure */}
          <div className="bg-surface border border-outline-variant p-6 hover:border-primary-fixed-dim/50 transition-colors group relative overflow-hidden flex flex-col">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary-fixed-dim/10 rounded-full blur-xl group-hover:bg-primary-fixed-dim/20 transition-all pointer-events-none"></div>
            <div className="flex items-center justify-between mb-6 relative z-10">
              <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">
                Cloud Infrastructure
              </span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-fixed-dim transition-colors">
                cloud
              </span>
            </div>
            <div className="flex flex-wrap content-start gap-2 font-code-md text-label-sm relative z-10 flex-1">
              {[
                "AWS EC2",
                "VPC",
                "IAM",
                "S3",
                "EBS",
                "RDS PostgreSQL",
                "ElastiCache Redis",
                "CloudFront",
                "Route 53",
                "CloudWatch",
                "AWS Backup",
                "Azure",
              ].map((service) => (
                <span
                  key={service}
                  className="px-3 py-1.5 border border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:border-primary-fixed-dim/50 transition-colors"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Development */}
          <div className="bg-surface border border-outline-variant p-6 hover:border-primary-fixed-dim/50 transition-colors group flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">
                Development
              </span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-fixed-dim transition-colors">
                code
              </span>
            </div>
            <div className="flex flex-wrap content-start gap-2 font-code-md text-label-sm flex-1">
              {["JavaScript", "TypeScript", "React", "Spring Boot", "Node.js", "REST API"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 border border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:border-primary-fixed-dim/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Database & Tools */}
          <div className="bg-surface border border-outline-variant p-6 hover:border-primary-fixed-dim/50 transition-colors group flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">
                Database &amp; Tools
              </span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-fixed-dim transition-colors">
                database
              </span>
            </div>
            <div className="flex flex-wrap content-start gap-2 font-code-md text-label-sm flex-1">
              {["MySQL", "PostgreSQL", "Git", "GitHub", "GitLab", "Postman", "Swagger"].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 border border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:border-primary-fixed-dim/50 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-8 border border-outline-variant bg-surface-container p-4 lg:p-5 flex flex-wrap items-center justify-center gap-3 md:gap-6 font-code-md text-[13px] text-on-surface-variant text-center hover:border-primary-fixed-dim/30 transition-colors">
          <span className="hover:text-on-surface transition-colors">Self-learning &amp; Adaptability</span>
          <span className="hidden md:block text-primary-fixed-dim/50">•</span>
          <span className="hover:text-on-surface transition-colors">Communication &amp; Teamwork</span>
          <span className="hidden md:block text-primary-fixed-dim/50">•</span>
          <span className="hover:text-on-surface transition-colors">Responsibility &amp; Ownership</span>
          <span className="hidden md:block text-primary-fixed-dim/50">•</span>
          <span className="hover:text-on-surface transition-colors">Technical English Reading</span>
        </div>
      </div>
    </section>
  );
}
