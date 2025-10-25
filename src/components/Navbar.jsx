import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#cases", label: "Case Studies" },
  { href: "#about", label: "About" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur bg-white/80 shadow-sm"
          : "bg-white/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-blue-400 grid place-items-center text-white font-bold text-sm">
            AT
          </div>
          <span className="font-semibold tracking-wide text-slate-900">Art Thou</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors relative"
            >
              {l.label}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-0 group-hover:w-full bg-blue-600 transition-all" />
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Schedule a Strategy Call
          </a>
        </nav>
        <button
          className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-800"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-slate-800"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-blue-600 text-white"
            >
              Schedule a Strategy Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
