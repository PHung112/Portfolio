import "./index.css";
import TopNavBar from "./components/TopNavBar";
import HeroSection from "./components/OverviewSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import OverviewSection from "./components/OverviewSection";

function App() {
  return (
    <div className="dark bg-surface-dim text-on-surface selection:bg-primary/30">
      <TopNavBar />
      <main>
        <section id="overview">
          <OverviewSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
