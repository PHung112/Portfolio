export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-lowest py-[32px]">
      <div className="max-w-[1280px] mx-auto px-[32px] flex flex-col md:flex-row justify-between items-center gap-[16px]">
        <div className="flex flex-col gap-1">
          <span className="font-headline-lg text-headline-lg text-on-surface">
            Portfolio System
          </span>
          <p className="font-code-md text-code-md text-on-surface-variant">
            v2.4.0-stable // Built with precision
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">terminal</span>
          </a>
          <a
            className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">deployed_code</span>
          </a>
          <a
            className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">monitoring</span>
          </a>
        </div>
        <div className="text-right">
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            © 2026 Systems Architect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
