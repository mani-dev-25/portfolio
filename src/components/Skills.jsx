import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaServer, FaCogs, FaProjectDiagram, FaLightbulb, FaBrain 
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si';

const Skills = () => {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <FaReact className="text-info" />,
      skills: [
        { name: 'HTML5', icon: <FaHtml5 style={{ color: '#e34f26' }} /> },
        { name: 'CSS3', icon: <FaCss3Alt style={{ color: '#1572b6' }} /> },
        { name: 'Bootstrap 5', icon: <FaBootstrap style={{ color: '#7952b3' }} /> },
        { name: 'JavaScript', icon: <FaJs style={{ color: '#f7df1e' }} /> },
        { name: 'React.js', icon: <FaReact style={{ color: '#61dafb' }} /> }
      ]
    },
    {
      title: 'Backend & Databases',
      icon: <FaServer className="text-success" />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs style={{ color: '#339933' }} /> },
        { name: 'Express.js', icon: <SiExpress style={{ color: '#ffffff' }} /> },
        { name: 'MySQL', icon: <SiMysql style={{ color: '#00758f' }} /> },
        { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47a248' }} /> },
        { name: 'REST API', icon: <FaDatabase style={{ color: '#00f2fe' }} /> }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <FaCogs className="text-warning" />,
      skills: [
        { name: 'Git', icon: <FaGitAlt style={{ color: '#f05032' }} /> },
        { name: 'GitHub', icon: <FaGithub style={{ color: '#ffffff' }} /> }
      ]
    }
  ];

  const learningList = [
    { name: 'Advanced React Patterns', icon: <FaReact className="text-info animate-spin-slow" style={{ animationDuration: '8s' }} /> },
    { name: 'System Design', icon: <FaProjectDiagram className="text-warning" /> },
    { name: 'Data Structures in Java', icon: <FaBrain className="text-danger" /> },
    { name: 'Interactive UI/UX Design', icon: <FaLightbulb className="text-success" /> },
    { name: 'Startup Building', icon: <FaServer className="text-primary" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section id="skills" className="py-5 position-relative">
      <div className="container py-5 position-relative z-2">
        
        {/* Title */}
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="section-title"
          >
            My Skills
          </motion.h2>
        </div>

        {/* Skill Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="row g-4 justify-content-center"
        >
          {categories.map((cat, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 d-flex">
              <motion.div 
                variants={cardVariants}
                className="glass-card p-4 w-100 d-flex flex-column"
                whileHover={{ y: -6, borderColor: 'var(--accent-cyan)', boxShadow: 'var(--shadow-cyan)' }}
              >
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="fs-3">{cat.icon}</div>
                  <h4 className="text-white m-0" style={{ fontFamily: 'var(--font-orbitron)', fontSize: '1.1rem', fontWeight: 600 }}>
                    {cat.title}
                  </h4>
                </div>

                <div className="d-flex flex-column gap-3 mt-auto">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="d-flex align-items-center gap-3 p-2 rounded"
                      style={{
                        background: 'rgba(255, 255, 255, 0.01)',
                        border: '1px solid rgba(255, 255, 255, 0.03)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.01)';
                      }}
                    >
                      <div className="fs-4 d-flex align-items-center">{skill.icon}</div>
                      <span className="text-white-50" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}

          {/* Currently Learning Card */}
          <div className="col-lg-12 mt-5">
            <motion.div 
              variants={cardVariants}
              className="glass-card p-4"
              style={{
                background: 'linear-gradient(135deg, rgba(127, 0, 255, 0.05), rgba(0, 242, 254, 0.03))',
                borderColor: 'rgba(127, 0, 255, 0.2)'
              }}
              whileHover={{ borderColor: 'rgba(127, 0, 255, 0.4)', boxShadow: 'var(--shadow-purple)' }}
            >
              <div className="row align-items-center">
                <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mb-2">
                    <FaLightbulb className="text-warning fs-3 animate-pulse" />
                    <h4 className="text-white m-0" style={{ fontFamily: 'var(--font-orbitron)', fontWeight: 700, letterSpacing: '1px' }}>
                      CURRENTLY LEARNING
                    </h4>
                  </div>
                  <p className="text-white-50 m-0" style={{ fontSize: '0.9rem' }}>
                    Constantly refining skills and exploring new horizons to design better digital products.
                  </p>
                </div>
                
                <div className="col-lg-8">
                  <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                    {learningList.map((learn, lIdx) => (
                      <motion.div
                        key={lIdx}
                        className="d-flex align-items-center gap-2 px-3 py-2 rounded-3"
                        style={{
                          background: 'rgba(3, 0, 20, 0.6)',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          color: '#fff'
                        }}
                        whileHover={{
                          scale: 1.05,
                          borderColor: 'var(--accent-purple)',
                          boxShadow: '0 0 10px rgba(127, 0, 255, 0.15)'
                        }}
                      >
                        <span className="d-flex align-items-center fs-5">{learn.icon}</span>
                        <span style={{ fontSize: '0.85rem', fontWeight: 500, fontFamily: 'var(--font-orbitron)' }}>
                          {learn.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
