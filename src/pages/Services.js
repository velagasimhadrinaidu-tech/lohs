import { useState } from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const [openService, setOpenService] = useState(null);

  const services = [
    { 
      id: 1, 
      title: "Web Development", 
      path: "/web-projects", 
      icon: "🌐", 
      description: "Modern websites & web applications",
      color: "#3498db",
      details: {
        technologies: ["React", "Vue.js", "Angular", "Node.js", "Next.js"],
        features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"],
        timeFrame: "2-6 weeks",
        pricing: "Starting from $2,500"
      }
    },
    { 
      id: 2, 
      title: "Mobile App Development", 
      path: "/mobile-projects", 
      icon: "📱", 
      description: "iOS & Android applications",
      color: "#9b59b6",
      details: {
        technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
        features: ["Cross-platform Apps", "Native Development", "App Store Optimization", "Push Notifications"],
        timeFrame: "4-10 weeks",
        pricing: "Starting from $5,000"
      }
    },
    { 
      id: 3, 
      title: "Backend & API Development", 
      path: "/backend-projects", 
      icon: "⚙️", 
      description: "Server-side solutions & APIs",
      color: "#e74c3c",
      details: {
        technologies: ["Node.js", "Python/Django", "Ruby on Rails", "Java/Spring", "PHP/Laravel"],
        features: ["RESTful APIs", "GraphQL", "Database Design", "Microservices", "Authentication Systems"],
        timeFrame: "3-8 weeks",
        pricing: "Starting from $3,000"
      }
    },
    { 
      id: 4, 
      title: "Cloud Solutions", 
      path: "/cloud-projects", 
      icon: "☁️", 
      description: "AWS, Azure & Google Cloud",
      color: "#2ecc71",
      details: {
        technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
        features: ["Cloud Migration", "Serverless Architecture", "DevOps Automation", "Scalable Infrastructure"],
        timeFrame: "2-6 weeks",
        pricing: "Starting from $4,000"
      }
    },
    { 
      id: 5, 
      title: "UI/UX Design", 
      path: "/uiux-projects", 
      icon: "🎨", 
      description: "User interface & experience design",
      color: "#f39c12",
      details: {
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
        features: ["Wireframing", "Prototyping", "User Research", "Usability Testing", "Design Systems"],
        timeFrame: "2-5 weeks",
        pricing: "Starting from $1,800"
      }
    }
  ];

  const toggleService = (serviceId) => {
    if (openService === serviceId) {
      setOpenService(null);
    } else {
      setOpenService(serviceId);
    }
  };

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Our Services</h1>
        <p style={subtitleStyle}>Click on any service to view detailed information and explore related projects.</p>
      </div>
      
      <div style={servicesList}>
        {services.map((service) => (
          <div key={service.id} style={serviceContainer}>
            <div 
              style={{ 
                ...serviceCard, 
                borderLeft: `5px solid ${service.color}`,
                cursor: 'pointer'
              }}
              onClick={() => toggleService(service.id)}
            >
              <div style={cardHeader}>
                <div style={{ ...iconStyle, backgroundColor: `${service.color}20` }}>
                  <span style={{ fontSize: "32px" }}>{service.icon}</span>
                </div>
                <div style={cardHeaderContent}>
                  <h3 style={cardTitle}>{service.title}</h3>
                  <p style={cardDescription}>{service.description}</p>
                </div>
                <div style={arrowIcon}>
                  <span style={{ 
                    ...arrow, 
                    transform: openService === service.id ? "rotate(180deg)" : "rotate(0deg)",
                    fontSize: "24px",
                    color: service.color
                  }}>
                    ▼
                  </span>
                </div>
              </div>
            </div>
            
            {/* Dropdown Content */}
            {openService === service.id && (
              <div style={{ ...dropdownContent, borderLeft: `5px solid ${service.color}` }}>
                <div style={dropdownGrid}>
                  <div style={dropdownSection}>
                    <h4 style={dropdownSectionTitle}>Technologies</h4>
                    <div style={techTags}>
                      {service.details.technologies.map((tech, index) => (
                        <span key={index} style={techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div style={dropdownSection}>
                    <h4 style={dropdownSectionTitle}>Features</h4>
                    <ul style={featuresList}>
                      {service.details.features.map((feature, index) => (
                        <li key={index} style={featureItem}>
                          ✓ {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div style={dropdownSection}>
                    <h4 style={dropdownSectionTitle}>Project Info</h4>
                    <div style={projectInfo}>
                      <div style={infoItem}>
                        <span style={infoLabel}>Time Frame:</span>
                        <span style={infoValue}>{service.details.timeFrame}</span>
                      </div>
                      <div style={infoItem}>
                        <span style={infoLabel}>Pricing:</span>
                        <span style={infoValue}>{service.details.pricing}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div style={dropdownFooter}>
                  <Link to={service.path} style={viewProjectsBtn}>
                    View Our {service.title} Projects
                    <span style={btnArrow}>→</span>
                  </Link>
                  <button style={contactBtn}>
                    Contact for Quote
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const pageStyle = {
  padding: "40px 20px 80px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: "#f8f9fa",
  minHeight: "calc(100vh - 120px)"
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "60px",
  maxWidth: "800px",
  margin: "0 auto 60px"
};

const titleStyle = {
  fontSize: "3rem",
  color: "#2c3e50",
  marginBottom: "15px",
  fontWeight: "700",
  background: "linear-gradient(45deg, #3498db, #9b59b6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const subtitleStyle = {
  fontSize: "1.2rem",
  color: "#7f8c8d",
  lineHeight: "1.6",
  maxWidth: "600px",
  margin: "0 auto"
};

const servicesList = {
  maxWidth: "900px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const serviceContainer = {
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 3px 15px rgba(0,0,0,0.08)"
};

const serviceCard = {
  backgroundColor: "#ffffff",
  padding: "25px 30px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#fafafa"
  }
};

const cardHeader = {
  display: "flex",
  alignItems: "center",
  gap: "20px"
};

const cardHeaderContent = {
  flex: 1
};

const iconStyle = {
  width: "60px",
  height: "60px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
};

const arrowIcon = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const cardTitle = {
  fontSize: "1.4rem",
  color: "#2c3e50",
  margin: "0 0 8px 0",
  fontWeight: "600"
};

const cardDescription = {
  fontSize: "1rem",
  color: "#7f8c8d",
  margin: 0
};

const arrow = {
  transition: "transform 0.3s ease"
};

const dropdownContent = {
  backgroundColor: "#ffffff",
  padding: "30px",
  borderTop: "1px solid #eee"
};

const dropdownGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "30px",
  marginBottom: "30px"
};

const dropdownSection = {
  marginBottom: "10px"
};

const dropdownSectionTitle = {
  fontSize: "1.1rem",
  color: "#2c3e50",
  marginBottom: "15px",
  fontWeight: "600",
  paddingBottom: "10px",
  borderBottom: "2px solid #f0f0f0"
};

const techTags = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px"
};

const techTag = {
  backgroundColor: "#f1f8ff",
  color: "#0366d6",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "0.9rem",
  fontWeight: "500"
};

const featuresList = {
  listStyle: "none",
  padding: 0,
  margin: 0
};

const featureItem = {
  color: "#555",
  marginBottom: "10px",
  fontSize: "0.95rem",
  paddingLeft: "5px"
};

const projectInfo = {
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};

const infoItem = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 0"
};

const infoLabel = {
  color: "#7f8c8d",
  fontWeight: "500",
  fontSize: "0.95rem"
};

const infoValue = {
  color: "#2c3e50",
  fontWeight: "600",
  fontSize: "1rem"
};

const dropdownFooter = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "25px",
  borderTop: "1px solid #eee"
};

const viewProjectsBtn = {
  backgroundColor: "#3498db",
  color: "white",
  padding: "12px 25px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "0.95rem",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#2980b9",
    transform: "translateY(-2px)"
  }
};

const contactBtn = {
  backgroundColor: "transparent",
  color: "#3498db",
  padding: "12px 25px",
  borderRadius: "6px",
  border: "2px solid #3498db",
  fontWeight: "600",
  fontSize: "0.95rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#3498db",
    color: "white"
  }
};

const btnArrow = {
  transition: "transform 0.3s ease",
  fontSize: "1.1rem"
};

export default Services;