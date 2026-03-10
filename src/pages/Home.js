import { useEffect, useState } from 'react';
import { FiArrowRight, FiCheck, FiCode, FiCloud, FiSmartphone, FiUsers, FiAward, FiShield, FiGlobe, FiStar, FiTrendingUp, FiTarget, FiClock, FiCalendar, FiBookOpen, FiLayers, FiZap, FiCpu, FiDatabase, FiLock, FiBriefcase, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [showContent, setShowContent] = useState(false);
  const fullText = 'Intelligent Digital Architecture';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowContent(true), 300);
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, []);

  // Training & Placements Data
  const trainingPrograms = [
    {
      title: 'AI & Data Science',
      description: 'Master machine learning, deep learning, and data analytics with real-world projects.',
      duration: '6 Months',
      format: 'Online + Mentorship',
      icon: <FiCpu size={24} />
    },
    {
      title: 'Future Tech Stack',
      description: 'Full-stack development with cloud, DevOps, and microservices architecture.',
      duration: '6 Months',
      format: 'Hybrid',
      icon: <FiZap size={24} />
    },
    {
      title: 'Business Analytics',
      description: 'Data-driven decision making with SQL, Tableau, and business intelligence tools.',
      duration: '5 Months',
      format: 'Online',
      icon: <FiTrendingUp size={24} />
    }
  ];

  // Placement Stats
  const placementStats = [
    { icon: <FiBriefcase />, value: '100%', label: 'Placement Guarantee' },
    { icon: <FiUsers />, value: '100+', label: 'Hiring Partners' },
    { icon: <FiAward />, value: '450+', label: 'Placed in 1 Year' },
    { icon: <FiMapPin />, value: 'India', label: 'Countrywide' }
  ];

  // Partner Companies (for carousel)
  const partnerCompanies = [
    'Infosys', 'Capgemini', 'Accenture', 'Wipro', 'Cognizant',
    'TCS', 'HCL', 'Tech Mahindra', 'Virtusa', 'Welforge'
  ];

  // Additional stats
  const strategicPartners = 25;
  const clients = 9;

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 5; // number of logos shown at once

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!showContent) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => 
        prev + 1 >= Math.ceil(partnerCompanies.length / itemsPerSlide) ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [showContent, partnerCompanies.length]);

  // Calculate visible logos for current slide
  const getVisibleLogos = () => {
    const start = currentSlide * itemsPerSlide;
    return partnerCompanies.slice(start, start + itemsPerSlide);
  };

  return (
    <div style={containerStyle}>
      {/* Background Pattern */}
      <div style={backgroundPatternStyle} />

      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroContentStyle}>
          <div style={logoContainerStyle}></div>
          
          <h1 style={heroHeadingStyle}>
            {displayText}
            <span style={cursorStyle}>|</span>
          </h1>
          
          {showContent && (
            <>
              <div style={secondaryTaglineContainer}>
                <FiTarget style={targetIconStyle} />
                <span style={secondaryTaglineStyle}>Future-Built Technology Solutions</span>
              </div>
              
              <p style={heroSubtitleStyle}>
                We engineer <span style={highlightStyle}>strategic technology solutions</span> that 
                drive growth, enhance efficiency, and create sustainable competitive advantage.
              </p>
              
              <div style={ctaContainerStyle}>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button style={primaryButtonStyle}>
                    <FiTrendingUp style={{ marginRight: '10px' }} />
                    Start Your Transformation
                    <FiArrowRight style={{ marginLeft: '10px' }} />
                  </button>
                </Link>
                <Link to="/services" style={{ textDecoration: 'none' }}>
                  <button style={secondaryButtonStyle}>
                    Explore Our Solutions
                  </button>
                </Link>
              </div>
              
              <div style={trustIndicatorsStyle}>
                <div style={trustItemStyle}>
                  <div style={trustIcon}>
                    <FiShield size={12} />
                  </div>
                  <span style={trustText}>Enterprise-Grade Security</span>
                </div>
                <div style={trustItemStyle}>
                  <div style={trustIcon}>
                    <FiStar size={12} />
                  </div>
                  <span style={trustText}>Proven Track Record</span>
                </div>
                <div style={trustItemStyle}>
                  <div style={trustIcon}>
                    <FiCheck size={12} />
                  </div>
                  <span style={trustText}>Strategic Partnership</span>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Logo Carousel (replaces previous heroVisual) */}
        <div style={carouselContainerStyle}>
          <div style={carouselHeader}>
            <span style={carouselHeaderText}>Trusted by Industry Leaders</span>
          </div>
          <div style={carouselContentStyle}>
            {getVisibleLogos().map((company, idx) => (
              <div key={idx} style={logoCardStyle}>
                <span style={logoText}>{company}</span>
              </div>
            ))}
          </div>
          <div style={carouselDots}>
            {Array.from({ length: Math.ceil(partnerCompanies.length / itemsPerSlide) }).map((_, idx) => (
              <span
                key={idx}
                style={{
                  ...dotStyle,
                  backgroundColor: idx === currentSlide ? '#ffffff' : 'rgba(255,255,255,0.3)'
                }}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {showContent && (
        <section style={statsSectionStyle}>
          <div style={statsHeaderStyle}>
            <h2 style={statsTitleStyle}>Proven Strategic Impact</h2>
            <p style={statsSubtitleStyle}>Transforming businesses through intelligent technology</p>
          </div>
          <div style={statsGridStyle}>
            <div style={statCardStyle}>
              <div style={statNumberStyle}>25+</div>
              <div style={statLabelStyle}>Strategic Projects Delivered</div>
              <div style={statBar} />
            </div>
            <div style={statCardStyle}>
              <div style={statNumberStyle}>99.7%</div>
              <div style={statLabelStyle}>Client Satisfaction Rate</div>
              <div style={statBar} />
            </div>
            <div style={statCardStyle}>
              <div style={statNumberStyle}>63%</div>
              <div style={statLabelStyle}>Avg. Efficiency Gain</div>
              <div style={statBar} />
            </div>
            <div style={statCardStyle}>
              <div style={statNumberStyle}>24/7</div>
              <div style={statLabelStyle}>Strategic Support</div>
              <div style={statBar} />
            </div>
          </div>
        </section>
      )}

      {/* Training & Placements Section */}
      {showContent && (
        <section style={trainingSectionStyle}>
          <div style={sectionHeaderStyle}>
            <h2 style={sectionTitleStyle}>Training & Placements</h2>
            <p style={sectionSubtitleStyle}>100% placement guarantee with top MNCs</p>
            <div style={sectionDivider} />
          </div>

          {/* Placement Stats Cards */}
          <div style={placementStatsGrid}>
            {placementStats.map((stat, index) => (
              <div key={index} style={placementStatCard}>
                <div style={placementStatIcon}>{stat.icon}</div>
                <div style={placementStatValue}>{stat.value}</div>
                <div style={placementStatLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Two-column layout: Programs left, Partners right */}
          <div style={trainingColumnsStyle}>
            {/* Left: Training Programs */}
            <div style={trainingLeftStyle}>
              <h3 style={trainingSubtitle}>Our Flagship Programs</h3>
              <div style={programsGridStyle}>
                {trainingPrograms.map((program, idx) => (
                  <div key={idx} style={programCardStyle}>
                    <div style={programIcon}>{program.icon}</div>
                    <h4 style={programTitle}>{program.title}</h4>
                    <p style={programDescription}>{program.description}</p>
                    <div style={programMeta}>
                      <span style={programDuration}>
                        <FiClock style={{ marginRight: 6 }} />
                        {program.duration}
                      </span>
                      <span style={programFormat}>
                        {program.format}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Partner Companies & Stats */}
            <div style={trainingRightStyle}>
              <div style={partnerStatsBox}>
                <div style={partnerStatRow}>
                  <span style={partnerStatLabel}>Strategic Partners</span>
                  <span style={partnerStatValue}>{strategicPartners}+</span>
                </div>
                <div style={partnerStatRow}>
                  <span style={partnerStatLabel}>Active Clients</span>
                  <span style={partnerStatValue}>{clients}+</span>
                </div>
                <div style={partnerStatRow}>
                  <span style={partnerStatLabel}>Countries Served</span>
                  <span style={partnerStatValue}>India</span>
                </div>
                <div style={partnerStatRow}>
                  <span style={partnerStatLabel}>Job Guarantee</span>
                  <span style={partnerStatValue}>6 Months</span>
                </div>
              </div>

              <h3 style={companyTitle}>Top Hiring Partners</h3>
              <div style={companyGrid}>
                {partnerCompanies.map((company, idx) => (
                  <div key={idx} style={companyBadge}>
                    {company}
                  </div>
                ))}
              </div>

              <div style={placementCTAContainer}>
                <Link to="/training-placements" style={{ textDecoration: 'none' }}>
                  <button style={placementCTAButton}>
                    Explore Programs →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Strategic Partners Marquee */}
      {showContent && (
        <section style={partnersSectionStyle}>
          <div style={sectionHeaderStyle}>
            <h2 style={sectionTitleStyle}>Our Ecosystem</h2>
            <p style={sectionSubtitleStyle}>Trusted by industry leaders worldwide</p>
            <div style={sectionDivider} />
          </div>
          
          <div style={marqueeContainer}>
            <div style={marqueeContent}>
              {partnerCompanies.map((company, idx) => (
                <div key={idx} style={partnerItem}>
                  <span style={partnerName}>{company}</span>
                </div>
              ))}
              {/* Duplicate for seamless scrolling */}
              {partnerCompanies.map((company, idx) => (
                <div key={`dup-${idx}`} style={partnerItem}>
                  <span style={partnerName}>{company}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Background Elements */}
      <div style={particlesContainer}>
        {[...Array(30)].map((_, i) => (
          <div key={i} style={particleStyle(i)} />
        ))}
      </div>
      <div style={animatedPattern} />

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 0 rgba(255,255,255,0.4);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(255,255,255,0.6);
          }
        }
        
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        @keyframes patternMove {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(-50px) translateY(-50px);
          }
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// ========== DEEP BLUE + SILVER STYLES ==========

const containerStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(145deg, #0a1f44 0%, #0b2b5c 100%)',
  color: '#ffffff',
  position: 'relative',
  overflow: 'hidden',
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
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
  pointerEvents: 'none',
  zIndex: 0
};

const animatedPattern = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.02) 0%, transparent 50%),
                   radial-gradient(circle at 75% 75%, rgba(192,192,192,0.02) 0%, transparent 50%)`,
  backgroundSize: '50px 50px',
  animation: 'patternMove 20s linear infinite',
  pointerEvents: 'none',
  zIndex: 0
};

const heroSectionStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '140px 5% 60px',
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1
};

const heroContentStyle = {
  flex: 1,
  maxWidth: '650px',
  animation: 'fadeInUp 0.8s ease'
};

const logoContainerStyle = {
  marginBottom: '40px'
};

const heroHeadingStyle = {
  fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
  fontWeight: '800',
  lineHeight: '1.1',
  marginBottom: '16px',
  background: 'linear-gradient(135deg, #ffffff, #c0c0c0)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  minHeight: '5.2rem'
};

const secondaryTaglineContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '28px',
  animation: 'fadeInUp 0.8s ease 0.3s both'
};

const targetIconStyle = {
  color: '#ffffff',
  fontSize: '20px'
};

const secondaryTaglineStyle = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#e0e0e0',
  letterSpacing: '0.5px'
};

const cursorStyle = {
  animation: 'blink 1s infinite',
  marginLeft: '6px',
  color: '#ffffff'
};

const heroSubtitleStyle = {
  fontSize: '1.3rem',
  lineHeight: '1.7',
  color: '#d1d5db',
  marginBottom: '45px',
  animation: 'fadeInUp 0.8s ease 0.4s both'
};

const highlightStyle = {
  color: '#ffffff',
  fontWeight: '700'
};

const ctaContainerStyle = {
  display: 'flex',
  gap: '20px',
  marginBottom: '40px',
  animation: 'fadeInUp 0.8s ease 0.6s both'
};

const primaryButtonStyle = {
  padding: '18px 40px',
  fontSize: '1rem',
  fontWeight: '700',
  color: '#0a1f44',
  background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 6px 25px rgba(255,255,255,0.3)'
};

const secondaryButtonStyle = {
  padding: '18px 40px',
  fontSize: '1rem',
  fontWeight: '700',
  color: '#ffffff',
  background: 'transparent',
  border: '2px solid #ffffff',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(255,255,255,0.1)'
};

const trustIndicatorsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  animation: 'fadeInUp 0.8s ease 0.8s both'
};

const trustItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
};

const trustIcon = {
  width: '24px',
  height: '24px',
  background: '#ffffff',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#0a1f44',
  fontWeight: 'bold'
};

const trustText = {
  fontSize: '14px',
  color: '#e0e0e0',
  fontWeight: '500'
};

// Carousel Styles (replaces heroVisualStyle)
const carouselContainerStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '40px',
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '24px',
  padding: '40px 20px',
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
};

const carouselHeader = {
  marginBottom: '20px'
};

const carouselHeaderText = {
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '#ffffff',
  letterSpacing: '0.5px'
};

const carouselContentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  flexWrap: 'wrap',
  minHeight: '100px'
};

const logoCardStyle = {
  background: '#ffffff',
  borderRadius: '12px',
  padding: '15px 20px',
  minWidth: '120px',
  textAlign: 'center',
  boxShadow: '0 10px 20px -5px rgba(0,0,0,0.3)',
  border: '1px solid #e0e0e0',
  transition: 'transform 0.3s ease'
};

const logoText = {
  fontSize: '1rem',
  fontWeight: '700',
  color: '#0a1f44'
};

const carouselDots = {
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  marginTop: '20px'
};

const dotStyle = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease'
};

// Stats Section
const statsSectionStyle = {
  padding: '100px 5%',
  background: 'transparent',
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1
};

const statsHeaderStyle = {
  textAlign: 'center',
  marginBottom: '50px'
};

const statsTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: '800',
  color: '#ffffff',
  marginBottom: '16px',
  textShadow: '0 2px 5px rgba(0,0,0,0.3)'
};

const statsSubtitleStyle = {
  fontSize: '1.2rem',
  color: '#e0e0e0',
  maxWidth: '600px',
  margin: '0 auto'
};

const statsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '30px',
  marginTop: '20px'
};

const statCardStyle = {
  background: '#ffffff',
  borderRadius: '16px',
  padding: '35px 25px',
  border: '1px solid #e0e0e0',
  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden'
};

const statNumberStyle = {
  fontSize: '3.5rem',
  fontWeight: '800',
  background: 'linear-gradient(135deg, #0a1f44, #1e3a8a)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '8px'
};

const statLabelStyle = {
  fontSize: '1rem',
  color: '#2c3e50',
  fontWeight: '600',
  marginBottom: '15px'
};

const statBar = {
  height: '4px',
  background: 'linear-gradient(90deg, #0a1f44, #1e3a8a)',
  borderRadius: '2px',
  width: '60px',
  margin: '0 auto'
};

// Training & Placements Section
const trainingSectionStyle = {
  padding: '120px 5%',
  background: 'transparent',
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1
};

const sectionHeaderStyle = {
  textAlign: 'center',
  marginBottom: '50px'
};

const sectionTitleStyle = {
  fontSize: '3rem',
  fontWeight: '800',
  color: '#ffffff',
  marginBottom: '16px',
  textShadow: '0 2px 5px rgba(0,0,0,0.3)'
};

const sectionSubtitleStyle = {
  fontSize: '1.2rem',
  color: '#e0e0e0',
  maxWidth: '600px',
  margin: '0 auto 20px'
};

const sectionDivider = {
  width: '80px',
  height: '4px',
  background: 'linear-gradient(90deg, #ffffff, #c0c0c0)',
  margin: '0 auto',
  borderRadius: '2px',
  boxShadow: '0 2px 8px rgba(255,255,255,0.3)'
};

const placementStatsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '30px',
  marginBottom: '60px'
};

const placementStatCard = {
  background: '#ffffff',
  borderRadius: '16px',
  padding: '30px 20px',
  border: '1px solid #e0e0e0',
  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)',
  textAlign: 'center',
  transition: 'all 0.3s ease'
};

const placementStatIcon = {
  fontSize: '32px',
  color: '#0a1f44',
  marginBottom: '15px'
};

const placementStatValue = {
  fontSize: '2.5rem',
  fontWeight: '800',
  background: 'linear-gradient(135deg, #0a1f44, #1e3a8a)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '5px'
};

const placementStatLabel = {
  fontSize: '1rem',
  color: '#2c3e50',
  fontWeight: '600'
};

const trainingColumnsStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '40px',
  marginTop: '40px'
};

const trainingLeftStyle = {
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255,255,255,0.2)',
  borderRadius: '24px',
  padding: '40px'
};

const trainingSubtitle = {
  fontSize: '2rem',
  fontWeight: '700',
  color: '#ffffff',
  marginBottom: '30px',
  fontFamily: "'Playfair Display', serif"
};

const programsGridStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px'
};

const programCardStyle = {
  background: '#ffffff',
  borderRadius: '16px',
  padding: '30px',
  border: '1px solid #e0e0e0',
  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)',
  transition: 'all 0.3s ease'
};

const programIcon = {
  width: '50px',
  height: '50px',
  background: 'linear-gradient(135deg, #0a1f44, #1e3a8a)',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff',
  fontSize: '24px',
  marginBottom: '20px'
};

const programTitle = {
  fontSize: '1.3rem',
  fontWeight: '700',
  color: '#0a1f44',
  marginBottom: '12px'
};

const programDescription = {
  fontSize: '0.95rem',
  color: '#2c3e50',
  lineHeight: '1.5',
  marginBottom: '20px'
};

const programMeta = {
  display: 'flex',
  gap: '20px',
  fontSize: '0.9rem',
  color: '#64748b'
};

const programDuration = {
  display: 'flex',
  alignItems: 'center'
};

const programFormat = {
  display: 'flex',
  alignItems: 'center'
};

const trainingRightStyle = {
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255,255,255,0.2)',
  borderRadius: '24px',
  padding: '40px'
};

const partnerStatsBox = {
  background: '#ffffff',
  borderRadius: '16px',
  padding: '30px',
  marginBottom: '30px',
  border: '1px solid #e0e0e0',
  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)'
};

const partnerStatRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 0',
  borderBottom: '1px solid #e2e8f0'
};

const partnerStatLabel = {
  fontSize: '1rem',
  color: '#2c3e50',
  fontWeight: '500'
};

const partnerStatValue = {
  fontSize: '1.5rem',
  fontWeight: '700',
  background: 'linear-gradient(135deg, #0a1f44, #1e3a8a)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const companyTitle = {
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#ffffff',
  marginBottom: '20px'
};

const companyGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '10px',
  marginBottom: '30px'
};

const companyBadge = {
  background: '#ffffff',
  color: '#0a1f44',
  padding: '10px',
  borderRadius: '8px',
  fontSize: '0.9rem',
  fontWeight: '600',
  textAlign: 'center',
  border: '1px solid #e0e0e0',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
};

const placementCTAContainer = {
  textAlign: 'center',
  marginTop: '30px'
};

const placementCTAButton = {
  padding: '16px 40px',
  fontSize: '1.1rem',
  fontWeight: '700',
  color: '#0a1f44',
  background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 10px 30px rgba(255,255,255,0.2)'
};

// Partners Marquee Section
const partnersSectionStyle = {
  padding: '80px 5%',
  background: 'transparent',
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
  overflow: 'hidden'
};

const marqueeContainer = {
  width: '100%',
  overflow: 'hidden',
  padding: '20px 0'
};

const marqueeContent = {
  display: 'flex',
  animation: 'marquee 30s linear infinite',
  gap: '40px',
  alignItems: 'center'
};

const partnerItem = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px 20px',
  background: '#ffffff',
  borderRadius: '40px',
  border: '1px solid #e0e0e0',
  whiteSpace: 'nowrap',
  color: '#0a1f44',
  fontWeight: '600'
};

const partnerName = {
  fontSize: '16px'
};

// Particles
const particlesContainer = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 0
};

const particleStyle = (i) => ({
  position: 'absolute',
  width: Math.random() * 5 + 2 + 'px',
  height: Math.random() * 5 + 2 + 'px',
  background: `rgba(255,255,255,${Math.random() * 0.2 + 0.05})`,
  borderRadius: '50%',
  top: Math.random() * 100 + '%',
  left: Math.random() * 100 + '%',
  animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
  animationDelay: `${i * 0.4}s`,
  filter: 'blur(0.5px)'
});

export default Home;