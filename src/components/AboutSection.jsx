const skills = [
  { name: "React", icon: "code" },
  { name: "JavaScript", icon: "javascript" },
  { name: "HTML5", icon: "html" },
  { name: "Tailwind", icon: "css" },
  { name: "Git", icon: "terminal" },
  { name: "AI Tools", icon: "smart_toy" },
];
export default function AboutSection() {
  return (
    <section
      className="flex justify-center items-center min-h-screen py-24 px-8 bg-surface-container-low"
      id="about"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-50">
            Building clean and responsive{" "}
            <span className="text-primary">web interfaces.</span>
          </h2>
          <p className="text-md text-on-surface-variant leading-relaxed">
            I am a final-year student majoring in Information Technology,
            currently focusing on frontend development. I have built several web
            projects using React and Tailwind CSS, with an emphasis on
            responsive design and clean UI. I am actively seeking an internship
            opportunity to gain real-world experience and further develop my
            skills, with a long-term goal of becoming a full-stack developer.
          </p>
          <div className="pt-8 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/10">
              <h3 className="text-lg font-bold text-primary">Self-Learning</h3>
              <p className="text-xs text-on-surface-variant tracking-widest mt-1">
                Quickly learn new technologies and adapt to different
                environments
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/10">
              <h3 className="text-lg font-bold text-primary">
                Analytical Thinking
              </h3>
              <p className="text-xs text-on-surface-variant tracking-widest mt-1">
                Able to listen, analyze problems, and find effective solutions
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/15 text-center hover:border-primary/40 transition-colors"
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-3">
                {skill.icon}
              </span>
              <span className="font-medium text-slate-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
