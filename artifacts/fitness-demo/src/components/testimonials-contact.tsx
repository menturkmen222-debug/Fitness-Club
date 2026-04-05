import { useState, useEffect } from "react";
import {
  Star,
  Smartphone,
  CheckCircle,
  MapPin,
  Phone,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import type { FitnessClub } from "@/hooks/use-fitness-club";
import { useLang } from "@/context/language-context";
import { IconFlame, IconActivity, IconSparkle } from "./icons";

export function Testimonials({ club }: { club: FitnessClub }) {
  const [active, setActive] = useState(0);
  const { t } = useLang();

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % t.testimonials.items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [t.testimonials.items.length]);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute left-[-10%] top-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-sm">
            {t.testimonials.subtitle}
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white">{t.testimonials.title}</h2>
        </div>

        <div className="relative max-w-4xl mx-auto reveal">
          {t.testimonials.items.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 absolute inset-0 ${
                i === active
                  ? "opacity-100 translate-x-0 relative z-10"
                  : "opacity-0 translate-x-8 absolute pointer-events-none"
              }`}
            >
              <div className="bg-card border border-white/5 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
                <span className="absolute -top-10 -left-6 font-display text-[12rem] text-primary/10 leading-none select-none">
                  "
                </span>

                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="shrink-0 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-primary/40 to-primary flex items-center justify-center font-display text-2xl text-white mb-4 shadow-lg shadow-primary/20">
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h4 className="text-white font-bold text-base text-center md:text-left">
                      {item.name}
                    </h4>
                    <p className="text-muted-foreground text-xs mb-4">{item.duration}</p>
                    <div className="bg-primary/15 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                      <IconSparkle size={13} className="text-primary" />
                      {item.result}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex text-yellow-500 mb-6 gap-0.5">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={17} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6 font-medium italic">
                      "{item.text(club.name)}"
                    </p>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                      {t.testimonials.programLabel}: {item.program}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center gap-3 mt-12">
            {t.testimonials.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "bg-primary w-12" : "bg-white/20 hover:bg-white/40 w-6"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AppPromo({ club }: { club: FitnessClub }) {
  const { t } = useLang();

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-20 mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal order-2 md:order-1 flex justify-center">
            <div className="w-[280px] h-[560px] bg-card border-[10px] border-black rounded-[3rem] shadow-2xl relative overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-700">
              <div className="absolute top-0 inset-x-0 h-6 w-28 bg-black mx-auto rounded-b-3xl z-20" />
              <div className="absolute inset-0 bg-background pt-10 p-5 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">
                      {t.appPromo.phoneGreeting}
                    </div>
                    <div className="font-bold text-white text-sm">{t.appPromo.todayGoal}</div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    A
                  </div>
                </div>

                <div className="bg-primary p-4 rounded-2xl mb-5 shadow-lg shadow-primary/20">
                  <div className="text-white/80 text-xs mb-0.5">{t.appPromo.nextClass}</div>
                  <div className="text-white font-bold text-base mb-3">CrossFit • 18:00</div>
                  <div className="w-full bg-black/20 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-white w-2/3 h-full rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-card p-3.5 rounded-2xl border border-white/5">
                    <div className="text-primary mb-1.5">
                      <IconFlame size={18} />
                    </div>
                    <div className="font-mono text-lg text-white font-bold">450</div>
                    <div className="text-xs text-muted-foreground">{t.appStats.calories}</div>
                  </div>
                  <div className="bg-card p-3.5 rounded-2xl border border-white/5">
                    <div className="text-primary mb-1.5">
                      <IconActivity size={18} />
                    </div>
                    <div className="font-mono text-lg text-white font-bold">120</div>
                    <div className="text-xs text-muted-foreground">{t.appStats.bpm}</div>
                  </div>
                </div>

                <div className="mt-auto bg-card rounded-2xl border border-white/5 p-3.5 flex justify-around text-muted-foreground">
                  <Smartphone size={20} className="text-primary" />
                  <MapPin size={20} />
                  <MessageSquare size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="reveal order-1 md:order-2">
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white mb-6 leading-none uppercase font-display">
              {t.appPromo.title.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <ul className="space-y-5 mb-10 text-base text-white/90">
              {t.appPromo.features.map((f, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 flex-wrap">
              <button className="bg-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-900 transition-colors text-sm border border-white/10">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="opacity-80"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.04 1.19-2.02 3.56.02 2.81 2.46 3.75 2.49 3.76l-.02.03zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-900 transition-colors text-sm border border-white/10">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="opacity-80"><path d="M3.18 23.76c.3.17.65.19.98.08l12.59-7.28-2.76-2.76-10.81 9.96zM.94 1.28C.36 1.6 0 2.2 0 2.93v18.14c0 .73.36 1.33.94 1.65l.1.06 10.16-10.17v-.24L.94 1.28zm20.1 8.69l-2.89-1.67-3.07 3.07 3.07 3.08 2.91-1.68c.83-.48.83-1.27-.02-1.8zm-8.42 8.67L3.04 24l-.06.04.1.06c.33.17.7.17 1.03-.01l11.68-6.75-3.11-3.11v.01z"/></svg>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact({ club }: { club: FitnessClub }) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const { t } = useLang();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-card border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="reveal">
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white mb-6 uppercase font-display">
              {t.contact.title(club.name)}
            </h2>
            <p className="text-muted-foreground text-base mb-12 leading-relaxed">{t.contact.desc}</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                  <Phone size={22} />
                </div>
                <div className="pt-1">
                  <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wider">{t.contact.phoneLabel}</h4>
                  <p className="text-muted-foreground font-mono">{club.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div className="pt-1">
                  <h4 className="text-white font-bold mb-1 text-sm uppercase tracking-wider">{t.contact.addressLabel}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {club.addr}, <br />
                    {club.city}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-background border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-primary/20 transition-colors">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10 flex justify-between items-center">
                <div>
                  <div className="text-white font-bold text-sm">
                    {club.city} {t.contact.mapCitySuffix}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{t.contact.mapDesc}</div>
                </div>
                <a
                  href={`https://maps.google.com/?q=${club.addr} ${club.city}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-1.5 uppercase tracking-wider"
                >
                  {t.contact.mapBtn} <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="bg-background border border-white/5 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/8 blur-[80px] rounded-full pointer-events-none" />

              {success ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 rounded-[2rem] bg-green-500/15 border border-green-500/20 text-green-500 flex items-center justify-center mb-6">
                    <CheckCircle size={44} />
                  </div>
                  <h3 className="text-2xl font-display text-white mb-2">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-muted-foreground text-sm">{t.contact.successDesc}</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 flex flex-col gap-5"
                >
                  <div>
                    <label className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-wider">
                      {t.contact.form.name}
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-card border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/60 focus:bg-card/60 transition-all placeholder:text-white/20"
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-wider">
                      {t.contact.form.phone}
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-card border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/60 focus:bg-card/60 transition-all placeholder:text-white/20"
                      placeholder={t.contact.form.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-wider">
                      {t.contact.form.interest}
                    </label>
                    <select
                      required
                      className="w-full bg-card border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/60 transition-all appearance-none"
                    >
                      <option value="">{t.contact.form.interestPlaceholder}</option>
                      {t.contact.form.options.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/60 mb-2 uppercase tracking-wider">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      rows={3}
                      className="w-full bg-card border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/60 transition-all resize-none placeholder:text-white/20"
                      placeholder={t.contact.form.messagePlaceholder}
                    ></textarea>
                  </div>
                  <button
                    disabled={submitting}
                    type="submit"
                    className="w-full bg-primary text-white font-bold uppercase tracking-[0.12em] py-4 rounded-xl hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all flex justify-center items-center gap-2 text-sm relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    {submitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span className="relative z-10">{t.contact.form.submit}</span>
                        <ArrowRight size={18} className="relative z-10" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
