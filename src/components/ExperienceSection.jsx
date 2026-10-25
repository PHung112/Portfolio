const experiences = [
  {
    id: 1,
    period: "Aug 2026 - Oct 2026",
    title: "Front-end Developer Intern",
    company: "AdsAgency",
    description:
      "Converted Figma mockups into responsive, cross-browser web layouts using HTML5, CSS3/Tailwind, and JavaScript. Developed custom interactive UI features, handled form validations, and resolved frontend styling and responsiveness bugs based on client feedback. Collaborated with designers and project stakeholders to ensure on-time delivery.",
    tags: [
      "React",
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Figma to Code",
      "Responsive Web",
    ],
  },
  {
    id: 2,
    period: "Apr 2026 - Jul 2026",
    title: "Cloud & DevOps Bootcamp (FCAJ)",
    company: "Amazon Web Services (AWS) Vietnam",
    description:
      "Completed a practical bootcamp covering AWS Cloud fundamentals, Linux system basics, Docker containerization, and cloud deployment. Configured basic AWS services (EC2, VPC, IAM, S3, RDS) through hands-on labs. Collaborated in a 6-member team to develop and deploy the Genzite capstone project featuring S3 Presigned URLs and Docker containers.",
    tags: [
      "AWS Cloud",
      "Linux",
      "Docker",
      "EC2 / RDS",
      "S3 Presigned URLs",
      "Capstone Project",
    ],
  },
  {
    id: 3,
    period: "2022 — 2026 (Expected)",
    title: "Software Engineering Student",
    company: "Ho Chi Minh City University of Technology (HUTECH)",
    description:
      "Major in Software Engineering. Cumulative GPA: 3.39 / 4.0. Honors & Awards: Outstanding Student of the Year (2024, 2025). Coursework and projects focused on web development (React, Spring Boot, Java, Node.js), database systems (PostgreSQL, MySQL), and practical integration of Google Gemini API.",
    tags: [
      "Software Engineering",
      "HUTECH",
      "GPA: 3.39/4.0",
      "Outstanding Student",
      "Web Development",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      className="py-section_gap px-margin_mobile md:px-margin_desktop bg-surface-container-lowest"
      id="experience"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-primary font-label-md text-xs uppercase tracking-wider block mb-2 font-bold">
            Experience &amp; Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-on-surface">
            Where I've Worked &amp; Studied
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base mt-2 max-w-xl mx-auto">
            Hands-on internship experience combined with solid university academics and cloud fundamentals.
          </p>
        </div>

        <div className="relative border-l-2 border-outline-variant/80 ml-4 md:ml-6 md:pl-8 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              {/* Timeline marker */}
              <div className="absolute -left-[41px] md:-left-[42px] top-1.5 w-6 h-6 rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
              </div>

              <div className="p-6 rounded-2xl border border-outline-variant/80 bg-surface-container-low hover:border-primary/50 transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-on-surface">
                      {exp.title}
                    </h3>
                    <span className="text-primary font-semibold text-base">
                      @ {exp.company}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-surface-container-high text-on-surface-variant w-max border border-outline-variant/60">
                    {exp.period}
                  </span>
                </div>

                <p className="text-body-md text-on-surface-variant mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-surface-container-highest text-on-surface text-xs font-medium border border-outline-variant/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
