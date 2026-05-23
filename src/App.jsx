import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Dynamic Animated Particles & Blobs Background */}
      <ParticlesBackground />

      {/* Glassmorphic Navigation */}
      <Navbar />

      {/* Main Sections Wrapper */}
      <main className="flex-grow-1">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Timeline */}
        <Experience />

        {/* Contact Form Section */}
        <Contact />
      </main>

      {/* Premium Footer */}
      <Footer />
    </>
  );
}

export default App;
