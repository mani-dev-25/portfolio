import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaTv, FaLaptopCode, FaRocket } from 'react-icons/fa';
import toonflixImg from '../assets/toonflix.png';

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: 'Toonflix',
      subtitle: 'Entertainment Streaming Platform',
      desc: 'A modern, premium cartoon & anime streaming platform interface built to deliver an interactive, responsive, and cinematic entertainment UI clone.',
      features: [
        'Dynamic Watchlist Integration (Add & manage custom cartoon lists)',
        'Immersive Glassmorphic Dashboard with animated blur-blobs & custom neon scrollbars',
        'Fluid content filtering (Browse by genres, category badges, or search terms)',
        'Aesthetic hover transition cards with glow effects'
      ],
      tags: ['React.js', 'Bootstrap 5', 'CSS3', 'Framer Motion', 'React Icons'],
      image: toonflixImg,
      icon: <FaTv />,
      github: 'https://github.com/mani-dev-25/Toonflix',
      live: 'https://github.com/mani-dev-25/Toonflix',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-5 position-relative">
      <div className="container py-5 position-relative z-2">

        {/* Title */}
        <div className="text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="section-title"
          >
            My Projects
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {projectsList.map((project, idx) => (
            <div
              key={project.id}
              className={project.featured ? 'col-12' : 'col-lg-6 col-md-12'}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card overflow-hidden h-100"
                style={{
                  display: 'flex',
                  flexDirection: project.featured ? 'row' : 'column',
                  flexWrap: 'wrap',
                  position: 'relative',
                  border: project.featured ? '1px solid rgba(0, 242, 254, 0.15)' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: project.featured
                    ? 'linear-gradient(135deg, rgba(3, 0, 20, 0.9) 0%, rgba(127, 0, 255, 0.03) 100%)'
                    : 'var(--glass-bg)'
                }}
                whileHover={{
                  y: -8,
                  borderColor: project.featured ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                  boxShadow: project.featured ? 'var(--shadow-cyan)' : 'var(--shadow-purple)'
                }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <span
                    className="position-absolute px-3 py-1 text-uppercase fw-bold"
                    style={{
                      top: '20px',
                      left: '20px',
                      background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))',
                      color: 'var(--bg-darker)',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-orbitron)',
                      letterSpacing: '1px',
                      zIndex: 10
                    }}
                  >
                    Featured Project
                  </span>
                )}

                {/* Project Image Column */}
                <div
                  className={project.featured ? 'col-lg-6 col-12' : 'col-12'}
                  style={{ overflow: 'hidden', position: 'relative', minHeight: '250px' }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-100 h-100 object-fit-cover"
                    style={{
                      transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      minHeight: '250px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Neon Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(180deg, rgba(3, 0, 20, 0) 60%, rgba(3, 0, 20, 0.8) 100%)',
                      pointerEvents: 'none'
                    }}
                  />
                </div>

                {/* Project Details Column */}
                <div
                  className={project.featured ? 'col-lg-6 col-12 p-4 d-flex flex-column justify-content-between' : 'p-4 d-flex flex-column justify-content-between flex-grow-1'}
                >
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="text-white-50 fs-5">{project.icon}</span>
                      <small className="text-white-50" style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                        {project.subtitle}
                      </small>
                    </div>

                    <h3 className="text-white mb-3" style={{ fontFamily: 'var(--font-orbitron)', fontWeight: 700 }}>
                      {project.title}
                    </h3>

                    <p className="text-white-50 mb-3" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {project.desc}
                    </p>

                    {/* Features list */}
                    {project.features && (
                      <div className="mb-4">
                        <h6 className="text-white mb-2.5" style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.5px' }}>
                          KEY HIGHLIGHTS:
                        </h6>
                        <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                          {project.features.map((feat, fIdx) => (
                            <li key={fIdx} className="d-flex align-items-start gap-2 text-white-50" style={{ fontSize: '0.82rem', lineHeight: '1.4' }}>
                              <span style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>✦</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-white-50 rounded"
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="d-flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn d-flex align-items-center gap-2"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#fff',
                          fontSize: '0.85rem',
                          padding: '0.5rem 1.2rem',
                          fontFamily: 'var(--font-orbitron)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                          e.currentTarget.style.borderColor = 'var(--accent-purple)';
                          e.currentTarget.style.boxShadow = '0 0 10px rgba(127, 0, 255, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <FaGithub /> GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn d-flex align-items-center gap-2"
                        style={{
                          background: 'transparent',
                          border: '1px solid var(--accent-cyan)',
                          color: 'var(--accent-cyan)',
                          fontSize: '0.85rem',
                          padding: '0.5rem 1.2rem',
                          fontFamily: 'var(--font-orbitron)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 242, 254, 0.1)';
                          e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
