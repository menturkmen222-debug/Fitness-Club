import { useState } from "react";
import { Check, X } from "lucide-react";
import { useLang } from "@/context/language-context";

const PLAN_PRICES = [
  { monthly: 150, annual: 120 },
  { monthly: 300, annual: 240 },
  { monthly: 600, annual: 480 },
];

const PLAN_COLORS = [
  "border-white/10 bg-card",
  "border-primary bg-primary/5 scale-105 shadow-[0_0_40px_rgba(var(--club-accent-rgb),0.15)] z-10 relative",
  "border-yellow-500/50 bg-gradient-to-b from-yellow-500/5 to-card",
];

const PLAN_POPULAR = [false, true, false];

const CLASS_COLORS: Record<string, string> = {
  hiit: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  yoga: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  boxing: "bg-red-500/20 text-red-400 border-red-500/30",
  strength: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  cardio: "bg-teal-500/20 text-teal-400 border-teal-500/30",
};

const TRAINERS_BY_DAY = [
  ["O. Durdyýewa", "A. Annamyradowa", "S. Atabaýew", "M. Hydyrow"],
  ["O. Durdyýewa", "A. Annamyradowa", "M. Hydyrow", "S. Atabaýew"],
  ["O. Durdyýewa", "A. Annamyradowa", "S. Atabaýew", "M. Hydyrow"],
  ["O. Durdyýewa", "A. Annamyradowa", "M. Hydyrow", "S. Atabaýew"],
  ["-", "S. Atabaýew", "A. Annamyradowa"],
  ["M. Hydyrow", "A. Annamyradowa"],
  ["A. Annamyradowa"],
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { t } = useLang();

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white mb-4">{t.pricing.title}</h2>
          <p className="text-muted-foreground text-lg mb-8">{t.pricing.desc}</p>

          <div className="inline-flex items-center gap-4 bg-card p-2 rounded-full border border-white/5">
            <button
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                !isAnnual ? "bg-primary text-white" : "text-muted-foreground hover:text-white"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              {t.pricing.monthly}
            </button>
            <button
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                isAnnual ? "bg-primary text-white" : "text-muted-foreground hover:text-white"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              {t.pricing.annual}{" "}
              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full hidden sm:inline-block">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-16 max-w-6xl mx-auto">
          {t.pricing.plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal rounded-3xl p-8 border ${PLAN_COLORS[i]} flex flex-col h-full`}
            >
              {PLAN_POPULAR[i] && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}

              <h3 className="font-display text-3xl text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 h-5">
                {!PLAN_POPULAR[i] ? plan.badge : ""}
              </p>

              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-5xl font-mono font-bold text-white transition-all">
                  {isAnnual ? PLAN_PRICES[i].annual : PLAN_PRICES[i].monthly}
                </span>
                <span className="text-muted-foreground font-medium">{t.pricing.currency}</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {f.inc ? (
                      <Check size={20} className="text-primary shrink-0" />
                    ) : (
                      <X size={20} className="text-white/20 shrink-0" />
                    )}
                    <span className={f.inc ? "text-white" : "text-white/40"}>{f.t}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all ${
                  PLAN_POPULAR[i]
                    ? "bg-primary text-white hover:bg-primary/90 animate-glow"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {plan.name} {t.pricing.select}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Schedule() {
  const { t } = useLang();
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section className="py-24 bg-card border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">
            {t.schedule.subtitle}
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white">{t.schedule.title}</h2>
        </div>

        {/* Mobile Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-8 scrollbar-hide md:hidden">
          {t.schedule.days.map((d, idx) => (
            <button
              key={d}
              onClick={() => setActiveDay(idx)}
              className={`px-6 py-3 rounded-xl whitespace-nowrap font-bold text-sm transition-all ${
                activeDay === idx
                  ? "bg-primary text-white"
                  : "bg-background border border-white/5 text-muted-foreground"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="bg-background border border-white/5 rounded-[2rem] p-6 lg:p-10 reveal">
          <div className="hidden md:grid grid-cols-7 gap-4 mb-6 border-b border-white/5 pb-4">
            {t.schedule.days.map((d) => (
              <div key={d} className="font-display text-xl text-center text-white">
                {d}
              </div>
            ))}
          </div>

          <div className="md:grid grid-cols-7 gap-4">
            {t.schedule.classes.map((dayClasses, dayIdx) => (
              <div
                key={dayIdx}
                className={`flex flex-col gap-3 ${activeDay !== dayIdx ? "hidden md:flex" : "flex"}`}
              >
                {dayClasses.map((cls, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-2xl border ${CLASS_COLORS[cls.type]} flex flex-col`}
                  >
                    <span className="font-mono text-lg font-bold mb-1">{cls.t}</span>
                    <span className="font-bold mb-2 leading-tight">{cls.c}</span>
                    <span className="text-xs opacity-80 mt-auto">{TRAINERS_BY_DAY[dayIdx][i]}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
