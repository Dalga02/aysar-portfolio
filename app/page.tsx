import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Services } from "@/components/services/Services";
import { Projects } from "@/components/projects/Projects";
import { Timeline } from "@/components/timeline/Timeline";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { FloatingFeatureCard } from "@/components/effects/FloatingFeatureCard";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main className="relative">
        <Hero />
        <FloatingFeatureCard />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
