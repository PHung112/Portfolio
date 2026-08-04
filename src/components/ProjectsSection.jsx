const projects = [
  {
    id: 1,
    title: "Genzite – AI-Powered No-Code Builder",
    description:
      "An AI-powered no-code platform enabling non-technical users to build, customize, and publish responsive websites via a drag-and-drop editor and dynamic CMS. Built and deployed with Docker and AWS.",
    tags: [
      "React (Vite)",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "PostgreSQL",
      "AWS",
    ],
    image: "/project2.png",
    githubBE: "https://github.com/KrisCTer/Genzite",
    githubFE: null,
  },
  {
    id: 2,
    title: "DocumentSharing – Academic Platform",
    description:
      "An online document-sharing and community platform tailored for students with multi-step uploads, client-side compression, PDF preview, QR Premium subscription, and an Admin Dashboard.",
    tags: [
      "React (Vite)",
      "C#",
      "RESTful API",
      "HTML/CSS",
      "Firebase Auth",
      "Azure",
    ],
    image: "/project1.png",
    githubBE: "https://github.com/Felix5124/DocumentSharingAPI",
    githubFE: "https://github.com/Felix5124/document-sharing-frontend",
  },
];

export default function ProjectsSection() {
  return (
    <section
      className="py-section_gap px-margin_mobile md:px-margin_desktop bg-background"
      id="projects"
    >
      <div className="max-w-container_max w-full mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-headline-lg font-headline-lg text-on-surface">
            Featured Projects
          </h2>
          <div className="h-px bg-outline-variant flex-grow ml-4 max-w-md"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`col-span-1 md:col-span-2 group rounded-2xl border border-outline-variant bg-surface-container-lowest overflow-hidden hover:shadow-lg transition-all flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } h-auto md:h-[400px]`}
            >
              <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
                <img
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                />
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center gap-4">
                <span className="text-primary font-label-md text-sm">
                  Featured Project
                </span>
                <h3 className="text-headline-md text-on-surface group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-body-md text-on-surface-variant bg-surface-container p-4 rounded-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 font-label-md text-sm text-outline mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-6 mt-4">
                  <a
                    className="text-on-surface hover:text-primary transition-colors flex items-center gap-2 font-medium"
                    href={project.githubBE}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined">code</span>
                    {project.githubFE ? "Backend Repo" : "GitHub Repo"}
                  </a>
                  {project.githubFE && (
                    <a
                      className="text-on-surface hover:text-primary transition-colors flex items-center gap-2 font-medium"
                      href={project.githubFE}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined">code</span>
                      Frontend Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/PHung112"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-medium inline-block"
          >
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

