import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShoppingCart, FiMapPin, FiTrendingUp, FiClock, FiShield, FiAward, FiStar, FiUsers } from 'react-icons/fi';

function Services() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "FLH",
      tagline: "Smart E-Commerce with Gamified Shopping",
      description: "A revolutionary e-commerce platform that combines traditional shopping with lucky draws, instant rewards, and gamified experiences. Users can win products, earn coins, and participate in daily contests.",
      longDescription: "FLH transforms online shopping into an exciting journey where every purchase comes with a chance to win. With integrated lucky draw systems, real-time prize reveals, and community engagement features, it's more than shopping – it's an experience.",
      icon: <FiShoppingCart size={40} />,
      mainImage: "https://bloomidea.com/sites/default/files/styles/og_image/public/blog/Tipos%20de%20come%CC%81rcio%20electro%CC%81nico_0.png?itok=jC9MlQZq",
      color: "#FF6B6B",
      gradient: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
      features: [
        { icon: <FiAward />, text: "Cashback System", desc: "Win products with every purchase" },
        { icon: <FiStar />, text: "Reward Points", desc: "Earn coins & redeem instantly" },
        { icon: <FiUsers />, text: "Community Features", desc: "Share wins & compete" },
        { icon: <FiTrendingUp />, text: "Daily Contests", desc: "New prizes every day" }
      ],
      technologies: ["React", "Node.js", "MongoDB", "Redux", "WebSockets", "Redis"],
      status: "Live Now",
      category: "E-Commerce"
    },
    {
      id: 2,
      title: "NEXO RIDES",
      tagline: "Smart Mobility Solutions for Modern Cities",
      description: "A comprehensive ride-sharing platform offering bike taxis, auto services, and parcel delivery with real-time tracking and AI-powered route optimization.",
      longDescription: "NEXO RIDES revolutionizes urban mobility with intelligent matching algorithms, dynamic pricing, and safety-first features. From bike taxis to delivery services, everything you need in one app.",
      icon: <FiMapPin size={40} />,
      mainImage: "https://www.shutterstock.com/image-vector/delivery-guy-on-moped-carrying-600nw-1934618684.jpg",
      color: "#4ECDC4",
      gradient: "linear-gradient(135deg, #4ECDC4, #45B7D1)",
      features: [
        { icon: <FiMapPin />, text: "Real-time Tracking", desc: "Live ride updates & ETA" },
        { icon: <FiShield />, text: "Safety First", desc: "Verified drivers & SOS" },
        { icon: <FiClock />, text: "Quick Pickup", desc: "3-minute response time" },
        { icon: <FiTrendingUp />, text: "Smart Pricing", desc: "AI-based fare calculation" }
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "Socket.io", "Google Maps API", "Firebase"],
      status: "Coming Soon",
      category: "Mobility"
    },
    {
      id: 3,
      title: "BONUS BUS",
      tagline: "Premium Bus Booking with Rewards",
      description: "A feature-rich bus ticketing platform offering seamless booking, loyalty rewards, and real-time bus tracking across multiple routes.",
      longDescription: "BONUS BUS combines the convenience of bus booking with an innovative rewards program. Book tickets, earn points, and get exclusive discounts on future travels. Complete travel solution with multi-language support.",
      icon: <FiTrendingUp size={40} />,
      mainImage: "https://static.vecteezy.com/system/resources/thumbnails/071/820/241/small/modern-electric-bus-charging-at-a-scenic-mountain-viewpoint-during-a-breathtaking-sunset-symbolizing-sustainable-travel-and-future-mobility-photo.jpg",
      color: "#FFD93D",
      gradient: "linear-gradient(135deg, #FFD93D, #F9A826)",
      features: [
        { icon: <FiClock />, text: "Live Tracking", desc: "Real-time bus location" },
        { icon: <FiStar />, text: "Reward Points", desc: "Earn on every booking" },
        { icon: <FiShield />, text: "Secure Payments", desc: "Multiple payment options" },
        { icon: <FiUsers />, text: "Group Booking", desc: "Special group discounts" }
      ],
      technologies: ["Next.js", "Express", "MongoDB", "Tailwind CSS", "Redis", "Stripe"],
      status: "Coming Soon",
      category: "Travel"
    }
  ];

  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <section style={heroSection}>
        <div style={heroOverlay}></div>
        <div style={heroContent}>
          <h1 style={heroTitle}>Our Live Projects</h1>
          <p style={heroSubtitle}>Transforming ideas into reality with cutting-edge technology</p>
          <div style={heroStats}>
            <div style={heroStat}>
              <span style={heroStatValue}>1</span>
              <span style={heroStatLabel}>Live Project</span>
            </div>
            <div style={heroStat}>
              <span style={heroStatValue}>2</span>
              <span style={heroStatLabel}>Coming Soon</span>
            </div>
            <div style={heroStat}>
              <span style={heroStatValue}>2K+</span>
              <span style={heroStatLabel}>Active Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Showcase */}
      <section style={showcaseSection}>
        <div style={showcaseHeader}>
          <h2 style={showcaseTitle}>Featured Projects</h2>
          <p style={showcaseSubtitle}>Hover over projects to explore their unique features</p>
        </div>

        <div style={projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                ...projectCard,
                background: project.gradient,
                transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)',
                zIndex: hoveredProject === project.id ? 10 : 1
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div style={projectCardInner}>
                <div style={projectCardFront}>
                  <div style={projectIcon}>{project.icon}</div>
                  <h3 style={projectTitle}>{project.title}</h3>
                  <p style={projectTagline}>{project.tagline}</p>
                  <div style={{
                    ...projectStatus,
                    background: project.status === "Live Now" ? 'rgba(76, 175, 80, 0.2)' : 'rgba(255, 167, 38, 0.2)'
                  }}>
                    <span style={{
                      ...statusDot,
                      background: project.status === "Live Now" ? '#4CAF50' : '#FFA726'
                    }}></span>
                    {project.status}
                  </div>
                </div>
                
                <div style={projectCardBack}>
                  <div style={backContent}>
                    <h4 style={backTitle}>Key Features</h4>
                    <div style={featureGrid}>
                      {project.features.map((feature, idx) => (
                        <div key={idx} style={featureItem}>
                          <span style={featureIcon}>{feature.icon}</span>
                          <div style={featureText}>
                            <strong>{feature.text}</strong>
                            <span>{feature.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Project Sections */}
      {projects.map((project, index) => (
        <section 
          key={project.id} 
          style={{
            ...projectSection,
            background: index % 2 === 0 ? '#ffffff' : '#f8faff'
          }}
        >
          <div style={sectionContainer}>
            {/* Main Image Only */}
            <div style={imageContainer}>
              <img src={project.mainImage} alt={project.title} style={projectMainImage} />
              <div style={imageOverlayStyle}></div>
              <div style={categoryBadge}>{project.category}</div>
              <div style={{
                ...statusBadge,
                background: project.status === "Live Now" ? '#4CAF50' : '#FFA726'
              }}>
                <span style={statusBadgeDot}></span>
                {project.status}
              </div>
            </div>

            {/* Project Info */}
            <div style={projectInfo}>
              <div style={projectHeader}>
                <h2 style={projectName}>{project.title}</h2>
              </div>
              
              <p style={projectDescription}>{project.longDescription}</p>

              {/* Features */}
              <div style={featuresList}>
                <h4 style={featuresTitle}>Key Features</h4>
                <div style={featuresGrid}>
                  {project.features.map((feature, idx) => (
                    <div key={idx} style={featureCard}>
                      <div style={featureIconWrapper}>
                        {feature.icon}
                      </div>
                      <div style={featureContent}>
                        <strong>{feature.text}</strong>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div style={techSection}>
                <h4 style={techTitle}>Technology Stack</h4>
                <div style={techTags}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} style={techTag}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div style={actionButtons}>
                <Link to="/contact" style={contactButton}>
                  Get Similar Solution
                  <FiArrowRight style={{ marginLeft: '8px' }} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section style={ctaSection}>
        <div style={ctaContainer}>
          <h2 style={ctaTitle}>Ready to Build Your Next Big Idea?</h2>
          <p style={ctaDescription}>
            Let's create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <div style={ctaButtons}>
            <Link to="/contact" style={ctaPrimary}>
              Start Your Project
              <FiArrowRight style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/courses" style={ctaSecondary}>
              Explore Our Courses
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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
      `}</style>
    </div>
  );
}

// Styles
const pageStyle = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  backgroundColor: '#ffffff',
  overflowX: 'hidden'
};

const heroSection = {
  background: 'linear-gradient(135deg, #0a1f44 0%, #1a2f5c 100%)',
  padding: '120px 20px 80px',
  position: 'relative',
  overflow: 'hidden'
};

const heroOverlay = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: '0.1',
  zIndex: 1
};

const heroContent = {
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center',
  position: 'relative',
  zIndex: 2,
  animation: 'fadeInUp 1s ease'
};

const heroTitle = {
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  fontWeight: '800',
  color: '#ffffff',
  marginBottom: '20px',
  textShadow: '0 2px 10px rgba(0,0,0,0.2)'
};

const heroSubtitle = {
  fontSize: '1.2rem',
  color: '#c0c0c0',
  marginBottom: '40px',
  maxWidth: '600px',
  margin: '0 auto 40px'
};

const heroStats = {
  display: 'flex',
  justifyContent: 'center',
  gap: '60px',
  marginTop: '40px'
};

const heroStat = {
  textAlign: 'center'
};

const heroStatValue = {
  fontSize: '2rem',
  fontWeight: '700',
  color: '#ffffff',
  display: 'block',
  marginBottom: '5px'
};

const heroStatLabel = {
  fontSize: '0.9rem',
  color: '#c0c0c0',
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

const showcaseSection = {
  padding: '80px 20px',
  background: '#ffffff'
};

const showcaseHeader = {
  textAlign: 'center',
  marginBottom: '50px'
};

const showcaseTitle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  color: '#0a1f44',
  marginBottom: '15px'
};

const showcaseSubtitle = {
  fontSize: '1.1rem',
  color: '#666',
  maxWidth: '600px',
  margin: '0 auto'
};

const projectsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '30px',
  maxWidth: '1200px',
  margin: '0 auto'
};

const projectCard = {
  height: '400px',
  borderRadius: '20px',
  overflow: 'hidden',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
};

const projectCardInner = {
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 0.8s',
  transformStyle: 'preserve-3d'
};

const projectCardFront = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px',
  color: '#ffffff'
};

const projectCardBack = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)',
  background: 'rgba(255,255,255,0.95)',
  padding: '30px',
  overflowY: 'auto'
};

const projectIcon = {
  width: '80px',
  height: '80px',
  background: 'rgba(255,255,255,0.2)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  animation: 'float 3s ease-in-out infinite'
};

const projectTitle = {
  fontSize: '1.8rem',
  fontWeight: '700',
  marginBottom: '10px',
  textAlign: 'center'
};

const projectTagline = {
  fontSize: '1rem',
  marginBottom: '20px',
  textAlign: 'center',
  opacity: '0.9'
};

const projectStatus = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px',
  borderRadius: '30px'
};

const statusDot = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  animation: 'pulse 1.5s ease-in-out infinite'
};

const backContent = {
  color: '#333'
};

const backTitle = {
  fontSize: '1.2rem',
  fontWeight: '600',
  marginBottom: '20px',
  color: '#0a1f44'
};

const featureGrid = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
};

const featureItem = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '10px',
  background: '#f5f5f5',
  borderRadius: '10px'
};

const featureIcon = {
  fontSize: '20px',
  color: '#0a1f44'
};

const featureText = {
  display: 'flex',
  flexDirection: 'column'
};

const projectSection = {
  padding: '80px 20px'
};

const sectionContainer = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '50px',
  alignItems: 'center'
};

const imageContainer = {
  position: 'relative',
  height: '400px',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  animation: 'slideIn 1s ease'
};

const projectMainImage = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
  ':hover': {
    transform: 'scale(1.05)'
  }
};

const imageOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, rgba(10,31,68,0.2) 0%, rgba(10,31,68,0.4) 100%)',
  pointerEvents: 'none'
};

const categoryBadge = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  background: 'rgba(10,31,68,0.9)',
  color: '#c0c0c0',
  padding: '8px 16px',
  borderRadius: '30px',
  fontSize: '0.9rem',
  fontWeight: '600',
  zIndex: 2,
  backdropFilter: 'blur(5px)'
};

const statusBadge = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: '#ffffff',
  padding: '8px 16px',
  borderRadius: '30px',
  fontSize: '0.9rem',
  fontWeight: '600',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
};

const statusBadgeDot = {
  width: '8px',
  height: '8px',
  background: '#ffffff',
  borderRadius: '50%',
  animation: 'pulse 1.5s ease-in-out infinite'
};

const projectInfo = {
  animation: 'fadeInUp 1s ease 0.3s both'
};

const projectHeader = {
  marginBottom: '20px'
};

const projectName = {
  fontSize: '2.2rem',
  fontWeight: '700',
  color: '#0a1f44',
  marginBottom: '10px'
};

const projectDescription = {
  fontSize: '1.1rem',
  color: '#666',
  lineHeight: '1.6',
  marginBottom: '30px'
};

const featuresList = {
  marginBottom: '30px'
};

const featuresTitle = {
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '#0a1f44',
  marginBottom: '15px'
};

const featuresGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '15px',
  marginBottom: '20px'
};

const featureCard = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '15px',
  background: '#f8faff',
  borderRadius: '12px',
  border: '1px solid rgba(10,31,68,0.05)',
  transition: 'all 0.3s ease',
  ':hover': {
    background: '#ffffff',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    transform: 'translateX(5px)'
  }
};

const featureIconWrapper = {
  width: '40px',
  height: '40px',
  background: 'rgba(10,31,68,0.1)',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#0a1f44',
  fontSize: '18px'
};

const featureContent = {
  flex: 1
};

const techSection = {
  marginBottom: '30px'
};

const techTitle = {
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '#0a1f44',
  marginBottom: '15px'
};

const techTags = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px'
};

const techTag = {
  background: '#f0f0f0',
  color: '#333',
  padding: '8px 16px',
  borderRadius: '20px',
  fontSize: '0.9rem',
  fontWeight: '500',
  transition: 'all 0.3s ease',
  ':hover': {
    background: '#0a1f44',
    color: '#ffffff',
    transform: 'scale(1.05)'
  }
};

const actionButtons = {
  display: 'flex',
  gap: '15px',
  flexWrap: 'wrap'
};

const contactButton = {
  display: 'flex',
  alignItems: 'center',
  background: 'transparent',
  color: '#0a1f44',
  padding: '14px 28px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: '600',
  border: '2px solid #0a1f44',
  transition: 'all 0.3s ease',
  ':hover': {
    background: '#0a1f44',
    color: '#ffffff',
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 20px rgba(10,31,68,0.2)'
  }
};

const ctaSection = {
  background: 'linear-gradient(135deg, #0a1f44 0%, #1a2f5c 100%)',
  padding: '80px 20px',
  textAlign: 'center'
};

const ctaContainer = {
  maxWidth: '800px',
  margin: '0 auto'
};

const ctaTitle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  color: '#ffffff',
  marginBottom: '20px'
};

const ctaDescription = {
  fontSize: '1.1rem',
  color: '#c0c0c0',
  marginBottom: '30px',
  lineHeight: '1.6'
};

const ctaButtons = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  flexWrap: 'wrap'
};

const ctaPrimary = {
  display: 'flex',
  alignItems: 'center',
  background: '#ffffff',
  color: '#0a1f44',
  padding: '16px 32px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  ':hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 30px rgba(255,255,255,0.2)'
  }
};

const ctaSecondary = {
  display: 'flex',
  alignItems: 'center',
  background: 'transparent',
  color: '#ffffff',
  padding: '16px 32px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: '600',
  border: '2px solid #ffffff',
  transition: 'all 0.3s ease',
  ':hover': {
    background: '#ffffff',
    color: '#0a1f44'
  }
};

export default Services;