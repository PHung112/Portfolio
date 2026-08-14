import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    const mailSubject = subject || `[Portfolio] Message from ${name}`;
    const mailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Create a direct link to Gmail web compose
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=tdphihung0807@gmail.com&su=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;
    
    window.open(gmailLink, "_blank");
    setSent(true);
  };

  const inputClass =
    "bg-surface-container-low border border-outline-variant px-4 py-3 font-code-md text-code-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-fixed-dim/70 focus:bg-surface-container transition-all duration-200 w-full";

  return (
    <section
      id="contact"
      className="w-full min-h-[calc(100vh-4rem)] flex items-center bg-surface-container-lowest relative py-16"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary-fixed-dim/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-[32px] w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="font-code-md text-label-sm text-primary-fixed-dim border border-primary-fixed-dim/30 px-2 py-1 bg-primary-fixed-dim/10">
                05
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Contact
              </h2>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Open to Cloud &amp; DevOps opportunities where I can contribute,
              learn, and grow in infrastructure and automation. Feel free to
              reach out!
            </p>

            <div className="flex flex-col gap-5 font-code-md text-sm">
              <a
                className="flex items-center gap-3 text-on-surface hover:text-primary-fixed-dim transition-colors w-fit group"
                href="mailto:tdphihung0807@gmail.com"
              >
                <div className="w-9 h-9 rounded border border-outline-variant bg-surface-container flex items-center justify-center group-hover:border-primary-fixed-dim/50 transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[18px] text-outline-variant group-hover:text-primary-fixed-dim transition-colors">
                    mail
                  </span>
                </div>
                tdphihung0807@gmail.com
              </a>

              <a
                className="flex items-center gap-3 text-on-surface hover:text-primary-fixed-dim transition-colors w-fit group"
                href="https://github.com/PHung112"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-9 h-9 rounded border border-outline-variant bg-surface-container flex items-center justify-center group-hover:border-primary-fixed-dim/50 transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[18px] text-outline-variant group-hover:text-primary-fixed-dim transition-colors">
                    terminal
                  </span>
                </div>
                github.com/PHung112
              </a>

              <div className="flex items-center gap-3 text-on-surface-variant">
                <div className="w-9 h-9 rounded border border-outline-variant bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px] text-outline-variant">
                    location_on
                  </span>
                </div>
                Vietnam
              </div>
            </div>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 border border-primary-fixed-dim/30 bg-primary-fixed-dim/5 px-4 py-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></span>
              <span className="font-code-md text-label-sm text-primary-fixed-dim uppercase tracking-widest">
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-surface border border-outline-variant p-8 flex flex-col gap-5"
            >
              <div className="font-code-md text-[10px] text-outline-variant mb-2 uppercase tracking-widest">
                // Send a message
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                    Name <span className="text-primary-fixed-dim">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Phi Hung"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                    Email <span className="text-primary-fixed-dim">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job opportunity / Collaboration / ..."
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                  Message <span className="text-primary-fixed-dim">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4 pt-1">
                <button
                  type="submit"
                  className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-6 py-3 rounded hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-all duration-200 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    send
                  </span>
                  SEND MESSAGE
                </button>

                {sent && (
                  <p className="font-code-md text-label-sm text-primary-fixed-dim flex items-center gap-2 animate-pulse">
                    <span className="material-symbols-outlined text-[16px]">
                      check_circle
                    </span>
                    Gmail tab opened!
                  </p>
                )}
              </div>

              <p className="font-code-md text-[10px] text-on-surface-variant/50 mt-1">
                * Clicking SEND will open a new Gmail tab with your message pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
