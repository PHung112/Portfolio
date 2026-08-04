const experiences = [
  {
    id: 1,
    period: "Apr 2026 - Jul 2026",
    title: "Cloud & DevOps Bootcamp (FCAJ)",
    company: "Amazon Web Services (AWS) Vietnam",
    description:
      "Completed an intensive hands-on bootcamp covering AWS Cloud, Linux, Docker, networking, and infrastructure deployment. Provisioned and configured AWS services (EC2, VPC, IAM, S3, RDS, CloudFront, Route 53, ElastiCache, CloudWatch) through practical labs. Collaborated in a 6-member team to develop and deploy the Genzite capstone project.",
    tags: ["AWS Cloud", "Linux", "Docker", "EC2 / RDS", "DevOps"],
  },
  {
    id: 2,
    period: "2022 — 2026 (Expected)",
    title: "Software Engineering Student",
    company: "Ho Chi Minh City University of Technology",
    description:
      "Major in Software Engineering. GPA: 3.33/4.0. Honors & Awards: Outstanding Student of the Year (2024, 2025). Focus on modern web development, software architecture, and fullstack applications.",
    tags: [
      "Software Engineering",
      "HUTECH",
      "GPA: 3.33/4.0",
      "Outstanding Student",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      className="py-section_gap px-margin_mobile md:px-margin_desktop bg-surface-container-lowest"
      id="experience"
    >
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-headline-lg font-headline-lg text-on-surface mb-12 text-center">
          Where I've Worked &amp; Studied
        </h2>
        <div className="relative border-l border-outline-variant ml-4 md:ml-0 md:pl-8 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              <div className="absolute -left-12 md:-left-[41px] top-1 w-6 h-6 rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <h3 className="text-xl font-bold text-on-surface">
                  {exp.title}
                </h3>
                <span className="text-primary font-medium text-lg">
                  @ {exp.company}
                </span>
              </div>
              <p className="text-sm font-label-md text-outline mb-4">
                {exp.period}
              </p>
              <p className="text-body-md text-on-surface-variant mb-4 bg-surface-container p-4 rounded-xl border border-outline-variant">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 font-label-md text-xs">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

