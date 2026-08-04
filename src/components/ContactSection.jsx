import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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

    const mailSubject = formData.subject || `Contact from ${formData.name}`;
    const body = `${formData.message}\n\nFrom: ${formData.email}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=tdphihung0807@gmail.com&su=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <section
      className="py-section_gap px-margin_mobile md:px-margin_desktop bg-background relative"
      id="contact"
    >
      <div className="max-w-container_max w-full mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-label-md text-sm mb-2 block">
            What's Next?
          </span>
          <h2 className="text-headline-lg font-headline-lg text-on-surface mb-6">
            Get In Touch
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <h4 className="text-on-surface font-bold text-lg">Email</h4>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="mailto:tdphihung0807@gmail.com"
                >
                  tdphihung0807@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">phone</span>
              </div>
              <div>
                <h4 className="text-on-surface font-bold text-lg">Phone</h4>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="tel:0362370754"
                >
                  0362370754
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h4 className="text-on-surface font-bold text-lg">Location</h4>
                <p className="text-on-surface-variant">
                  Thu Duc, HCM, Vietnam
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary hover:bg-primary/5 transition-all shadow-sm hover:shadow"
                href="https://github.com/PHung112"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">code</span>
              </a>
              <a
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary hover:bg-primary/5 transition-all shadow-sm hover:shadow"
                href="https://www.linkedin.com/in/tr%E1%BA%A7n-%C4%91%C3%ACnh-phi-h%C3%B9ng-242b94401/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">work</span>
              </a>
            </div>
          </div>

          {/* Right: Contact form */}
          <form
            className="flex flex-col gap-6 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant shadow-sm"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-on-surface"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-on-surface"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-on-surface"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                type="text"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-on-surface"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                id="message"
                name="message"
                placeholder="Hello, I'd like to talk about..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              className="mt-4 flex items-center justify-center rounded-lg h-12 w-full bg-primary hover:bg-primary/90 text-on-primary text-base font-bold transition-colors shadow-sm"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

