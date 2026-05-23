import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";
import { Skills } from "./components/sections/Skills";

function App() {
  return (
    <div className="bg-[var(--page-bg)] text-[var(--foreground)] transition-colors duration-500 ease-out">
      <ScrollProgress />
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded-full bg-[var(--surface-strong)] px-4 py-2 text-sm text-[var(--foreground)] shadow-lg transition"
      >
        Aller au contenu
      </a>
      <Navbar />
      
      {/* Hero fullscreen section (outside main constraint) */}
      <Hero />
      
      {/* Main content with max-width constraint */}
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-8 sm:px-6 lg:px-8">
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
