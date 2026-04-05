import { ArrowRight, Trophy } from "lucide-react";
import { useLang } from "@/context/language-context";
import {
  IconBarbell,
  IconYoga,
  IconBoxingGlove,
  IconRunner,
  IconGalleryGym,
  IconGalleryCardio,
  IconGallerySpa,
  IconGalleryYoga,
  IconGalleryBoxing,
  IconGalleryLocker,
  IconGalleryBar,
} from "./icons";

const BASE = import.meta.env.BASE_URL;

const TRAINER_NAMES = ["Merdan Hydyrow", "Aýgül Annagylyjowa", "Serdar Atabaýew", "Ogulgerek Durdyýewa"];
const TRAINER_ICON_COMPONENTS = [IconBarbell, IconYoga, IconBoxingGlove, IconRunner];
const TRAINER_COLORS = [
  "from-blue-600/60 to-blue-900/80",
  "from-purple-500/60 to-purple-900/80",
  "from-red-600/60 to-red-900/80",
  "from-orange-500/60 to-orange-900/80",
];
const TRAINER_BG_ACCENTS = [
  "bg-blue-500",
  "bg-purple-500",
  "bg-red-500",
  "bg-orange-500",
];
const TRAINER_IMGS = [`${BASE}trainers/trainer-1.png`, null, null, null];

const GALLERY_COLS = [
  "col-span-1 md:col-span-2",
  "col-span-1",
  "col-span-1",
  "col-span-1 md:col-span-1",
  "col-span-1 md:col-span-2",
  "col-span-1",
  "col-span-1 md:col-span-2",
];
const GALLERY_ROWS = [
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-1",
];
const GALLERY_SRCS = [
  `${BASE}gallery/gym-hall.png`,
  `${BASE}gallery/cardio.png`,
  `${BASE}gallery/spa.png`,
  `${BASE}gallery/yoga.png`,
  `${BASE}gallery/boxing.png`,
  `${BASE}gallery/locker.png`,
  `${BASE}gallery/juice-bar.png`,
];

const GALLERY_ICON_COMPONENTS = [
  IconGalleryGym,
  IconGalleryCardio,
  IconGallerySpa,
  IconGalleryYoga,
  IconGalleryBoxing,
  IconGalleryLocker,
  IconGalleryBar,
];

export function Trainers() {
  const { t } = useLang();

  return (
    <section id="trainers" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-16 reveal">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-sm">
              {t.trainers.subtitle}
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white leading-none">
              {t.trainers.title}
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-white hover:text-primary transition-colors group pb-2 text-sm"
          >
            {t.trainers.askPersonal}{" "}
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 snap-x snap-mandatory pb-8 lg:pb-0 scrollbar-hide">
          {t.trainers.items.map((item, i) => {
            const TrainerIcon = TRAINER_ICON_COMPONENTS[i];
            return (
              <div
                key={i}
                className="reveal min-w-[280px] lg:min-w-0 snap-center group"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative h-[440px] rounded-[2rem] overflow-hidden transition-all duration-500 border border-white/5 group-hover:border-primary/40 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {TRAINER_IMGS[i] ? (
                    <img
                      src={TRAINER_IMGS[i]!}
                      alt={TRAINER_NAMES[i]}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${TRAINER_COLORS[i]}`} />
                  )}

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${TRAINER_COLORS[i]} ${TRAINER_IMGS[i] ? "opacity-50" : "opacity-60"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 9px)" }}
                  />

                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 z-10">
                    <Trophy size={12} className="text-yellow-400" />
                    <span className="text-xs font-bold text-white/90">{item.experience}</span>
                  </div>

                  {!TRAINER_IMGS[i] && (
                    <div className="absolute inset-x-0 top-[15%] flex justify-center z-10 group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-500">
                      <div className={`w-32 h-32 rounded-[2rem] ${TRAINER_BG_ACCENTS[i]}/20 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl`}>
                        <div className={`w-24 h-24 rounded-[1.5rem] ${TRAINER_BG_ACCENTS[i]}/30 flex items-center justify-center`}>
                          <TrainerIcon size={56} className="text-white drop-shadow-lg" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-1 h-6 rounded-full ${TRAINER_BG_ACCENTS[i]} opacity-80`} />
                      <h3 className="font-display text-2xl text-white leading-tight">
                        {TRAINER_NAMES[i]}
                      </h3>
                    </div>
                    <p className="text-primary font-semibold mb-1.5 text-sm pl-3">{item.specialty}</p>
                    <p className="text-xs text-white/40 font-medium pl-3">{item.cert}</p>
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

export function Gallery() {
  const { t } = useLang();

  return (
    <section id="gallery" className="py-24 bg-card border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-sm">
            {t.gallery.subtitle}
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] text-white">{t.gallery.title}</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">{t.gallery.desc}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px]">
          {t.gallery.images.map((img, i) => {
            const GalleryIcon = GALLERY_ICON_COMPONENTS[i];
            return (
              <div
                key={i}
                className={`reveal ${GALLERY_COLS[i]} ${GALLERY_ROWS[i]} rounded-2xl md:rounded-3xl relative overflow-hidden group border border-white/5 cursor-pointer`}
              >
                <img
                  src={GALLERY_SRCS[i]}
                  alt={img.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent pt-8">
                  <span className="font-display text-lg tracking-wider text-white flex items-center gap-2">
                    <GalleryIcon size={18} className="text-primary" />
                    {img.label}
                  </span>
                </div>

                <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                  <GalleryIcon size={13} className="text-primary" />
                  <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                    {img.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
