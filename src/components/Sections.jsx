import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Megaphone, PenTool, Video, Users, Filter, Star, ArrowRight, Briefcase, Mail, Calendar } from "lucide-react";

const tiers = [
  { name: "Starter", price: "₹95K+ / mo", badge: "For early traction" },
  { name: "Growth", price: "₹1.8L+ / mo", badge: "Scale your influence" },
  { name: "Leadership", price: "₹3.2L+ / mo", badge: "Category impact" },
];

const services = [
  {
    icon: Megaphone,
    title: "Public Relations",
    desc: "Media outreach, thought leadership, and crisis communications to shape narrative and protect brand trust.",
    deliverables: ["Press office", "Story mining", "Newsroom assets", "Crisis playbooks", "SOV tracking"],
  },
  {
    icon: Video,
    title: "Media & Content",
    desc: "Integrated campaigns, video, and social storytelling designed for distribution and conversation.",
    deliverables: ["Campaigns", "Video sprints", "Content calendar", "Social narratives", "Performance wraps"],
  },
  {
    icon: PenTool,
    title: "Brand Strategy",
    desc: "Positioning, messaging, and identity systems that clarify who you are and why you matter.",
    deliverables: ["Research", "Positioning", "Messaging matrix", "Identity guide", "Launch toolkit"],
  },
  {
    icon: Users,
    title: "Talent & Influencer",
    desc: "Scouting, contracts, and full-funnel creator campaign management across India.",
    deliverables: ["Roster dev", "Negotiations", "Creator briefs", "Compliance", "ROI reporting"],
  },
];

const caseStudies = [
  {
    id: "fintech",
    industry: "Fintech",
    title: "Wallet app grows share of voice 3.1x",
    objective: "Win the festival season with trust-led narrative",
    strategy: "Data-backed thought leadership and weekly media cadence",
    execution: "Exec interviews, product bytes, and BFSI panels",
    outcomes: { impressions: "38M+", sov: "3.1x", coverage: "56 earned hits" },
  },
  {
    id: "ecommerce",
    industry: "E‑commerce",
    title: "Beauty marketplace trends to #1 on launch week",
    objective: "Category re-entry with distinct POV",
    strategy: "Creator seeding + press exclusives",
    execution: "Video sprints, reels, and sample drops",
    outcomes: { impressions: "22M+", sov: "1.9x", coverage: "34 earned hits" },
  },
  {
    id: "logistics",
    industry: "Logistics",
    title: "D2C logistics brand secures national coverage",
    objective: "Build credibility with enterprise",
    strategy: "Founder stories + industry reports",
    execution: "Report launch, broadcast bytes, op-eds",
    outcomes: { impressions: "41M+", sov: "2.4x", coverage: "63 earned hits" },
  },
];

const testimonials = [
  { quote: "Art Thou helped us turn momentum into measurable coverage.", name: "CMO, Unicorn Fintech" },
  { quote: "Smart, warm, and precise — a true strategic partner.", name: "Founder, D2C Beauty" },
  { quote: "They made our story impossible to ignore.", name: "VP Brand, Logistics Major" },
];

export default function Sections() {
  const [filter, setFilter] = useState("All");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setTestimonialIndex((i) => (i + 1) % testimonials.length), 3200);
    return () => clearInterval(id);
  }, []);

  const filteredCases = useMemo(() => {
    if (filter === "All") return caseStudies;
    return caseStudies.filter((c) => c.industry === filter);
  }, [filter]);

  return (
    <>
      {/* Signature Approach */}
      <section id="approach" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-end sm:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Signature approach</h2>
            <p className="text-[#F5F7FA]/70 max-w-xl mt-4 sm:mt-0">Research → Narrative → Influence → Measure. Expressive yet precise execution to move markets and minds.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {["Research", "Narrative", "Influence", "Measure"].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="relative rounded-xl border border-[#3B3F45]/50 bg-[#0A0A0B]/60 p-5 overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full" style={{ background: "radial-gradient(circle, #38E8FF22 0%, transparent 60%)" }} />
                <span className="text-xs uppercase tracking-widest text-[#F5F7FA]/60">Step {i + 1}</span>
                <h3 className="mt-2 font-semibold text-lg">{step}</h3>
                <div className="mt-3 h-1 w-full bg-[#3B3F45]/60 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#FF3FD1] to-[#7A57FF]" style={{ width: `${(i + 1) * 25}%` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-20">
        <div className="absolute inset-x-0 -top-8 h-8" style={{ background: "linear-gradient(90deg, #FF3FD133, #7A57FF33)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Services</h2>
          <p className="text-[#F5F7FA]/70 mt-2 max-w-2xl">Public relations and media designed for impact, with clear deliverables, tight timelines, and pricing tiers that scale with you.</p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, idx) => (
              <div key={s.title} className="group relative rounded-2xl border border-[#3B3F45]/60 bg-[#0A0A0B]/60 p-5 hover:border-[#38E8FF] transition-colors">
                <div className="flex items-start gap-3">
                  <s.icon className="h-5 w-5 text-[#38E8FF]" />
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-sm text-[#F5F7FA]/70 mt-1">{s.desc}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[#F5F7FA]/80">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF3D]" /> {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 text-xs text-[#F5F7FA]/60">Timeline: 4–12 weeks depending on scope</div>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm text-[#38E8FF] hover:underline">
                  Let’s discuss <ArrowRight className="h-4 w-4" />
                </a>
                <span className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full bg-[#FF9A1F] text-black">New</span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {tiers.map((t) => (
              <div key={t.name} className="rounded-2xl border border-[#3B3F45]/60 bg-[#0A0A0B]/60 p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">{t.name}</h4>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-[#FF9A1F] text-black">{t.badge}</span>
                </div>
                <div className="mt-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF3FD1] to-[#7A57FF]">{t.price}</div>
                <ul className="mt-4 text-sm text-[#F5F7FA]/80 space-y-2">
                  <li>Monthly reporting and SOV tracking</li>
                  <li>Dedicated strategist and press office</li>
                  <li>Quarterly planning workshops</li>
                </ul>
                <a href="#contact" className="mt-5 inline-flex items-center justify-center w-full px-4 py-2 rounded-full bg-[#C8FF3D] text-black font-medium">Choose {t.name}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Case Studies</h2>
              <p className="text-[#F5F7FA]/70 mt-2">Objective → Strategy → Execution → Outcomes with real metrics.</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[#F5F7FA]/70">Filter</span>
              <Filter className="h-4 w-4 text-[#38E8FF]" />
              {['All','Fintech','E‑commerce','Logistics'].map(cat => (
                <button key={cat} onClick={() => setFilter(cat)} className={`px-3 py-1 rounded-full border text-xs ${filter===cat? 'border-[#C8FF3D] text-white' : 'border-[#3B3F45] text-[#F5F7FA]/80 hover:text-white'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((c) => (
              <div key={c.id} className="rounded-2xl border border-[#3B3F45]/60 bg-[#0A0A0B]/60 p-6">
                <span className="text-[10px] uppercase tracking-widest text-[#F5F7FA]/60">{c.industry}</span>
                <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
                <div className="mt-3 space-y-2 text-sm text-[#F5F7FA]/80">
                  <p><strong className="text-[#F5F7FA]">Objective:</strong> {c.objective}</p>
                  <p><strong className="text-[#F5F7FA]">Strategy:</strong> {c.strategy}</p>
                  <p><strong className="text-[#F5F7FA]">Execution:</strong> {c.execution}</p>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="rounded-lg border border-[#3B3F45]/60 p-3">
                    <div className="text-[#F5F7FA]/60">Impressions</div>
                    <div className="font-semibold text-white">{c.outcomes.impressions}</div>
                  </div>
                  <div className="rounded-lg border border-[#3B3F45]/60 p-3">
                    <div className="text-[#F5F7FA]/60">Share of Voice</div>
                    <div className="font-semibold text-white">{c.outcomes.sov}</div>
                  </div>
                  <div className="rounded-lg border border-[#3B3F45]/60 p-3">
                    <div className="text-[#F5F7FA]/60">Earned</div>
                    <div className="font-semibold text-white">{c.outcomes.coverage}</div>
                  </div>
                </div>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm text-[#38E8FF] hover:underline">Read more <ArrowRight className="h-4 w-4" /></a>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#3B3F45]/60 p-6 bg-[#0A0A0B]/60">
            <div className="flex items-center gap-2 text-[#F5F7FA]/80">
              <Star className="h-4 w-4 text-[#FF9A1F]" /> Press features
            </div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              {["Economic Times", "YourStory", "Mint", "CNBC TV18"].map((p) => (
                <a key={p} href="#" className="rounded-lg border border-[#3B3F45]/60 px-4 py-3 text-center hover:border-[#38E8FF] transition-colors">{p}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold">About Art Thou</h2>
              <p className="mt-3 text-[#F5F7FA]/80 max-w-2xl">We exist to bring Integrity, Clarity, and Momentum to ambitious brands. Based in Delhi NCR, we combine newsroom instincts with brand strategy to create stories that travel.</p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {["Integrity", "Clarity", "Momentum"].map((v) => (
                  <div key={v} className="rounded-xl border border-[#3B3F45]/60 p-5 bg-[#0A0A0B]/60">
                    <div className="text-sm text-[#F5F7FA]/60">Value</div>
                    <div className="font-semibold">{v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-[#3B3F45]/60 p-6 bg-[#0A0A0B]/60">
                <h3 className="font-semibold">Team</h3>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[{name:'Aisha Verma',role:'Chief Strategic Officer'},{name:'Raghav Kapoor',role:'Media Director'},{name:'Neha Singh',role:'Brand Strategist'},{name:'Kabir Shah',role:'Creative Lead'},{name:'Pooja Rao',role:'Influencer Partnerships'},{name:'Vikram Iyer',role:'Analytics Lead'}].map((m)=> (
                    <div key={m.name} className="rounded-xl border border-[#3B3F45]/60 p-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#FF3FD1] to-[#7A57FF] mb-3" />
                      <div className="font-medium">{m.name}</div>
                      <div className="text-sm text-[#F5F7FA]/70">{m.role}</div>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm text-[#38E8FF] hover:underline"><Briefcase className="h-4 w-4" /> Careers</a>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-2xl overflow-hidden border border-[#3B3F45]/60 bg-[#0A0A0B]/60">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#FF3FD1]/30 to-[#7A57FF]/30 flex items-end p-5">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#F5F7FA]/80">Chief Strategic Officer</div>
                    <div className="text-xl font-semibold">Aisha Verma</div>
                  </div>
                </div>
                <div className="p-5 text-sm text-[#F5F7FA]/80">
                  Aisha leads strategy and narrative architecture. She has placed founders on national stages and built resilient brand reputations across finance, e‑commerce, and tech.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Insights</h2>
          <p className="text-[#F5F7FA]/70 mt-2 max-w-2xl">PR playbooks, media trends, STAR method guides, and Delhi NCR market notes.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              t:"The Delhi NCR Media Map (2025)",
              d:"Where stories start, and who moves the market.",
            },{
              t:"STAR Method, for Founders in the Press", d:"How to structure sharp answers on-air."},
            { t:"Crisis Comms: The First 48 Hours", d:"A warm, precise playbook to keep trust."}].map((b) => (
              <article key={b.t} className="rounded-2xl border border-[#3B3F45]/60 bg-[#0A0A0B]/60 p-6">
                <div className="h-28 rounded-lg bg-gradient-to-r from-[#38E8FF]/20 to-[#C8FF3D]/20" />
                <h3 className="mt-4 font-semibold">{b.t}</h3>
                <p className="text-sm text-[#F5F7FA]/80 mt-1">{b.d}</p>
                <a href="#" className="mt-3 inline-flex items-center gap-2 text-sm text-[#38E8FF] hover:underline">Read insight <ArrowRight className="h-4 w-4" /></a>
              </article>
            ))}
          </div>

          <form className="mt-10 rounded-2xl border border-[#3B3F45]/60 p-6 bg-[#0A0A0B]/60">
            <label className="text-sm">Subscribe for monthly insights</label>
            <div className="mt-3 flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="you@company.com" className="flex-1 px-4 py-3 rounded-lg bg-transparent border border-[#3B3F45]/60 focus:outline-none focus:border-[#38E8FF] text-[#F5F7FA] placeholder:text-[#F5F7FA]/50" />
              <button className="px-5 py-3 rounded-lg bg-[#FF3FD1] text-black font-medium">Subscribe</button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-bold">Let’s shape your narrative</h2>
              <p className="text-[#F5F7FA]/70 mt-2">Tell us about your goals. We’ll respond within one business day.</p>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-[#3B3F45]/60 bg-[#0A0A0B]/60 p-4">
                <div className="flex items-center gap-2 text-sm text-[#F5F7FA]/80"><Mail className="h-4 w-4 text-[#38E8FF]" /> hello@artthou.in</div>
                <div className="mt-2 flex items-center gap-2 text-sm text-[#F5F7FA]/80"><Calendar className="h-4 w-4 text-[#C8FF3D]" /> Discovery calls: Mon–Fri</div>
                <div className="mt-4 aspect-video rounded-lg overflow-hidden border border-[#3B3F45]/60">
                  <iframe title="Discovery Call" className="w-full h-full" src="https://cal.com/embed" />
                </div>
                <div className="mt-3 text-xs text-[#F5F7FA]/60">Prefer email? We’ll share slots and a short brief template.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#3B3F45]/60 bg-[#0A0A0B]/60 p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">What leaders say</h3>
              <div className="flex gap-2">
                <button onClick={()=> setTestimonialIndex((testimonialIndex - 1 + testimonials.length)%testimonials.length)} className="px-3 py-1 text-sm rounded-full border border-[#3B3F45]/60">Prev</button>
                <button onClick={()=> setTestimonialIndex((testimonialIndex + 1)%testimonials.length)} className="px-3 py-1 text-sm rounded-full border border-[#3B3F45]/60">Next</button>
              </div>
            </div>
            <motion.blockquote
              key={testimonialIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-lg"
            >
              “{testimonials[testimonialIndex].quote}”
              <footer className="mt-2 text-sm text-[#F5F7FA]/70">— {testimonials[testimonialIndex].name}</footer>
            </motion.blockquote>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", goals: "" });
  const [tag, setTag] = useState("brand");

  const detectTag = (text) => {
    const t = text.toLowerCase();
    if (/(press|journalist|media)/.test(t)) return "press";
    if (/(influencer|creator|talent)/.test(t)) return "talent";
    return "brand";
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (name === "goals") setTag(detectTag(value));
  };

  const tagStyles = {
    brand: "bg-[#38E8FF] text-black",
    press: "bg-[#C8FF3D] text-black",
    talent: "bg-[#FF3FD1] text-black",
  };

  const submit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}! We\nEmail: ${form.email}\nCompany: ${form.company}\nBudget: ${form.budget}\nLead type: ${tag}`);
  };

  return (
    <form onSubmit={submit} className="mt-6 grid sm:grid-cols-2 gap-4">
      <div className="sm:col-span-2 flex items-center gap-2 text-xs">
        <span className={`px-2 py-1 rounded-full ${tagStyles[tag]}`}>{tag.toUpperCase()}</span>
        <span className="text-[#F5F7FA]/60">Auto‑tagged by lead type</span>
      </div>
      <div>
        <label className="text-sm">Name</label>
        <input name="name" required value={form.name} onChange={onChange} className="mt-1 w-full px-4 py-3 rounded-lg bg-transparent border border-[#3B3F45]/60 focus:outline-none focus:border-[#38E8FF] text-[#F5F7FA]" />
      </div>
      <div>
        <label className="text-sm">Email</label>
        <input name="email" type="email" required value={form.email} onChange={onChange} className="mt-1 w-full px-4 py-3 rounded-lg bg-transparent border border-[#3B3F45]/60 focus:outline-none focus:border-[#38E8FF] text-[#F5F7FA]" />
      </div>
      <div>
        <label className="text-sm">Company</label>
        <input name="company" value={form.company} onChange={onChange} className="mt-1 w-full px-4 py-3 rounded-lg bg-transparent border border-[#3B3F45]/60 focus:outline-none focus:border-[#38E8FF] text-[#F5F7FA]" />
      </div>
      <div>
        <label className="text-sm">Budget</label>
        <select name="budget" value={form.budget} onChange={onChange} className="mt-1 w-full px-4 py-3 rounded-lg bg-transparent border border-[#3B3F45]/60 focus:outline-none focus:border-[#38E8FF] text-[#F5F7FA]">
          <option className="bg-[#0A0A0B]">Undisclosed</option>
          <option className="bg-[#0A0A0B]">Under ₹1L</option>
          <option className="bg-[#0A0A0B]">₹1L–₹3L</option>
          <option className="bg-[#0A0A0B]">₹3L+</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="text-sm">Goals</label>
        <textarea name="goals" rows={4} value={form.goals} onChange={onChange} placeholder="Launch, funding news, thought leadership, creator program, crisis response..." className="mt-1 w-full px-4 py-3 rounded-lg bg-transparent border border-[#3B3F45]/60 focus:outline-none focus:border-[#38E8FF] text-[#F5F7FA] placeholder:text-[#F5F7FA]/50" />
      </div>
      <div className="sm:col-span-2 flex items-center gap-3">
        <button type="submit" className="px-6 py-3 rounded-full bg-[#FF3FD1] text-black font-semibold">Submit</button>
        <a href="#" className="text-sm text-[#38E8FF]">Privacy</a>
      </div>
    </form>
  );
}
