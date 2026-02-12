import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import EducationSection from "@/components/educationSection";
import AboutSection from "@/components/aboutSection";
import ExperienceSection from "@/components/experienceSection";
import ProjectsSection from "@/components/projectsSection";
import ScrollToTop from "@/components/scrollToTop";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-black font-sans">
      <ScrollToTop />
      <Header />
      <div className="flex justify-center">
        <HeroSection />
      </div>
      <div className="flex justify-center">
        <EducationSection />
      </div>
      <div className="flex justify-center">
        <AboutSection />
      </div>
      <div className="flex justify-center">
        <ExperienceSection />
      </div>
      <div className="flex justify-center">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
}
