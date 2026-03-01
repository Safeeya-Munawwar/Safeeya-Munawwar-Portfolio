import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experiences";
import Certifications from "../components/sections/Certifications";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Links from "../components/sections/Links";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Certifications />
      <Services />
      <Projects />
      <Links />
      <Contact />
    </>
  );
};

export default Home;