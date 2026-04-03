import {
  Dumbbell,
  HeartPulse,
  Activity,
  Zap,
  Flame,
  Salad,
  Droplets,
  Target,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import type { FitnessClub } from "@/hooks/use-fitness-club";
import { useLang } from "@/context/language-context";

const SERVICE_ICONS = [Dumbbell, HeartPulse, Activity, Flame, Droplets, Zap, Salad, Target];
const SERVICE_TIMES = ["60 MIN", "45 MIN", "60 MIN", "90 MIN", "45 MIN", "30 MIN", "45 MIN", "60 MIN"];
const SERVICE_INTENSITY = [5, 4, 2, 5, 3, 5, 1, 1];

const WHY_ICONS = [Zap, Award, CheckCircle2, Target];

export function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 bg-background relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <span className="text-primary font-bold tracking-widest uppercase mb-4">
            {t.services.subtitle}
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white">{t.services.title}</h2>
          <p className="text-muted-foreground max-w-2xl text-lg mt-4">{t.services.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((s, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <div
                key={i}
                className="reveal bg-card border border-white/5 p-8 rounded-[2rem] group hover:-translate-y-2 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10">
                  <Icon size={28} />
                </div>

                <h3 className="font-display text-2xl text-white mb-2 relative z-10">{s.title}</h3>

                <div className="mt-auto pt-6 flex items-center justify-between relative z-10">
                  <span className="font-mono text-sm text-muted-foreground bg-background px-3 py-1 rounded-full">
                    {SERVICE_TIMES[i]}
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div
                        key={dot}
                        className={`w-1.5 h-1.5 rounded-full ${
                          dot <= SERVICE_INTENSITY[i] ? "bg-primary" : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyUs({ club }: { club: FitnessClub }) {
  const { t } = useLang();

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="bg-stripe absolute inset-0 opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">
              {t.whyUs.subtitle}
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white mb-6 leading-none">
              {t.whyUs.title} <br />
              <span className="text-primary">{club.name}?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t.whyUs.desc(club.members)}
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-white hover:text-primary transition-colors group"
            >
              {t.whyUs.join}{" "}
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.whyUs.features.map((f, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <div
                  key={i}
                  className="reveal bg-background border border-white/5 p-6 rounded-3xl hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-display text-xl text-white mb-2">{f.title}</h4>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
