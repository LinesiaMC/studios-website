import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="relative">
      {/* Fond général avec dégradé subtil pour éviter le noir sur blanc */}
      <div className="fixed inset-0 bg-gradient-to-b from-white via-primary-light/20 to-white pointer-events-none -z-10" />
      <Hero />
      <Features />
      <Projects />
    </div>
  );
}

