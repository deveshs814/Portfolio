import CursorTrail from "./components/CursorTrail"
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedProjects from "./components/FeaturedProjects";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";


const App = () => {
  return (
    <div className="relative">
      <CursorTrail />
      <Navbar />
      <HeroSection />
      <FeaturedProjects/>
      <ExperienceSection/>
      <ContactSection/>
    </div>
  )
}

export default App