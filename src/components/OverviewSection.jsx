export default function OverviewSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center pt-20 px-8 relative overflow-hidden"
      id="overview"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="label-md text-primary font-medium tracking-[0.2em] uppercase">
              Full Name
            </span>
            <h1 className="text-3xl md:text-7xl font-extrabold tracking-tighter leading-none text-slate-50">
              Tran Dinh Phi Hung
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-lg leading-relaxed">
              Frontend Developer | React | Tailwind CSS
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary-container/20 hover:shadow-primary-container/40 transition-all active:scale-95"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="bg-surface-container-high/40 backdrop-blur-md px-8 py-4 rounded-xl text-lg font-bold border border-outline-variant/15 hover:bg-surface-container-high transition-all active:scale-95"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden border border-outline-variant/20 relative shadow-2xl">
              <img
                className="w-full h-full object-cover transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                alt="Modern professional portrait of a young male developer in a dark minimalist studio setting with moody indigo lighting"
                src="/ai.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
