import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';


function App() {
  return (
    <>
      <a
        href="#home"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-accent-400 px-4 py-2 text-sm font-semibold text-ink-950 transition-transform duration-300 ease-snappy focus-visible:translate-y-0"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
