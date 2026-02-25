import { Link } from 'react-router-dom';

function Investors() {
  const financials = [
    { label: "Annual Revenue", value: "$15M+", change: "+25%" },
    { label: "Profit Margin", value: "32%", change: "+5%" },
    { label: "Customer Growth", value: "150%", change: "+40%" },
    { label: "Market Share", value: "18%", change: "+7%" }
  ];

  const milestones = [
    { year: "2021", event: "Company Founded", detail: "Started with 5 team members" },
    { year: "2022", event: "Series A Funding", detail: "Raised $5M from top VCs" },
    { year: "2023", event: "Market Expansion", detail: "Expanded to 3 new countries" },
    { year: "2024", event: "Profitability", detail: "Achieved positive cash flow" }
  ];

  return (
    <div style={{
      padding: "100px 20px 80px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      backgroundColor: "#0a1f44",
      color: "#ffffff",
      minHeight: "100vh",
      position: "relative",
    }}>
      {/* Background Pattern */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
        zIndex: 0,
      }} />
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #ffffff 0%, #10b981 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px"
          }}>
            Investor Relations
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#b0c4ff",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            Building sustainable value through innovation, growth, and strong financial performance.
            Join us in shaping the future of technology.
          </p>
        </div>

        {/* Financial Highlights */}
        <div style={{
          backgroundColor: "rgba(16, 23, 48, 0.8)",
          padding: "40px",
          borderRadius: "20px",
          border: "1px solid rgba(16, 185, 129, 0.3)",
          marginBottom: "60px"
        }}>
          <h2 style={{
            fontSize: "2.5rem",
            color: "#ffffff",
            marginBottom: "40px",
            textAlign: "center"
          }}>
            Financial Highlights
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}>
            {financials.map((item, index) => (
              <div key={index} style={{
                textAlign: "center",
                padding: "30px",
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                borderRadius: "15px",
                border: "1px solid rgba(16, 185, 129, 0.2)"
              }}>
                <div style={{
                  fontSize: "0.9rem",
                  color: "#b0c4ff",
                  marginBottom: "10px"
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontSize: "2.5rem",
                  fontWeight: "800",
                  color: "#10b981",
                  marginBottom: "5px"
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontSize: "1rem",
                  color: "#10b981",
                  fontWeight: "600"
                }}>
                  {item.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Milestones */}
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{
            fontSize: "2.5rem",
            color: "#ffffff",
            marginBottom: "40px",
            textAlign: "center"
          }}>
            Company Milestones
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}>
            {milestones.map((milestone, index) => (
              <div key={index} style={{
                backgroundColor: "rgba(16, 23, 48, 0.8)",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid rgba(67, 97, 238, 0.3)",
                position: "relative",
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.borderColor = "#4361ee";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(67, 97, 238, 0.3)";
              }}>
                <div style={{
                  position: "absolute",
                  top: "-15px",
                  left: "30px",
                  backgroundColor: "#4361ee",
                  color: "white",
                  padding: "8px 20px",
                  borderRadius: "20px",
                  fontSize: "1.5rem",
                  fontWeight: "700"
                }}>
                  {milestone.year}
                </div>
                <h3 style={{
                  fontSize: "1.5rem",
                  color: "#ffffff",
                  marginTop: "20px",
                  marginBottom: "15px"
                }}>{milestone.event}</h3>
                <p style={{
                  color: "#b0c4ff",
                  lineHeight: 1.6
                }}>{milestone.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Opportunities */}
        <div style={{
          backgroundColor: "rgba(67, 97, 238, 0.1)",
          padding: "40px",
          borderRadius: "20px",
          marginBottom: "60px",
          border: "1px solid rgba(67, 97, 238, 0.3)"
        }}>
          <h2 style={{
            fontSize: "2rem",
            color: "#ffffff",
            marginBottom: "30px",
            textAlign: "center"
          }}>
            Investment Opportunities
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px"
          }}>
            {[
              {
                title: "Series B Funding",
                amount: "$10M",
                valuation: "$100M",
                description: "Scaling operations and expanding to new markets"
              },
              {
                title: "Strategic Partnerships",
                amount: "Open",
                valuation: "Varies",
                description: "Collaborate with industry leaders"
              },
              {
                title: "M&A Opportunities",
                amount: "Flexible",
                valuation: "Negotiable",
                description: "Acquiring innovative startups"
              }
            ].map((opportunity, index) => (
              <div key={index} style={{
                backgroundColor: "rgba(16, 23, 48, 0.8)",
                padding: "30px",
                borderRadius: "15px",
                textAlign: "center"
              }}>
                <h3 style={{
                  fontSize: "1.5rem",
                  color: "#ffffff",
                  marginBottom: "20px"
                }}>{opportunity.title}</h3>
                <div style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginBottom: "20px"
                }}>
                  <div>
                    <div style={{ color: "#b0c4ff", fontSize: "0.9rem" }}>Amount</div>
                    <div style={{ color: "#10b981", fontSize: "1.8rem", fontWeight: "700" }}>
                      {opportunity.amount}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "#b0c4ff", fontSize: "0.9rem" }}>Valuation</div>
                    <div style={{ color: "#4361ee", fontSize: "1.8rem", fontWeight: "700" }}>
                      {opportunity.valuation}
                    </div>
                  </div>
                </div>
                <p style={{
                  color: "#b0c4ff",
                  lineHeight: 1.6
                }}>{opportunity.description}</p>
                <button style={{
                  marginTop: "20px",
                  backgroundColor: "#4361ee",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  cursor: "pointer",
                  width: "100%",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#3a0ca3";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#4361ee";
                }}>
                  Express Interest
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Investor Relations */}
        <div style={{ textAlign: "center" }}>
          <div style={{
            backgroundColor: "rgba(16, 23, 48, 0.8)",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid rgba(67, 97, 238, 0.3)"
          }}>
            <h2 style={{
              fontSize: "2rem",
              color: "#ffffff",
              marginBottom: "20px"
            }}>
              Investor Relations Contact
            </h2>
            <p style={{
              color: "#b0c4ff",
              marginBottom: "30px",
              fontSize: "1.1rem"
            }}>
              For investor inquiries, financial reports, and partnership opportunities
            </p>
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap"
            }}>
              <Link to="/contact" style={{
                backgroundColor: "#4361ee",
                color: "white",
                textDecoration: "none",
                padding: "15px 30px",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "1rem",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#3a0ca3";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#4361ee";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
                Contact Investor Relations
              </Link>
              <Link to="/" style={{
                backgroundColor: "transparent",
                color: "#4361ee",
                textDecoration: "none",
                padding: "15px 30px",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "1rem",
                border: "2px solid #4361ee",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(67, 97, 238, 0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investors;