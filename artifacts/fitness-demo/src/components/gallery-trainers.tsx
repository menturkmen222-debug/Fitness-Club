import { ArrowRight, Trophy } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

export function Trainers() {
  const trainers = [
    {
      name: "Merdan Hydyrow",
      specialty: "Güýç & Powerlifting",
      cert: "Milli Çempion 2021",
      experience: "8 Ýyl",
      emoji: "🏋️‍♂️",
      color: "from-blue-600/60 to-blue-900/80",
      img: `${BASE}trainers/trainer-1.png`,
    },
    {
      name: "Aýgül Annagylyjowa",
      specialty: "Ýoga & Pilates",
      cert: "RYT-500 · 500+ Okuwçy",
      experience: "6 Ýyl",
      emoji: "🧘‍♀️",
      color: "from-purple-500/60 to-purple-900/80",
      img: null,
    },
    {
      name: "Serdar Atabaýew",
      specialty: "Boks & MMA",
      cert: "WBC Sertifikatly · 2x Çempion",
      experience: "12 Ýyl",
      emoji: "🥊",
      color: "from-red-600/60 to-red-900/80",
      img: null,
    },
    {
      name: "Ogulgerek Durdyýewa",
      specialty: "Kardio & HIIT",
      cert: "ACE Sertifikatly · 1000+ Seans",
      experience: "5 Ýyl",
      emoji: "🏃‍♀️",
      color: "from-orange-500/60 to-orange-900/80",
      img: null,
    },
  ];

  return (
    <section id="trainers" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-16 reveal">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Biziň Toparymyz</span>
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white leading-none">Tälimçiler</h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-white hover:text-primary transition-colors group pb-2">
            Şahsy Tälimçi Soramak <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 snap-x snap-mandatory pb-8 lg:pb-0 scrollbar-hide">
          {trainers.map((t, i) => (
            <div key={i} className="reveal min-w-[280px] lg:min-w-0 snap-center group" style={{ perspective: '1000px' }}>
              <div
                className="relative h-[440px] rounded-[2rem] overflow-hidden transition-all duration-500 border border-white/5 group-hover:border-primary/40 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {t.img ? (
                  <img
                    src={t.img}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${t.color}`} />
                )}

                <div className={`absolute inset-0 bg-gradient-to-br ${t.color} ${t.img ? 'opacity-50' : 'opacity-60'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 z-10">
                  <Trophy size={13} className="text-yellow-400" />
                  <span className="text-xs font-bold text-white/90">{t.experience}</span>
                </div>

                {!t.img && (
                  <div className="absolute inset-x-0 top-[18%] flex justify-center z-10 group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-500">
                    <span className="text-[6rem] drop-shadow-2xl">{t.emoji}</span>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                  <h3 className="font-display text-2xl text-white mb-1 leading-tight">{t.name}</h3>
                  <p className="text-primary font-semibold mb-2">{t.specialty}</p>
                  <p className="text-xs text-white/50 font-medium">{t.cert}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const images = [
    { label: "Gym Zaly", icon: "💪", cols: "col-span-1 md:col-span-2", rows: "row-span-2", src: `${BASE}gallery/gym-hall.png` },
    { label: "Kardio Bölümi", icon: "🏃‍♂️", cols: "col-span-1", rows: "row-span-1", src: `${BASE}gallery/cardio.png` },
    { label: "SPA & Sauna", icon: "🧖‍♀️", cols: "col-span-1", rows: "row-span-1", src: `${BASE}gallery/spa.png` },
    { label: "Ýoga Otagy", icon: "🧘", cols: "col-span-1 md:col-span-1", rows: "row-span-2", src: `${BASE}gallery/yoga.png` },
    { label: "Boks Ringi", icon: "🥊", cols: "col-span-1 md:col-span-2", rows: "row-span-1", src: `${BASE}gallery/boxing.png` },
    { label: "Garderop & Duş", icon: "👕", cols: "col-span-1", rows: "row-span-1", src: `${BASE}gallery/locker.png` },
    { label: "Içgiler Bary", icon: "🥤", cols: "col-span-1 md:col-span-2", rows: "row-span-1", src: `${BASE}gallery/juice-bar.png` },
  ];

  return (
    <section id="gallery" className="py-24 bg-card border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Bizden Görnüşler</span>
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white">Klubumyzdan Görnüşler</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Premium infrastruktura we döwrebap mümkinçilikler</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`reveal ${img.cols} ${img.rows} rounded-2xl md:rounded-3xl relative overflow-hidden group border border-white/5 cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent pt-8">
                <span className="font-display text-xl tracking-wider text-white flex items-center gap-2">
                  <span>{img.icon}</span> {img.label}
                </span>
              </div>

              <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
