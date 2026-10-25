import { useState } from "react";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: ["JavaScript (ES6+)", "TypeScript", "Java", "HTML5 / CSS3"],
  },
  {
    category: "Frontend Development",
    icon: "web",
    skills: [
      "React (18 / 19)",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Drag-and-Drop (DnD)",
      "Responsive Design",
      "State Management",
    ],
  },
  {
    category: "Backend & APIs",
    icon: "dns",
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "RESTful APIs",
      "WebSocket (STOMP)",
      "Spring Security (JWT)",
    ],
  },
  {
    category: "Applied AI Integration",
    icon: "psychology",
    skills: [
      "Google Gemini API",
      "Prompt Engineering",
      "Structured JSON Parsing",
      "AI Chatbots",
      "Markdown Rendering",
      "Basic Token Logging",
    ],
  },
  {
    category: "Databases & Caching",
    icon: "database",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis (Cache-Aside)",
      "Spring Data JPA",
    ],
  },
  {
    category: "Tools, Cloud & Deploy",
    icon: "cloud_sync",
    skills: [
      "Docker",
      "AWS (S3, EC2, RDS cơ bản)",
      "Git & GitHub (Webhooks)",
      "Postman",
      "Swagger / OpenAPI",
      "VietQR",
    ],
  },
];

export default function AboutSection() {
  const [copyStatus, setCopyStatus] = useState(false);

  const rawResumeSkills = `TECHNICAL SKILLS
• Programming Languages: JavaScript (ES6+), TypeScript, Java, HTML5/CSS3
• Frontend Development: React, TypeScript, Tailwind CSS, Bootstrap, HTML5/CSS3, Responsive Design, Drag-and-Drop
• Backend & APIs: Java, Spring Boot, Node.js, RESTful APIs, WebSocket (STOMP), Spring Security (JWT)
• AI Integration: Google Gemini API, Prompt Engineering, Structured JSON Parsing, AI Chatbots, Markdown Rendering, Basic Token Logging
• Databases & Caching: PostgreSQL, MySQL, MongoDB, Redis (Cache-Aside), Spring Data JPA
• Tools & Deployment: Docker, AWS (S3, EC2, RDS cơ bản), Git/GitHub (Webhooks), Postman, Swagger, VietQR`;

  const handleCopySkills = () => {
    navigator.clipboard.writeText(rawResumeSkills);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2500);
  };

  return (
    <section
      className="py-section_gap px-margin_mobile md:px-margin_desktop bg-surface-container-lowest"
      id="about"
    >
      <div className="max-w-container_max w-full mx-auto flex flex-col gap-16">
        {/* Top: Bio and Core Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-md text-xs w-max">
              <span className="material-symbols-outlined text-sm">person</span>
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-on-surface">
              Junior Web Developer with Hands-on Experience
            </h2>
            <div className="space-y-4 text-on-surface-variant text-base leading-relaxed">
              <p>
                I am a final-year <strong>Software Engineering</strong> student at{" "}
                <strong>Ho Chi Minh City University of Technology (HUTECH)</strong>, graduating in 2026 with a GPA of 3.39/4.0 and recognized as an <em>Outstanding Student of the Year (2024, 2025)</em>.
              </p>
              <p>
                I focus on building clean, practical web applications using <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, with backend foundations in <strong>Spring Boot (Java)</strong> and <strong>Node.js</strong>.
              </p>
              <p>
                In my recent projects, I have enjoyed finding practical ways to integrate <strong>Google Gemini API</strong> — using structured prompts to generate JSON schemas for web layouts, decomposing project tasks (WBS), and creating contextual chatbot assistants. I am eager to join a development team as a <strong>Fresher / Junior Developer</strong> to contribute, learn from experienced mentors, and improve my engineering skills.
              </p>
            </div>

            {/* Strengths Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl border border-outline-variant bg-surface-container-low flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <span className="material-symbols-outlined text-lg">school</span>
                  Self-Learning &amp; Adaptability
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Quick to pick up new frameworks, read official documentation, and apply practical solutions using React, Spring Boot, and cloud basics.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-outline-variant bg-surface-container-low flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <span className="material-symbols-outlined text-lg">build</span>
                  Hands-on Problem Solving
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Focused on real user needs: client-side image compression, real-time WebSocket state updates, Redis caching, and S3 Presigned URLs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Metrics / Fast Facts (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl border border-outline-variant bg-gradient-to-br from-surface-container to-surface-container-low flex flex-col gap-6">
            <h3 className="text-lg font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">badge</span>
              Quick Candidate Summary
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="material-symbols-outlined text-xl">school</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">Education &amp; Honors</h4>
                  <p className="text-xs text-on-surface-variant">
                    Software Engineering @ HUTECH (2022–2026) • GPA: 3.39/4.0 • Outstanding Student 2024 &amp; 2025
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="material-symbols-outlined text-xl">cloud_done</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">AWS Cloud Foundation</h4>
                  <p className="text-xs text-on-surface-variant">
                    FCAJ Bootcamp @ AWS Vietnam: Basic EC2, S3, RDS, IAM, and Docker setup.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="material-symbols-outlined text-xl">work</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">Target Role</h4>
                  <p className="text-xs text-on-surface-variant">
                    Fresher / Junior Web Developer (Frontend &amp; Fullstack)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/60 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-base">content_copy</span>
                  ATS Recruiter Keyword Snippet
                </span>
                <button
                  onClick={handleCopySkills}
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  {copyStatus ? "Copied!" : "Copy All"}
                </button>
              </div>
              <p className="text-[11px] text-on-surface-variant font-mono line-clamp-3 bg-surface-container p-2 rounded">
                {rawResumeSkills}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: Technical Skills Grid */}
        <div className="flex flex-col gap-6 pt-4 border-t border-outline-variant/60">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold font-display text-on-surface">
                Technical Skills
              </h3>
              <p className="text-sm text-on-surface-variant">
                Technologies I have practiced and used in university coursework and real-world projects
              </p>
            </div>
            <button
              onClick={handleCopySkills}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 text-xs font-semibold transition-colors self-start md:self-auto"
            >
              <span className="material-symbols-outlined text-sm">assignment</span>
              {copyStatus ? "Copied to Clipboard!" : "Copy Technical Skills"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl border border-outline-variant/80 bg-surface-container-lowest hover:border-outline hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="material-symbols-outlined text-primary text-xl">
                      {group.icon}
                    </span>
                    <h4 className="text-base font-bold text-on-surface">
                      {group.category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skillName) => (
                      <span
                        key={skillName}
                        className="px-2.5 py-1.5 rounded-lg bg-surface-container text-xs font-medium text-on-surface hover:bg-surface-container-high transition-colors"
                      >
                        {skillName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
