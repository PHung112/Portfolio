export default function Footer() {
  return (
    <footer className="bg-slate-950 w-full py-12 border-t border-slate-800/20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold text-slate-200">
          Tran Dinh Phi Hung
        </div>
        <p className="font-inter text-sm text-slate-500">
          © 2026 Developed by Tran Dinh Phi Hung.
        </p>
        <div className="flex gap-8">
          <a
            className="text-slate-500 hover:text-indigo-400 transition-colors"
            href="https://github.com/PHung112"
          >
            Github
          </a>
          <a
            className="text-slate-500 hover:text-indigo-400 transition-colors"
            href="https://www.linkedin.com/in/tr%E1%BA%A7n-%C4%91%C3%ACnh-phi-h%C3%B9ng-242b94401/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
