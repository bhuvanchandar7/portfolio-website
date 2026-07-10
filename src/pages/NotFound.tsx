import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-coal px-5 text-bone md:px-10">
      <header className="flex items-center justify-between border-b border-line py-3 font-mono text-[10px] uppercase tracking-[0.2em] md:text-[11px]">
        <span>bhuvan@ualberta:~$</span>
        <span className="text-signal">ERR.404</span>
      </header>
      <div className="flex flex-1 flex-col items-start justify-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-dim">
          <span className="text-signal">//</span> route not found
        </p>
        <h1 className="font-sans text-[28vw] font-bold leading-[0.85] tracking-tighter md:text-[13rem]">
          4<span className="text-signal">0</span>4
        </h1>
        <p className="mt-8 max-w-sm font-mono text-[13px] leading-relaxed text-dim">
          The requested path does not exist on this system.
        </p>
        <a
          href="/"
          className="mt-10 border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:border-signal hover:text-signal"
        >
          [ cd / ]
        </a>
      </div>
      <footer className="border-t border-line py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
        © {new Date().getFullYear()} Bhuvan Veeravalli — EOF
      </footer>
    </div>
  );
};

export default NotFound;
