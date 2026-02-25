import { Link } from "react-router-dom";

function CloudProjects() {
  const projects = [
    {
      id: 1,
      title: "FLH - Cloud Migration",
      description: "Complete migration of FLH e-commerce platform to AWS cloud with zero downtime",
      provider: "AWS",
      status: "Completed",
      color: "#FF9900",
      gradient: "linear-gradient(135deg, #FF9900 0%, #FFB366 100%)",
      statusColor: "#10b981",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      services: ["EC2", "S3", "RDS", "Lambda", "CloudFront", "CloudFormation", "Route 53", "ElastiCache"],
      features: [
        "Zero Downtime Migration",
        "Auto-scaling Setup",
        "CDN Optimization",
        "Database Clustering",
        "Disaster Recovery",
        "Cost Optimization"
      ],
      metrics: [
        { label: "Cost Reduction", value: "40%", icon: "💰" },
        { label: "Uptime", value: "99.99%", icon: "⚡" },
        { label: "Response Time", value: "< 200ms", icon: "⚡" },
        { label: "Migration Time", value: "2 Weeks", icon: "⏱️" }
      ]
    },
    {
      id: 2,
      title: "Nexo Rides - Kubernetes Cluster",
      description: "High-availability Kubernetes cluster for microservices architecture on GCP",
      provider: "Google Cloud",
      status: "Live",
      color: "#4285F4",
      gradient: "linear-gradient(135deg, #4285F4 0%, #669DF6 100%)",
      statusColor: "#f59e0b",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      services: ["GKE", "Cloud Run", "Cloud SQL", "Cloud Load Balancing", "Cloud CDN", "Cloud Storage", "Cloud IAM", "VPC"],
      features: [
        "Multi-zone Clusters",
        "Auto-scaling Pods",
        "CI/CD Pipeline",
        "Service Mesh",
        "Monitoring Stack",
        "Security Hardening"
      ],
      metrics: [
        { label: "Deployment Speed", value: "60% Faster", icon: "🚀" },
        { label: "Cluster Nodes", value: "50+", icon: "📊" },
        { label: "Auto-scaling", value: "5x Capacity", icon: "📈" },
        { label: "Availability", value: "99.95%", icon: "✅" }
      ]
    },
    {
      id: 3,
      title: "Bonus Bus - Serverless Platform",
      description: "Event-driven serverless architecture on Azure with global deployment",
      provider: "Azure",
      status: "Live",
      color: "#0078D4",
      gradient: "linear-gradient(135deg, #0078D4 0%, #2999F8 100%)",
      statusColor: "#6366f1",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      services: ["Azure Functions", "Cosmos DB", "API Management", "App Service", "Redis Cache", "Event Grid", "Logic Apps", "Service Bus"],
      features: [
        "Serverless Compute",
        "Global Database",
        "API Gateway",
        "Event-driven Workflows",
        "Cache Optimization",
        "Monitoring & Logging"
      ],
      metrics: [
        { label: "Cost Savings", value: "70%", icon: "💰" },
        { label: "Scaling Speed", value: "< 1s", icon: "⚡" },
        { label: "Concurrent Users", value: "100K+", icon: "👥" },
        { label: "Server Management", value: "Zero", icon: "☁️" }
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
      {/* Animated Cloud Background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(255, 153, 0, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(66, 133, 244, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(0, 120, 212, 0.08) 0%, transparent 50%)
        `,
        zIndex: 0,
      }} />
      
      {/* Cloud Pattern */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath fill='%23FF9900' fill-opacity='0.1' d='M30,15c8.3,0,15,6.7,15,15s-6.7,15-15,15S15,38.3,15,30S21.7,15,30,15z'/%3E%3C/svg%3E"),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath fill='%234285F4' fill-opacity='0.1' d='M40,20c11,0,20,9,20,20s-9,20-20,20S20,51,20,40S29,20,40,20z'/%3E%3C/svg%3E"),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='%230078D4' fill-opacity='0.1' d='M50,25c13.8,0,25,11.2,25,25S63.8,75,50,75S25,63.8,25,50S36.2,25,50,25z'/%3E%3C/svg%3E")
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "150px 150px, 200px 200px, 250px 250px",
        animation: "float 25s infinite linear",
        zIndex: 0,
      }} />

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-15px) translateX(15px) rotate(1deg); }
          66% { transform: translateY(10px) translateX(-10px) rotate(-1deg); }
          100% { transform: translateY(0) translateX(0) rotate(0deg); }
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
              background: "linear-gradient(180deg, #FF9900 0%, #4285F4 50%, #0078D4 100%)",
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
              Cloud Solutions
              <span style={{ 
                display: "block", 
                background: "linear-gradient(135deg, #FF9900 0%, #4285F4 50%, #0078D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "800",
              }}>
                Infrastructure Projects
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
              backgroundColor: "rgba(255, 153, 0, 0.15)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 153, 0, 0.4)",
              position: "relative",
              overflow: "hidden",
              backdropFilter: "blur(10px)",
              boxShadow: "0 20px 40px rgba(255, 153, 0, 0.2)",
            }}
          >
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "5px",
              height: "100%",
              background: "linear-gradient(180deg, #FF9900 0%, #4285F4 100%)",
            }} />
            <p style={{ margin: 0, color: "#e2e8f0" }}>
              Showcasing enterprise-grade cloud infrastructure and migration projects across AWS, 
              Google Cloud, and Azure. Each project demonstrates our expertise in creating scalable, 
              secure, and cost-optimized cloud solutions.
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
              {/* Project Header with Cloud Provider */}
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
                
                {/* Cloud Provider Badge */}
                <div style={{
                  position: "absolute",
                  top: "25px",
                  left: "25px",
                  background: project.gradient,
                  color: "white",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  backdropFilter: "blur(10px)",
                  boxShadow: `0 10px 25px ${project.color}40`,
                  zIndex: 3,
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}>
                  {project.provider === "AWS" ? "☁️" : project.provider === "Google Cloud" ? "☁️" : "☁️"}
                  {project.provider}
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
                {/* Cloud Services & Features Side by Side */}
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "1fr 1fr", 
                  gap: "25px",
                  marginBottom: "30px",
                }}>
                  {/* Cloud Services */}
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
                      Cloud Services
                    </h3>
                    <div style={{ 
                      display: "grid", 
                      gridTemplateColumns: "repeat(2, 1fr)", 
                      gap: "12px",
                    }}>
                      {project.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="tech-chip"
                          style={{
                            padding: "12px 15px",
                            background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)`,
                            borderRadius: "12px",
                            border: `1px solid ${project.color}30`,
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            cursor: "default",
                            animationDelay: `${serviceIndex * 0.05}s`,
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
                            fontSize: "0.85rem",
                            textAlign: "center",
                            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                          }}>
                            {service}
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
                      Architecture Features
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
                              background: project.gradient,
                              borderRadius: "5px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.8rem",
                              color: "white",
                              flexShrink: 0,
                            }}>
                              ✓
                            </div>
                            {feature}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Performance Metrics */}
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
                    Performance Impact
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
                          color: metric.label.includes("Cost") || metric.label.includes("Savings") ? "#2ecc71" : project.color,
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

                {/* Provider Specific Info */}
                <div style={{
                  marginTop: "30px",
                  padding: "20px",
                  background: `linear-gradient(135deg, ${project.color}10 0%, transparent 100%)`,
                  borderRadius: "15px",
                  border: `1px solid ${project.color}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}>
                    <div style={{
                      width: "50px",
                      height: "50px",
                      background: project.gradient,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      color: "white",
                      boxShadow: `0 8px 20px ${project.color}40`,
                    }}>
                      {project.provider === "AWS" ? "☁️" : project.provider === "Google Cloud" ? "☁️" : "☁️"}
                    </div>
                    <div>
                      <div style={{ 
                        color: project.color, 
                        fontSize: "1rem",
                        fontWeight: "700",
                      }}>
                        {project.provider}
                      </div>
                      <div style={{ 
                        color: "#b0c4ff", 
                        fontSize: "0.85rem",
                      }}>
                        Certified Solutions Architect
                      </div>
                    </div>
                  </div>
                  
                  <button
                    style={{
                      background: project.gradient,
                      color: "white",
                      padding: "12px 25px",
                      borderRadius: "10px",
                      fontWeight: "700",
                      fontSize: "0.9rem",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      boxShadow: `0 10px 25px ${project.color}40`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(5px) scale(1.05)";
                      e.currentTarget.style.boxShadow = `0 15px 35px ${project.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0) scale(1)";
                      e.currentTarget.style.boxShadow = `0 10px 25px ${project.color}40`;
                    }}
                  >
                    View Architecture
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CLOUD INFRASTRUCTURE STATISTICS */}
        <div
          style={{
            marginTop: "80px",
            background: "linear-gradient(135deg, rgba(255, 153, 0, 0.2) 0%, rgba(66, 133, 244, 0.2) 100%)",
            borderRadius: "30px",
            padding: "50px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(255, 153, 0, 0.4)",
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
            Cloud Infrastructure Scale
          </h2>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
            gap: "25px",
            position: "relative",
            zIndex: 1,
          }}>
            {[
              { value: "100+", label: "Services Managed", color: "#FF9900", icon: "🛠️" },
              { value: "40%", label: "Avg Cost Saving", color: "#2ecc71", icon: "💰" },
              { value: "99.99%", label: "Uptime SLA", color: "#4285F4", icon: "⚡" },
              { value: "3", label: "Cloud Providers", color: "#0078D4", icon: "☁️" },
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
          background: "linear-gradient(135deg, #FF9900 0%, #4285F4 50%, #0078D4 100%)",
          backgroundSize: "200% 200%",
          color: "#ffffff",
          padding: "18px 35px",
          borderRadius: "50px",
          fontWeight: "800",
          textDecoration: "none",
          boxShadow: "0 25px 50px rgba(255, 153, 0, 0.6)",
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
          e.currentTarget.style.boxShadow = "0 35px 70px rgba(255, 153, 0, 0.8)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0) scale(1) rotate(0)";
          e.currentTarget.style.boxShadow = "0 25px 50px rgba(255, 153, 0, 0.6)";
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

export default CloudProjects;