import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Projects from "./pages/Project";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Cursor />
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
