import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="bg-background font-body-md text-on-background">
      <Header />
      <main className="w-full pt-16 bg-background">
        <div className="flex flex-col w-full">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
