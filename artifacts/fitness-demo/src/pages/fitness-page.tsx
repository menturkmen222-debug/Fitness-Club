import { useFitnessClub } from "@/hooks/use-fitness-club";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LanguageProvider } from "@/context/language-context";
import { Navbar, Footer } from "@/components/layout";
import { Hero, StatsTicker } from "@/components/hero-stats";
import { Services, WhyUs } from "@/components/features";
import { Trainers, Gallery } from "@/components/gallery-trainers";
import { Pricing, Schedule } from "@/components/pricing-schedule";
import { Testimonials, AppPromo, Contact } from "@/components/testimonials-contact";

export default function FitnessPage() {
  const club = useFitnessClub();

  useScrollReveal();

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background flex flex-col selection:bg-primary selection:text-white">
        <Navbar club={club} />

        <main>
          <Hero club={club} />
          <StatsTicker club={club} />
          <Services />
          <WhyUs club={club} />
          <Gallery />
          <Trainers />
          <Pricing />
          <Schedule />
          <Testimonials club={club} />
          <AppPromo club={club} />
          <Contact club={club} />
        </main>

        <Footer club={club} />
      </div>
    </LanguageProvider>
  );
}
