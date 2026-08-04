import "./index.css";
import TopNavBar from "./components/TopNavBar";
import OverviewSection from "./components/OverviewSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary/20 selection:text-on-primary font-body">
      <TopNavBar />
      <main>
        <OverviewSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
