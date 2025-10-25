import React, { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? "backdrop-blur bg-[#0A0A0B]/70 border-b border-[#3B3F45]/40" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <Rocket className="h-6 w-6 text-[#C8FF3D]" />
            <span className="absolute inset-0 blur-md opacity-30 bg-[#C8FF3D] rounded-full" />
          </div>
          <span className="font-semibold tracking-wide text-white">Art Thou</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#F5F7FA]/80 hover:text-white transition-colors relative"
            >
              {l.label}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#38E8FF] to-transparent transition-all" />
            </a>
          ))}
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-transparent bg-[#FF3FD1] text-black shadow-[0_0_20px_#FF3FD1AA] hover:shadow-[0_0_28px_#FF3FD1CC] transition-all"
          >
            Schedule a Strategy Call
          </a>
        </nav>
        <button
          className="md:hidden p-2 rounded-lg border border-[#3B3F45] text-[#F5F7FA]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#3B3F45]/40 bg-[#0A0A0B]">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-[#F5F7FA]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-transparent bg-[#FF3FD1] text-black"
            >
              Schedule a Strategy Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
