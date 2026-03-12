import { Link } from 'react-router-dom';

function TrainingPlacements() {

  const milestones = [
    { year: "Month 1", event: "Core Training", detail: "Learn Data Analytics fundamentals, SQL, Python, Excel, Power BI and data visualization concepts." },
    { year: "Month 2", event: "Advanced Training", detail: "Work on real-time projects focused on Data Analyst and Business Analyst industry requirements." },
    { year: "Month 3", event: "Mock Interviews", detail: "Technical mock interviews, HR interview rounds, resume preparation and communication training." },
    { year: "Placement", event: "Job Placement", detail: "Students will be placed in top MNC companies within 120–180 days." }
  ];

  const placements = [
    {
      title: "Guaranteed Placement Support",
      description: "Our placement team works continuously with students to ensure job opportunities within 120–180 days."
    },
    {
      title: "100+ Hiring Partners",   
      description: "We collaborate with more than 100 hiring partners including leading MNC companies."
    },
    {
      title: "MNC Companies",
      description: "Students are prepared specifically for opportunities in multinational companies across various industries."
    },
    {
      title: "Job Roles",
      description: "Students are placed in roles such as Data Analyst and Business Analyst based on their skills and performance."
    },
    {
      title: "Mock Interviews",
      description: "Multiple mock interviews are conducted to prepare students for real technical interview environments."
    },
    {
      title: "HR Interview Preparation",
      description: "Special training sessions are provided to prepare students for HR rounds and communication skills."
    }
  ];

  return (
    <div style={{
      padding: "100px 20px 80px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: "linear-gradient(145deg, #0a1f44 0%, #0b2b5c 100%)",
      color: "#ffffff",
      minHeight: "100vh",
      position: "relative",
      overflowX: "hidden"
    }}>

      {/* Animated Circle Background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        zIndex: 0
      }}>
        {/* Floating Circles */}
        <div style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)",
          top: "10%",
          left: "-100px",
          animation: "floatCircle 15s ease-in-out infinite"
        }}></div>
        
        <div style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          bottom: "20%",
          right: "-150px",
          animation: "floatCircle 18s ease-in-out infinite reverse"
        }}></div>
        
        <div style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "20%",
          animation: "pulseCircle 4s ease-in-out infinite"
        }}></div>
        
        <div style={{
          position: "absolute",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          bottom: "30%",
          left: "30%",
          animation: "rotateCircle 12s linear infinite"
        }}></div>
        
        <div style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          border: "2px dashed rgba(255,215,0,0.1)",
          top: "15%",
          right: "10%",
          animation: "rotateCircle 20s linear infinite"
        }}></div>
        
        <div style={{
          position: "absolute",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.05)",
          bottom: "10%",
          right: "20%",
          animation: "pulseCircle 5s ease-in-out infinite"
        }}></div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Page Header with Circle Animated Badge */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "80px",
          flexWrap: "wrap",
          gap: "30px"
        }}>
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h1 style={{
              fontSize: "4rem",
              fontWeight: "800",
              background: "linear-gradient(135deg, #ffffff 0%, #c0c0c0 50%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "20px"
            }}>
              Training & Placements
            </h1>

            <p style={{
              fontSize: "1.3rem",
              color: "#d1d5db",
              maxWidth: "700px",
              lineHeight: 1.7
            }}>
              Our structured program provides intensive training in Data Analytics and Business Analytics,
              followed by interview preparation and placement opportunities in top MNC companies.
            </p>
          </div>

          {/* Circle Shaped Animated Badge */}
          <div style={{
            background: "linear-gradient(135deg, #FFD700, #FFA500)",
            padding: "25px",
            borderRadius: "50%",
            boxShadow: "0 20px 40px rgba(255,215,0,0.4), 0 0 0 8px rgba(255,255,255,0.2)",
            animation: "pulse 2s ease-in-out infinite, rotate 10s linear infinite",
            textAlign: "center",
            minWidth: "240px",
            minHeight: "240px",
            border: "4px solid white",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {/* Rotating Circle Border */}
            <div style={{
              position: "absolute",
              top: "-10px",
              left: "-10px",
              right: "-10px",
              bottom: "-10px",
              borderRadius: "50%",
              border: "2px dashed white",
              animation: "rotate 15s linear infinite"
            }}></div>
            
            {/* Inner Rotating Circles */}
            <div style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              right: "10px",
              bottom: "10px",
              borderRadius: "50%",
              border: "1px dotted rgba(255,255,255,0.5)",
              animation: "rotate 12s linear infinite reverse"
            }}></div>

            {/* Emoji eyes with bounce animation */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              marginBottom: "10px",
              animation: "bounce 2s ease-in-out infinite"
            }}>
              <span style={{ fontSize: "2.5rem", animation: "spin 4s linear infinite" }}>😎</span>
              <span style={{ fontSize: "2.5rem", animation: "spin 4s linear infinite reverse" }}>💼</span>
            </div>
            
            <div style={{
              fontSize: "2.8rem",
              fontWeight: "900",
              color: "#0a1f44",
              lineHeight: 1.2,
              textShadow: "2px 2px 0 rgba(255,255,255,0.5)",
              animation: "glow 2s ease-in-out infinite"
            }}>
              100%
            </div>
            
            <div style={{
              fontSize: "1.3rem",
              fontWeight: "800",
              color: "#0a1f44",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "5px"
            }}>
              PLACEMENT
            </div>
            
            <div style={{
              fontSize: "1.3rem",
              fontWeight: "900",
              color: "#0a1f44",
              background: "rgba(255,255,255,0.3)",
              padding: "5px 15px",
              borderRadius: "30px",
              display: "inline-block",
              animation: "pulse 1.5s ease-in-out infinite"
            }}>
              GUARANTEE! 🚀
            </div>

            {/* Animated sparkles */}
            <div style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              fontSize: "2rem",
              animation: "spin 3s linear infinite"
            }}>
              ✨
            </div>
            <div style={{
              position: "absolute",
              bottom: "20px",
              left: "15px",
              fontSize: "2rem",
              animation: "spin 4s linear infinite reverse"
            }}>
              💫
            </div>
            <div style={{
              position: "absolute",
              top: "40px",
              left: "15px",
              fontSize: "1.5rem",
              animation: "float 2.5s ease-in-out infinite"
            }}>
              ⭐
            </div>
            <div style={{
              position: "absolute",
              bottom: "40px",
              right: "15px",
              fontSize: "1.5rem",
              animation: "float 3s ease-in-out infinite reverse"
            }}>
              🌟
            </div>
          </div>
        </div>

        {/* Training Roadmap with Circle Cards */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{
            fontSize: "2.8rem",
            textAlign: "center",
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px"
          }}>
            <span style={{ animation: "spin 5s linear infinite", display: "inline-block" }}>⚡</span> 
            Training Roadmap 
            <span style={{ animation: "spin 5s linear infinite reverse", display: "inline-block" }}>⚡</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}>
            {milestones.map((milestone, index) => (
              <div key={index} style={{
                background: "rgba(255,255,255,0.08)",
                padding: "30px",
                borderRadius: "50% 50% 30% 30%",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
                animation: `float${index+1} 3s ease-in-out infinite`,
                textAlign: "center",
                ':hover': {
                  transform: "scale(1.05)",
                  borderColor: "#FFD700",
                  boxShadow: "0 20px 30px rgba(255,215,0,0.2)"
                }
              }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "#FFD700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  color: "#0a1f44",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  animation: "pulse 2s ease-in-out infinite"
                }}>
                  {index + 1}
                </div>

                <h3 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#FFD700" }}>
                  {milestone.year}
                </h3>

                <h4 style={{ marginBottom: "10px", color: "#c0c0c0", fontSize: "1.2rem" }}>
                  {milestone.event}
                </h4>

                <p style={{ color: "#e0e0e0", lineHeight: 1.6 }}>
                  {milestone.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Highlights with Circle Elements */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          padding: "50px",
          borderRadius: "30px",
          marginBottom: "80px",
          border: "1px solid rgba(255,255,255,0.2)",
          position: "relative",
          overflow: "hidden"
        }}>
          
          {/* Animated circle decorations */}
          <div style={{
            position: "absolute",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)",
            top: "-50px",
            left: "-50px",
            animation: "floatCircle 10s ease-in-out infinite"
          }}></div>
          
          <div style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
            bottom: "-80px",
            right: "-80px",
            animation: "floatCircle 12s ease-in-out infinite reverse"
          }}></div>

          {/* Small floating circle badge */}
          <div style={{
            position: "absolute",
            top: "-20px",
            right: "30px",
            background: "#FFD700",
            padding: "10px 20px",
            borderRadius: "40px",
            transform: "rotate(2deg)",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            border: "2px solid white",
            animation: "bounce 2s ease-in-out infinite",
            zIndex: 2
          }}>
            <span style={{ color: "#0a1f44", fontWeight: "700", fontSize: "1.1rem" }}>
              🎯 We Mean It!
            </span>
          </div>

          <h2 style={{
            fontSize: "2.8rem",
            textAlign: "center",
            marginBottom: "40px"
          }}>
            Placement Highlights
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px"
          }}>

            {placements.map((item, index) => (
              <div key={index} style={{
                background: "#ffffff",
                color: "#0a1f44",
                padding: "30px",
                borderRadius: "30px 30px 30px 5px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
                animation: `float${index+1} 3s ease-in-out infinite`,
                ':hover': {
                  transform: "scale(1.02)",
                  boxShadow: "0 20px 40px rgba(255,215,0,0.3)"
                }
              }}>

                <div style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "#FFD700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "15px",
                  color: "#0a1f44",
                  fontSize: "1.5rem",
                  animation: "pulse 2s ease-in-out infinite"
                }}>
                  {index === 0 ? "🎯" : index === 1 ? "🤝" : index === 2 ? "🌐" : index === 3 ? "📋" : index === 4 ? "🎤" : "💬"}
                </div>

                <h3 style={{
                  fontSize: "1.6rem",
                  marginBottom: "15px",
                  fontWeight: "700"
                }}>
                  {item.title}
                </h3>

                <p style={{
                  lineHeight: 1.6
                }}>
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* Contact Section with Circle Animations */}
        <div style={{ textAlign: "center" }}>
          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "60px 40px",
            borderRadius: "50px",
            border: "1px solid rgba(255,255,255,0.2)",
            position: "relative",
            overflow: "hidden"
          }}>

            {/* Animated circle background */}
            <div style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)",
              top: "-100px",
              right: "-100px",
              animation: "rotateCircle 20s linear infinite"
            }}></div>
            
            <div style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
              bottom: "-50px",
              left: "-50px",
              animation: "floatCircle 15s ease-in-out infinite"
            }}></div>

            {/* Animated circle badge */}
            <div style={{
              position: "absolute",
              bottom: "-15px",
              left: "30px",
              background: "linear-gradient(135deg, #FF69B4, #FF1493)",
              padding: "10px 25px",
              borderRadius: "40px",
              transform: "rotate(-3deg)",
              border: "2px solid white",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              animation: "bounce 2s ease-in-out infinite, rotate 5s linear infinite",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <span style={{ fontSize: "1.3rem", animation: "spin 3s linear infinite" }}>🚀</span>
              <span style={{ color: "white", fontWeight: "700" }}>
                Placement guarantee!
              </span>
              <span style={{ fontSize: "1.3rem", animation: "spin 3s linear infinite reverse" }}>🚀</span>
            </div>

            <h2 style={{
              fontSize: "3rem",
              marginBottom: "20px",
              animation: "glow 2s ease-in-out infinite"
            }}>
              Start Your Career Journey
            </h2>

            <p style={{
              color: "#e0e0e0",
              marginBottom: "40px",
              fontSize: "1.2rem"
            }}>
              Build your career in Data Analytics and Business Analytics with structured training and strong placement support.
            </p>

            <Link to="/" style={{
              background: "transparent",
              color: "#ffffff",
              textDecoration: "none",
              padding: "16px 40px",
              borderRadius: "50px",
              border: "2px solid #ffffff",
              fontSize: "1.1rem",
              fontWeight: "600",
              display: "inline-block",
              transition: "all 0.3s ease",
              animation: "pulse 2s ease-in-out infinite",
              ':hover': {
                background: "#ffffff",
                color: "#0a1f44",
                transform: "scale(1.05)"
              }
            }}>
              ← Back to Home
            </Link>

          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(5deg); }
          25% { transform: rotate(8deg) scale(1.05); }
          75% { transform: rotate(2deg) scale(0.98); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        
        @keyframes float4 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(255,215,0,0.5); }
          50% { text-shadow: 0 0 30px rgba(255,215,0,0.8); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(-3deg); }
        }
        
        @keyframes floatCircle {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -30px); }
          50% { transform: translate(50px, 20px); }
          75% { transform: translate(-20px, 40px); }
        }
        
        @keyframes rotateCircle {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulseCircle {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}

export default TrainingPlacements;