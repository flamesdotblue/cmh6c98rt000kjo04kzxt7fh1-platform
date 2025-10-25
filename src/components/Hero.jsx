import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 60% at 10% 10%, rgba(37,99,235,0.08) 0%, transparent 60%), radial-gradient(60% 60% at 90% 20%, rgba(14,165,233,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={prefersReduced ? false : { y: 20, opacity: 0 }}
              animate={prefersReduced ? {} : { y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Shape perception.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">
                Spark momentum.
              </span>
            </motion.h1>
            <motion.p
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={prefersReduced ? {} : { opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-5 text-lg text-slate-700 max-w-2xl"
            >
              Art Thou is a Delhi NCR public relations and media partner for founders, CMOs, and growth leaders. We craft strategic narratives, build brand influence, and drive measurable coverage across India.
            </motion.p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-blue-600 shadow hover:bg-blue-700 transition-colors"
              >
                Schedule a Strategy Call
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-full text-sm font-semibold border border-slate-300 text-slate-800 hover:border-blue-500 hover:text-blue-700 transition-colors"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-widest text-slate-500">Trusted by teams across India</p>
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-6">
                {["Zomato", "Paytm", "Delhivery", "Nykaa", "CRED", "Freshworks"].map((logo) => (
                  <div
                    key={logo}
                    className="h-10 flex items-center justify-center rounded border border-slate-200 text-slate-500 hover:text-slate-800 hover:shadow-sm transition-all bg-white"
                  >
                    <span className="text-sm">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <img
                alt="PR strategy in action"
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/0" />
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, y: 10 }}
                animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-full w-full flex items-end"
              >
                <div className="p-6 w-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-slate-200 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    <span className="text-xs text-slate-700">On‑air media room</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white drop-shadow">Strategic storytelling. Brand innovation. Media relations.</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
