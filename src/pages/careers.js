import { useState } from 'react';
import { Link } from 'react-router-dom';

function Careers() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    portfolio: ''
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹8-15 LPA",
      email: "careers@lohs.com",
      subject: "Application for Frontend Developer Position",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
      description: "Build beautiful, responsive web applications using modern frameworks with performance optimization."
    },
    {
      id: 2,
      title: "Backend Engineer",
      department: "Engineering",
      location: "Hybrid",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹12-20 LPA",
      email: "careers@lohs.com",
      subject: "Application for Backend Engineer Position",
      skills: ["Node.js", "Python", "PostgreSQL", "AWS", "Docker", "Microservices"],
      description: "Design and implement scalable backend systems, APIs, and microservices architecture."
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹6-12 LPA",
      email: "careers@lohs.com",
      subject: "Application for UX/UI Designer Position",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
      description: "Create intuitive and engaging user interfaces and experiences with user-centric design approach."
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Hybrid",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹10-18 LPA",
      email: "careers@lohs.com",
      subject: "Application for DevOps Engineer Position",
      skills: ["AWS", "Kubernetes", "Docker", "CI/CD", "Terraform", "Monitoring"],
      description: "Manage cloud infrastructure, implement CI/CD pipelines, and ensure system reliability."
    },
    {
      id: 5,
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹8-14 LPA",
      email: "careers@lohs.com",
      subject: "Application for Mobile App Developer Position",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      description: "Develop cross-platform mobile applications with native performance and smooth animations."
    },
    {
      id: 6,
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Hybrid",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹15-25 LPA",
      email: "careers@lohs.com",
      subject: "Application for Cloud Solutions Architect Position",
      skills: ["AWS", "Azure", "Google Cloud", "Terraform", "Security", "Architecture"],
      description: "Design and implement cloud infrastructure solutions and migration strategies for enterprise clients."
    }
  ];

  const benefits = [
    { icon: "💰", title: "Competitive Salary", description: "Above industry standards with regular appraisals" },
    { icon: "🏠", title: "Flexible Work", description: "Remote & hybrid options with flexible hours" },
    { icon: "📈", title: "Career Growth", description: "Clear promotion paths and skill development" },
    { icon: "🏥", title: "Health Insurance", description: "Comprehensive medical coverage for family" },
    { icon: "🎓", title: "Learning Budget", description: "₹50,000/year for courses & certifications" },
    { icon: "🎉", title: "Team Events", description: "Quarterly retreats and team building activities" }
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setApplicationForm({
      ...applicationForm,
      position: job.title
    });
    setShowApplicationForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm({
      ...applicationForm,
      [name]: value
    });
  };

  const generateEmailLink = () => {
    const { name, email, phone, position, experience, coverLetter, portfolio } = applicationForm;
    
    const body = `
Dear LOHS Hiring Team,

I am writing to apply for the ${position} position.

My details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Years of Experience: ${experience}

Cover Letter:
${coverLetter}

Portfolio/Resume Link: ${portfolio}

I look forward to hearing from you.

Best regards,
${name}
    `.trim();

    const subject = selectedJob ? selectedJob.subject : `Application for ${position}`;
    const toEmail = selectedJob ? selectedJob.email : "careers@lohs.com";

    return `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = generateEmailLink();
  };

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
        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(67, 97, 238, 0.1) 0%, transparent 50%)`,
        zIndex: 0,
      }} />
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #ffffff 0%, #b0c4ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "20px"
          }}>
            Join Our Team
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#b0c4ff",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            Work with talented people at the forefront of technology innovation.
            We're looking for passionate individuals to help build the future.
          </p>
        </div>

        {/* Benefits Section */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "2.5rem",
            color: "#ffffff",
            marginBottom: "50px"
          }}>
            Why Work With Us
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px"
          }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{
                backgroundColor: "rgba(16, 23, 48, 0.8)",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid rgba(67, 97, 238, 0.3)",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "#4361ee";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(67, 97, 238, 0.3)";
              }}>
                <div style={{
                  fontSize: "2.5rem",
                  marginBottom: "20px"
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{
                  fontSize: "1.5rem",
                  color: "#ffffff",
                  marginBottom: "10px"
                }}>{benefit.title}</h3>
                <p style={{
                  color: "#b0c4ff",
                  fontSize: "1rem"
                }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{
            fontSize: "2.5rem",
            color: "#ffffff",
            marginBottom: "40px",
            textAlign: "center"
          }}>
            Open Positions
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "30px"
          }}>
            {jobOpenings.map((job) => (
              <div key={job.id} style={{
                backgroundColor: "rgba(16, 23, 48, 0.8)",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid rgba(67, 97, 238, 0.3)",
                transition: "all 0.3s ease",
                cursor: "default",
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
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "20px"
                }}>
                  <div>
                    <div style={{
                      display: "inline-block",
                      backgroundColor: "rgba(67, 97, 238, 0.2)",
                      color: "#b0c4ff",
                      padding: "6px 15px",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      marginBottom: "10px"
                    }}>
                      {job.department}
                    </div>
                    <h3 style={{
                      fontSize: "1.5rem",
                      color: "#ffffff",
                      marginBottom: "10px"
                    }}>{job.title}</h3>
                  </div>
                  <div style={{
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    color: "#10b981",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    fontSize: "0.9rem",
                    fontWeight: "600"
                  }}>
                    {job.experience}
                  </div>
                </div>
                
                <div style={{
                  display: "flex",
                  gap: "15px",
                  marginBottom: "20px",
                  flexWrap: "wrap"
                }}>
                  <span style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#8892b0",
                    fontSize: "0.9rem"
                  }}>
                    📍 {job.location}
                  </span>
                  <span style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#8892b0",
                    fontSize: "0.9rem"
                  }}>
                    ⏱️ {job.type}
                  </span>
                  <span style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#10b981",
                    fontSize: "0.9rem",
                    fontWeight: "600"
                  }}>
                    💰 {job.salary}
                  </span>
                </div>
                
                <p style={{
                  color: "#b0c4ff",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                  fontSize: "0.95rem"
                }}>{job.description}</p>
                
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "25px"
                }}>
                  {job.skills.map((skill, index) => (
                    <span key={index} style={{
                      backgroundColor: "rgba(67, 97, 238, 0.2)",
                      color: "#b0c4ff",
                      padding: "5px 12px",
                      borderRadius: "15px",
                      fontSize: "0.85rem"
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => handleApplyClick(job)}
                  style={{
                    backgroundColor: "#4361ee",
                    color: "white",
                    border: "none",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    cursor: "pointer",
                    width: "100%",
                    transition: "all 0.3s ease",
                    fontSize: "1rem"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#3a0ca3";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#4361ee";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Email Application Section */}
        <div style={{
          backgroundColor: "rgba(67, 97, 238, 0.1)",
          padding: "40px",
          borderRadius: "20px",
          marginBottom: "60px",
          border: "1px solid rgba(67, 97, 238, 0.3)",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "2rem",
            color: "#ffffff",
            marginBottom: "15px"
          }}>
            📧 Direct Email Application
          </h2>
          <p style={{
            color: "#b0c4ff",
            marginBottom: "25px",
            fontSize: "1.1rem",
            maxWidth: "800px",
            margin: "0 auto 25px",
            lineHeight: 1.6
          }}>
            Send your resume directly to: <strong style={{ color: "#00d4ff" }}>careers@lohs.com</strong>
          </p>
          <p style={{
            color: "#b0c4ff",
            marginBottom: "30px",
            fontSize: "1rem"
          }}>
            Include: Resume, Cover Letter, Portfolio/GitHub links, and mention the position you're applying for
          </p>
          <a 
            href="mailto:careers@lohs.com?subject=Job Application&body=Dear LOHS Team,%0D%0A%0D%0AI am interested in applying for a position at LOHS. Please find my details below:%0D%0A%0D%0APosition: [Mention Position]%0D%0AExperience: [Your Experience]%0D%0AResume: [Attached/Google Drive Link]%0D%0APortfolio: [Your Portfolio Link]%0D%0A%0D%0AThank you,%0D%0A[Your Name]"
            style={{
              backgroundColor: "#10b981",
              color: "white",
              textDecoration: "none",
              padding: "15px 40px",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "1.1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0da271";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#10b981";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            📨 Quick Apply via Email
          </a>
        </div>

        {/* Application Process */}
        <div style={{
          backgroundColor: "rgba(16, 23, 48, 0.8)",
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
            Application Process
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px",
            textAlign: "center"
          }}>
            {[
              { step: "1", title: "Apply", description: "Submit via email or form", icon: "📧" },
              { step: "2", title: "Screening", description: "Resume review within 48hrs", icon: "📄" },
              { step: "3", title: "Interview", description: "Technical & culture fit rounds", icon: "💬" },
              { step: "4", title: "Offer", description: "Offer letter & onboarding", icon: "🎉" }
            ].map((item) => (
              <div key={item.step}>
                <div style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "#4361ee",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  margin: "0 auto 20px"
                }}>
                  {item.icon}
                </div>
                <h3 style={{ color: "#ffffff", marginBottom: "10px", fontSize: "1.3rem" }}>{item.title}</h3>
                <p style={{ color: "#b0c4ff", fontSize: "0.95rem" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div style={{ textAlign: "center" }}>
          <Link to="/" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            color: "#4361ee",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1.1rem",
            backgroundColor: "rgba(67, 97, 238, 0.1)",
            padding: "12px 24px",
            borderRadius: "8px",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(67, 97, 238, 0.2)";
            e.currentTarget.style.paddingLeft = "30px";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(67, 97, 238, 0.1)";
            e.currentTarget.style.paddingLeft = "24px";
          }}>
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "20px"
        }}>
          <div style={{
            backgroundColor: "rgba(16, 23, 48, 0.95)",
            borderRadius: "20px",
            padding: "40px",
            maxWidth: "600px",
            width: "100%",
            maxHeight: "90vh",
            overflowY: "auto",
            border: "1px solid rgba(67, 97, 238, 0.5)",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)"
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px"
            }}>
              <h2 style={{
                fontSize: "2rem",
                color: "#ffffff",
                margin: 0
              }}>
                Apply for {selectedJob?.title}
              </h2>
              <button
                onClick={() => setShowApplicationForm(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#b0c4ff",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  padding: "5px"
                }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  color: "#b0c4ff",
                  marginBottom: "8px",
                  fontWeight: "500"
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={applicationForm.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(67, 97, 238, 0.3)",
                    borderRadius: "8px",
                    color: "#ffffff",
                    fontSize: "1rem"
                  }}
                  placeholder="Enter your full name"
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  color: "#b0c4ff",
                  marginBottom: "8px",
                  fontWeight: "500"
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={applicationForm.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(67, 97, 238, 0.3)",
                    borderRadius: "8px",
                    color: "#ffffff",
                    fontSize: "1rem"
                  }}
                  placeholder="Enter your email address"
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  color: "#b0c4ff",
                  marginBottom: "8px",
                  fontWeight: "500"
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={applicationForm.phone}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(67, 97, 238, 0.3)",
                    borderRadius: "8px",
                    color: "#ffffff",
                    fontSize: "1rem"
                  }}
                  placeholder="Enter your phone number"
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  color: "#b0c4ff",
                  marginBottom: "8px",
                  fontWeight: "500"
                }}>
                  Years of Experience *
                </label>
                <input
                  type="text"
                  name="experience"
                  value={applicationForm.experience}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(67, 97, 238, 0.3)",
                    borderRadius: "8px",
                    color: "#ffffff",
                    fontSize: "1rem"
                  }}
                  placeholder="e.g., 3 years in web development"
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  color: "#b0c4ff",
                  marginBottom: "8px",
                  fontWeight: "500"
                }}>
                  Cover Letter *
                </label>
                <textarea
                  name="coverLetter"
                  value={applicationForm.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(67, 97, 238, 0.3)",
                    borderRadius: "8px",
                    color: "#ffffff",
                    fontSize: "1rem",
                    resize: "vertical"
                  }}
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>

              <div style={{ marginBottom: "30px" }}>
                <label style={{
                  display: "block",
                  color: "#b0c4ff",
                  marginBottom: "8px",
                  fontWeight: "500"
                }}>
                  Portfolio/Resume Link *
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={applicationForm.portfolio}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(67, 97, 238, 0.3)",
                    borderRadius: "8px",
                    color: "#ffffff",
                    fontSize: "1rem"
                  }}
                  placeholder="Link to your portfolio, GitHub, or resume"
                />
              </div>

              <div style={{
                display: "flex",
                gap: "15px",
                justifyContent: "flex-end"
              }}>
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  style={{
                    backgroundColor: "transparent",
                    color: "#b0c4ff",
                    border: "1px solid rgba(67, 97, 238, 0.3)",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#4361ee",
                    color: "white",
                    border: "none",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                  }}
                >
                  📧 Send Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Careers;