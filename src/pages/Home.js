import { useEffect, useState } from 'react';
import { FiArrowRight, FiCheck, FiCode, FiCloud, FiSmartphone, FiUsers, FiAward, FiShield, FiGlobe, FiStar, FiTrendingUp, FiTarget } from 'react-icons/fi';
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

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroContentStyle}>
          <div style={logoContainerStyle}>
            
            
          </div>
          
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
        
        {/* Hero Visualization */}
        <div style={heroVisualStyle}>
          <div style={heroCard}>
            <div style={cardHeader}>
              <div style={cardHeaderIcon}>⚡</div>
              <span style={cardHeaderText}>Strategic Impact Dashboard</span>
            </div>
            <div style={cardContent}>
              <div style={metricRow}>
                <div style={metricLabel}>Business Growth</div>
                <div style={metricValue}>+47%</div>
              </div>
              <div style={progressBar}>
                <div style={progressFill} />
              </div>
              <div style={metricRow}>
                <div style={metricLabel}>Operational Efficiency</div>
                <div style={metricValue}>+63%</div>
              </div>
              <div style={progressBar}>
                <div style={progressFill2} />
              </div>
              <div style={floatingCode}>
                <div style={codeLine} />
                <div style={codeLine} />
                <div style={codeLine} />
              </div>
              <div style={architectureBadge}>
                <span style={architectureText}>Future-Ready Architecture</span>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div style={floatingElement} />
          <div style={floatingElement2} />
          <div style={floatingElement3} />
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
              <div style={statNumberStyle}>250+</div>
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

      {/* Core Services Section */}
      {showContent && (
        <section style={servicesSectionStyle}>
          <div style={sectionHeaderStyle}>
            <h2 style={sectionTitleStyle}>Strategic Technology Solutions</h2>
            <p style={sectionSubtitleStyle}>Comprehensive digital architecture for forward-thinking businesses</p>
            <div style={sectionDivider} />
          </div>
          
          <div style={servicesGridStyle}>
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                style={serviceCardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(230, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(230, 0, 0, 0.08)';
                }}
              >
                <div style={serviceIconContainer}>
                  <div style={serviceIconStyle}>
                    {service.icon}
                  </div>
                  <div style={serviceIconGlow} />
                </div>
                <h3 style={serviceTitleStyle}>{service.title}</h3>
                <p style={serviceDescStyle}>{service.description}</p>
                <div style={serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={featureStyle}>
                      <FiCheck style={{ color: '#FFB81C' }} />
                      <span style={featureText}>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to={service.link} style={serviceLinkStyle}>
                  View Case Studies
                  <FiArrowRight style={{ marginLeft: '8px' }} />
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Strategy Section */}
      {showContent && (
        <section style={strategySectionStyle}>
          <div style={strategyContentStyle}>
            <div style={strategyTextContainer}>
              <h2 style={strategyTitleStyle}>Our Strategic Approach</h2>
              <p style={strategyDescriptionStyle}>
                We don't just build software – we architect digital transformation strategies 
                that align with your business objectives and drive measurable results.
              </p>
              <div style={strategyPoints}>
                <div style={strategyPoint}>
                  <div style={strategyPointIcon}>1</div>
                  <div>
                    <h4 style={strategyPointTitle}>Strategic Assessment</h4>
                    <p style={strategyPointText}>Comprehensive analysis of your business goals and technology landscape</p>
                  </div>
                </div>
                <div style={strategyPoint}>
                  <div style={strategyPointIcon}>2</div>
                  <div>
                    <h4 style={strategyPointTitle}>Architecture Design</h4>
                    <p style={strategyPointText}>Future-proof digital architecture designed for scalability and growth</p>
                  </div>
                </div>
                <div style={strategyPoint}>
                  <div style={strategyPointIcon}>3</div>
                  <div>
                    <h4 style={strategyPointTitle}>Implementation & Growth</h4>
                    <p style={strategyPointText}>Agile execution with continuous optimization and strategic partnership</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={strategyVisualStyle}>
              <div style={strategyChart}>
                <div style={chartBar} />
                <div style={chartBar} />
                <div style={chartBar} />
                <div style={chartLabels}>
                  <span>Before</span>
                  <span>Strategy</span>
                  <span>Implementation</span>
                  <span>Growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Client Showcase */}
      {showContent && (
        <section style={clientsSectionStyle}>
          <div style={sectionHeaderStyle}>
            <h2 style={sectionTitleStyle}>Strategic Partners</h2>
            <p style={sectionSubtitleStyle}>Collaborating with forward-thinking industry leaders</p>
            <div style={sectionDivider} />
          </div>
          
          <div style={clientsGridStyle}>
            {clientsData.map((client) => (
              <div key={client.id} style={clientCardStyle}>
                <div style={clientLogoContainer}>
                  <div style={clientLogoPlaceholder}>
                    <div style={clientInitials}>{client.initials}</div>
                  </div>
                  <div style={clientLogoOverlay} />
                </div>
                <div style={clientInfoStyle}>
                  <h4 style={clientNameStyle}>{client.name}</h4>
                  <div style={clientIndustryStyle}>{client.industry}</div>
                  <div style={clientImpact}>
                    <div style={impactMetric}>
                      <span style={impactLabel}>Growth:</span>
                      <span style={impactValue}>+{client.growth}%</span>
                    </div>
                    <div style={impactMetric}>
                      <span style={impactLabel}>Efficiency:</span>
                      <span style={impactValue}>+{client.efficiency}%</span>
                    </div>
                  </div>
                  <p style={clientTestimonialStyle}>"{client.testimonial}"</p>
                  <div style={clientDetails}>
                    <div style={clientDetailItem}>
                      <FiCheck style={{ color: '#FFB81C', marginRight: '5px' }} />
                      <span>{client.project}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Final CTA */}
      {showContent && (
        <section style={finalCTAStyle}>
          <div style={finalCTAContentStyle}>
            <div style={finalCTAIcon}>🚀</div>
            <h2 style={finalCTATitleStyle}>Ready to Architect Your Future?</h2>
            <p style={finalCTASubtitleStyle}>
              Join industry leaders who have transformed their businesses with our 
              strategic technology solutions.
            </p>
            <div style={finalCTAButtons}>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <button style={ctaButtonStyle}>
                  <FiTrendingUp style={{ marginRight: '12px' }} />
                  Begin Strategic Consultation
                  <FiArrowRight style={{ marginLeft: '12px' }} />
                </button>
              </Link>
              <Link to="/demo" style={{ textDecoration: 'none' }}>
                <button style={outlineButtonStyle}>
                  Download Strategy Kit
                </button>
              </Link>
            </div>
            <div style={ctaTrustStyle}>
              <span style={ctaTrustText}>Trusted by Fortune 500 companies and startups alike</span>
            </div>
          </div>
        </section>
      )}

      {/* Background Elements */}
      <div style={woodGrainBackground} />
      <div style={particlesContainer}>
        {[...Array(30)].map((_, i) => (
          <div key={i} style={particleStyle(i)} />
        ))}
      </div>

      {/* Animated Background Pattern */}
      <div style={animatedPattern} />

      {/* Global Styles */}
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
            box-shadow: 0 0 0 rgba(255, 184, 28, 0.4);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(255, 184, 28, 0.6);
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
      `}</style>
    </div>
  );
}

// Updated Clients Data with Impact Metrics
const clientsData = [
  {
    id: 1,
    name: 'TechNova Solutions',
    industry: 'FinTech',
    testimonial: 'Strategic digital transformation increased our market efficiency by 45%',
    initials: 'TN',
    project: 'Enterprise Banking Platform',
    growth: 45,
    efficiency: 60
  },
  {
    id: 2,
    name: 'MediCare Plus',
    industry: 'Healthcare',
    testimonial: 'Intelligent architecture reduced patient wait times by 70%',
    initials: 'MP',
    project: 'Healthcare Management System',
    growth: 38,
    efficiency: 70
  },
  {
    id: 3,
    name: 'EduTech Global',
    industry: 'Education',
    testimonial: 'Scalable platform serving 250k+ students with 99.9% uptime',
    initials: 'EG',
    project: 'E-Learning Platform',
    growth: 150,
    efficiency: 85
  },
  {
    id: 4,
    name: 'RetailChain Pro',
    industry: 'Retail',
    testimonial: 'Intelligent inventory system reduced costs by 35% in Q1',
    initials: 'RP',
    project: 'Inventory Management System',
    growth: 28,
    efficiency: 65
  }
];

// Enhanced Services Data
const servicesData = [
  {
    id: 1,
    title: 'Digital Architecture',
    description: 'Strategic technology frameworks designed for growth and scalability',
    icon: <FiCode size={24} />,
    features: ['Enterprise Architecture', 'Microservices Design', 'Cloud Strategy', 'API-First'],
    link: '/architecture'
  },
  {
    id: 2,
    title: 'AI & Automation',
    description: 'Intelligent systems that enhance decision-making and operational efficiency',
    icon: <FiSmartphone size={24} />,
    features: ['Machine Learning', 'Process Automation', 'Predictive Analytics', 'AI Integration'],
    link: '/ai-projects'
  },
  {
    id: 3,
    title: 'Cloud Transformation',
    description: 'Modern cloud infrastructure that scales with your business ambitions',
    icon: <FiCloud size={24} />,
    features: ['Multi-Cloud Strategy', 'DevSecOps', 'Containerization', 'Auto-scaling'],
    link: '/cloud-transformation'
  },
  {
    id: 4,
    title: 'Strategic Development',
    description: 'Business-aligned software development that drives competitive advantage',
    icon: <FiUsers size={24} />,
    features: ['Agile Delivery', 'Business Analysis', 'Quality Assurance', 'Continuous Delivery'],
    link: '/strategic-development'
  },
  {
    id: 5,
    title: 'Digital Experience',
    description: 'User-centric design that engages customers and drives conversions',
    icon: <FiAward size={24} />,
    features: ['UX Strategy', 'Design Systems', 'Conversion Optimization', 'Accessibility'],
    link: '/digital-experience'
  },
  {
    id: 6,
    title: 'Technology Strategy',
    description: 'Comprehensive roadmap for sustainable digital transformation',
    icon: <FiGlobe size={24} />,
    features: ['Digital Roadmap', 'Technology Assessment', 'Risk Management', 'Innovation Labs'],
    link: '/technology-strategy'
  }
];

// ========== UPDATED STYLES ==========

const containerStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #FFFDF5 0%, #FFF9E6 50%, #FFF5D6 100%)',
  color: '#333',
  position: 'relative',
  overflow: 'hidden',
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
};

const woodGrainBackground = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `linear-gradient(
      to bottom,
      rgba(230, 0, 0, 0.03) 0%,
      transparent 100%
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 184, 28, 0.05) 2px,
      rgba(255, 184, 28, 0.05) 4px
    )`,
  pointerEvents: 'none',
  zIndex: 0
};

const animatedPattern = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 184, 28, 0.05) 0%, transparent 50%),
                   radial-gradient(circle at 75% 75%, rgba(230, 0, 0, 0.05) 0%, transparent 50%)`,
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

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '8px',
  position: 'relative'
};

const logoTextStyle = {
  fontSize: '42px',
  fontWeight: '900',
  background: 'linear-gradient(45deg, #E60000, #FF6B00, #FFB81C)',
  backgroundSize: '200% 200%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '1px',
  animation: 'gradientShift 3s ease infinite'
};

const logoGlow = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '140%',
  height: '140%',
  background: 'radial-gradient(circle, rgba(255, 184, 28, 0.15) 0%, transparent 70%)',
  filter: 'blur(10px)',
  animation: 'glowPulse 3s ease-in-out infinite'
};

const logoDotStyle = {
  width: '12px',
  height: '12px',
  background: 'linear-gradient(45deg, #E60000, #FFB81C)',
  borderRadius: '50%',
  animation: 'pulse 2s infinite',
  boxShadow: '0 0 15px rgba(255, 184, 28, 0.5)'
};

const logoTaglineContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px'
};

const logoTaglineStyle = {
  fontSize: '14px',
  color: '#666',
  letterSpacing: '2px',
  fontWeight: '600',
  textTransform: 'uppercase'
};

const logoUnderline = {
  width: '70px',
  height: '2px',
  background: 'linear-gradient(90deg, #E60000, #FFB81C)',
  borderRadius: '1px'
};

const heroHeadingStyle = {
  fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
  fontWeight: '800',
  lineHeight: '1.1',
  marginBottom: '16px',
  color: '#1A1A1A',
  minHeight: '5.2rem',
  background: 'linear-gradient(45deg, #1A1A1A 30%, #333 70%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const secondaryTaglineContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '28px',
  animation: 'fadeInUp 0.8s ease 0.3s both'
};

const targetIconStyle = {
  color: '#FFB81C',
  fontSize: '20px'
};

const secondaryTaglineStyle = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#E60000',
  letterSpacing: '0.5px'
};

const cursorStyle = {
  animation: 'blink 1s infinite',
  marginLeft: '6px',
  color: '#FFB81C'
};

const heroSubtitleStyle = {
  fontSize: '1.3rem',
  lineHeight: '1.7',
  color: '#555',
  marginBottom: '45px',
  animation: 'fadeInUp 0.8s ease 0.4s both'
};

const highlightStyle = {
  color: '#E60000',
  fontWeight: '700',
  background: 'linear-gradient(45deg, #E60000, #FFB81C)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
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
  color: 'white',
  background: 'linear-gradient(45deg, #E60000, #FF6B00, #FFB81C)',
  backgroundSize: '200% 200%',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 6px 25px rgba(230, 0, 0, 0.3)',
  animation: 'gradientShift 3s ease infinite'
};

const secondaryButtonStyle = {
  padding: '18px 40px',
  fontSize: '1rem',
  fontWeight: '700',
  color: '#E60000',
  background: 'transparent',
  border: '2px solid #E60000',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(230, 0, 0, 0.1)'
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
  background: '#FFB81C',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold'
};

const trustText = {
  fontSize: '14px',
  color: '#666',
  fontWeight: '500'
};

const heroVisualStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  paddingLeft: '40px'
};

const heroCard = {
  width: '380px',
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '16px',
  border: '1px solid rgba(230, 0, 0, 0.1)',
  boxShadow: '0 25px 60px rgba(230, 0, 0, 0.15)',
  overflow: 'hidden',
  backdropFilter: 'blur(10px)',
  animation: 'fadeInUp 0.8s ease 0.5s both'
};

const cardHeader = {
  background: 'linear-gradient(90deg, #E60000, #FFB81C)',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
};

const cardHeaderIcon = {
  width: '32px',
  height: '32px',
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '18px'
};

const cardHeaderText = {
  color: 'white',
  fontWeight: '600',
  fontSize: '16px'
};

const cardContent = {
  padding: '30px',
  position: 'relative'
};

const metricRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px'
};

const metricLabel = {
  color: '#666',
  fontSize: '14px',
  fontWeight: '500'
};

const metricValue = {
  color: '#E60000',
  fontSize: '24px',
  fontWeight: '700'
};

const progressBar = {
  height: '8px',
  background: 'rgba(230, 0, 0, 0.1)',
  borderRadius: '4px',
  marginBottom: '25px',
  overflow: 'hidden'
};

const progressFill = {
  height: '100%',
  width: '85%',
  background: 'linear-gradient(90deg, #E60000, #FFB81C)',
  borderRadius: '4px',
  animation: 'progressFill 2s ease-out'
};

const progressFill2 = {
  height: '100%',
  width: '93%',
  background: 'linear-gradient(90deg, #E60000, #FFB81C)',
  borderRadius: '4px',
  animation: 'progressFill 2s ease-out 0.5s forwards'
};

const floatingCode = {
  marginTop: '30px',
  padding: '15px',
  background: 'rgba(255, 184, 28, 0.05)',
  borderRadius: '8px',
  border: '1px solid rgba(255, 184, 28, 0.1)'
};

const codeLine = {
  height: '3px',
  background: 'rgba(230, 0, 0, 0.2)',
  marginBottom: '8px',
  borderRadius: '2px',
  width: '100%'
};

const architectureBadge = {
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  background: 'linear-gradient(45deg, #E60000, #FFB81C)',
  padding: '8px 16px',
  borderRadius: '20px',
  boxShadow: '0 4px 15px rgba(230, 0, 0, 0.2)'
};

const architectureText = {
  color: 'white',
  fontSize: '12px',
  fontWeight: '600',
  letterSpacing: '0.5px'
};

const floatingElement = {
  position: 'absolute',
  width: '80px',
  height: '80px',
  background: 'linear-gradient(45deg, rgba(230, 0, 0, 0.1), rgba(255, 184, 28, 0.1))',
  borderRadius: '50%',
  top: '20%',
  right: '10%',
  animation: 'float 8s ease-in-out infinite',
  filter: 'blur(2px)'
};

const floatingElement2 = {
  position: 'absolute',
  width: '60px',
  height: '60px',
  background: 'linear-gradient(45deg, rgba(255, 184, 28, 0.1), rgba(230, 0, 0, 0.1))',
  borderRadius: '12px',
  bottom: '15%',
  left: '15%',
  animation: 'float 6s ease-in-out infinite 1s',
  filter: 'blur(1px)'
};

const floatingElement3 = {
  position: 'absolute',
  width: '40px',
  height: '40px',
  background: 'rgba(230, 0, 0, 0.05)',
  borderRadius: '8px',
  top: '60%',
  right: '5%',
  animation: 'float 7s ease-in-out infinite 0.5s',
  filter: 'blur(1px)'
};

// Stats Section
const statsSectionStyle = {
  padding: '100px 5%',
  background: 'linear-gradient(135deg, #FFFDF5 0%, #FFF9E6 100%)',
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
  color: '#1A1A1A',
  marginBottom: '16px',
  background: 'linear-gradient(45deg, #E60000, #FFB81C)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const statsSubtitleStyle = {
  fontSize: '1.2rem',
  color: '#666',
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
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '16px',
  padding: '35px 25px',
  border: '1px solid rgba(230, 0, 0, 0.1)',
  boxShadow: '0 10px 30px rgba(230, 0, 0, 0.08)',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden'
};

const statNumberStyle = {
  fontSize: '3.5rem',
  fontWeight: '800',
  background: 'linear-gradient(45deg, #E60000, #FFB81C)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '8px'
};

const statLabelStyle = {
  fontSize: '1rem',
  color: '#666',
  fontWeight: '600',
  marginBottom: '15px'
};

const statBar = {
  height: '4px',
  background: 'linear-gradient(90deg, #E60000, #FFB81C)',
  borderRadius: '2px',
  width: '60px',
  margin: '0 auto'
};

// Services Section
const servicesSectionStyle = {
  padding: '120px 5%',
  background: 'white',
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1
};

const sectionHeaderStyle = {
  textAlign: 'center',
  marginBottom: '60px'
};

const sectionTitleStyle = {
  fontSize: '3rem',
  fontWeight: '800',
  color: '#1A1A1A',
  marginBottom: '16px',
  background: 'linear-gradient(45deg, #E60000, #FFB81C)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const sectionSubtitleStyle = {
  fontSize: '1.2rem',
  color: '#666',
  maxWidth: '600px',
  margin: '0 auto 20px'
};

const sectionDivider = {
  width: '80px',
  height: '4px',
  background: 'linear-gradient(90deg, #E60000, #FFB81C)',
  margin: '0 auto',
  borderRadius: '2px'
};

const servicesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '30px',
  marginTop: '40px'
};

const serviceCardStyle = {
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '16px',
  padding: '35px',
  border: '1px solid rgba(230, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  boxShadow: '0 10px 30px rgba(230, 0, 0, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative',
  overflow: 'hidden'
};

const serviceIconContainer = {
  position: 'relative',
  marginBottom: '25px'
};

const serviceIconStyle = {
  width: '70px',
  height: '70px',
  background: 'linear-gradient(135deg, rgba(230, 0, 0, 0.1), rgba(255, 184, 28, 0.2))',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#E60000',
  fontSize: '28px',
  position: 'relative',
  zIndex: 2
};

const serviceIconGlow = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100px',
  height: '100px',
  background: 'radial-gradient(circle, rgba(255, 184, 28, 0.2) 0%, transparent 70%)',
  filter: 'blur(10px)',
  animation: 'glowPulse 3s ease-in-out infinite'
};

const serviceTitleStyle = {
  fontSize: '1.4rem',
  fontWeight: '700',
  color: '#1A1A1A',
  marginBottom: '15px'
};

const serviceDescStyle = {
  fontSize: '1rem',
  color: '#666',
  lineHeight: '1.6',
  marginBottom: '25px',
  flex: 1
};

const serviceFeatures = {
  marginBottom: '25px',
  width: '100%'
};

const featureStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '10px',
  fontSize: '14px',
  color: '#555'
};

const featureText = {
  fontSize: '13px',
  color: '#666'
};

const serviceLinkStyle = {
  color: '#E60000',
  textDecoration: 'none',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  padding: '12px 20px',
  background: 'rgba(230, 0, 0, 0.05)',
  borderRadius: '8px',
  width: '100%',
  justifyContent: 'center',
  border: '1px solid rgba(230, 0, 0, 0.1)'
};

// Strategy Section
const strategySectionStyle = {
  padding: '120px 5%',
  background: 'linear-gradient(135deg, #FFFDF5 0%, #FFF9E6 100%)',
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1
};

const strategyContentStyle = {
  display: 'flex',
  gap: '60px',
  alignItems: 'center'
};

const strategyTextContainer = {
  flex: 1
};

const strategyTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: '800',
  color: '#1A1A1A',
  marginBottom: '20px',
  background: 'linear-gradient(45deg, #E60000, #FFB81C)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const strategyDescriptionStyle = {
  fontSize: '1.2rem',
  color: '#666',
  lineHeight: '1.6',
  marginBottom: '40px'
};

const strategyPoints = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px'
};

const strategyPoint = {
  display: 'flex',
  gap: '20px',
  alignItems: 'flex-start'
};

const strategyPointIcon = {
  width: '40px',
  height: '40px',
  background: 'linear-gradient(45deg, #E60000, #FFB81C)',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: '700',
  fontSize: '18px',
  flexShrink: 0
};

const strategyPointTitle = {
  fontSize: '1.2rem',
  fontWeight: '700',
  color: '#1A1A1A',
  marginBottom: '8px'
};

const strategyPointText = {
  fontSize: '1rem',
  color: '#666',
  lineHeight: '1.5'
};

const strategyVisualStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center'
};

const strategyChart = {
  width: '300px',
  height: '200px',
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '16px',
  padding: '30px',
  border: '1px solid rgba(230, 0, 0, 0.1)',
  boxShadow: '0 10px 30px rgba(230, 0, 0, 0.08)',
  position: 'relative'
};

const chartBar = {
  height: '30px',
  background: 'linear-gradient(90deg, #E60000, #FFB81C)',
  marginBottom: '15px',
  borderRadius: '8px',
  width: ['60%', '85%', '95%', '100%'][Math.floor(Math.random() * 4)]
};

const chartLabels = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
  fontSize: '12px',
  color: '#666',
  fontWeight: '600'
};

// Clients Section
const clientsSectionStyle = {
  padding: '120px 5%',
  background: 'white',
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1
};

const clientsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '30px',
  marginTop: '40px'
};

const clientCardStyle = {
  background: 'white',
  borderRadius: '16px',
  padding: '35px',
  border: '1px solid rgba(230, 0, 0, 0.1)',
  boxShadow: '0 10px 30px rgba(230, 0, 0, 0.08)',
  transition: 'all 0.3s ease'
};

const clientLogoContainer = {
  position: 'relative',
  marginBottom: '25px'
};

const clientLogoPlaceholder = {
  width: '70px',
  height: '70px',
  background: 'linear-gradient(135deg, #E60000, #FFB81C)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '15px'
};

const clientInitials = {
  color: 'white',
  fontSize: '24px',
  fontWeight: '700'
};

const clientLogoOverlay = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '70px',
  height: '70px',
  background: 'radial-gradient(circle, transparent 30%, rgba(255, 255, 255, 0.2) 70%)',
  borderRadius: '50%'
};

const clientInfoStyle = {
  textAlign: 'left'
};

const clientNameStyle = {
  fontSize: '1.3rem',
  fontWeight: '700',
  color: '#1A1A1A',
  marginBottom: '8px'
};

const clientIndustryStyle = {
  fontSize: '0.9rem',
  color: '#E60000',
  fontWeight: '600',
  marginBottom: '15px',
  background: 'rgba(230, 0, 0, 0.1)',
  padding: '6px 12px',
  borderRadius: '20px',
  display: 'inline-block'
};

const clientImpact = {
  display: 'flex',
  gap: '20px',
  marginBottom: '15px'
};

const impactMetric = {
  display: 'flex',
  flexDirection: 'column'
};

const impactLabel = {
  fontSize: '12px',
  color: '#666',
  marginBottom: '4px'
};

const impactValue = {
  fontSize: '16px',
  fontWeight: '700',
  color: '#E60000'
};

const clientTestimonialStyle = {
  fontSize: '1rem',
  color: '#555',
  fontStyle: 'italic',
  lineHeight: '1.6',
  marginBottom: '20px'
};

const clientDetails = {
  paddingTop: '15px',
  borderTop: '1px solid rgba(230, 0, 0, 0.1)'
};

const clientDetailItem = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  color: '#666'
};

// Final CTA
const finalCTAStyle = {
  padding: '140px 5%',
  background: 'linear-gradient(135deg, #FFFDF5 0%, #FFF9E6 100%)',
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1
};

const finalCTAContentStyle = {
  textAlign: 'center',
  maxWidth: '700px',
  margin: '0 auto',
  padding: '60px',
  background: 'white',
  borderRadius: '24px',
  border: '1px solid rgba(230, 0, 0, 0.1)',
  boxShadow: '0 20px 60px rgba(230, 0, 0, 0.1)',
  position: 'relative'
};

const finalCTAIcon = {
  width: '60px',
  height: '60px',
  background: 'linear-gradient(135deg, #E60000, #FFB81C)',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '28px',
  margin: '0 auto 30px'
};

const finalCTATitleStyle = {
  fontSize: '2.8rem',
  fontWeight: '800',
  color: '#1A1A1A',
  marginBottom: '20px',
  background: 'linear-gradient(45deg, #E60000, #FFB81C)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const finalCTASubtitleStyle = {
  fontSize: '1.2rem',
  color: '#666',
  marginBottom: '40px',
  lineHeight: '1.6'
};

const finalCTAButtons = {
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  marginBottom: '30px'
};

const ctaButtonStyle = {
  padding: '20px 50px',
  fontSize: '1.1rem',
  fontWeight: '700',
  color: 'white',
  background: 'linear-gradient(45deg, #E60000, #FFB81C)',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 10px 30px rgba(230, 0, 0, 0.3)',
  animation: 'pulse 2s infinite'
};

const outlineButtonStyle = {
  padding: '20px 50px',
  fontSize: '1.1rem',
  fontWeight: '700',
  color: '#E60000',
  background: 'transparent',
  border: '2px solid #E60000',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 10px 30px rgba(230, 0, 0, 0.1)'
};

const ctaTrustStyle = {
  marginTop: '20px'
};

const ctaTrustText = {
  fontSize: '14px',
  color: '#666',
  fontStyle: 'italic'
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
  background: `rgba(${Math.random() > 0.5 ? '230, 0, 0' : '255, 184, 28'}, ${Math.random() * 0.3 + 0.1})`,
  borderRadius: '50%',
  top: Math.random() * 100 + '%',
  left: Math.random() * 100 + '%',
  animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
  animationDelay: `${i * 0.4}s`,
  filter: 'blur(0.5px)'
});

export default Home;