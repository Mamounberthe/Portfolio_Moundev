import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";
import { Skills } from "./components/sections/Skills";

function App() {
  return (
    <div className="min-h-screen bg-hero-glow text-slate-100">
      <Navbar />
      <main className="container mx-auto flex flex-col gap-14 px-4 py-8 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
