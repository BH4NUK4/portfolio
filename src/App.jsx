import NavBar from "./layouts/navBar";
import Hero from "./sections/hero.jsx";
import About from "./sections/about.jsx";
import Projects from "./sections/projects.jsx";
import Experiance from "./sections/experiance.jsx";
import Contact from "./sections/contact.jsx";
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Experiance />
      <Contact />
    </div>
  );
}

export default App;
