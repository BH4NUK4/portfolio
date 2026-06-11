import NavBar from "./layouts/navBar.jsx";
import Hero from "./sections/hero.jsx";
import About from "./sections/about.jsx";
import Projects from "./sections/projects.jsx";
import Experiance from "./sections/experiance.jsx";
import Contact from "./sections/contact.jsx";
import Footer from "./layouts/footer.jsx";
function App() {
  return (
    <div>
      <main>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Experiance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
