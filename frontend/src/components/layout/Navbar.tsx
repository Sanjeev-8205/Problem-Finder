import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const scrollToProblems = () => {
    if (location.pathname === "/") {
      document.getElementById("problems")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-xl font-bold text-white"
        >
          Problem Finder
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/#problems"
            onClick={scrollToProblems}
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Problem Explorer
          </Link>

          <Link
            to="/methodology"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Methodology
          </Link>

          <button
            type="button"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
          >
            GitHub
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;