import { useState, useEffect } from "react";
import { Star, Smartphone, CheckCircle, MapPin, Phone, MessageSquare, Flame, Activity, ArrowRight } from "lucide-react";
import type { FitnessClub } from "@/hooks/use-fitness-club";

export function Testimonials({ club }: { club: FitnessClub }) {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      name: "Aýna Rejepowa", duration: "8 Aý Agza", result: "12 kg azaldym", rating: 5, program: "Kardio + Iýmitlenme",
      text: `${club.name}-a gelmezden öň sportuň nämedigini hem bilmezdim. Indi günde 1 sagat trenažýorda — ömrümiň iň gowy karary! Tälimçiler örän professional we goldawçy.`
    },
    {
      name: "Maksat Orazow", duration: "1 Ýyl Agza", result: "15 kg myşsa artdy", rating: 5, program: "Güýç Türgenleşigi",
      text: `Işden soň ýadadym diýip bahana tapýardym. ${club.name}-yň 24/7 açyk bolmagy durmuşymy üýtgetdi. Gijeki türgenleşiklerim iň öndürijileri!`
    },
    {
      name: "Güljahan Meredowa", duration: "6 Aý Agza", result: "Bedenim sagaldy", rating: 5, program: "Ýoga + SPA",
      text: `Maşgalama görelde bolmak üçin başladym. Indi çagalarym hem bize goşulýar. ${club.name} diňe bir fitnes merkezi däl — bu jemgyýet.`
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute left-[-10%] top-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Netijeler</span>
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white">Agzalaryň Gürrüňleri</h2>
        </div>

        <div className="relative max-w-4xl mx-auto reveal">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className={`transition-all duration-700 absolute inset-0 ${i === active ? 'opacity-100 translate-x-0 relative z-10' : 'opacity-0 translate-x-8 absolute pointer-events-none'}`}
            >
              <div className="bg-card border border-white/5 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
                <span className="absolute -top-10 -left-6 font-display text-[12rem] text-primary/10 leading-none">"</span>
                
                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="shrink-0 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/40 to-primary flex items-center justify-center font-display text-2xl text-white mb-4">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h4 className="text-white font-bold text-lg text-center md:text-left">{t.name}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{t.duration}</p>
                    <div className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                      <span>✨</span> {t.result}
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex text-yellow-500 mb-6">
                      {[...Array(t.rating)].map((_, idx) => <Star key={idx} size={20} fill="currentColor" />)}
                    </div>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6 font-medium italic">
                      "{t.text}"
                    </p>
                    <span className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                      Programm: {t.program}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActive(i)}
                className={`w-12 h-1.5 rounded-full transition-all ${i === active ? 'bg-primary' : 'bg-white/20 hover:bg-white/40'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AppPromo({ club }: { club: FitnessClub }) {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-20 mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="reveal order-2 md:order-1 flex justify-center">
            {/* CSS Phone Mockup */}
            <div className="w-[300px] h-[600px] bg-card border-[12px] border-black rounded-[3rem] shadow-2xl relative overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-700">
              <div className="absolute top-0 inset-x-0 h-7 w-32 bg-black mx-auto rounded-b-3xl z-20" />
              <div className="absolute inset-0 bg-background pt-12 p-6 flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Salam, Agza</div>
                    <div className="font-bold text-white">Şu günki maksat</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">A</div>
                </div>
                
                <div className="bg-primary p-4 rounded-2xl mb-6 shadow-lg shadow-primary/20">
                  <div className="text-white/80 text-sm mb-1">Indiki Sapak</div>
                  <div className="text-white font-bold text-xl mb-4">CrossFit • 18:00</div>
                  <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-white w-2/3 h-full rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-card p-4 rounded-2xl border border-white/5">
                    <div className="text-primary mb-2"><Flame size={20} /></div>
                    <div className="font-mono text-xl text-white font-bold">450</div>
                    <div className="text-xs text-muted-foreground">Kkal</div>
                  </div>
                  <div className="bg-card p-4 rounded-2xl border border-white/5">
                    <div className="text-primary mb-2"><Activity size={20} /></div>
                    <div className="font-mono text-xl text-white font-bold">120</div>
                    <div className="text-xs text-muted-foreground">BPM</div>
                  </div>
                </div>

                <div className="mt-auto bg-card rounded-2xl border border-white/5 p-4 flex justify-between text-muted-foreground">
                  <Smartphone size={24} className="text-primary" />
                  <MapPin size={24} />
                  <MessageSquare size={24} />
                </div>
              </div>
            </div>
          </div>

          <div className="reveal order-1 md:order-2">
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white mb-6 leading-none uppercase font-display">
              Hemme Zady <br/>Telefonyňyzdan <br/>Dolandyryň
            </h2>
            <ul className="space-y-6 mb-10 text-lg text-white/90">
              <li className="flex items-center gap-4">
                <CheckCircle size={24} className="text-white/60" /> Sapak tertibini gör we ýazyl
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle size={24} className="text-white/60" /> Türgenleşik maglumatlaryňy yzarla
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle size={24} className="text-white/60" /> Tälimçiňe göni habar ýolla
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle size={24} className="text-white/60" /> Girişlik kartaňy telefonda sakla
              </li>
            </ul>
            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-900 transition-colors">
                App Store
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-900 transition-colors">
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
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
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white mb-6 uppercase font-display">{club.name} bilen Habarlaşyň</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Soraglaryňyz barmy? Bize ýazyň, toparymyz gysga wagtyň içinde size jogap berer.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Telefon</h4>
                  <p className="text-muted-foreground font-mono">{club.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Salgymyz</h4>
                  <p className="text-muted-foreground">{club.addr}, <br/>{club.city}</p>
                </div>
              </div>
            </div>

            {/* Simulated Map Card */}
            <div className="mt-12 bg-background border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10 flex justify-between items-center">
                <div>
                  <div className="text-white font-bold">{club.city} şäheri</div>
                  <div className="text-sm text-muted-foreground">Klubyň kartadaky ýeri</div>
                </div>
                <a href={`https://maps.google.com/?q=${club.addr} ${club.city}`} target="_blank" rel="noreferrer" className="px-4 py-2 bg-white/10 text-white rounded text-sm hover:bg-primary hover:text-white transition-colors">
                  Kartada Gör &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="bg-background border border-white/5 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
              
              {success ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-display text-white mb-2">Hat Iberildi!</h3>
                  <p className="text-muted-foreground">Biz gysga wagtyň içinde siz bilen habarlaşarys.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Adyňyz *</label>
                    <input required type="text" className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Maksat Orazow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Telefonyňyz *</label>
                    <input required type="tel" className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="+993 6X XXXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Gyzyklanma *</label>
                    <select required className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="">Saýlaň...</option>
                      <option value="member">Agza bolmak</option>
                      <option value="trainer">Şahsy tälimçi</option>
                      <option value="info">Sapak maglumaty</option>
                      <option value="other">Beýleki</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Habar (Hökman däl)</label>
                    <textarea rows={3} className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Goşmaça bellikler..."></textarea>
                  </div>
                  <button disabled={submitting} type="submit" className="w-full bg-primary text-white font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-primary/90 transition-all flex justify-center items-center gap-2">
                    {submitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Iberiň <ArrowRight size={20} /></>
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
