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

      {/* Background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2) 0%, transparent 40%),
                     radial-gradient(circle at 80% 70%, rgba(192,192,192,0.15) 0%, transparent 50%)`,
        zIndex: 0
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
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
            margin: "0 auto",
            lineHeight: 1.7
          }}>
            Our structured program provides intensive training in Data Analytics and Business Analytics,
            followed by interview preparation and placement opportunities in top MNC companies.
          </p>
        </div>

        {/* Training Roadmap */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{
            fontSize: "2.8rem",
            textAlign: "center",
            marginBottom: "40px"
          }}>
            Training Roadmap
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
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.2)"
              }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                  {milestone.year}
                </h3>

                <h4 style={{ marginBottom: "10px", color: "#c0c0c0" }}>
                  {milestone.event}
                </h4>

                <p style={{ color: "#e0e0e0", lineHeight: 1.6 }}>
                  {milestone.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Highlights */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          padding: "50px",
          borderRadius: "30px",
          marginBottom: "80px",
          border: "1px solid rgba(255,255,255,0.2)"
        }}>

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
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}>

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

        {/* Contact Section */}
        <div style={{ textAlign: "center" }}>
          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "60px 40px",
            borderRadius: "50px",
            border: "1px solid rgba(255,255,255,0.2)"
          }}>

            <h2 style={{
              fontSize: "3rem",
              marginBottom: "20px"
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
              fontWeight: "600"
            }}>
              ← Back to Home
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}

export default TrainingPlacements;