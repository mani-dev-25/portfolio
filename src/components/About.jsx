import { motion } from 'framer-motion';
import { FaUser, FaMapMarkerAlt, FaRocket, FaCompass, FaRegLightbulb } from 'react-icons/fa';

const About = () => {
  const infoItems = [
    { icon: <FaUser />, label: 'Personality', value: 'Creative, Ambitious, Passionate Self-Learner' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Chennai, Tamil Nadu, India' },
    { icon: <FaCompass />, label: 'Favorite Areas', value: 'Full Stack Dev, Startup Building, UI/UX, Creative Tech' },
    { icon: <FaRocket />, label: 'Ultimate Goal', value: 'Futuristic Startup Founder' }
  ];

  const favoriteAreas = [
    'Full Stack Development',
    'Startup Building',
    'Interactive UI Design',
    'Creative Technology',
    'YouTube Content Creation'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-5 position-relative">
      <div className="container py-5 position-relative z-2 text-center text-lg-start">
        
        {/* Title */}
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="section-title"
          >
            About Me
          </motion.h2>
        </div>

        {/* Content Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="row align-items-stretch g-4"
        >
          {/* Left Column: Biography & Vision */}
          <div className="col-lg-6 d-flex flex-column justify-content-between">
            <motion.div variants={itemVariants} className="glass-card p-4 h-100 d-flex flex-column justify-content-between mb-4">
              <div>
                <h4 className="text-white mb-3" style={{ fontFamily: 'var(--font-orbitron)', fontWeight: 600 }}>
                  <FaRegLightbulb className="me-2 text-warning" /> The Builder Mindset
                </h4>
                <p className="text-white-50 lh-lg mb-3" style={{ fontSize: '0.95rem' }}>
                  I am Manikandan, a passionate developer based in Chennai. I love learning new technologies, improving my engineering skills, and crafting interactive applications with highly aesthetic user interface designs.
                </p>
                <p className="text-white-50 lh-lg mb-3" style={{ fontSize: '0.95rem' }}>
                  Currently, I am expanding my developer toolkit by focusing on Advanced React patterns, System Design principles, Data Structures in Java, and interactive UX design. I aim to apply this knowledge to launch software solutions that address real-world challenges.
                </p>
              </div>

              {/* Vision Card */}
              <div 
                className="p-3 mt-3 rounded"
                style={{ 
                  background: 'rgba(127, 0, 255, 0.05)', 
                  borderLeft: '4px solid var(--accent-purple)',
                  boxShadow: 'inset 0 0 15px rgba(127, 0, 255, 0.05)'
                }}
              >
                <h5 className="text-white mb-2" style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.95rem' }}>
                  <FaRocket className="me-2" style={{ color: 'var(--accent-purple)' }} /> MY VISION
                </h5>
                <p className="text-white-50 m-0" style={{ fontSize: '0.88rem', fontStyle: 'italic' }}>
                  "To build futuristic startups, creative digital products, and innovative platforms that combine technology and creativity to create meaningful experiences for people."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Details & Specialities */}
          <div className="col-lg-6">
            <div className="d-flex flex-column h-100 justify-content-between gap-4">
              
              {/* Quick Info Grid */}
              <motion.div variants={itemVariants} className="glass-card p-4">
                <h4 className="text-white mb-4" style={{ fontFamily: 'var(--font-orbitron)', fontWeight: 600 }}>
                  Core Information
                </h4>
                <div className="row g-3">
                  {infoItems.map((item, idx) => (
                    <div key={idx} className="col-12 col-md-6">
                      <div className="d-flex align-items-start gap-3">
                        <div 
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '8px',
                            background: 'rgba(0, 242, 254, 0.1)',
                            border: '1px solid rgba(0, 242, 254, 0.2)',
                            color: 'var(--accent-cyan)',
                            flexShrink: 0
                          }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <small className="text-white-50 d-block" style={{ fontSize: '0.75rem', fontFamily: 'var(--font-orbitron)' }}>
                            {item.label}
                          </small>
                          <span className="text-white" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                            {item.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Specialization Tags */}
              <motion.div variants={itemVariants} className="glass-card p-4">
                <h4 className="text-white mb-3" style={{ fontFamily: 'var(--font-orbitron)', fontWeight: 600 }}>
                  Areas of Interest
                </h4>
                <p className="text-white-50 mb-3" style={{ fontSize: '0.9rem' }}>
                  I dedicate my time and work focus to these creative domains:
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {favoriteAreas.map((area, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-2 rounded-pill"
                      style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-purple)';
                        e.currentTarget.style.background = 'rgba(127, 0, 255, 0.1)';
                        e.currentTarget.style.boxShadow = '0 0 10px rgba(127, 0, 255, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
