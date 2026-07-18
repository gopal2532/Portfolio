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
    <div className="bg-[#0b0b0b] text-white min-h-screen relative overflow-x-hidden">
      {/* Mobile Ambient Glow Animations */}
      <div className="md:hidden fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[250px] h-[250px] rounded-full bg-accent-primary/5 blur-[90px] animate-float-bg" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent-secondary/5 blur-[100px] animate-float-bg [animation-delay:6s]" />
      </div>

      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
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
