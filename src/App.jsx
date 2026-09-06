import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SakuraPetals from "./components/SakuraPetals";
import AnimatedBackground from "./components/AnimatedBackground";

import Resume from "./pages/Resume";

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#120E18] text-white">
      <AnimatedBackground />
      <SakuraPetals />

      <Navbar />

      <main>
        <Hero />
        <Experience />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Main Portfolio */}
      <Route path="/" element={<Portfolio />} />

      {/* Interactive Resume */}
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;