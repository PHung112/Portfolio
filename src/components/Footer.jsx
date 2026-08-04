export default function Footer() {
  return (
    <footer className="py-8 px-margin_mobile md:px-margin_desktop bg-surface-container-lowest border-t border-surface-container">
      <div className="max-w-container_max w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-body-md text-on-surface-variant">
          © {new Date().getFullYear()} Tran Dinh Phi Hung. Built with React
          &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/PHung112"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tr%E1%BA%A7n-%C4%91%C3%ACnh-phi-h%C3%B9ng-242b94401/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
          >
            LinkedIn
          </a>
          <a
            href="#overview"
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
