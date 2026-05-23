import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaUserAlt, FaEdit, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mdajdoqp", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success status after a delay
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setIsSubmitting(false);
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch {
      setIsSubmitting(false);
      alert("Error connecting to server. Please check your internet connection and try again.");
    }
  };

  return (
    <section id="contact" className="py-5 position-relative">
      <div className="container py-5 position-relative z-2">
        
        {/* Title */}
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="section-title"
          >
            Get In Touch
          </motion.h2>
        </div>

        {/* Content Box */}
        <div className="row g-5 align-items-stretch">
          
          {/* Left Column: Direct Info Card */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="glass-card p-4 h-100 d-flex flex-column justify-content-between"
              style={{ background: 'linear-gradient(135deg, rgba(3, 0, 20, 0.8) 0%, rgba(0, 242, 254, 0.02) 100%)' }}
            >
              <div>
                <h3 className="text-white mb-3" style={{ fontFamily: 'var(--font-orbitron)', fontWeight: 700 }}>
                  Let's Collaborate!
                </h3>
                <p className="text-white-50 mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  I'm always open to discussing new startup concepts, building creative tech solutions, or speaking about potential full-stack engineering collaborations. Drop me a line!
                </p>
                
                <div className="d-flex flex-column gap-4 my-5">
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="d-flex align-items-center justify-content-center text-white fs-5"
                      style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '10px',
                        background: 'rgba(0, 242, 254, 0.1)',
                        border: '1px solid rgba(0, 242, 254, 0.2)',
                        boxShadow: '0 0 10px rgba(0, 242, 254, 0.15)'
                      }}
                    >
                      <FaEnvelope style={{ color: 'var(--accent-cyan)' }} />
                    </div>
                    <div>
                      <small className="text-white-50 d-block" style={{ fontSize: '0.75rem', fontFamily: 'var(--font-orbitron)' }}>
                        EMAIL ME DIRECTLY
                      </small>
                      <a 
                        href="mailto:manikandan.dev.startup@gmail.com" 
                        className="text-white text-decoration-none hover-glow"
                        style={{ fontSize: '0.95rem', fontWeight: 600, transition: 'all 0.3s ease' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                      >
                        manikandan.dev.startup@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="d-flex align-items-center justify-content-center text-white fs-5"
                      style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '10px',
                        background: 'rgba(127, 0, 255, 0.1)',
                        border: '1px solid rgba(127, 0, 255, 0.2)',
                        boxShadow: '0 0 10px rgba(127, 0, 255, 0.15)'
                      }}
                    >
                      <FaMapMarkerAlt style={{ color: 'var(--accent-purple)' }} />
                    </div>
                    <div>
                      <small className="text-white-50 d-block" style={{ fontSize: '0.75rem', fontFamily: 'var(--font-orbitron)' }}>
                        MY CURRENT BASE
                      </small>
                      <span className="text-white" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                        Chennai, Tamil Nadu, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className="p-3 rounded"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.01)', 
                  border: '1px solid rgba(255, 255, 255, 0.05)' 
                }}
              >
                <p className="text-white-50 m-0" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                  ⚡ Responses typically arrive within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="glass-card p-4 h-100"
            >
              <form onSubmit={handleSubmit} className="h-100 d-flex flex-column justify-content-between">
                
                {/* Inputs */}
                <div className="d-flex flex-column gap-4 mb-4">
                  {/* Name Input */}
                  <div className="position-relative">
                    <label 
                      className="text-white-50 mb-2" 
                      style={{ fontSize: '0.8rem', fontFamily: 'var(--font-orbitron)', letterSpacing: '1px' }}
                    >
                      YOUR NAME
                    </label>
                    <div className="d-flex align-items-center">
                      <FaUserAlt className="position-absolute ms-3 text-white-50" style={{ pointerEvents: 'none' }} />
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-100 py-3 ps-5 pe-3 rounded"
                        placeholder="John Doe"
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#fff',
                          outline: 'none',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--accent-cyan)';
                          e.target.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.2)';
                          e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                          e.target.style.boxShadow = 'none';
                          e.target.style.background = 'rgba(255, 255, 255, 0.02)';
                        }}
                        required
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="position-relative">
                    <label 
                      className="text-white-50 mb-2" 
                      style={{ fontSize: '0.8rem', fontFamily: 'var(--font-orbitron)', letterSpacing: '1px' }}
                    >
                      YOUR EMAIL ADDRESS
                    </label>
                    <div className="d-flex align-items-center">
                      <FaEnvelope className="position-absolute ms-3 text-white-50" style={{ pointerEvents: 'none' }} />
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-100 py-3 ps-5 pe-3 rounded"
                        placeholder="johndoe@example.com"
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#fff',
                          outline: 'none',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--accent-purple)';
                          e.target.style.boxShadow = '0 0 15px rgba(127, 0, 255, 0.2)';
                          e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                          e.target.style.boxShadow = 'none';
                          e.target.style.background = 'rgba(255, 255, 255, 0.02)';
                        }}
                        required
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="position-relative">
                    <label 
                      className="text-white-50 mb-2" 
                      style={{ fontSize: '0.8rem', fontFamily: 'var(--font-orbitron)', letterSpacing: '1px' }}
                    >
                      YOUR MESSAGE
                    </label>
                    <div className="d-flex align-items-start">
                      <FaEdit className="position-absolute ms-3 mt-3.5 text-white-50" style={{ pointerEvents: 'none', marginTop: '15px' }} />
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        className="w-100 py-3 ps-5 pe-3 rounded"
                        placeholder="Hi Manikandan, I would love to build a project with you..."
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#fff',
                          outline: 'none',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease',
                          resize: 'none'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--accent-cyan)';
                          e.target.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.2)';
                          e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                          e.target.style.boxShadow = 'none';
                          e.target.style.background = 'rgba(255, 255, 255, 0.02)';
                        }}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Feedback Notification */}
                <div style={{ minHeight: '50px' }} className="d-flex align-items-center mb-3">
                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="d-flex align-items-center gap-2 p-2.5 w-100 rounded"
                        style={{
                          background: 'rgba(71, 162, 72, 0.1)',
                          border: '1px solid rgba(71, 162, 72, 0.25)',
                          color: '#5cd65c',
                          fontSize: '0.85rem'
                        }}
                      >
                        <FaCheckCircle /> Message received successfully! Manikandan will contact you soon.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-premium-primary w-100 d-flex align-items-center justify-content-center gap-2 py-3"
                  style={{
                    opacity: isSubmitting ? 0.75 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
