import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', target: '#home', id: 'home' },
    { name: 'About', target: '#about', id: 'about' },
    { name: 'Skills', target: '#skills', id: 'skills' },
    { name: 'Projects', target: '#projects', id: 'projects' },
    { name: 'Experience', target: '#experience', id: 'experience' },
    { name: 'Contact', target: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(target);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${scrolled
        ? 'py-2'
        : 'py-3'
        }`}
      style={{
        background: scrolled ? 'rgba(3, 0, 20, 0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(15px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(15px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none',
        zIndex: 1000,
        transition: 'all 0.4s ease'
      }}
    >
      <div className="container px-3 px-md-4">
        {/* Brand/Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="navbar-brand d-flex align-items-center"
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontWeight: 900,
            fontSize: '1.4rem',
            letterSpacing: '1px',
            color: '#fff',
            textDecoration: 'none'
          }}
        >
          <span style={{ color: 'var(--accent-cyan)' }}>&lt;</span>
          MANI
          <span style={{ color: 'var(--accent-purple)', marginLeft: '2px' }}>/&gt;</span>
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0 text-white p-2 me-3"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
            boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.05)',
            outline: 'none'
          }}
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Desktop Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  href={link.target}
                  onClick={(e) => handleLinkClick(e, link.target)}
                  className={`nav-link px-3 py-2 position-relative`}
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    letterSpacing: '1px',
                    color: activeSection === link.id ? '#fff' : 'var(--text-secondary)',
                    transition: 'color 0.3s ease',
                    textTransform: 'uppercase'
                  }}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                      style={{
                        width: '20px',
                        height: '2.5px',
                        background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px var(--accent-cyan)'
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Framer Motion Drawer) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-100 position-absolute start-0"
            style={{
              top: '100%',
              background: 'rgba(3, 0, 20, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              overflow: 'hidden',
              zIndex: 999
            }}
          >
            <div className="container py-3">
              <ul className="nav flex-column gap-2 text-center">
                {navLinks.map((link) => (
                  <li key={link.id} className="nav-item">
                    <a
                      href={link.target}
                      onClick={(e) => handleLinkClick(e, link.target)}
                      className="nav-link py-2"
                      style={{
                        fontFamily: 'var(--font-orbitron)',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        letterSpacing: '1px',
                        color: activeSection === link.id ? 'var(--accent-cyan)' : 'var(--text-primary)',
                        textTransform: 'uppercase'
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
