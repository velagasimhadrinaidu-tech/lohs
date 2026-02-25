import { Link } from "react-router-dom";

function MobileProjects() {
  const projects = [
    {
      id: 1,
      title: "FLH - Mobile E-commerce",
      description: "Furniture shopping app with AR preview and 3D product visualization",
      platform: ["iOS", "Android"],
      status: "Live",
      color: "#9b59b6",
      gradient: "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
      statusColor: "#10b981",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      frontendTech: ["React Native", "TypeScript", "Expo", "Three.js", "React Native AR", "Redux Toolkit", "NativeBase"],
      features: [
        "AR Product Preview",
        "3D Visualization",
        "Offline Shopping",
        "Push Notifications",
        "Secure Payments",
        "Wishlist Sync"
      ],
      metrics: [
        { label: "App Size", value: "28MB", icon: "📱" },
        { label: "Load Time", value: "< 2s", icon: "⚡" },
        { label: "Store Rating", value: "4.8/5", icon: "⭐" },
        { label: "Retention", value: "85%", icon: "📈" }
      ]
    },
    {
      id: 2,
      title: "Nexo Rides - App",
      description: "Ride-hailing mobile app with live tracking and SOS features",
      platform: ["iOS", "Android"],
      status: "Live",
      color: "#3498db",
      gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
      statusColor: "#f59e0b",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
      frontendTech: ["Flutter", "Dart", "Google Maps SDK", "Socket.io", "Provider", "Firebase Auth", "Local Notifications"],
      features: [
        "Live GPS Tracking",
        "SOS Emergency",
        "Route Optimization",
        "Driver Ratings",
        "In-app Chat",
        "Multi-language"
      ],
      metrics: [
        { label: "GPS Accuracy", value: "99.5%", icon: "📍" },
        { label: "Response Time", value: "< 1s", icon: "⚡" },
        { label: "Play Store", value: "4.7/5", icon: "📱" },
        { label: "Active Users", value: "50K+", icon: "👥" }
      ]
    },
    {
      id: 3,
      title: "Bonus Bus - Mobile",
      description: "Bus booking app with seat selection and live tracking",
      platform: ["iOS", "Android"],
      status: "Live",
      color: "#e74c3c",
      gradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
      statusColor: "#6366f1",
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
      frontendTech: ["React Native", "Expo", "Reanimated 2", "Gesture Handler", "React Navigation", "Async Storage", "Lottie"],
      features: [
        "Seat Selection",
        "Live Bus Tracking",
        "Ticket Booking",
        "Offline Mode",
        "QR Scanner",
        "Trip History"
      ],
      metrics: [
        { label: "Booking Speed", value: "3s", icon: "🚌" },
        { label: "Offline Sync", value: "100%", icon: "📶" },
        { label: "App Store", value: "4.9/5", icon: "⭐" },
        { label: "Daily Bookings", value: "5K+", icon: "🎟️" }
      ]
    }
  ];

  return (
    <div
      style={{
        padding: "70px 20px",
        backgroundColor: "#0a1f44",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#ffffff",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(155, 89, 182, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(52, 152, 219, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(231, 76, 60, 0.08) 0%, transparent 50%)
        `,
        zIndex: 0,
      }} />
      
      {/* Floating App Icons */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cpath fill='%239b59b6' fill-opacity='0.2' d='M15 0L0 15l15 15 15-15z'/%3E%3C/svg%3E"),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='8' fill='%233498db' fill-opacity='0.2'/%3E%3C/svg%3E"),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35'%3E%3Crect width='15' height='15' x='10' y='10' fill='%23e74c3c' fill-opacity='0.2'/%3E%3C/svg%3E")
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "80px 80px, 100px 100px, 120px 120px",
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
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
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
        {/* ENHANCED PAGE HEADER */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "20px", 
            marginBottom: "15px" 
          }}>
            <div style={{
              width: "6px",
              height: "40px",
              background: "linear-gradient(180deg, #9b59b6 0%, #3498db 50%, #e74c3c 100%)",
              borderRadius: "3px",
              animation: "glow 2s infinite",
            }} />
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: "800",
                color: "#ffffff",
                margin: 0,
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
                textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              Mobile App Development
              <span style={{ 
                display: "block", 
                background: "linear-gradient(135deg, #9b59b6 0%, #3498db 50%, #e74c3c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "800",
              }}>
                Showcase Projects
              </span>
            </h1>
          </div>

          <div
            style={{
              fontSize: "1.25rem",
              color: "#b0c4ff",
              maxWidth: "800px",
              lineHeight: "1.8",
              padding: "35px 40px",
              backgroundColor: "rgba(155, 89, 182, 0.15)",
              borderRadius: "20px",
              border: "1px solid rgba(155, 89, 182, 0.4)",
              position: "relative",
              overflow: "hidden",
              backdropFilter: "blur(10px)",
              boxShadow: "0 20px 40px rgba(155, 89, 182, 0.2)",
            }}
          >
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "5px",
              height: "100%",
              background: "linear-gradient(180deg, #9b59b6 0%, #3498db 100%)",
            }} />
            <p style={{ margin: 0, color: "#e2e8f0" }}>
              Showcasing cutting-edge mobile applications with native performance and cross-platform capabilities. 
              Each app demonstrates our expertise in creating immersive mobile experiences with 
              high-performance animations and seamless user interactions.
            </p>
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
                backgroundColor: "rgba(16, 23, 48, 0.9)",
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                border: `1px solid ${project.color}30`,
                backdropFilter: "blur(12px)",
                animation: `slideIn ${0.3 + index * 0.1}s ease-out`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-20px) scale(1.02)";
                e.currentTarget.style.boxShadow = `0 40px 80px ${project.color}40`;
                e.currentTarget.style.borderColor = project.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 25px 60px rgba(0, 0, 0, 0.4)";
                e.currentTarget.style.borderColor = `${project.color}30`;
              }}
            >
              {/* Project Header with Platform Badges */}
              <div style={{
                position: "relative",
                height: "250px",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${project.color}20 0%, transparent 70%), 
                              linear-gradient(to bottom, transparent 50%, rgba(16, 23, 48, 0.95) 100%)`,
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
                    filter: "brightness(0.8) contrast(1.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15) rotate(1deg)";
                    e.currentTarget.style.filter = "brightness(1) contrast(1.2) saturate(1.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) rotate(0)";
                    e.currentTarget.style.filter = "brightness(0.8) contrast(1.1)";
                  }}
                />
                
                {/* Platform Badges */}
                <div style={{
                  position: "absolute",
                  top: "25px",
                  left: "25px",
                  display: "flex",
                  gap: "10px",
                  zIndex: 3,
                }}>
                  {project.platform.map((plat, platIndex) => (
                    <div
                      key={platIndex}
                      style={{
                        background: project.gradient,
                        color: "white",
                        padding: "8px 16px",
                        borderRadius: "50px",
                        fontSize: "0.8rem",
                        fontWeight: "700",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        backdropFilter: "blur(10px)",
                        boxShadow: `0 8px 20px ${project.color}40`,
                        border: "2px solid rgba(255, 255, 255, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.boxShadow = `0 12px 25px ${project.color}60`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = `0 8px 20px ${project.color}40`;
                      }}
                    >
                      {plat === "iOS" ? "📱" : "🤖"}
                      {plat}
                    </div>
                  ))}
                </div>

                {/* Status Badge */}
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
                  boxShadow: `0 10px 25px ${project.statusColor}40`,
                  zIndex: 3,
                  border: "2px solid rgba(255, 255, 255, 0.2)",
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
                  background: "linear-gradient(to top, rgba(16, 23, 48, 0.95), transparent)",
                  zIndex: 2,
                }}>
                  <h2
                    style={{
                      fontSize: "2.2rem",
                      color: "#ffffff",
                      margin: "0 0 10px 0",
                      fontWeight: "800",
                      lineHeight: 1.2,
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p style={{
                    fontSize: "1rem",
                    color: "#b0c4ff",
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
                  {/* Mobile Technologies */}
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
                      Mobile Stack
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
                            background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)`,
                            borderRadius: "12px",
                            border: `1px solid ${project.color}30`,
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            cursor: "default",
                            animationDelay: `${techIndex * 0.05}s`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
                            e.currentTarget.style.background = `linear-gradient(135deg, ${project.color}30 0%, ${project.color}15 100%)`;
                            e.currentTarget.style.borderColor = project.color;
                            e.currentTarget.style.boxShadow = `0 10px 20px ${project.color}30`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0) scale(1)";
                            e.currentTarget.style.background = `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)`;
                            e.currentTarget.style.borderColor = `${project.color}30`;
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <div style={{ 
                            color: "#ffffff", 
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            textAlign: "center",
                            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
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
                      Mobile Features
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
                            background: `linear-gradient(135deg, ${project.color}10 0%, ${project.color}05 100%)`,
                            borderRadius: "10px",
                            border: `1px solid ${project.color}20`,
                            transition: "all 0.3s ease",
                            cursor: "default",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateX(5px)";
                            e.currentTarget.style.background = `linear-gradient(135deg, ${project.color}20 0%, ${project.color}10 100%)`;
                            e.currentTarget.style.borderColor = project.color;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateX(0)";
                            e.currentTarget.style.background = `linear-gradient(135deg, ${project.color}10 0%, ${project.color}05 100%)`;
                            e.currentTarget.style.borderColor = `${project.color}20`;
                          }}
                        >
                          <div style={{ 
                            color: "#e2e8f0", 
                            fontSize: "0.9rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            fontWeight: "500",
                          }}>
                            <div style={{
                              width: "20px",
                              height: "20px",
                              backgroundColor: project.color,
                              borderRadius: "5px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.7rem",
                              color: "white",
                              flexShrink: 0,
                            }}>
                              {featureIndex + 1}
                            </div>
                            {feature}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* App Performance Metrics */}
                <div style={{ 
                  backgroundColor: `${project.color}10`, 
                  padding: "25px", 
                  borderRadius: "20px",
                  border: `1px solid ${project.color}20`,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
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
                    App Performance
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
                          background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)`,
                          borderRadius: "15px",
                          border: `1px solid ${project.color}25`,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          cursor: "default",
                          textAlign: "center",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                          e.currentTarget.style.background = `linear-gradient(135deg, ${project.color}25 0%, ${project.color}15 100%)`;
                          e.currentTarget.style.borderColor = project.color;
                          e.currentTarget.style.boxShadow = `0 15px 30px ${project.color}30`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.background = `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)`;
                          e.currentTarget.style.borderColor = `${project.color}25`;
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div style={{ 
                          fontSize: "1.5rem", 
                          color: metric.label.includes("Rating") || metric.label.includes("Users") ? "#f1c40f" : project.color,
                          fontWeight: "800",
                          marginBottom: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                        }}>
                          <span style={{ fontSize: "1.3rem" }}>{metric.icon}</span>
                          {metric.value}
                        </div>
                        <div style={{ 
                          color: "#b0c4ff", 
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

                {/* Store Buttons */}
                <div style={{
                  marginTop: "30px",
                  display: "flex",
                  gap: "15px",
                  justifyContent: "center",
                }}>
                  {project.platform.includes("iOS") && (
                    <button
                      style={{
                        flex: 1,
                        background: "linear-gradient(135deg, #000000 0%, #333333 100%)",
                        color: "white",
                        padding: "14px",
                        borderRadius: "12px",
                        fontWeight: "700",
                        fontSize: "0.9rem",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow = "0 12px 25px rgba(0, 0, 0, 0.6)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.4)";
                      }}
                    >
                      <span>📱</span>
                      App Store
                    </button>
                  )}
                  
                  {project.platform.includes("Android") && (
                    <button
                      style={{
                        flex: 1,
                        background: "linear-gradient(135deg, #3DDC84 0%, #0F9D58 100%)",
                        color: "white",
                        padding: "14px",
                        borderRadius: "12px",
                        fontWeight: "700",
                        fontSize: "0.9rem",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        boxShadow: "0 8px 20px rgba(61, 220, 132, 0.4)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow = "0 12px 25px rgba(61, 220, 132, 0.6)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(61, 220, 132, 0.4)";
                      }}
                    >
                      <span>🤖</span>
                      Play Store
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE DEVELOPMENT STATISTICS */}
        <div
          style={{
            marginTop: "80px",
            background: "linear-gradient(135deg, rgba(155, 89, 182, 0.2) 0%, rgba(52, 152, 219, 0.2) 100%)",
            borderRadius: "30px",
            padding: "50px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(155, 89, 182, 0.4)",
            backdropFilter: "blur(15px)",
          }}
        >
          <h2 style={{ 
            fontSize: "2.5rem", 
            marginBottom: "40px", 
            fontWeight: "800",
            position: "relative",
            zIndex: 1,
            color: "#ffffff",
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}>
            Mobile Excellence
          </h2>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
            gap: "25px",
            position: "relative",
            zIndex: 1,
          }}>
            {[
              { value: "150K+", label: "Total Downloads", color: "#9b59b6", icon: "⬇️" },
              { value: "4.8", label: "Avg Rating", color: "#f1c40f", icon: "⭐" },
              { value: "3", label: "Frameworks Used", color: "#3498db", icon: "⚛️" },
              { value: "100%", label: "App Store", color: "#2ecc71", icon: "📱" },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "35px 20px",
                  borderRadius: "20px",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.4s ease",
                  cursor: "default",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.borderColor = stat.color;
                  e.currentTarget.style.boxShadow = `0 20px 40px ${stat.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ 
                  fontSize: "1.5rem", 
                  marginBottom: "15px",
                  opacity: 0.8,
                }}>
                  {stat.icon}
                </div>
                <div style={{ 
                  fontSize: "3rem", 
                  fontWeight: "800", 
                  marginBottom: "10px",
                  color: stat.color,
                  textShadow: `0 0 20px ${stat.color}40`,
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  fontSize: "1rem", 
                  color: "#b0c4ff",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ENHANCED BACK TO SERVICES BUTTON */}
      <Link
        to="/services"
        style={{
          position: "fixed",
          bottom: "40px",
          right: "40px",
          background: "linear-gradient(135deg, #9b59b6 0%, #3498db 50%, #e74c3c 100%)",
          backgroundSize: "200% 200%",
          color: "#ffffff",
          padding: "18px 35px",
          borderRadius: "50px",
          fontWeight: "800",
          textDecoration: "none",
          boxShadow: "0 25px 50px rgba(155, 89, 182, 0.6)",
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
          e.currentTarget.style.boxShadow = "0 35px 70px rgba(155, 89, 182, 0.8)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0) scale(1) rotate(0)";
          e.currentTarget.style.boxShadow = "0 25px 50px rgba(155, 89, 182, 0.6)";
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

export default MobileProjects;