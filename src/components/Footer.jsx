import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer
      className="py-5 position-relative"
      style={{
        background: 'rgba(2, 0, 15, 0.95)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.5)',
        zIndex: 5
      }}
    >
      <div className="container text-center">
        {/* Brand Logo inside footer */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="d-inline-block text-decoration-none mb-4"
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontWeight: 900,
            fontSize: '1.5rem',
            letterSpacing: '1.5px',
            color: '#fff'
          }}
        >
          <span style={{ color: 'var(--accent-cyan)' }}>&lt;</span>
          MANI
          <span style={{ color: 'var(--accent-purple)', marginLeft: '2px' }}>/&gt;</span>
        </a>

        {/* Short footer statement */}
        <p className="text-white-50 mx-auto mb-4" style={{ maxWidth: '450px', fontSize: '0.88rem', lineHeight: '1.6' }}>
          Combining creativity and full-stack development to build immersive digital experiences. Open for innovative startups and software collaborations.
        </p>

        {/* Footer social icons grid */}
        <div className="d-flex gap-3 justify-content-center mb-4">
          {[
            { icon: <FaGithub />, link: 'https://github.com/mani-dev-25' },
            { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/mani-kandan-2527-/' },
            { icon: <FaYoutube />, link: 'https://www.youtube.com/@Pynerix' },
            { icon: <FaEnvelope />, link: 'mailto:manikandan.dev.startup@gmail.com' }
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-50 hover-glow-effect d-flex align-items-center justify-content-center"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                fontSize: '1.05rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.background = 'rgba(0, 242, 254, 0.08)';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright info */}
        <div
          className="pt-4 mt-2"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.03)',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-orbitron)',
            letterSpacing: '0.5px'
          }}
        >
          <span className="text-white-50">
            &copy; {currentYear} Manikandan. All Rights Reserved.
          </span>
          <span className="d-block d-md-inline-block text-white-50 ms-md-3 mt-2 mt-md-0">
            Designed & Engineered with <FaHeart className="text-danger mx-1 animate-pulse" style={{ color: 'var(--accent-pink)' }} /> & ⚡
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
