import { motion } from 'framer-motion';
import { FaGraduationCap, FaPenNib, FaYoutube, FaRocket } from 'react-icons/fa';

const Experience = () => {
  const timelineData = [
    {
      id: 1,
      title: 'Full Stack Web Engineering',
      subtitle: 'Self-Directed Training & Projects',
      date: 'Present',
      description: 'Mastered the MERN stack (MongoDB, Express, React, Node.js), JavaScript (ES6+), SQL, and REST APIs. Built clean component structures and frontend architectures (like Toonflix and Pynerix).',
      icon: <FaGraduationCap />,
      color: 'var(--accent-cyan)'
    },
    {
      id: 2,
      title: 'MERN Stack & Data Structures',
      subtitle: 'Core Engineering Focus',
      date: 'Ongoing',
      description: 'Focusing on mastering advanced data structures in Java to build solid system foundations, alongside engineering interactive full-stack web applications using the MERN ecosystem.',
      icon: <FaPenNib />,
      color: 'var(--accent-purple)'
    },
    {
      id: 3,
      title: 'YouTube Content Creation',
      subtitle: 'Creative Developer Community',
      date: 'Active',
      description: 'Sharing technology concepts, design systems, and startup building strategies. Connecting tech with creativity through visually rich tutorial presentations.',
      icon: <FaYoutube />,
      color: 'var(--accent-pink)'
    },
    {
      id: 4,
      title: 'Startup & Platform Building',
      subtitle: 'Future Startup Founder',
      date: 'Vision',
      description: 'Incubating concepts for SaaS applications, studying system design patterns, software scaling methodologies, and startup business frameworks to solve user pain-points.',
      icon: <FaRocket />,
      color: 'var(--accent-blue)'
    }
  ];

  return (
    <section id="experience" className="py-5 position-relative">
      <div className="container py-5 position-relative z-2">
        
        {/* Title */}
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="section-title"
          >
            My Timeline
          </motion.h2>
        </div>

        {/* Timeline Layout */}
        <div className="position-relative mx-auto" style={{ maxWidth: '850px' }}>
          
          {/* Vertical Center Line */}
          <div 
            className="position-absolute start-0 start-md-50 translate-middle-x h-100"
            style={{
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-purple) 50%, var(--accent-pink) 100%)',
              top: 0,
              boxShadow: '0 0 8px rgba(0, 242, 254, 0.3)',
              left: '20px' // shift to left on small screens
            }}
          />

          {/* Timeline Items */}
          <div className="d-flex flex-column gap-5">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.id}
                  className="row position-relative m-0 align-items-center"
                  style={{ minHeight: '120px' }}
                >
                  {/* Timeline Pulse Node */}
                  <div 
                    className="position-absolute start-0 start-md-50 translate-middle"
                    style={{
                      left: '20px', // shift to left on small screens
                      zIndex: 10
                    }}
                  >
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-80px' }}
                      className="d-flex align-items-center justify-content-center text-white"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'var(--bg-darker)',
                        border: `2px solid ${item.color}`,
                        boxShadow: `0 0 15px ${item.color}`,
                        fontSize: '1rem'
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Card Column */}
                  <div 
                    className={`col-12 col-md-5 ps-5 ps-md-0 ${
                      isEven ? 'offset-md-0 text-md-end pe-md-5' : 'offset-md-7 text-md-start ps-md-5'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6 }}
                      className="glass-card p-4 d-inline-block w-100"
                      whileHover={{ 
                        borderColor: item.color,
                        boxShadow: `0 8px 32px 0 ${item.color}20` 
                      }}
                      style={{ textAlign: 'left' }}
                    >
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <span 
                          className="px-2 py-0.5 rounded-3 fw-semibold"
                          style={{
                            background: `${item.color}15`,
                            color: item.color,
                            fontSize: '0.75rem',
                            fontFamily: 'var(--font-orbitron)',
                            border: `1px solid ${item.color}30`
                          }}
                        >
                          {item.date}
                        </span>
                      </div>

                      <h4 className="text-white mb-1" style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.05rem', fontWeight: 700 }}>
                        {item.title}
                      </h4>
                      <small className="text-white-50 d-block mb-3" style={{ fontSize: '0.85rem' }}>
                        {item.subtitle}
                      </small>
                      <p className="text-white-50 m-0" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
