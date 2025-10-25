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
            "radial-gradient(circle at 30% 20%, #38E8FF33 0%, transparent 45%), radial-gradient(circle at 70% 80%, #C8FF3D33 0%, transparent 45%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={prefersReduced ? false : { y: 24, opacity: 0 }}
              animate={prefersReduced ? {} : { y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight"
            >
              <span className="relative">
                <span className="relative z-10">Shape perception.</span>
                <span className="absolute -inset-1 rounded -z-0 bg-gradient-to-r from-[#FF3FD1] to-[#7A57FF] opacity-20" />
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38E8FF] to-[#C8FF3D]">
                Spark momentum.
              </span>
            </motion.h1>
            <motion.p
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={prefersReduced ? {} : { opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-5 text-lg text-[#F5F7FA]/80 max-w-2xl"
            >
              Art Thou is a Delhi NCR public relations and media partner for founders, CMOs, and growth leaders. We craft strategic narratives, build brand influence, and drive measurable coverage across India.
            </motion.p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-black bg-[#FF3FD1] shadow-[0_0_28px_#FF3FD1AA] hover:shadow-[0_0_34px_#FF3FD1] transition-all"
              >
                Schedule a Strategy Call
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-full text-sm font-semibold border border-[#3B3F45] text-[#F5F7FA] hover:border-[#38E8FF] hover:text-white transition-colors"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-widest text-[#F5F7FA]/60">Trusted by teams across India</p>
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-6">
                {["Zomato", "Paytm", "Delhivery", "Nykaa", "CRED", "Freshworks"].map((logo) => (
                  <div
                    key={logo}
                    className="h-10 flex items-center justify-center rounded bg-[#0A0A0B] border border-[#3B3F45]/40 text-[#F5F7FA]/60 hover:text-[#F5F7FA] hover:scale-105 transition-all"
                  >
                    <span className="text-sm">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#3B3F45]/40">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #FF3FD1 0%, #7A57FF 100%)",
                  opacity: 0.15,
                }}
              />
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, scale: 0.98 }}
                animate={prefersReduced ? {} : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-full w-full flex items-center justify-center"
              >
                <div className="p-8 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0B]/70 border border-[#3B3F45]">
                    <span className="h-2 w-2 rounded-full bg-[#C8FF3D] animate-pulse" />
                    <span className="text-xs text-[#F5F7FA]/80">On‑air media room</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">Strategic storytelling. Brand innovation. Media relations.</h3>
                  <p className="mt-2 text-[#F5F7FA]/70">Clean UI, smooth animations, intuitive flow — built for momentum.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
