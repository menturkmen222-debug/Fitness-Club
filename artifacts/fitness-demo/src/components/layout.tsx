import { useState, useEffect } from "react";
import { Menu, X, Instagram, Send, MapPin, Phone } from "lucide-react";
import type { FitnessClub } from "@/hooks/use-fitness-club";
import { useLang } from "@/context/language-context";
import type { Lang } from "@/i18n/translations";
import { FlagRU, FlagTM, IconDumbbell, IconGlobe, IconWrench } from "./icons";

interface LayoutProps {
  club: FitnessClub;
}

function LangToggle() {
  const { lang, setLang } = useLang();

  const options: { value: Lang; label: string; flag: React.ReactNode }[] = [
    { value: "ru", label: "RU", flag: <FlagRU size={18} /> },
    { value: "tk", label: "TK", flag: <FlagTM size={18} /> },
  ];

  return (
    <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1">
      <IconGlobe size={13} className="text-muted-foreground ml-1.5" />
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => setLang(o.value)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
            lang === o.value
              ? "bg-primary text-white"
              : "text-muted-foreground hover:text-white"
          }`}
        >
          {o.flag}
          <span>{o.label}</span>
        </button>
      ))}
    </div>
  );
}

export function Navbar({ club }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.trainers, href: "#trainers" },
    { name: t.nav.pricing, href: "#pricing" },
    { name: t.nav.gallery, href: "#gallery" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`nav-anim fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/75 backdrop-blur-2xl border-b border-white/5 py-3 shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent py-6"
        }`}
      >
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        )}

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:shadow-primary/50 transition-all duration-300">
                <IconDumbbell size={20} className="text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-background animate-pulse" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl tracking-widest text-white">
                {club.name}<span className="text-primary">.</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase font-medium">
                Fitness Club
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-white/[0.03] border border-white/[0.06] rounded-full px-1 py-1 backdrop-blur-sm">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-[13px] font-semibold text-muted-foreground hover:text-white transition-all duration-200 rounded-full hover:bg-white/5 group ${i === 0 ? "text-white" : ""}`}
                >
                  {link.name}
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full group-hover:w-[60%] transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LangToggle />
            <span className="font-mono text-white/70 text-sm font-medium border-l border-white/10 pl-3">{club.phone}</span>
            <a
              href="#pricing"
              className="relative px-5 py-2 bg-primary text-white text-xs font-bold uppercase tracking-[0.12em] rounded-full overflow-hidden group hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 animate-glow"
            >
              <span className="relative z-10">{t.nav.freeTrial}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </div>

          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/98 backdrop-blur-2xl" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "repeating-linear-gradient(-55deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 31px)",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <button
          className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-all z-10"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={20} />
        </button>

        <div className="absolute top-5 left-5 z-10">
          <LangToggle />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-1 w-full px-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center gap-4 py-3 w-full max-w-xs justify-center border-b border-white/5 last:border-0"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="font-display text-3xl text-white/80 group-hover:text-white transition-colors tracking-widest">
                {link.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
          <div className="mt-8 flex flex-col items-center gap-4 pt-4">
            <span className="font-mono text-primary/80 text-base">{club.phone}</span>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-10 py-3.5 bg-primary text-white text-sm font-bold uppercase tracking-[0.15em] rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
            >
              {t.nav.freeTrial}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export function Footer({ club }: LayoutProps) {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/5 bg-background pt-20 pb-10 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
              <IconDumbbell size={22} className="text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-3xl tracking-widest text-white">
                {club.name}<span className="text-primary">.</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Fitness Club</span>
            </div>
          </div>
          <p className="text-muted-foreground max-w-sm mb-8 text-base leading-relaxed">
            {t.footer.desc(club.city, club.tag === "Güýçli. Sagdyn. Erkin." ? t.defaultTag : club.tag)}
          </p>
          <div className="flex gap-3">
            <a
              href={`https://instagram.com/${club.ig}`}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
            >
              <Instagram size={17} />
            </a>
            <a
              href={`https://t.me/${club.tg}`}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
            >
              <Send size={17} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-white mb-6 tracking-wider">{t.footer.programs}</h4>
          <ul className="space-y-3.5 text-muted-foreground">
            {t.footer.programLinks.map((link) => (
              <li key={link}>
                <a href="#" className="flex items-center gap-2 text-sm hover:text-primary transition-colors group">
                  <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary group-hover:w-3 transition-all duration-300" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white mb-6 tracking-wider">{t.footer.contact}</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={16} className="text-primary" />
              </div>
              <span className="text-sm leading-relaxed pt-1">
                {club.addr}, {club.city}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={16} className="text-primary" />
              </div>
              <span className="font-mono text-sm">{club.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              </div>
              <span className="text-sm">{t.footer.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground relative z-10">
        <p>
          © {new Date().getFullYear()} {club.name}. {t.footer.rights}
        </p>
        <p className="flex items-center gap-1.5">
          {t.footer.madeByPrefix}{" "}
          <a
            href="https://yenil.ru"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-primary transition-colors"
          >
            <IconWrench size={14} className="text-primary" />
            {t.footer.madeBy}
          </a>
          {t.footer.madeByPostfix ? ` ${t.footer.madeByPostfix}` : ""}
        </p>
      </div>
    </footer>
  );
}
