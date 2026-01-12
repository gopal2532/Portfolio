import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="bg-[#0b0b0b] text-white">
      <ScrollProgress />
      <Navbar />

      <main>
        <section id="home"> <Home /> </section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects/></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact/></section>
      </main>

      <Footer />
    </div>
  );
}
