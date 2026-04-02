import ParticleGrid from "@/components/ParticleGrid";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <ParticleGrid />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Contact />
      </main>
    </>
  );
}
