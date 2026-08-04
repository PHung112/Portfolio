const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "ReactJS", icon: "code" },
      { name: "Next.js (basic)", icon: "code" },
      { name: "HTML/CSS", icon: "html" },
      { name: "Tailwind CSS", icon: "css" },
      { name: "Responsive Design", icon: "devices" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot (basic)", icon: "dns" },
      { name: "NodeJS", icon: "terminal" },
      { name: "RESTful API", icon: "api" },
      { name: "Authentication (JWT/Auth)", icon: "lock" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: "storage" },
      { name: "SQL Server", icon: "storage" },
      { name: "MongoDB", icon: "storage" },
      { name: "PostgreSQL", icon: "storage" },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: "terminal" },
      { name: "Postman", icon: "send" },
      { name: "Swagger", icon: "description" },
      { name: "Docker", icon: "deployed_code" },
      { name: "CI/CD", icon: "sync" },
      { name: "AI Tools (ChatGPT, Copilot...)", icon: "smart_toy" },
    ],
  },
];

export default function AboutSection() {
  return (
    <section
      className="py-section_gap px-margin_mobile md:px-margin_desktop bg-surface-container-lowest"
      id="about"
    >
      <div className="max-w-container_max w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Heading, Bio, Strength Cards */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-6">
              About Me
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-4">
              Final-year Software Engineering student at Ho Chi Minh City
              University of Technology (HUTECH), seeking a Frontend Intern
              position. Strong in ReactJS and building responsive web
              applications, with hands-on experience in real-world projects
              involving authentication, dashboards, and performance
              optimization.
            </p>
            <p className="text-body-lg text-on-surface-variant">
              I have experience working with modern frontend stacks (React,
              Vite, Next.js, Tailwind CSS) as well as cloud and backend
              technologies (AWS, Docker, RESTful APIs). Open to fullstack
              development and eager to create impactful digital experiences.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="text-headline-md font-headline-md text-on-surface">
              My Strengths
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-4 rounded-xl border border-outline-variant bg-surface-container-lowest p-5 hover:shadow-md transition-shadow">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined">
                    auto_stories
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-on-surface text-base font-bold">
                    Self-Learning
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    Quickly learn new technologies, frameworks, and cloud
                    infrastructures like AWS and Docker.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-outline-variant bg-surface-container-lowest p-5 hover:shadow-md transition-shadow">
                <div className="text-secondary mt-1">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-on-surface text-base font-bold">
                    Analytical Thinking
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    Analyze problems effectively, optimize UI performance, and
                    find practical solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Skill grid */}
        <div className="flex flex-col justify-center gap-6">
          <h3 className="text-headline-md font-headline-md text-on-surface">
            Technical Skills
          </h3>
          {skillCategories.map((cat) => (
            <div key={cat.category} className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-primary tracking-wider uppercase">
                {cat.category}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl border border-outline-variant bg-surface-container-lowest p-4 hover:-translate-y-1 hover:shadow-md transition-all glow-effect"
                  >
                    <span className="material-symbols-outlined text-3xl text-primary">
                      {skill.icon}
                    </span>
                    <span className="text-on-surface font-medium text-xs text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

