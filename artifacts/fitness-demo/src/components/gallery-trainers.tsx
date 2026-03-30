import { ArrowRight, Trophy } from "lucide-react";

export function Trainers() {
  const trainers = [
    { name: "Merdan Hydyrow", specialty: "Güýç & Powerlifting", cert: "Elite Trainer", emoji: "🏋️‍♂️", color: "from-blue-600 to-blue-900" },
    { name: "Aýgül Annamyradowa", specialty: "Ýoga & Pilates", cert: "Master Yogi", emoji: "🧘‍♀️", color: "from-purple-500 to-purple-900" },
    { name: "Serdar Atabaýew", specialty: "Boks & MMA", cert: "Pro Fighter", emoji: "🥊", color: "from-red-600 to-red-900" },
    { name: "Ogulgerek Durdyýewa", specialty: "Kardio & HIIT", cert: "Cardio Spec.", emoji: "🏃‍♀️", color: "from-orange-500 to-orange-900" }
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

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 snap-x snap-mandatory pb-8 lg:pb-0 hide-scrollbar">
          {trainers.map((t, i) => (
            <div key={i} className="reveal min-w-[280px] lg:min-w-0 snap-center group perspective-1000">
              <div className="relative h-[400px] rounded-[2rem] bg-card border border-white/5 overflow-hidden transition-transform duration-500 group-hover:rotate-x-2 group-hover:rotate-y-2 group-hover:border-primary/50">
                <div className={`absolute inset-x-0 top-0 h-[60%] bg-gradient-to-br ${t.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
                
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                  <Trophy size={14} className="text-yellow-500" />
                  <span className="text-xs font-bold text-white">{t.cert}</span>
                </div>

                <div className="absolute inset-x-0 top-[20%] flex justify-center transform group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-500">
                  <span className="text-8xl drop-shadow-2xl">{t.emoji}</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-card via-card/90 to-transparent pt-20">
                  <h3 className="font-display text-2xl text-white mb-1">{t.name}</h3>
                  <p className="text-primary font-medium">{t.specialty}</p>
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
    { label: "Gym Zaly", icon: "💪", cols: "col-span-1 md:col-span-2", rows: "row-span-2", bg: "from-gray-800 to-black" },
    { label: "Kardio Bölümi", icon: "🏃‍♂️", cols: "col-span-1", rows: "row-span-1", bg: "from-blue-900/50 to-black" },
    { label: "SPA", icon: "🧖‍♀️", cols: "col-span-1", rows: "row-span-1", bg: "from-teal-900/50 to-black" },
    { label: "Ýoga Otagy", icon: "🧘", cols: "col-span-1 md:col-span-1", rows: "row-span-2", bg: "from-purple-900/50 to-black" },
    { label: "Boks Ringi", icon: "🥊", cols: "col-span-1 md:col-span-2", rows: "row-span-1", bg: "from-red-900/50 to-black" },
    { label: "Garderop", icon: "👕", cols: "col-span-1", rows: "row-span-1", bg: "from-gray-800 to-black" },
    { label: "Suwsuzlyk Bar", icon: "🥤", cols: "col-span-1 md:col-span-2", rows: "row-span-1", bg: "from-green-900/50 to-black" },
  ];

  return (
    <section className="py-24 bg-card border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Gözleg</span>
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white">Klubumyzdan Görnüşler</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px]">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`reveal ${img.cols} ${img.rows} rounded-3xl relative overflow-hidden group border border-white/5 bg-gradient-to-br ${img.bg}`}
            >
              <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30" />
              
              <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500">
                {img.icon}
              </div>

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-display text-2xl tracking-wider text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
