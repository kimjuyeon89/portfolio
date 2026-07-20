import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";
import SelectedProjects from "./components/SelectedProjects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NewProjectPage from "./components/NewProjectPage";

export default function App() {
  if (window.location.pathname.replace(/\/$/, "") === "/new-project") {
    return <NewProjectPage />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f7f8fa] text-[var(--ink)]">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Skills />
        <Projects />
        <SelectedProjects />
        <Career />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
