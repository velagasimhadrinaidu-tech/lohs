import { Link } from "react-router-dom";

function WebProjects() {
  const projects = [
    {
      id: 1,
      title: "FLH - Fully Loaded House",
      description: "E-commerce platform for furniture and home decor with 3D product visualization",
      category: "E-commerce",
      status: "Completed",
      color: "#1e88e5",
      gradient: "linear-gradient(135deg, #1e88e5 0%, #00d4ff 100%)",
      statusColor: "#10b981",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      frontendTech: ["React.js 18", "TypeScript", "Redux Toolkit", "Three.js", "Tailwind CSS", "Framer Motion", "Chart.js"],
      features: [
        "3D Product Visualization",
        "AI Recommendations",
        "Real-time Cart Sync",
        "Advanced Filters",
        "User Reviews",
        "Wishlist System"
      ],
      metrics: [
        { label: "Load Time", value: "< 1.5s", icon: "⚡" },
        { label: "SEO Score", value: "98/100", icon: "📈" },
        { label: "User Rating", value: "4.9/5", icon: "⭐" },
        { label: "Animations", value: "60 FPS", icon: "🎬" }
      ]
    },
    {
      id: 2,
      title: "Nexo Rides",
      description: "Ride-hailing platform with real-time tracking and live driver locations",
      category: "Ride-hailing",
      status: "Live",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
      statusColor: "#f59e0b",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
      frontendTech: ["React Native", "Expo", "TypeScript", "Mapbox GL", "Socket.io Client", "React Query", "NativeWind"],
      features: [
        "Live GPS Tracking",
        "Route Animation",
        "In-app Payments",
        "Driver Matching",
        "Trip History",
        "Emergency SOS"
      ],
      metrics: [
        { label: "Map Render", value: "60ms", icon: "🗺️" },
        { label: "Location Acc.", value: "99.8%", icon: "📍" },
        { label: "App Store", value: "4.8/5", icon: "📱" },
        { label: "Bundle Size", value: "12MB", icon: "📦" }
      ]
    },
    {
      id: 3,
      title: "Bonus Bus",
      description: "Bus booking platform with interactive seat selection and live tracking",
      category: "Transportation",
      status: "Maintenance",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
      statusColor: "#6366f1",
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
      frontendTech: ["Next.js 14", "TypeScript", "Tailwind CSS", "ShadCN UI", "Zustand", "React Hook Form", "React Select"],
      features: [
        "Interactive Seat Map",
        "Live Bus Tracker",
        "Booking System",
        "Payment Gateway",
        "Notifications",
        "Multi-language"
      ],
      metrics: [
        { label: "Page Speed", value: "95/100", icon: "🚀" },
        { label: "Core Web Vitals", value: "Good", icon: "📊" }
        // Removed "Conversion" and "PWA Score" as requested
      ]
    }
  ];

  return (
    <div
      style={{
        padding: "120px 20px 70px 20px", // Increased top padding to avoid header overlap
        backgroundColor: "#ffffff",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#0a1f44",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background (light blue) */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(30, 136, 229, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.02) 0%, transparent 50%)
        `,
        zIndex: 0,
      }} />
      
      {/* Floating Particles (light blue) */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(2px 2px at 20px 30px, rgba(30, 136, 229, 0.1), transparent),
                         radial-gradient(2px 2px at 40px 70px, rgba(139, 92, 246, 0.1), transparent),
                         radial-gradient(2px 2px at 60px 20px, rgba(16, 185, 129, 0.1), transparent),
                         radial-gradient(2px 2px at 80px 50px, rgba(30, 136, 229, 0.1), transparent),
                         radial-gradient(2px 2px at 90px 80px, rgba(139, 92, 246, 0.1), transparent)`,
        backgroundRepeat: "repeat",
        backgroundSize: "100px 100px",
        animation: "float 20s infinite linear",
        zIndex: 0,
      }} />

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(20px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px currentColor; }
          50% { box-shadow: 0 0 40px currentColor; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .tech-chip {
          animation: slideIn 0.5s ease-out;
          animation-fill-mode: both;
        }
      `}</style>

      <div style={{ 
        maxWidth: "1400px", 
        margin: "0 auto", 
        position: "relative",
        zIndex: 1 
      }}>
        {/* Simplified Page Header */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "20px", 
            marginBottom: "15px" 
          }}>
            <div style={{
              width: "6px",
              height: "40px",
              background: "linear-gradient(180deg, #1e88e5 0%, #8b5cf6 50%, #10b981 100%)",
              borderRadius: "3px",
              animation: "glow 2s infinite",
            }} />
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: "800",
                color: "#0a1f44",
                margin: 0,
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
                textShadow: "0 4px 20px rgba(30, 136, 229, 0.1)",
              }}
            >
              Frontend Development
              <span style={{ 
                display: "block", 
                background: "linear-gradient(135deg, #1e88e5 0%, #8b5cf6 50%, #10b981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "800",
              }}>
                Showcase Projects
              </span>
            </h1>
          </div>
        </div>

        {/* PROJECTS GRID - SIDE BY SIDE */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "40px",
        }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                border: `1px solid ${project.color}20`,
                backdropFilter: "blur(12px)",
                animation: `slideIn ${0.3 + index * 0.1}s ease-out`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-20px) scale(1.02)";
                e.currentTarget.style.boxShadow = `0 40px 60px -15px ${project.color}30`;
                e.currentTarget.style.borderColor = project.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.borderColor = `${project.color}20`;
              }}
            >
              {/* Project Header with Gradient Overlay */}
              <div style={{
                position: "relative",
                height: "250px",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${project.color}10 0%, transparent 70%), 
                              linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.95) 100%)`,
                  zIndex: 1,
                }} />
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    filter: "brightness(0.95) contrast(1.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15) rotate(1deg)";
                    e.currentTarget.style.filter = "brightness(1) contrast(1.2) saturate(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) rotate(0)";
                    e.currentTarget.style.filter = "brightness(0.95) contrast(1.05)";
                  }}
                />
                
                {/* Floating Status Badge */}
                <div style={{
                  position: "absolute",
                  top: "25px",
                  right: "25px",
                  background: project.statusColor,
                  color: "white",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  backdropFilter: "blur(10px)",
                  boxShadow: `0 10px 25px ${project.statusColor}30`,
                  zIndex: 3,
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  transform: "translateY(0)",
                  transition: "all 0.3s ease",
                }}>
                  {project.status}
                </div>

                {/* Project Title Overlay */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "30px",
                  background: "linear-gradient(to top, rgba(255,255,255,0.95), transparent)",
                  zIndex: 2,
                }}>
                  <div style={{
                    display: "inline-block",
                    background: project.gradient,
                    color: "white",
                    padding: "6px 18px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    boxShadow: `0 8px 20px ${project.color}30`,
                  }}>
                    {project.category}
                  </div>
                  
                  <h2
                    style={{
                      fontSize: "2.2rem",
                      color: "#0a1f44",
                      margin: "0 0 10px 0",
                      fontWeight: "800",
                      lineHeight: 1.2,
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p style={{
                    fontSize: "1rem",
                    color: "#475569",
                    margin: 0,
                    lineHeight: 1.6,
                  }}>
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Project Content - SIDE BY SIDE LAYOUT */}
              <div style={{ padding: "30px" }}>
                {/* Technologies & Features Side by Side */}
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "1fr 1fr", 
                  gap: "25px",
                  marginBottom: "30px",
                }}>
                  {/* Frontend Technologies */}
                  <div>
                    <h3 style={{ 
                      color: project.color, 
                      marginBottom: "20px", 
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                      <div style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: project.color,
                        borderRadius: "50%",
                        boxShadow: `0 0 15px ${project.color}`,
                        animation: "glow 2s infinite",
                      }} />
                      Frontend Stack
                    </h3>
                    <div style={{ 
                      display: "grid", 
                      gridTemplateColumns: "repeat(2, 1fr)", 
                      gap: "12px",
                    }}>
                      {project.frontendTech.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="tech-chip"
                          style={{
                            padding: "12px 15px",
                            background: `linear-gradient(135deg, ${project.color}10 0%, ${project.color}05 100%)`,
                            borderRadius: "12px",
                            border: `1px solid ${project.color}20`,
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            cursor: "default",
                            animationDelay: `${techIndex * 0.05}s`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
                            e.currentTarget.style.background = `linear-gradient(135deg, ${project.color}20 0%, ${project.color}10 100%)`;
                            e.currentTarget.style.borderColor = project.color;
                            e.currentTarget.style.boxShadow = `0 10px 20px ${project.color}20`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0) scale(1)";
                            e.currentTarget.style.background = `linear-gradient(135deg, ${project.color}10 0%, ${project.color}05 100%)`;
                            e.currentTarget.style.borderColor = `${project.color}20`;
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <div style={{ 
                            color: "#0a1f44", 
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            textAlign: "center",
                          }}>
                            {tech}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 style={{ 
                      color: project.color, 
                      marginBottom: "20px", 
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                      <div style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: project.color,
                        borderRadius: "50%",
                        boxShadow: `0 0 15px ${project.color}`,
                        animation: "glow 2s infinite",
                      }} />
                      Key Features
                    </h3>
                    <ul style={{ 
                      listStyle: "none", 
                      padding: 0, 
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}>
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          style={{
                            padding: "12px 15px",
                            background: `linear-gradient(135deg, ${project.color}08 0%, ${project.color}03 100%)`,
                            borderRadius: "10px",
                            border: `1px solid ${project.color}15`,
                            transition: "all 0.3s ease",
                            cursor: "default",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateX(5px)";
                            e.currentTarget.style.background = `linear-gradient(135deg, ${project.color}15 0%, ${project.color}08 100%)`;
                            e.currentTarget.style.borderColor = project.color;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateX(0)";
                            e.currentTarget.style.background = `linear-gradient(135deg, ${project.color}08 0%, ${project.color}03 100%)`;
                            e.currentTarget.style.borderColor = `${project.color}15`;
                          }}
                        >
                          <div style={{ 
                            color: "#475569", 
                            fontSize: "0.9rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            fontWeight: "500",
                          }}>
                            <div style={{
                              width: "6px",
                              height: "6px",
                              backgroundColor: project.color,
                              borderRadius: "50%",
                              flexShrink: 0,
                            }} />
                            {feature}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Performance Metrics - Side by Side */}
                <div style={{ 
                  backgroundColor: `${project.color}08`, 
                  padding: "25px", 
                  borderRadius: "20px",
                  border: `1px solid ${project.color}15`,
                  boxShadow: "0 10px 30px rgba(30, 136, 229, 0.1)",
                }}>
                  <h3 style={{ 
                    color: project.color, 
                    marginBottom: "25px", 
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}>
                    <div style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: project.color,
                      borderRadius: "50%",
                      boxShadow: `0 0 15px ${project.color}`,
                      animation: "glow 2s infinite",
                    }} />
                    Performance Metrics
                  </h3>
                  <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(2, 1fr)", 
                    gap: "15px",
                  }}>
                    {project.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        style={{
                          padding: "18px 15px",
                          background: `linear-gradient(135deg, ${project.color}10 0%, ${project.color}03 100%)`,
                          borderRadius: "15px",
                          border: `1px solid ${project.color}20`,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          cursor: "default",
                          textAlign: "center",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                          e.currentTarget.style.background = `linear-gradient(135deg, ${project.color}20 0%, ${project.color}10 100%)`;
                          e.currentTarget.style.borderColor = project.color;
                          e.currentTarget.style.boxShadow = `0 15px 30px ${project.color}20`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.background = `linear-gradient(135deg, ${project.color}10 0%, ${project.color}03 100%)`;
                          e.currentTarget.style.borderColor = `${project.color}20`;
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div style={{ 
                          fontSize: "1.8rem", 
                          color: project.color,
                          fontWeight: "800",
                          marginBottom: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                        }}>
                          <span>{metric.icon}</span>
                          {metric.value}
                        </div>
                        <div style={{ 
                          color: "#475569", 
                          fontSize: "0.85rem",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer section (Project #, Click for full case study, View Details) has been removed as requested */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ENHANCED BACK TO SERVICES BUTTON */}
      <Link
        to="/services"
        style={{
          position: "fixed",
          bottom: "40px",
          right: "40px",
          background: "linear-gradient(135deg, #1e88e5 0%, #8b5cf6 50%, #10b981 100%)",
          backgroundSize: "200% 200%",
          color: "#ffffff",
          padding: "18px 35px",
          borderRadius: "50px",
          fontWeight: "800",
          textDecoration: "none",
          boxShadow: "0 25px 50px rgba(30, 136, 229, 0.3)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "1.1rem",
          zIndex: "1000",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(10px)",
          animation: "gradientShift 3s ease infinite",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateX(-8px) scale(1.1) rotate(-2deg)";
          e.currentTarget.style.boxShadow = "0 35px 70px rgba(30, 136, 229, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0) scale(1) rotate(0)";
          e.currentTarget.style.boxShadow = "0 25px 50px rgba(30, 136, 229, 0.3)";
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          style={{ 
            transition: "transform 0.3s ease",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
          }}
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Services
      </Link>

      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}

export default WebProjects;