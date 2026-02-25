import { Link } from 'react-router-dom';

function UIUXProjects() {
  const projects = [
    {
      id: 1,
      title: "Banking App Redesign",
      description: "Complete redesign of mobile banking application with improved user flow",
      tools: ["Figma", "Adobe XD", "Sketch"],
      improvements: ["+45% user engagement", "+30% faster navigation"],
      screens: "50+"
    },
    {
      id: 2,
      title: "E-commerce Website UI",
      description: "Modern e-commerce interface with focus on conversion optimization",
      tools: ["Figma", "Photoshop", "Principle"],
      improvements: ["+25% conversion rate", "+40% mobile traffic"],
      screens: "80+"
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      description: "Medical dashboard for patient data visualization and management",
      tools: ["Sketch", "InVision", "Zeplin"],
      improvements: ["+60% efficiency", "Reduced errors by 35%"],
      screens: "40+"
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
          UI/UX Design Projects
        </h1>
        <p style={{
          fontSize: "1.2rem",
          color: "#7f8c8d",
          lineHeight: "1.6"
        }}>
          User-centered design solutions with measurable impact
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
            <div style={{
              backgroundColor: "#f39c12",
              color: "white",
              padding: "5px 15px",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: "600",
              display: "inline-block",
              marginBottom: "20px",
              alignSelf: "flex-start"
            }}>
              {project.screens} screens
            </div>
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
              margin: "15px 0"
            }}>
              {project.tools.map((tool, index) => (
                <span key={index} style={{
                  backgroundColor: "#fdebd0",
                  color: "#d68910",
                  padding: "6px 12px",
                  borderRadius: "15px",
                  fontSize: "0.85rem",
                  fontWeight: "500"
                }}>{tool}</span>
              ))}
            </div>
            <div style={{
              margin: "15px 0 25px 0"
            }}>
              {project.improvements.map((improvement, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#27ae60",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  marginBottom: "10px"
                }}>
                  <span style={{
                    backgroundColor: "#27ae60",
                    color: "white",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem"
                  }}>✓</span>
                  {improvement}
                </div>
              ))}
            </div>
            <button style={{
              backgroundColor: "#f39c12",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              width: "100%"
            }}>View Prototype</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UIUXProjects;