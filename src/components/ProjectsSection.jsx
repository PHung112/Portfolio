const projects = [
  {
    id: 1,
    title: "Document Sharing Platform",
    description:
      "A document sharing platform for students, supporting upload/download of materials and basic content management with a clean and responsive UI.",
    tags: ["React", "HTML/CSS", "Authentication"],
    image: "/project1.png",
    githubBE: "https://github.com/Felix5124/DocumentSharingAPI",
    githubFE: "https://github.com/Felix5124/document-sharing-frontend",
  },
  {
    id: 2,
    title: "Task Management System",
    description:
      "A task management system with role-based access control, helping teams organize tasks and manage workflows efficiently.",
    tags: ["React", "Tailwind CSS", "Spring Boot", "Real-time"],
    image: "/project2.png",
    githubBE: "https://github.com/PHung112/TaskManagement",
  },
];

export default function ProjectsSection() {
  return (
    <section className="min-h-screen py-16 px-6" id="projects">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl mt-2 font-extrabold tracking-tighter text-slate-50">
              Projects
            </h2>
            <p className="text-on-surface-variant mt-4 text-lg">
              A selection of projects I’ve built to practice and improve my
              frontend development skills.
            </p>
          </div>
          <a
            className="text-primary flex items-center gap-2 group font-semibold"
            href="https://github.com/PHung112"
          >
            View all on GitHub
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-surface-container-low rounded-[2rem] overflow-hidden transition-all duration-500 hover:bg-surface-container-high relative flex flex-col"
            >
              <div className="aspect-[16/8] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  alt={project.title}
                  src={project.image}
                />
              </div>
              <div className="p-5 space-y-4 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-surface-container-highest text-on-surface-variant border border-outline-variant/20 tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 pt-3 mt-auto">
                  <a
                    href={project.githubBE}
                    className="flex-1 py-2 px-3 text-center bg-primary-container text-on-primary-container rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all"
                  >
                    {project.githubFE ? "Backend Repo" : "Github"}
                  </a>
                  {project.githubFE && (
                    <a
                      href={project.githubFE}
                      className="flex-1 py-2 px-3 text-center bg-primary-container text-on-primary-container rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all"
                    >
                      Frontend Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
