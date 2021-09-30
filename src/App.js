import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/About Me/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/Contact Me/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
