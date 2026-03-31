import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ProjectList from "./components/sections/ProjectList";
import ContactSection from "./components/sections/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectList />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
