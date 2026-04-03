import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Star, TrendingUp, Users, Clock } from "lucide-react";
import type { FitnessClub } from "@/hooks/use-fitness-club";
import { useLang } from "@/context/language-context";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let hasAnimated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          hasAnimated = true;
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const update = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);

            start = Math.floor(ease * target);
            node.textContent = start.toLocaleString() + suffix;

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              node.textContent = target.toLocaleString() + suffix;
            }
          };
          requestAnimationFrame(update);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export function Hero({ club }: { club: FitnessClub }) {
  const { t } = useLang();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(".hero-badge", { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: 0.2 })
      .fromTo(
        ".hero-title-word",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power4.out" },
        "-=0.4"
      )
      .fromTo(".hero-sub", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.5")
      .fromTo(
        ".hero-buttons",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        ".hero-stats-card",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)" },
        "-=0.6"
      );
  }, []);

  const currentYear = new Date().getFullYear();
  const yearsExp = currentYear - parseInt(club.est);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-blob pointer-events-none" />
      <div
        className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-blob pointer-events-none"
        style={{ animationDelay: "-5s" }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <div
              className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
              style={{ opacity: 0 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-white tracking-wider">
                {t.hero.open} · {club.city.toUpperCase()}
              </span>
            </div>

            <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] text-white uppercase mb-6 drop-shadow-2xl">
              <div className="overflow-hidden pb-2">
                <span className="hero-title-word inline-block" style={{ opacity: 0 }}>
                  {club.name}
                </span>
              </div>
              <div className="overflow-hidden pb-2 text-primary text-shadow-glow">
                <span className="hero-title-word inline-block" style={{ opacity: 0 }}>
                  {t.hero.clubSuffix.split(" ")[0]}
                </span>
              </div>
              <div className="overflow-hidden pb-2">
                <span className="hero-title-word inline-block" style={{ opacity: 0 }}>
                  {t.hero.clubSuffix.split(" ").slice(1).join(" ")}
                </span>
              </div>
            </h1>

            <p
              className="hero-sub text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 border-l-2 border-primary pl-4"
              style={{ opacity: 0 }}
            >
              {club.tag === "Güýçli. Sagdyn. Erkin." ? t.defaultTag : club.tag}{" "}
              {t.hero.taglineSuffix}
            </p>

            <div
              className="hero-buttons flex flex-wrap items-center gap-4 w-full sm:w-auto"
              style={{ opacity: 0 }}
            >
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:gap-4 group animate-glow"
              >
                {t.hero.freeTrial}
                <ArrowRight size={20} className="transition-transform" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold uppercase tracking-wider rounded border border-white/10 hover:bg-white/10 transition-all text-center"
              >
                {t.hero.pricing}
              </a>
            </div>

            <div
              className="hero-buttons mt-10 flex items-center gap-4 text-sm text-muted-foreground"
              style={{ opacity: 0 }}
            >
              <div className="flex gap-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="font-mono text-white">
                {club.members}+ {t.hero.membersLabel}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>
                {club.est}
                {t.hero.membersSince}
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div
              className="hero-stats-card animate-float glass-panel rounded-[2rem] p-8 relative"
              style={{ opacity: 0 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[40px] rounded-full pointer-events-none" />

              <h3 className="font-display text-2xl text-white mb-8 border-b border-white/10 pb-4">
                {t.statsCard.title}
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="font-mono text-2xl text-white font-bold">{club.members}+</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {t.statsCard.members}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <div className="font-mono text-2xl text-white font-bold">{club.trainers}+</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {t.statsCard.trainers}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="font-mono text-2xl text-white font-bold">
                      {yearsExp}
                      {t.statsCard.yearSuffix}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {t.statsCard.experience}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsTicker({ club }: { club: FitnessClub }) {
  const { t } = useLang();
  const currentYear = new Date().getFullYear();
  const yearsExp = currentYear - parseInt(club.est);
  const memCount = parseInt(club.members);
  const trainCount = parseInt(club.trainers);

  return (
    <div className="w-full bg-primary/10 border-y border-primary/20 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary/10 text-center">
        <div className="reveal">
          <div className="font-mono text-4xl md:text-5xl font-bold text-white mb-2 text-shadow-glow">
            <Counter target={memCount} suffix="+" />
          </div>
          <div className="text-primary font-bold uppercase tracking-widest text-sm">
            {t.ticker.members}
          </div>
        </div>
        <div className="reveal">
          <div className="font-mono text-4xl md:text-5xl font-bold text-white mb-2 text-shadow-glow">
            <Counter target={trainCount} suffix="+" />
          </div>
          <div className="text-primary font-bold uppercase tracking-widest text-sm">
            {t.ticker.trainers}
          </div>
        </div>
        <div className="reveal">
          <div className="font-mono text-4xl md:text-5xl font-bold text-white mb-2 text-shadow-glow">
            <Counter target={yearsExp} />
          </div>
          <div className="text-primary font-bold uppercase tracking-widest text-sm">
            {t.ticker.experience}
          </div>
        </div>
        <div className="reveal">
          <div className="font-mono text-4xl md:text-5xl font-bold text-white mb-2 text-shadow-glow">
            24/7
          </div>
          <div className="text-primary font-bold uppercase tracking-widest text-sm">
            {t.ticker.open}
          </div>
        </div>
      </div>
    </div>
  );
}
