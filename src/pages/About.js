import { useEffect, useRef, useState } from 'react';
import { FiAward, FiGlobe, FiUsers, FiClock, FiChevronRight, FiTarget, FiHeart, FiStar, FiTrendingUp, FiShield, FiZap, FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import { motion, useInView, useAnimation } from 'framer-motion';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      startCounterAnimations();
    }
  }, [isInView]);

  const startCounterAnimations = () => {
    if (counterStarted) return;
    setCounterStarted(true);
    
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix');
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.innerText = Math.ceil(current) + (suffix || '');
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target + (suffix || '');
        }
      };
      requestAnimationFrame(updateCounter);
    });
  };

  // Team members – Indian names
  const teamMembers = [
    { 
      name: "Rajesh Kumar", 
      role: "CTO", 
      exp: "15+ years", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      bio: "Former architect at Infosys, passionate about scalable enterprise solutions",
      expertise: "Strategic Planning & Enterprise Architecture"
    },
    { 
      name: "Priya Sharma", 
      role: "CTO", 
      exp: "12+ years", 
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
      bio: "AI/ML specialist with experience at Microsoft and Amazon",
      expertise: "Artificial Intelligence & Cloud Computing"
    }
  ];

  // Updated milestones – starting from 2025
  const milestones = [
    { 
      year: "2025", 
      title: "Company Founded", 
      desc: "LOHS Software established in Visakhapatnam with a vision to transform businesses through technology",
      icon: "🎯"
    },
    { 
      year: "2025", 
      title: "First Enterprise Client", 
      desc: "Successfully delivered a complete digital transformation solution for a leading manufacturing firm",
      icon: "🚀"
    },
    { 
      year: "2025", 
      title: "Team Expansion", 
      desc: "Grew to 15+ passionate engineers, designers, and strategists",
      icon: "👥"
    },
    { 
      year: "2026", 
      title: "Strategic Partnerships", 
      desc: "Partnered with top cloud providers and tech innovators to enhance our offerings",
      icon: "🤝"
    }
  ];

  const values = [
    { 
      icon: <FiTarget />, 
      title: "Strategic Excellence", 
      desc: "Pursuing perfection in every project with measurable outcomes"
    },
    { 
      icon: <FiUsers />, 
      title: "Collaborative Partnership", 
      desc: "Working as an extension of your team for shared success"
    },
    { 
      icon: <FiClock />, 
      title: "Timely Delivery", 
      desc: "Consistently delivering strategic solutions on schedule"
    },
    { 
      icon: <FiTrendingUp />, 
      title: "Continuous Innovation", 
      desc: "Embracing cutting-edge technologies and methodologies"
    },
    { 
      icon: <FiShield />, 
      title: "Enterprise Security", 
      desc: "Building with security and scalability at the core"
    },
    { 
      icon: <FiHeart />, 
      title: "Client Success", 
      desc: "Your growth and success are our primary metrics"
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div ref={ref} className="about-container" style={containerStyle}>
      {/* Background Pattern */}
      <div style={backgroundPatternStyle} />

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        style={heroSectionStyle}
      >
        <div style={heroContentStyle}>
          <motion.div 
            variants={fadeInUp}
            style={logoContainerStyle}
          >
            <motion.div 
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              style={stencilBadge}
            >
              EST. 2025
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              style={heroTitleStyle}
            >
              LOHS <span style={{ color: '#c0c0c0' }}>SOFTWARE</span>
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 150 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={heroDivider}
            />
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            style={heroSubtitleStyle}
          >
            <span style={{ color: '#e0e0e0' }}>Pioneering Excellence</span> in Digital Transformation
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            style={heroDescriptionStyle}
          >
            Crafting strategic digital solutions that transform businesses, enhance operational efficiency, 
            and create sustainable competitive advantage for forward-thinking organizations worldwide.
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={heroMetricsStyle}
          >
            {[
              { value: "99.7%", label: "Client Satisfaction" },
              { value: "25+", label: "Strategic Partners" },
              { value: "$2B+", label: "Value Created" }
            ].map((metric, index) => (
              <motion.div 
                key={index} 
                variants={scaleIn}
                whileHover={{ y: -5 }}
                style={heroMetricItem}
              >
                <motion.div 
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  style={heroMetricNumber}
                >
                  {metric.value}
                </motion.div>
                <div style={heroMetricLabel}>{metric.label}</div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  style={metricUnderline}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section style={missionSectionStyle}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={sectionHeaderStyle}
        >
          <h2 style={sectionTitleStyle}>Our Mission & Vision</h2>
          <p style={sectionSubtitleStyle}>Driving transformation with purpose</p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={sectionDivider}
          />
        </motion.div>
        
        <div style={missionContentStyle}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={missionCard}
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              style={missionIcon}
            >
              <FiTarget size={32} />
            </motion.div>
            <h3 style={missionTitle}>Our Mission</h3>
            <p style={missionText}>
              To architect intelligent digital solutions that transform businesses, 
              drive sustainable growth, and create exceptional value for our partners 
              through strategic technology innovation.
            </p>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              style={missionArrow}
            >
              <FiChevronRight size={20} />
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={visionCard}
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              style={visionIcon}
            >
              <FiZap size={32} />
            </motion.div>
            <h3 style={visionTitle}>Our Vision</h3>
            <p style={visionText}>
              To be the most trusted strategic technology partner for forward-thinking 
              organizations worldwide, recognized for excellence in digital transformation 
              and business impact.
            </p>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              style={visionArrow}
            >
              <FiChevronRight size={20} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={timelineSectionStyle}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={sectionHeaderStyle}
        >
          <h2 style={sectionTitleStyle}>Our Journey</h2>
          <p style={sectionSubtitleStyle}>Milestones of strategic growth</p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={sectionDivider}
          />
        </motion.div>
        
        <div style={timelineContainer}>
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={milestoneCardStyle}
            >
              <div style={milestoneHeaderStyle}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  style={yearBadge}
                >
                  {milestone.year}
                </motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  style={timelineIcon}
                >
                  {milestone.icon}
                </motion.div>
              </div>
              <div style={milestoneContentStyle}>
                <h3 style={milestoneTitleStyle}>{milestone.title}</h3>
                <p style={milestoneDescStyle}>{milestone.desc}</p>
              </div>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ delay: 0.5 }}
                style={milestoneConnector}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section style={valuesSectionStyle}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={sectionHeaderStyle}
        >
          <h2 style={sectionTitleStyle}>Our Core Values</h2>
          <p style={sectionSubtitleStyle}>Principles guiding every decision</p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={sectionDivider}
          />
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={valuesGridStyle}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              variants={scaleIn}
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px rgba(255,255,255,0.1)"
              }}
              style={valueCardStyle}
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                style={valueIconContainer}
              >
                <div style={valueIconCircle}>
                  {value.icon}
                </div>
              </motion.div>
              <h3 style={valueTitleStyle}>{value.title}</h3>
              <p style={valueDescStyle}>{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Section - two members */}
      <section style={teamSectionStyle}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={sectionHeaderStyle}
        >
          <h2 style={sectionTitleStyle}>Strategic Leadership</h2>
          <p style={sectionSubtitleStyle}>Visionaries driving excellence</p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={sectionDivider}
          />
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={teamGridStyle}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              variants={scaleIn}
              whileHover={{ y: -10 }}
              style={teamCardStyle}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                style={teamImageContainer}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={teamImageStyle}
                  loading="lazy"
                />
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  style={teamImageOverlay}
                >
                  <div style={expBadge}>{member.exp}</div>
                </motion.div>
              </motion.div>
              <div style={teamInfoStyle}>
                <h3 style={memberNameStyle}>{member.name}</h3>
                <motion.p 
                  whileHover={{ color: '#ffffff' }}
                  style={memberRoleStyle}
                >
                  {member.role}
                </motion.p>
                <div style={memberBioStyle}>{member.bio}</div>
                <div style={expertiseBadge}>
                  <FiCheckCircle style={{ marginRight: 8 }} />
                  {member.expertise}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

// ========== UPDATED STYLES ==========
// Deep blue background with silver/white text

const containerStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(145deg, #0a1f44 0%, #0b2b5c 100%)',
  color: '#ffffff',
  position: 'relative',
  overflow: 'hidden',
  fontFamily: "'Crimson Text', 'Times New Roman', serif"
};

const backgroundPatternStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `
    radial-gradient(circle at 10% 20%, rgba(255,255,255,0.08) 0%, transparent 30%),
    radial-gradient(circle at 90% 80%, rgba(192,192,192,0.06) 0%, transparent 30%),
    repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 8px)
  `,
  pointerEvents: 'none'
};

// Hero Section
const heroSectionStyle = {
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '120px 5% 80px',
  position: 'relative',
  zIndex: 1
};

const heroContentStyle = {
  maxWidth: '900px',
  textAlign: 'center',
  zIndex: 2,
  position: 'relative'
};

const logoContainerStyle = {
  marginBottom: '40px',
  position: 'relative'
};

const stencilBadge = {
  position: 'absolute',
  top: '-30px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
  color: '#0a1f44',
  padding: '8px 20px',
  borderRadius: '20px',
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '1px',
  border: '2px solid #c0c0c0',
  boxShadow: '0 4px 15px rgba(255,255,255,0.2)'
};

const heroTitleStyle = {
  fontSize: 'clamp(3rem, 6vw, 5rem)',
  fontWeight: '700',
  background: 'linear-gradient(135deg, #ffffff, #c0c0c0)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '-0.5px',
  marginBottom: '20px',
  textTransform: 'uppercase'
};

const heroDivider = {
  width: '150px',
  height: '3px',
  background: 'linear-gradient(90deg, #ffffff, #c0c0c0, #e0e0e0)',
  margin: '0 auto',
  borderRadius: '2px',
  boxShadow: '0 2px 8px rgba(255,255,255,0.3)'
};

const heroSubtitleStyle = {
  fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
  fontWeight: '600',
  color: '#e0e0e0',
  marginBottom: '30px',
  lineHeight: '1.3',
  fontFamily: "'Playfair Display', serif",
  fontStyle: 'italic'
};

const heroDescriptionStyle = {
  fontSize: '1.3rem',
  lineHeight: '1.8',
  color: '#d1d5db',
  maxWidth: '800px',
  margin: '0 auto 50px',
  fontWeight: '400',
  fontFamily: "'Crimson Text', serif"
};

const heroMetricsStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '60px',
  flexWrap: 'wrap',
  marginTop: '60px'
};

const heroMetricItem = {
  textAlign: 'center',
  position: 'relative',
  padding: '20px',
  background: '#ffffff',
  borderRadius: '15px',
  border: '1px solid #e0e0e0',
  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  minWidth: '200px'
};

const heroMetricNumber = {
  fontSize: '3.5rem',
  fontWeight: '800',
  background: 'linear-gradient(45deg, #0a1f44, #1e3a8a)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '10px'
};

const heroMetricLabel = {
  fontSize: '1.1rem',
  color: '#2c3e50',
  fontWeight: '600',
  marginBottom: '15px',
  letterSpacing: '0.5px'
};

const metricUnderline = {
  height: '2px',
  background: 'linear-gradient(90deg, #0a1f44, #1e3a8a)',
  margin: '0 auto',
  borderRadius: '1px'
};

// Common Section Styles
const sectionHeaderStyle = {
  textAlign: 'center',
  marginBottom: '70px',
  position: 'relative',
  zIndex: 2
};

const sectionTitleStyle = {
  fontSize: '3.2rem',
  fontWeight: '700',
  color: '#ffffff',
  marginBottom: '20px',
  fontFamily: "'Playfair Display', serif",
  textShadow: '0 2px 5px rgba(0,0,0,0.3)'
};

const sectionSubtitleStyle = {
  fontSize: '1.3rem',
  color: '#e0e0e0',
  maxWidth: '600px',
  margin: '0 auto 20px',
  fontFamily: "'Crimson Text', serif",
  fontStyle: 'italic'
};

const sectionDivider = {
  width: '80px',
  height: '4px',
  background: 'linear-gradient(90deg, #ffffff, #c0c0c0)',
  margin: '0 auto',
  borderRadius: '2px',
  boxShadow: '0 2px 8px rgba(255,255,255,0.3)'
};

// Mission Section
const missionSectionStyle = {
  padding: '120px 5%',
  position: 'relative',
  zIndex: 1
};

const missionContentStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '50px',
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 2
};

const missionCard = {
  background: '#ffffff',
  borderRadius: '25px',
  padding: '50px 40px',
  border: '2px solid #e0e0e0',
  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden'
};

const missionIcon = {
  width: '80px',
  height: '80px',
  background: 'linear-gradient(135deg, #0a1f44, #1e3a8a)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 30px',
  color: '#ffffff',
  fontSize: '32px',
  border: '3px solid #c0c0c0'
};

const missionTitle = {
  fontSize: '2.2rem',
  fontWeight: '700',
  color: '#0a1f44',
  marginBottom: '25px',
  fontFamily: "'Playfair Display', serif"
};

const missionText = {
  fontSize: '1.15rem',
  lineHeight: '1.8',
  color: '#2c3e50',
  maxWidth: '400px',
  margin: '0 auto',
  fontFamily: "'Crimson Text', serif"
};

const missionArrow = {
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  color: '#0a1f44',
  background: 'rgba(10,31,68,0.1)',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const visionCard = {
  background: '#ffffff',
  borderRadius: '25px',
  padding: '50px 40px',
  border: '2px solid #e0e0e0',
  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden'
};

const visionIcon = {
  width: '80px',
  height: '80px',
  background: 'linear-gradient(135deg, #0a1f44, #1e3a8a)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 30px',
  color: '#ffffff',
  fontSize: '32px',
  border: '3px solid #c0c0c0'
};

const visionTitle = {
  fontSize: '2.2rem',
  fontWeight: '700',
  color: '#0a1f44',
  marginBottom: '25px',
  fontFamily: "'Playfair Display', serif"
};

const visionText = {
  fontSize: '1.15rem',
  lineHeight: '1.8',
  color: '#2c3e50',
  maxWidth: '400px',
  margin: '0 auto',
  fontFamily: "'Crimson Text', serif"
};

const visionArrow = {
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  color: '#0a1f44',
  background: 'rgba(10,31,68,0.1)',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

// Timeline Section
const timelineSectionStyle = {
  padding: '120px 5%',
  position: 'relative',
  zIndex: 1
};

const timelineContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '30px',
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 2
};

const milestoneCardStyle = {
  background: '#ffffff',
  borderRadius: '20px',
  padding: '40px 30px',
  border: '2px solid #e0e0e0',
  boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
  position: 'relative',
  overflow: 'hidden'
};

const milestoneHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '25px'
};

const yearBadge = {
  background: 'linear-gradient(45deg, #0a1f44, #1e3a8a)',
  color: '#ffffff',
  padding: '12px 30px',
  borderRadius: '25px',
  fontSize: '1.2rem',
  fontWeight: '700',
  letterSpacing: '1px',
  border: '2px solid #c0c0c0',
  boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
};

const timelineIcon = {
  fontSize: '40px',
  opacity: 0.8
};

const milestoneContentStyle = {
  position: 'relative',
  zIndex: 2
};

const milestoneTitleStyle = {
  fontSize: '1.7rem',
  fontWeight: '700',
  color: '#0a1f44',
  marginBottom: '15px',
  fontFamily: "'Playfair Display', serif"
};

const milestoneDescStyle = {
  color: '#2c3e50',
  lineHeight: '1.7',
  fontSize: '1.05rem',
  fontFamily: "'Crimson Text', serif"
};

const milestoneConnector = {
  position: 'absolute',
  right: '25px',
  bottom: '25px',
  height: '2px',
  background: 'linear-gradient(90deg, #0a1f44, #1e3a8a)',
  borderRadius: '1px'
};

// Values Section
const valuesSectionStyle = {
  padding: '120px 5%',
  position: 'relative',
  zIndex: 1
};

const valuesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '35px',
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 2
};

const valueCardStyle = {
  background: '#ffffff',
  borderRadius: '20px',
  padding: '45px 35px',
  border: '2px solid #e0e0e0',
  boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden'
};

const valueIconContainer = {
  marginBottom: '30px'
};

const valueIconCircle = {
  width: '90px',
  height: '90px',
  background: 'rgba(10,31,68,0.1)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  color: '#0a1f44',
  fontSize: '36px',
  border: '3px solid rgba(10,31,68,0.2)'
};

const valueTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: '700',
  color: '#0a1f44',
  marginBottom: '20px',
  fontFamily: "'Playfair Display', serif"
};

const valueDescStyle = {
  color: '#2c3e50',
  lineHeight: '1.7',
  fontSize: '1.05rem',
  marginBottom: '20px',
  fontFamily: "'Crimson Text', serif"
};

// Team Section
const teamSectionStyle = {
  padding: '120px 5%',
  position: 'relative',
  zIndex: 1
};

const teamGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '40px',
  maxWidth: '800px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 2
};

const teamCardStyle = {
  background: '#ffffff',
  borderRadius: '25px',
  padding: '35px',
  border: '2px solid #e0e0e0',
  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden'
};

const teamImageContainer = {
  position: 'relative',
  width: '200px',
  height: '200px',
  marginBottom: '30px',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '4px solid #c0c0c0',
  boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
};

const teamImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '50%',
  transition: 'transform 0.5s ease'
};

const teamImageOverlay = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(10,31,68,0.9)',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  padding: '20px',
  borderRadius: '50%',
  opacity: 0,
  transition: 'opacity 0.3s ease'
};

const expBadge = {
  color: '#0a1f44',
  fontWeight: '700',
  background: '#ffffff',
  padding: '10px 25px',
  borderRadius: '25px',
  fontSize: '1.1rem',
  letterSpacing: '0.5px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
};

const teamInfoStyle = {
  flex: 1,
  width: '100%'
};

const memberNameStyle = {
  fontSize: '1.8rem',
  fontWeight: '700',
  color: '#0a1f44',
  marginBottom: '10px',
  fontFamily: "'Playfair Display', serif"
};

const memberRoleStyle = {
  color: '#0a1f44',
  fontWeight: '600',
  marginBottom: '20px',
  fontSize: '1.2rem',
  letterSpacing: '0.5px'
};

const memberBioStyle = {
  color: '#2c3e50',
  lineHeight: '1.7',
  marginBottom: '25px',
  fontSize: '1rem',
  minHeight: '80px',
  fontFamily: "'Crimson Text', serif"
};

const expertiseBadge = {
  color: '#2c3e50',
  fontSize: '15px',
  fontWeight: '600',
  padding: '12px 20px',
  background: 'rgba(10,31,68,0.08)',
  borderRadius: '20px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid rgba(10,31,68,0.2)'
};

export default About;