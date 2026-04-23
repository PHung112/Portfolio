const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "code" },
      { name: "Next.js (basic)", icon: "code" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Tailwind CSS", icon: "css" },
      { name: "Responsive Design", icon: "devices" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java (Spring Boot)", icon: "dns" },
      { name: "C#", icon: "terminal" },
      { name: "RESTful API", icon: "api" },
      { name: "Authentication (JWT/OAuth2)", icon: "lock" },
      { name: "WebSocket (STOMP)", icon: "sync" },
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
      { name: "Git & GitHub", icon: "terminal" },
      { name: "Postman", icon: "send" },
      { name: "Swagger", icon: "description" },
      { name: "Firebase Auth", icon: "cloud" },
      { name: "Cloudinary", icon: "cloud_upload" },
      { name: "AI Tools", icon: "smart_toy" },
    ],
  },
];

export default function AboutSection() {
  return (
    <section
      className="flex justify-center items-center min-h-screen py-20 px-6 bg-surface-container-low"
      id="about"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-50 leading-tight">
            Building clean and responsive{" "}
            <span className="text-primary">web interfaces.</span>
          </h2>

          <p className="text-sm text-on-surface-variant leading-relaxed md:max-w-xl">
            Final-year IT student focused on frontend development. Experienced
            in building responsive web apps using React and Tailwind CSS.
            Currently seeking an internship to gain real-world experience and
            grow into a full-stack developer.
          </p>

          {/* Soft skills */}
          <div className="pt-6 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition">
              <h3 className="text-base font-semibold text-primary">
                Self-Learning
              </h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Quickly learn new technologies and adapt to new environments.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition">
              <h3 className="text-base font-semibold text-primary">
                Analytical Thinking
              </h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Analyze problems effectively and find practical solutions.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-base font-semibold text-primary tracking-wide uppercase mb-3">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex flex-col items-center justify-center p-5 rounded-xl bg-surface-container-lowest border text-center transition-all duration-300
                      
                      ${
                        skill.name === "React" || skill.name === "JavaScript"
                          ? "border-primary/40 scale-105 shadow-lg shadow-primary/10"
                          : "border-outline-variant/15"
                      }

                      hover:border-primary/50 hover:scale-105`}
                  >
                    <span className="material-symbols-outlined text-3xl text-primary mb-2">
                      {skill.icon}
                    </span>

                    <span className="font-medium text-sm text-slate-200">
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
