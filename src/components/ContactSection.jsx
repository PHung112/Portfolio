import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Contact from ${formData.name}`;
    const body = `${formData.message}\n\nFrom: ${formData.email}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=tdphihung0807@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <section className="py-24 px-8 relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-50">
              Get in <span className="text-primary">touch.</span>
            </h2>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-md">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
            <div className="space-y-4">
              <p
                className="flex items-center gap-4 text-slate-100 hover:text-primary transition-colors group"
                href="mailto:contact@nguyenva.com"
              >
                <span className="material-symbols-outlined p-3 bg-surface-container rounded-xl group-hover:bg-primary/20 transition-colors">
                  mail
                </span>
                tdphihung0807@gmail.com
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  className="p-4 bg-surface-container rounded-2xl hover:bg-primary/10 transition-all border border-outline-variant/10"
                  href="https://github.com/PHung112"
                >
                  <svg
                    className="w-6 h-6 fill-current text-slate-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  className="p-4 bg-surface-container rounded-2xl hover:bg-primary/10 transition-all border border-outline-variant/10"
                  href="https://www.linkedin.com/in/tr%E1%BA%A7n-%C4%91%C3%ACnh-phi-h%C3%B9ng-242b94401/"
                >
                  <svg
                    className="w-6 h-6 fill-current text-slate-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-[2.5rem] border border-outline-variant/15 shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input
                  className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="John Doe"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 uppercase tracking-widest ml-1">
                  Email Address
                </label>
                <input
                  className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="john@example.com"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 uppercase tracking-widest ml-1">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                className="w-full bg-primary-container text-on-primary-container py-3 rounded-xl font-bold text-lg hover:opacity-95 transition-all shadow-lg shadow-indigo-900/40"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
