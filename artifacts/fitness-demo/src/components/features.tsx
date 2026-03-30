import { Dumbbell, HeartPulse, Activity, Zap, Flame, Salad, Droplets, Target, Award, CheckCircle2, ArrowRight } from "lucide-react";
import type { FitnessClub } from "@/hooks/use-fitness-club";

export function Services() {
  const services = [
    { title: "Güýç Türgenleşigi", icon: Dumbbell, time: "60 MIN", intensity: 5 },
    { title: "Kardio Bölümi", icon: HeartPulse, time: "45 MIN", intensity: 4 },
    { title: "Ýoga & Meditasiýa", icon: Activity, time: "60 MIN", intensity: 2 },
    { title: "Boks & MMA", icon: Flame, time: "90 MIN", intensity: 5 },
    { title: "Suwda Türgenleşik", icon: Droplets, time: "45 MIN", intensity: 3 },
    { title: "HIIT Trenažýory", icon: Zap, time: "30 MIN", intensity: 5 },
    { title: "Iýmitlenme Maslahaty", icon: Salad, time: "45 MIN", intensity: 1 },
    { title: "SPA & Dikeltme", icon: Target, time: "60 MIN", intensity: 1 },
  ];

  return (
    <section id="services" className="py-24 bg-background relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <span className="text-primary font-bold tracking-widest uppercase mb-4">Hyzmat Ugurlarymyz</span>
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white">Hyzmatlarymyz</h2>
          <p className="text-muted-foreground max-w-2xl text-lg mt-4">
            Her bir maksat üçin ýöriteleşdirilen programmalar. Özüňize iň laýyk gelýän ugruny saýlaň.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="reveal bg-card border border-white/5 p-8 rounded-[2rem] group hover:-translate-y-2 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10">
                <s.icon size={28} />
              </div>
              
              <h3 className="font-display text-2xl text-white mb-2 relative z-10">{s.title}</h3>
              
              <div className="mt-auto pt-6 flex items-center justify-between relative z-10">
                <span className="font-mono text-sm text-muted-foreground bg-background px-3 py-1 rounded-full">{s.time}</span>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(dot => (
                    <div 
                      key={dot} 
                      className={`w-1.5 h-1.5 rounded-full ${dot <= s.intensity ? 'bg-primary' : 'bg-white/10'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs({ club }: { club: FitnessClub }) {
  const features = [
    { title: "Döwrebap Enjamlar", desc: "Dünýä belli brendleriň iň soňky wersiýalary bilen üpjün edilen.", icon: Zap },
    { title: "Hünärmen Tälimçiler", desc: "Ýörite sertifikatly we tejribeli topar.", icon: Award },
    { title: "24/7 Açyk", desc: "Islän wagtyňyz, gije ýa-da gündiz türgenleşiň.", icon: CheckCircle2 },
    { title: "Şahsy Meýilnama", desc: "Siziň bedeniňize we maksadyňyza görä ýörite programma.", icon: Target },
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="bg-stripe absolute inset-0 opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal">
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Aýratynlyklar</span>
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white mb-6 leading-none">
              Näme üçin <br/><span className="text-primary">{club.name}?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Biz diňe bir fitnes zaly däl, eýsem sagdyn durmuş ýörelgesiniň merkezidiris. {club.members}+ agzamyzyň ynamyny gazanmagymyzyň esasy sebäpleri bar.
            </p>
            <a href="#pricing" className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-white hover:text-primary transition-colors group">
              Agza Bolmak <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="reveal bg-background border border-white/5 p-6 rounded-3xl hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                  <f.icon size={24} />
                </div>
                <h4 className="font-display text-xl text-white mb-2">{f.title}</h4>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
