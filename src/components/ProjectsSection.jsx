export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full min-h-[calc(100vh-4rem)] bg-surface border-b border-outline-variant py-16"
    >
      <div className="max-w-[1280px] mx-auto px-[32px]">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-code-md text-label-sm text-primary-fixed-dim border border-primary-fixed-dim/30 px-2 py-1 bg-primary-fixed-dim/10">
            04
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Projects
          </h2>
        </div>



        {/* Project 1: Genzite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 font-code-md text-label-sm text-secondary-fixed-dim">
              <span className="material-symbols-outlined text-[16px]">
                memory
              </span>{" "}
              AI NO-CODE PLATFORM
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
              Genzite
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Cloud deployment contribution for a microservices-based AI application.
              Configured EC2 instances for distinct services,
              implemented RDS for persistent storage, and ElasticCache for
              performance.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "AWS EC2",
                "RDS (Postgres)",
                "ElasticCache",
                "Microservices",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-outline px-2 py-1 font-code-md text-[10px] text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a href="https://github.com/KrisCTer/Genzite" target="_blank" rel="noreferrer" className="flex items-center gap-2 mt-4 font-code-md text-sm text-on-surface hover:text-primary-fixed-dim transition-colors w-fit">
              <span className="material-symbols-outlined text-[18px]">link</span>
              GitHub: github.com/KrisCTer/Genzite
            </a>
          </div>
          <div className="lg:col-span-7 bg-surface-container-low border border-outline-variant p-2 md:p-8 rounded-lg flex items-center justify-center min-h-[300px]">
            <img
              alt="Genzite"
              className="max-w-full h-auto rounded shadow-lg"
              src="/project2.png"
            />
          </div>
        </div>

        {/* Project 2: Task Management */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 bg-surface-container-low border border-outline-variant p-2 md:p-8 rounded-lg flex items-center justify-center min-h-[300px]">
            <img
              alt="Task Management System"
              className="max-w-full h-auto rounded shadow-lg"
              src="/project3.png"
            />
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 font-code-md text-label-sm text-primary-fixed-dim">
              <span className="material-symbols-outlined text-[16px]">
                account_tree
              </span>{" "}
              DEVOPS FOCUS
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
              Task Management System
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              End-to-end deployment pipeline. Containerized the application using
              Docker, orchestrated automated builds via GitLab CI/CD, and
              configured Nginx as a reverse proxy secured by Cloudflare SSL.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["GitLab CI/CD", "Docker", "Nginx", "Cloudflare"].map((tag) => (
                <span
                  key={tag}
                  className="border border-outline px-2 py-1 font-code-md text-[10px] text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a href="https://github.com/PHung112/TaskManagement" target="_blank" rel="noreferrer" className="flex items-center gap-2 mt-4 font-code-md text-sm text-on-surface hover:text-primary-fixed-dim transition-colors w-fit">
              <span className="material-symbols-outlined text-[18px]">link</span>
              GitHub: github.com/PHung112/TaskManagement
            </a>
          </div>
        </div>

        {/* Project 3: Doc Share */}
        <div className="border border-outline-variant p-6 bg-surface-container-lowest flex flex-col gap-4 hover:border-outline transition-colors">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 w-full">
            <div>
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h4 className="font-headline-lg-mobile text-lg text-on-surface">
                  Document Sharing Platform
                </h4>
                <span className="font-code-md text-[10px] text-primary-fixed-dim border border-primary-fixed-dim/30 px-2 py-0.5 bg-primary-fixed-dim/10">
                  Frontend Developer
                </span>
              </div>
              <p className="font-body-md text-sm text-on-surface-variant max-w-3xl mt-2 mb-4">
                Student platform for document management and subscriptions. Developed multi-step uploads with client-side compression and PDF previews. Optimized performance via lazy loading and memoization, and managed manual deployment to Azure.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Vite", "C# REST API", "Firebase", "Azure Blob"].map((tag) => (
                  <span key={tag} className="border border-outline px-2 py-1 font-code-md text-[10px] text-on-surface-variant">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* GitHub Links */}
          <div className="flex flex-col gap-2 font-code-md text-sm text-on-surface mt-2">
            <a href="https://github.com/Felix5124/DocumentSharingAPI" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary-fixed-dim transition-colors w-fit">
              <span className="text-primary-fixed-dim/50">•</span>
              Backend: github.com/Felix5124/DocumentSharingAPI
            </a>
            <a href="https://github.com/Felix5124/document-sharing-frontend" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary-fixed-dim transition-colors w-fit">
              <span className="text-primary-fixed-dim/50">•</span>
              Frontend: github.com/Felix5124/document-sharing-frontend
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
