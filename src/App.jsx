import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AboutIntro from "./components/AboutIntro";
import PortfolioTracker from "./components/PortfolioTracker";

export default function App() {
  return (
    <>
      <PortfolioTracker />
      <Navbar />
      <Hero />
      <AboutIntro />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
