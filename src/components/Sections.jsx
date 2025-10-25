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
    image: "https://images.unsplash.com/photo-1520975922215-c4c9280c2f99?q=80&w=1470&auto=format&fit=crop",
    desc: "Media outreach, thought leadership, and crisis communications to shape narrative and protect brand trust.",
    deliverables: ["Press office", "Story mining", "Newsroom assets", "Crisis playbooks", "SOV tracking"],
  },
  {
    icon: Video,
    title: "Media & Content",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1470&auto=format&fit=crop",
    desc: "Integrated campaigns, video, and social storytelling designed for distribution and conversation.",
    deliverables: ["Campaigns", "Video sprints", "Content calendar", "Social narratives", "Performance wraps"],
  },
  {
    icon: PenTool,
    title: "Brand Strategy",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1470&auto=format&fit=crop",
    desc: "Positioning, messaging, and identity systems that clarify who you are and why you matter.",
    deliverables: ["Research", "Positioning", "Messaging matrix", "Identity guide", "Launch toolkit"],
  },
  {
    icon: Users,
    title: "Talent & Influencer",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop",
    desc: "Scouting, contracts, and full-funnel creator campaign management across India.",
    deliverables: ["Roster dev", "Negotiations", "Creator briefs", "Compliance", "ROI reporting"],
  },
];

const caseStudies = [
  {
    id: "fintech",
    industry: "Fintech",
    title: "Wallet app grows share of voice 3.1x",
    image: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1470&auto=format&fit=crop",
    objective: "Win the festival season with trust-led narrative",
    strategy: "Data-backed thought leadership and weekly media cadence",
    execution: "Exec interviews, product bytes, and BFSI panels",
    outcomes: { impressions: "38M+", sov: "3.1x", coverage: "56 earned hits" },
  },
  {
    id: "ecommerce",
    industry: "E‑commerce",
    title: "Beauty marketplace trends to #1 on launch week",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop",
    objective: "Category re-entry with distinct POV",
    strategy: "Creator seeding + press exclusives",
    execution: "Video sprints, reels, and sample drops",
    outcomes: { impressions: "22M+", sov: "1.9x", coverage: "34 earned hits" },
  },
  {
    id: "logistics",
    industry: "Logistics",
    title: "D2C logistics brand secures national coverage",
    image: "https://images.unsplash.com/photo-1520975657289-c9b4d9a4c619?q=80&w=1470&auto=format&fit=crop",
    objective: "Build credibility with enterprise",
    strategy: "Founder stories + industry reports",
    execution: "Report launch, broadcast bytes, op-eds",
    outcomes: { impressions: "41M+", sov: "2.4x", coverage: "63 earned hits" },
  },
];

const testimonials = [
  { quote: "Art Thou helped us turn momentum into measurable coverage.", name: "CMO, Unicorn Fintech" },
  { quote: "Warm, precise, and strategic — a true partner.", name: "Founder, D2C Beauty" },
  { quote: "They made our story impossible to ignore.", name: "VP Brand, Logistics Major" },
];

export default function Sections() {
  const [filter, setFilter] = useState("All");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  React.useEffect(() => {
    const id = setInterval(
      () => setTestimonialIndex((i) => (i + 1) % testimonials.length),
      3200
    );
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Signature approach</h2>
            <p className="text-slate-600 max-w-xl mt-4 sm:mt-0">
              Research → Narrative → Influence → Measure. Precise execution to move markets and minds.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {["Research", "Narrative", "Influence", "Measure"].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="relative rounded-xl border border-slate-200 bg-white p-5 overflow-hidden shadow-sm"
              >
                <div
                  className="absolute -top-10 -right-10 h-28 w-28 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 60%)" }}
                />
                <span className="text-xs uppercase tracking-widest text-slate-500">Step {i + 1}</span>
                <h3 className="mt-2 font-semibold text-slate-900 text-lg">{step}</h3>
                <div className="mt-3 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-700 to-sky-500" style={{ width: `${(i + 1) * 25}%` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Services</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">
            Public relations and media designed for impact, with clear deliverables, tight timelines, and pricing tiers that scale with you.
          </p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group relative rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"/>
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <s.icon className="h-5 w-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-slate-900">{s.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 text-xs text-slate-500">Timeline: 4–12 weeks depending on scope</div>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm text-blue-700 hover:underline">
                    Let’s discuss <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-slate-900">{t.name}</h4>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">{t.badge}</span>
                </div>
                <div className="mt-2 text-2xl font-bold text-slate-900">{t.price}</div>
                <ul className="mt-4 text-sm text-slate-700 space-y-2">
                  <li>Monthly reporting and SOV tracking</li>
                  <li>Dedicated strategist and press office</li>
                  <li>Quarterly planning workshops</li>
                </ul>
                <a href="#contact" className="mt-5 inline-flex items-center justify-center w-full px-4 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">Choose {t.name}</a>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Case Studies</h2>
              <p className="text-slate-600 mt-2">Objective → Strategy → Execution → Outcomes with real metrics.</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-600">Filter</span>
              <Filter className="h-4 w-4 text-blue-600" />
              {['All','Fintech','E‑commerce','Logistics'].map(cat => (
                <button key={cat} onClick={() => setFilter(cat)} className={`px-3 py-1 rounded-full border text-xs ${filter===cat? 'border-blue-600 text-blue-700 bg-blue-50' : 'border-slate-300 text-slate-700 hover:text-blue-700 hover:border-blue-400'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((c) => (
              <div key={c.id} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500">{c.industry}</span>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{c.title}</h3>
                  <div className="mt-3 space-y-2 text-sm text-slate-700">
                    <p><strong className="text-slate-900">Objective:</strong> {c.objective}</p>
                    <p><strong className="text-slate-900">Strategy:</strong> {c.strategy}</p>
                    <p><strong className="text-slate-900">Execution:</strong> {c.execution}</p>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                    <div className="rounded-lg border border-slate-200 p-3">
                      <div className="text-slate-500">Impressions</div>
                      <div className="font-semibold text-slate-900">{c.outcomes.impressions}</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 p-3">
                      <div className="text-slate-500">Share of Voice</div>
                      <div className="font-semibold text-slate-900">{c.outcomes.sov}</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 p-3">
                      <div className="text-slate-500">Earned</div>
                      <div className="font-semibold text-slate-900">{c.outcomes.coverage}</div>
                    </div>
                  </div>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm text-blue-700 hover:underline">Discuss this case <ArrowRight className="h-4 w-4" /></a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 p-6 bg-white">
            <div className="flex items-center gap-2 text-slate-700">
              <Star className="h-4 w-4 text-amber-500" /> Press features
            </div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              {["Economic Times", "YourStory", "Mint", "CNBC TV18"].map((p) => (
                <a key={p} href="#" className="rounded-lg border border-slate-200 px-4 py-3 text-center hover:border-blue-400 hover:text-blue-700 transition-colors">{p}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About Art Thou</h2>
              <p className="mt-3 text-slate-700 max-w-2xl">
                We exist to bring Integrity, Clarity, and Momentum to ambitious brands. Based in Delhi NCR, we combine newsroom instincts with brand strategy to create stories that travel.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {["Integrity", "Clarity", "Momentum"].map((v) => (
                  <div key={v} className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
                    <div className="text-sm text-slate-500">Value</div>
                    <div className="font-semibold text-slate-900">{v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-slate-200 p-6 bg-white">
                <h3 className="font-semibold text-slate-900">Team</h3>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {name:'Aisha Verma',role:'Chief Strategic Officer',img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop'},
                    {name:'Raghav Kapoor',role:'Media Director',img:'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop'},
                    {name:'Neha Singh',role:'Brand Strategist',img:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop'},
                    {name:'Kabir Shah',role:'Creative Lead',img:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop'},
                    {name:'Pooja Rao',role:'Influencer Partnerships',img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop'},
                    {name:'Vikram Iyer',role:'Analytics Lead',img:'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop'},
                  ].map((m)=> (
                    <div key={m.name} className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="p-4">
                        <div className="font-medium text-slate-900">{m.name}</div>
                        <div className="text-sm text-slate-600">{m.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm text-blue-700 hover:underline"><Briefcase className="h-4 w-4" /> Careers</a>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                <div className="aspect-[4/3] relative">
                  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1470&auto=format&fit=crop" alt="Chief Strategic Officer" className="absolute inset-0 h-full w-full object-cover"/>
                </div>
                <div className="p-5 text-sm text-slate-700">
                  <div className="text-xs uppercase tracking-widest text-slate-500">Chief Strategic Officer</div>
                  <div className="text-xl font-semibold text-slate-900">Aisha Verma</div>
                  <p className="mt-2">Aisha leads strategy and narrative architecture. She has placed founders on national stages and built resilient brand reputations across finance, e‑commerce, and tech.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Insights</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">PR playbooks, media trends, STAR method guides, and Delhi NCR market notes.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              t:"The Delhi NCR Media Map (2025)",
              d:"Where stories start, and who moves the market.",
              img:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop"
            },{
              t:"STAR Method for Founders in the Press", d:"How to structure sharp answers on‑air.", img:"https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1470&auto=format&fit=crop"},
            { t:"Crisis Comms: The First 48 Hours", d:"A warm, precise playbook to keep trust.", img:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1470&auto=format&fit=crop"}].map((b) => (
              <article key={b.t} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="h-36 sm:h-40 overflow-hidden">
                  <img src={b.img} alt="insight cover" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-slate-900">{b.t}</h3>
                  <p className="text-sm text-slate-600 mt-1">{b.d}</p>
                  <a href="#" className="mt-3 inline-flex items-center gap-2 text-sm text-blue-700 hover:underline">Read insight <ArrowRight className="h-4 w-4" /></a>
                </div>
              </article>
            ))}
          </div>

          <form className="mt-10 rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <label className="text-sm text-slate-900">Subscribe for monthly insights</label>
            <div className="mt-3 flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="you@company.com" className="flex-1 px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:border-blue-500 text-slate-900 placeholder:text-slate-400" />
              <button className="px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">Subscribe</button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Let’s shape your narrative</h2>
              <p className="text-slate-600 mt-2">Tell us about your goals. We’ll respond within one business day.</p>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-slate-700"><Mail className="h-4 w-4 text-blue-600" /> hello@artthou.in</div>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-700"><Calendar className="h-4 w-4 text-blue-600" /> Discovery calls: Mon–Fri</div>
                <div className="mt-4 aspect-video rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                  <iframe title="Discovery Call" className="w-full h-full" src="https://cal.com/embed" />
                </div>
                <div className="mt-3 text-xs text-slate-500">Prefer email? We’ll share slots and a short brief template.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">What leaders say</h3>
              <div className="flex gap-2">
                <button onClick={()=> setTestimonialIndex((testimonialIndex - 1 + testimonials.length)%testimonials.length)} className="px-3 py-1 text-sm rounded-full border border-slate-300 hover:border-blue-500 hover:text-blue-700">Prev</button>
                <button onClick={()=> setTestimonialIndex((testimonialIndex + 1)%testimonials.length)} className="px-3 py-1 text-sm rounded-full border border-slate-300 hover:border-blue-500 hover:text-blue-700">Next</button>
              </div>
            </div>
            <motion.blockquote
              key={testimonialIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-lg text-slate-900"
            >
              “{testimonials[testimonialIndex].quote}”
              <footer className="mt-2 text-sm text-slate-600">— {testimonials[testimonialIndex].name}</footer>
            </motion.blockquote>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "Undisclosed", goals: "" });
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
    brand: "bg-blue-600 text-white",
    press: "bg-sky-600 text-white",
    talent: "bg-indigo-600 text-white",
  };

  const submit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}!\nEmail: ${form.email}\nCompany: ${form.company}\nBudget: ${form.budget}\nLead type: ${tag}`);
  };

  return (
    <form onSubmit={submit} className="mt-6 grid sm:grid-cols-2 gap-4">
      <div className="sm:col-span-2 flex items-center gap-2 text-xs">
        <span className={`px-2 py-1 rounded-full ${tagStyles[tag]}`}>{tag.toUpperCase()}</span>
        <span className="text-slate-500">Auto‑tagged by lead type</span>
      </div>
      <div>
        <label className="text-sm text-slate-900">Name</label>
        <input name="name" required value={form.name} onChange={onChange} className="mt-1 w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:border-blue-500 text-slate-900" />
      </div>
      <div>
        <label className="text-sm text-slate-900">Email</label>
        <input name="email" type="email" required value={form.email} onChange={onChange} className="mt-1 w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:border-blue-500 text-slate-900" />
      </div>
      <div>
        <label className="text-sm text-slate-900">Company</label>
        <input name="company" value={form.company} onChange={onChange} className="mt-1 w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:border-blue-500 text-slate-900" />
      </div>
      <div>
        <label className="text-sm text-slate-900">Budget</label>
        <select name="budget" value={form.budget} onChange={onChange} className="mt-1 w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:border-blue-500 text-slate-900">
          <option className="bg-white">Undisclosed</option>
          <option className="bg-white">Under ₹1L</option>
          <option className="bg-white">₹1L–₹3L</option>
          <option className="bg-white">₹3L+</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="text-sm text-slate-900">Goals</label>
        <textarea name="goals" rows={4} value={form.goals} onChange={onChange} placeholder="Launch, funding news, thought leadership, creator program, crisis response..." className="mt-1 w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:border-blue-500 text-slate-900 placeholder:text-slate-400" />
      </div>
      <div className="sm:col-span-2 flex items-center gap-3">
        <button type="submit" className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">Submit</button>
        <a href="#" className="text-sm text-blue-700">Privacy</a>
      </div>
    </form>
  );
}
