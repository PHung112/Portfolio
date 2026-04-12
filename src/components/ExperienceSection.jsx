const experiences = [
  {
    id: 1,
    period: "May 2025 — Dec 2025",
    title: "Document Sharing Platform",
    company: "Frontend Developer",
    description:
      "Developed a document sharing platform with features such as authentication, document upload/download, and admin dashboard. Implemented responsive UI using React and optimized performance with lazy loading and memoization.",
    icon: "code",
  },
  {
    id: 2,
    period: "Feb 2026 - Mar 2026",
    title: "Task Management System",
    company: "Fullstack Developer ",
    description:
      "Developed a fullstack task management system with authentication, real-time updates, and role-based access control using React and Spring Boot.",
    icon: "code",
  },
  {
    id: 3,
    period: "2022 — Present",
    title: "Software Engineering Student",
    company: "Ho Chi Minh City University of Technology",
    description:
      "Studying Software Engineering with a focus on web development, data structures, and system design. GPA: 3.33/4.0.",
    icon: "school",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-24 px-8 bg-surface-container-low/50" id="experience">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-50">
            Experience & Education
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:left-[19px] md:before:left-1/2 before:w-[2px] before:h-full before:bg-outline-variant/20 before:-translate-x-1/2">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } md:justify-between items-start md:items-center w-full group`}
            >
              <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-10 h-10 bg-surface-container-highest border-4 border-surface-dim rounded-full z-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-sm">
                  {exp.icon}
                </span>
              </div>
              <div className="ml-12 md:ml-0 md:w-[42%] glass-panel p-8 rounded-3xl border border-outline-variant/10 shadow-lg">
                <span className="text-primary font-mono text-sm">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-slate-100 mt-2">
                  {exp.title}
                </h3>
                <p className="text-on-surface-variant text-sm mt-1">
                  {exp.company}
                </p>
                <p className="mt-4 text-on-surface-variant/80 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
              <div className="hidden md:block w-[42%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
