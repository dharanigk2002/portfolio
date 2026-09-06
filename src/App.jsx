import { useTheme } from "./context/ThemeProvider";
import Navbar from "./components/Navbar";
import ScrollDots from "./components/ScrollDots";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import SkillsExperienceSection from "./components/SkillsExperienceSection";
import RecommendationsSection from "./components/RecommendationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const { toggleTheme } = useTheme();

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <ScrollDots />
      <div id="hero">
        <Hero />
      </div>
      <div id="projects" className="scroll-mt-4">
        <ProjectsSection />
      </div>
      <div id="skills" className="scroll-mt-4">
        <SkillsExperienceSection />
      </div>
      <div id="recommendations">
        <RecommendationsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <ScrollDots />
      <Footer />
    </div>
  );
}
