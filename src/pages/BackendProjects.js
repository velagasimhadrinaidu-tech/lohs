import { Link } from 'react-router-dom';

function BackendProjects() {
  const projects = [
    {
      id: 1,
      title: "Microservices Architecture",
      description: "Scalable backend system with 15+ microservices using Docker and Kubernetes",
      technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
      endpoints: "50+ APIs",
      latency: "< 100ms"
    },
    {
      id: 2,
      title: "Payment Gateway API",
      description: "Secure payment processing system with multiple payment method support",
      technologies: ["Java", "Spring Boot", "MySQL", "JWT", "SSL"],
      endpoints: "20+ APIs",
      latency: "< 50ms"
    },
    {
      id: 3,
      title: "Real-time Chat System",
      description: "WebSocket-based chat application with message persistence and file sharing",
      technologies: ["Python", "Django", "WebSocket", "MongoDB", "Nginx"],
      endpoints: "15+ APIs",
      latency: "< 30ms"
    }
  ];

  return (
    <div style={{
      padding: "40px 20px 80px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f8f9fa",
      minHeight: "calc(100vh - 120px)"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto 50px"
      }}>
        <Link to="/services" style={{
          textDecoration: "none",
          color: "#3498db",
          fontSize: "1rem",
          fontWeight: "600",
          display: "inline-block",
          marginBottom: "20px"
        }}>
          ← Back to Services
        </Link>
        <h1 style={{
          fontSize: "2.5rem",
          color: "#2c3e50",
          marginBottom: "15px",
          fontWeight: "700"
        }}>
          Backend & API Development Projects
        </h1>
        <p style={{
          fontSize: "1.2rem",
          color: "#7f8c8d",
          lineHeight: "1.6"
        }}>
          Robust server-side solutions and API development
        </p>
      </div>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
        gap: "30px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {projects.map((project) => (
          <div key={project.id} style={{
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            padding: "30px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column"
          }}>
            <h3 style={{
              fontSize: "1.4rem",
              color: "#2c3e50",
              margin: "0 0 15px 0",
              fontWeight: "600"
            }}>{project.title}</h3>
            <p style={{
              fontSize: "1rem",
              color: "#7f8c8d",
              lineHeight: "1.6",
              marginBottom: "25px",
              flexGrow: 1
            }}>{project.description}</p>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "25px"
            }}>
              {project.technologies.map((tech, index) => (
                <span key={index} style={{
                  backgroundColor: "#ecf0f1",
                  color: "#2c3e50",
                  padding: "6px 12px",
                  borderRadius: "15px",
                  fontSize: "0.85rem",
                  fontWeight: "500"
                }}>{tech}</span>
              ))}
            </div>
            <div style={{
              display: "flex",
              gap: "20px",
              marginBottom: "20px"
            }}>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1
              }}>
                <span style={{
                  fontSize: "0.8rem",
                  color: "#7f8c8d",
                  marginBottom: "5px"
                }}>Endpoints:</span>
                <span style={{
                  fontSize: "1.1rem",
                  color: "#2c3e50",
                  fontWeight: "600"
                }}>{project.endpoints}</span>
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1
              }}>
                <span style={{
                  fontSize: "0.8rem",
                  color: "#7f8c8d",
                  marginBottom: "5px"
                }}>Latency:</span>
                <span style={{
                  fontSize: "1.1rem",
                  color: "#2c3e50",
                  fontWeight: "600"
                }}>{project.latency}</span>
              </div>
            </div>
            <button style={{
              backgroundColor: "#e74c3c",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              width: "100%",
              marginTop: "10px"
            }}>API Documentation</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BackendProjects;