import { useState, useEffect } from "react";
import { Dumbbell, Menu, X, Instagram, Send, MapPin, Phone } from "lucide-react";
import type { FitnessClub } from "@/hooks/use-fitness-club";

interface LayoutProps {
  club: FitnessClub;
}

export function Navbar({ club }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Baş Sahypa", href: "#" },
    { name: "Hyzmatlar", href: "#services" },
    { name: "Tälimçiler", href: "#trainers" },
    { name: "Bahalar", href: "#pricing" },
    { name: "Galereýa", href: "#gallery" },
    { name: "Habarlaş", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`nav-anim fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center">
              <Dumbbell size={20} />
            </div>
            <span className="font-display text-2xl tracking-wider text-white">
              {club.name}
              <span className="text-primary">.</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span className="font-mono text-white font-medium">{club.phone}</span>
            <a
              href="#pricing"
              className="px-6 py-2.5 bg-primary text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-primary/90 hover:scale-105 transition-all animate-glow"
            >
              Mugt Synag
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-4xl text-white hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8 flex flex-col items-center gap-4">
            <span className="font-mono text-primary text-xl">{club.phone}</span>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-3 bg-primary text-white text-lg font-bold uppercase tracking-wider rounded"
            >
              Mugt Synag
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export function Footer({ club }: LayoutProps) {
  return (
    <footer className="border-t border-white/5 bg-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded bg-primary text-white flex items-center justify-center">
              <Dumbbell size={24} />
            </div>
            <span className="font-display text-4xl tracking-wider text-white">
              {club.name}
              <span className="text-primary">.</span>
            </span>
          </div>
          <p className="text-muted-foreground max-w-sm mb-8 text-lg">
            {club.city} şäheriniň iň döwrebap we premium fitnes merkezi. {club.tag}
          </p>
          <div className="flex gap-4">
            <a href={`https://instagram.com/${club.ig}`} className="w-10 h-10 rounded-full bg-card border border-white/5 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
              <Instagram size={18} />
            </a>
            <a href={`https://t.me/${club.tg}`} className="w-10 h-10 rounded-full bg-card border border-white/5 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
              <Send size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl text-white mb-6">Programmalar</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Güýç Türgenleşigi</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Kardio & HIIT</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Ýoga & Meditasiýa</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Boks & MMA</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Şahsy Tälimçi</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-white mb-6">Habarlaş</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-primary shrink-0 mt-1" />
              <span>{club.addr}, {club.city}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-primary shrink-0" />
              <span className="font-mono">{club.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <span>Hergün: 06:00 - 23:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {club.name}. Ähli hukuklar goragly.</p>
        <p>
          Bu saýt <a href="https://yenil.ru" className="text-white hover:text-primary transition-colors">🔧 Ýeňil Web Agentligi</a> tarapyndan döredildi
        </p>
      </div>
    </footer>
  );
}
