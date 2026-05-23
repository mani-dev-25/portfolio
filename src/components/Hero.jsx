import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import profileImg from '../assets/manikandan.jpg';

const roles = [
  'Full Stack Developer',
  'Startup Builder',
  'Creative Creator',
  'Future Entrepreneur'
];

const Hero = () => {

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at full word
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');

    link.href = '/maniresume.pdf';

    link.download = 'Manikandan_Resume.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center min-vh-100 position-relative pt-5 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <div className="container position-relative z-2 py-5">
        <div className="row align-items-center align-items-lg-start py-5">
          {/* Left Column: Text Content */}
          <div className="col-lg-7 text-center text-lg-start order-2 order-lg-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h5
                className="text-uppercase fw-bold mb-3"
                style={{
                  fontFamily: 'var(--font-orbitron)',
                  color: 'var(--accent-cyan)',
                  letterSpacing: '3px',
                  fontSize: '0.9rem'
                }}
              >
                Welcome to my digital space
              </h5>

              <h1
                className="text-white mb-2"
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: 'calc(3.5rem + 2vw)',
                  lineHeight: '1',
                  letterSpacing: '1px'
                }}
              >
                I'm <span style={{
                  background: 'linear-gradient(45deg, #fff, var(--accent-cyan))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 15px rgba(0,242,254,0.1)'
                }}>Manikandan</span>
              </h1>

              {/* Typing Roles Container */}
              <div
                className="mb-4 d-flex justify-content-center justify-content-lg-start align-items-center"
                style={{
                  height: '40px',
                  fontFamily: 'var(--font-orbitron)',
                  fontWeight: 600,
                  fontSize: 'calc(1.1rem + 0.3vw)',
                  color: 'var(--text-primary)'
                }}
              >
                <span className="me-2 text-white-50">I build as a</span>
                <span
                  style={{
                    background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    borderRight: '2px solid var(--accent-cyan)',
                    paddingRight: '4px',
                    animation: 'typing-blink 0.75s step-end infinite'
                  }}
                >
                  {currentText}
                </span>
              </div>

              <p
                className="mb-5 mx-auto mx-lg-0 text-white-50"
                style={{
                  maxWidth: '560px',
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  letterSpacing: '0.3px'
                }}
              >
                A passionate full stack developer and future startup founder who enjoys building modern digital experiences, interactive applications, and creative technology projects.
              </p>

              {/* CTA Buttons */}
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-5">
                <button
                  onClick={handleScrollToContact}
                  className="btn btn-premium-primary"
                >
                  Hire Me
                </button>
                <button
                  onClick={handleDownloadCV}
                  className="btn btn-premium-secondary"
                >
                  Get Resume
                </button>
              </div>

              {/* Social Media Link Icons */}
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                {[
                  { icon: <FaGithub />, link: 'https://github.com/mani-dev-25', label: 'GitHub' },
                  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/mani-kandan-2527-/', label: 'LinkedIn' },
                  { icon: <FaYoutube />, link: 'https://www.youtube.com/@Pynerix', label: 'YouTube' },
                  { icon: <FaEnvelope />, link: 'mailto:manikandan.dev.startup@gmail.com', label: 'Email' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="d-flex align-items-center justify-content-center text-white"
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      transition: 'all 0.3s ease',
                      fontSize: '1.2rem',
                      boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.05)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.boxShadow = 'inset 0 0 10px rgba(255, 255, 255, 0.05)';
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="col-lg-5 text-center text-lg-end order-1 order-lg-2 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: 'spring', stiffness: 100 }}
              className="d-inline-block position-relative animate-float"
            >
              {/* Spinning/conic glow border background */}
              <div
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                  width: 'calc(100% + 20px)',
                  height: 'calc(100% + 20px)',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, var(--accent-cyan), var(--accent-purple), var(--accent-pink))',
                  filter: 'blur(15px)',
                  opacity: 0.6,
                  zIndex: -1
                }}
              />

              {/* Glowing Frame Wrapper */}
              <div
                style={{
                  width: 'min(300px, 70vw)',
                  height: 'min(300px, 70vw)',
                  borderRadius: '50%',
                  padding: '5px',
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                  boxShadow: '0 10px 40px rgba(127, 0, 255, 0.3)',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: 'var(--bg-darker)',
                    position: 'relative'
                  }}
                >
                  <img
                    src={profileImg}
                    alt="Manikandan Profile"
                    className="w-100 h-100 object-fit-cover"
                    style={{
                      transition: 'all 0.5s ease',
                    }}
                  />
                  {/* Glass shimmer overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)',
                      pointerEvents: 'none'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x pb-3 d-none d-lg-block">
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#about');
              if (el) {
                window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
              }
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white-50 d-flex flex-column align-items-center text-decoration-none"
            style={{ fontSize: '0.8rem', fontFamily: 'var(--font-orbitron)', letterSpacing: '2px' }}
          >
            SCROLL DOWN
            <FaChevronDown className="mt-2 text-cyan" style={{ color: 'var(--accent-cyan)' }} />
          </motion.a>
        </div>
      </div>

      <style>{`
        @keyframes typing-blink {
          from, to { border-color: transparent }
          50% { border-color: var(--accent-cyan); }
        }
      `}</style>
    </section>
  );
};

export default Hero;