import "./index.css";
import Home from "./views/home/Home";
import Nav from "./components/nav/Nav";
import Projects from "./views/projects/Projects";
import Services from "./views/services/Services";
import Redes from "./components/redes/Redes";
import { useState } from "react";
import About from "./views/about/About";


function App() {
  const [lightMode, setLightMode] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={`${lightMode ? "white" : "dark"}`}>
      
      <Nav scrollToSection={scrollToSection} lightMode={lightMode} setLightMode={setLightMode} />
      <div id="home" className="section">
        <Home /> 
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
      <div id="services" className="section">
        <Services lightMode={lightMode} />
      </div>

      <div id="about" className="section">
        <About lightMode={lightMode} />
      </div>
      <Redes />

      
    </main>
  );
}

export default App;
