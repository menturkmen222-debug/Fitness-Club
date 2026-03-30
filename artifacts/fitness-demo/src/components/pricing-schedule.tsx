import { useState } from "react";
import { Check, X } from "lucide-react";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Başlangyç",
      badge: "Täze Agzalar Üçin",
      price_monthly: 150,
      price_annual_monthly: 120,
      color: "border-white/10 bg-card",
      popular: false,
      features: [
        { t: "Gym Zaly — Çäklendirilmedik", inc: true },
        { t: "Kardio Bölümi", inc: true },
        { t: "Duş & Garderop", inc: true },
        { t: "Mobil App", inc: true },
        { t: "Gruppa sapaklary", inc: false },
        { t: "Şahsy tälimçi", inc: false },
        { t: "SPA Bölümi", inc: false },
      ],
    },
    {
      name: "Premium",
      badge: "Iň Meşhur Saýlaw",
      price_monthly: 300,
      price_annual_monthly: 240,
      color: "border-primary bg-primary/5 scale-105 shadow-[0_0_40px_rgba(var(--club-accent-rgb),0.15)] z-10 relative",
      popular: true,
      features: [
        { t: "Gym Zaly — Çäklendirilmedik", inc: true },
        { t: "Ähli Gruppa Sapaklary", inc: true },
        { t: "Kardio & HIIT Bölümleri", inc: true },
        { t: "SPA & Sauna", inc: true },
        { t: "Mobil App + Premium", inc: true },
        { t: "Aýda 2x Şahsy Tälimçi", inc: true },
        { t: "Iýmitlenme Maslahaty", inc: true },
      ],
    },
    {
      name: "Elite",
      badge: "Iň Doly Tejribe",
      price_monthly: 600,
      price_annual_monthly: 480,
      color: "border-yellow-500/50 bg-gradient-to-b from-yellow-500/5 to-card",
      popular: false,
      features: [
        { t: "Hemme Zada Girişlik", inc: true },
        { t: "Çäklendirilmedik Şahsy Tälimçi", inc: true },
        { t: "Bagyşlanan Tälimçi", inc: true },
        { t: "Şahsy Iýmitlenme Meýilnamasy", inc: true },
        { t: "VIP Garderop", inc: true },
        { t: "Myhmanlara Girişlik (2x/aý)", inc: true },
        { t: "Klub Etajerwkasy Çäreleri", inc: true },
      ],
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white mb-4">Size Laýyk Meýilnama</h2>
          <p className="text-muted-foreground text-lg mb-8">Şertnama ýok. Islän wagtyňyz ýatyrip bilersiňiz.</p>
          
          <div className="inline-flex items-center gap-4 bg-card p-2 rounded-full border border-white/5">
            <button 
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${!isAnnual ? 'bg-primary text-white' : 'text-muted-foreground hover:text-white'}`}
              onClick={() => setIsAnnual(false)}
            >
              Aýlyk
            </button>
            <button 
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${isAnnual ? 'bg-primary text-white' : 'text-muted-foreground hover:text-white'}`}
              onClick={() => setIsAnnual(true)}
            >
              Ýyllyk <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full hidden sm:inline-block">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-16 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`reveal rounded-3xl p-8 border ${plan.color} flex flex-col h-full`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="font-display text-3xl text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 h-5">{!plan.popular ? plan.badge : ''}</p>
              
              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-5xl font-mono font-bold text-white transition-all">
                  {isAnnual ? plan.price_annual_monthly : plan.price_monthly}
                </span>
                <span className="text-muted-foreground font-medium">TMT / aý</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {f.inc ? (
                      <Check size={20} className="text-primary shrink-0" />
                    ) : (
                      <X size={20} className="text-white/20 shrink-0" />
                    )}
                    <span className={f.inc ? 'text-white' : 'text-white/40'}>{f.t}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all ${
                plan.popular 
                  ? 'bg-primary text-white hover:bg-primary/90 animate-glow' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                {plan.name} Saýla
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState("Duşenbe");
  
  const days = ["Duşenbe", "Sişenbe", "Çarşenbe", "Penşenbe", "Anna", "Şenbe", "Ýekşenbe"];
  const classes = {
    "Duşenbe": [
      { t: "07:00", c: "Irki HIIT", tr: "O. Durdyýewa", type: "hiit" },
      { t: "10:00", c: "Ýoga", tr: "A. Annamyradowa", type: "yoga" },
      { t: "18:00", c: "Boks", tr: "S. Atabaýew", type: "boxing" },
      { t: "20:00", c: "Güýç Topary", tr: "M. Hydyrow", type: "strength" },
    ],
    "Sişenbe": [
      { t: "08:00", c: "Kardio", tr: "O. Durdyýewa", type: "cardio" },
      { t: "12:00", c: "Pilates", tr: "A. Annamyradowa", type: "yoga" },
      { t: "17:00", c: "CrossFit", tr: "M. Hydyrow", type: "strength" },
      { t: "19:00", c: "MMA", tr: "S. Atabaýew", type: "boxing" },
    ],
    // Mirroring for demo
    "Çarşenbe": [
      { t: "07:00", c: "Irki HIIT", tr: "O. Durdyýewa", type: "hiit" },
      { t: "10:00", c: "Ýoga", tr: "A. Annamyradowa", type: "yoga" },
      { t: "18:00", c: "Boks", tr: "S. Atabaýew", type: "boxing" },
      { t: "20:00", c: "Güýç Topary", tr: "M. Hydyrow", type: "strength" },
    ],
    "Penşenbe": [
      { t: "08:00", c: "Kardio", tr: "O. Durdyýewa", type: "cardio" },
      { t: "12:00", c: "Pilates", tr: "A. Annamyradowa", type: "yoga" },
      { t: "17:00", c: "CrossFit", tr: "M. Hydyrow", type: "strength" },
      { t: "19:00", c: "MMA", tr: "S. Atabaýew", type: "boxing" },
    ],
    "Anna": [
       { t: "09:00", c: "Erkin türgenleşik", tr: "-", type: "cardio" },
       { t: "18:00", c: "Taý Boks", tr: "S. Atabaýew", type: "boxing" },
       { t: "19:30", c: "Meditation", tr: "A. Annamyradowa", type: "yoga" },
    ],
    "Şenbe": [
       { t: "10:00", c: "Weekend Warrior", tr: "M. Hydyrow", type: "hiit" },
       { t: "12:00", c: "Stretching", tr: "A. Annamyradowa", type: "yoga" },
    ],
    "Ýekşenbe": [
       { t: "11:00", c: "Yoga Flow", tr: "A. Annamyradowa", type: "yoga" },
    ]
  };

  const colors: Record<string, string> = {
    hiit: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    yoga: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    boxing: "bg-red-500/20 text-red-400 border-red-500/30",
    strength: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    cardio: "bg-teal-500/20 text-teal-400 border-teal-500/30",
  };

  return (
    <section className="py-24 bg-card border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Tertip</span>
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white">Hepdelik Sapak Tertibi</h2>
        </div>

        {/* Mobile Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-8 scrollbar-hide md:hidden">
          {days.map(d => (
            <button
              key={d}
              onClick={() => setActiveDay(d)}
              className={`px-6 py-3 rounded-xl whitespace-nowrap font-bold text-sm transition-all ${
                activeDay === d ? 'bg-primary text-white' : 'bg-background border border-white/5 text-muted-foreground'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Grid Display (Desktop) / List Display (Mobile) */}
        <div className="bg-background border border-white/5 rounded-[2rem] p-6 lg:p-10 reveal">
          <div className="hidden md:grid grid-cols-7 gap-4 mb-6 border-b border-white/5 pb-4">
            {days.map(d => (
              <div key={d} className="font-display text-xl text-center text-white">{d}</div>
            ))}
          </div>

          <div className="md:grid grid-cols-7 gap-4">
            {days.map(d => (
              <div key={d} className={`flex flex-col gap-3 ${activeDay !== d ? 'hidden md:flex' : 'flex'}`}>
                {classes[d as keyof typeof classes].map((cls, i) => (
                  <div key={i} className={`p-4 rounded-2xl border ${colors[cls.type]} flex flex-col`}>
                    <span className="font-mono text-lg font-bold mb-1">{cls.t}</span>
                    <span className="font-bold mb-2 leading-tight">{cls.c}</span>
                    <span className="text-xs opacity-80 mt-auto">{cls.tr}</span>
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
