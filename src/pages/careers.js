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

  // Updated job openings - including AI/ML/DS/GenAI roles, no experience badge
  const jobOpenings = [
    {
      id: 1,
      title: "Generative AI Engineer",
      department: "AI Research",
      location: "Remote",
      type: "Full-time",
      email: "lohssoftwaresolutions@gmail.com",
      subject: "Application for Generative AI Engineer Position",
      skills: ["Python", "PyTorch/TensorFlow", "LangChain", "LLMs", "RAG"],
      description: "Develop cutting-edge generative AI applications and integrate large language models into production systems."
    },
    {
      id: 2,
      title: "Data Scientist",
      department: "Data Science",
      location: "Hybrid",
      type: "Full-time",
      email: "lohssoftwaresolutions@gmail.com",
      subject: "Application for Data Scientist Position",
      skills: ["Python", "Machine Learning", "SQL", "Statistics", "Tableau"],
      description: "Analyze complex datasets, build predictive models, and drive data-informed decisions."
    },
    {
      id: 3,
      title: "Machine Learning Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      email: "lohssoftwaresolutions@gmail.com",
      subject: "Application for Machine Learning Engineer Position",
      skills: ["Python", "MLOps", "Docker", "Scikit-learn", "AWS SageMaker"],
      description: "Design and deploy scalable machine learning pipelines and models."
    },
    {
      id: 4,
      title: "AI/ML Engineer",
      department: "AI Solutions",
      location: "Hybrid",
      type: "Full-time",
      email: "lohssoftwaresolutions@gmail.com",
      subject: "Application for AI/ML Engineer Position",
      skills: ["Python", "Deep Learning", "NLP", "Computer Vision", "GCP"],
      description: "Build end-to-end AI solutions, from data preprocessing to model deployment."
    },
    {
      id: 5,
      title: "React Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      email: "lohssoftwaresolutions@gmail.com",
      subject: "Application for React Developer Position",
      skills: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS"],
      description: "Build modern, performant web applications using React and related technologies."
    },
    {
      id: 6,
      title: "Flutter Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      email: "lohssoftwaresolutions@gmail.com",
      subject: "Application for Flutter Developer Position",
      skills: ["Flutter", "Dart", "Mobile UI", "Firebase", "REST APIs"],
      description: "Develop cross-platform mobile applications with Flutter for iOS and Android."
    },
    {
      id: 7,
      title: "Python Developer",
      department: "Engineering",
      location: "Hybrid",
      type: "Full-time",
      email: "lohssoftwaresolutions@gmail.com",
      subject: "Application for Python Developer Position",
      skills: ["Python", "Django/Flask", "PostgreSQL", "REST APIs", "AWS"],
      description: "Build scalable backend services and APIs using Python and modern frameworks."
    },
    {
      id: 8,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Hybrid",
      type: "Full-time",
      email: "lohssoftwaresolutions@gmail.com",
      subject: "Application for DevOps Engineer Position",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      description: "Manage cloud infrastructure, automate deployments, and ensure system reliability."
    },
    {
      id: 9,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      email: "lohssoftwaresolutions@gmail.com",
      subject: "Application for UI/UX Designer Position",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
      description: "Create intuitive and engaging user interfaces with a focus on user experience."
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
    const toEmail = selectedJob ? selectedJob.email : "lohssoftwaresolutions@gmail.com";

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
      background: "linear-gradient(145deg, #0a1f44 0%, #0b2b5c 100%)",
      color: "#ffffff",
      minHeight: "100vh",
      position: "relative",
      overflowX: "hidden"
    }}>
      {/* Background Pattern */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(255,255,255,0.08) 0%, transparent 30%),
          radial-gradient(circle at 90% 80%, rgba(192,192,192,0.06) 0%, transparent 30%),
          repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 8px)
        `,
        zIndex: 0,
      }} />
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h1 style={{
            fontSize: "3.8rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #ffffff 0%, #c0c0c0 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
            textShadow: "0 4px 30px rgba(255,255,255,0.2)"
          }}>
            Join Our Team
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#d1d5db",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
            background: "rgba(255,255,255,0.05)",
            padding: "20px 30px",
            borderRadius: "60px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)"
          }}>
            Work with talented people at the forefront of technology innovation.
            We're looking for passionate individuals to help build the future.
          </p>
        </div>

        {/* Benefits Section */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "2.8rem",
            color: "#ffffff",
            marginBottom: "50px",
            textShadow: "0 2px 10px rgba(0,0,0,0.3)"
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
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "30px",
                borderRadius: "20px",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "#ffffff";
                e.currentTarget.style.boxShadow = "0 20px 30px -10px rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.boxShadow = "none";
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
                  color: "#e0e0e0",
                  fontSize: "1rem"
                }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{
            fontSize: "2.8rem",
            color: "#ffffff",
            marginBottom: "40px",
            textAlign: "center",
            textShadow: "0 2px 10px rgba(0,0,0,0.3)"
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
                background: "#ffffff",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid #e0e0e0",
                boxShadow: "0 15px 30px -10px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.borderColor = "#0a1f44";
                e.currentTarget.style.boxShadow = "0 25px 40px -10px #0a1f44";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#e0e0e0";
                e.currentTarget.style.boxShadow = "0 15px 30px -10px rgba(0,0,0,0.3)";
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
                      backgroundColor: "rgba(10,31,68,0.1)",
                      color: "#0a1f44",
                      padding: "6px 15px",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      marginBottom: "10px"
                    }}>
                      {job.department}
                    </div>
                    <h3 style={{
                      fontSize: "1.6rem",
                      color: "#0a1f44",
                      marginBottom: "10px"
                    }}>{job.title}</h3>
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
                    color: "#2c3e50",
                    fontSize: "0.9rem"
                  }}>
                    📍 {job.location}
                  </span>
                  <span style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#2c3e50",
                    fontSize: "0.9rem"
                  }}>
                    ⏱️ {job.type}
                  </span>
                </div>
                
                <p style={{
                  color: "#2c3e50",
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
                      backgroundColor: "rgba(10,31,68,0.1)",
                      color: "#0a1f44",
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
                    background: "linear-gradient(135deg, #0a1f44, #1e3a8a)",
                    color: "white",
                    border: "none",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    cursor: "pointer",
                    width: "100%",
                    transition: "all 0.3s ease",
                    fontSize: "1rem",
                    boxShadow: "0 8px 15px -5px #0a1f44"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 15px 25px -5px #0a1f44";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 8px 15px -5px #0a1f44";
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
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)",
          padding: "40px",
          borderRadius: "20px",
          marginBottom: "60px",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "2.5rem",
            color: "#ffffff",
            marginBottom: "15px",
            textShadow: "0 2px 5px rgba(0,0,0,0.3)"
          }}>
            📧 Direct Email Application
          </h2>
          <p style={{
            color: "#e0e0e0",
            marginBottom: "25px",
            fontSize: "1.1rem",
            maxWidth: "800px",
            margin: "0 auto 25px",
            lineHeight: 1.6
          }}>
            Send your resume directly to: <strong style={{ color: "#ffffff" }}>lohssoftwaresolutions@gmail.com</strong>
          </p>
          <p style={{
            color: "#e0e0e0",
            marginBottom: "30px",
            fontSize: "1rem"
          }}>
            Include: Resume, Cover Letter, Portfolio/GitHub links, and mention the position you're applying for
          </p>
          <a 
            href="mailto:lohssoftwaresolutions@gmail.com?subject=Job Application&body=Dear LOHS Team,%0D%0A%0D%0AI am interested in applying for a position at LOHS. Please find my details below:%0D%0A%0D%0APosition: [Mention Position]%0D%0AExperience: [Your Experience]%0D%0AResume: [Attached/Google Drive Link]%0D%0APortfolio: [Your Portfolio Link]%0D%0A%0D%0AThank you,%0D%0A[Your Name]"
            style={{
              background: "linear-gradient(135deg, #ffffff, #e0e0e0)",
              color: "#0a1f44",
              textDecoration: "none",
              padding: "15px 40px",
              borderRadius: "50px",
              fontWeight: "700",
              fontSize: "1.1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 20px -5px rgba(0,0,0,0.3)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 15px 30px -5px #0a1f44";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 20px -5px rgba(0,0,0,0.3)";
            }}
          >
            📨 Quick Apply via Email
          </a>
        </div>

        {/* Application Process */}
        <div style={{
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.2)",
          padding: "40px",
          borderRadius: "20px",
          marginBottom: "60px"
        }}>
          <h2 style={{
            fontSize: "2.5rem",
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
                  background: "linear-gradient(135deg, #ffffff, #e0e0e0)",
                  color: "#0a1f44",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  margin: "0 auto 20px",
                  boxShadow: "0 10px 20px -5px #000000"
                }}>
                  {item.icon}
                </div>
                <h3 style={{ color: "#ffffff", marginBottom: "10px", fontSize: "1.3rem" }}>{item.title}</h3>
                <p style={{ color: "#e0e0e0", fontSize: "0.95rem" }}>{item.description}</p>
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
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1.1rem",
            background: "rgba(255,255,255,0.1)",
            padding: "12px 24px",
            borderRadius: "50px",
            transition: "all 0.3s ease",
            border: "1px solid rgba(255,255,255,0.3)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
            e.currentTarget.style.paddingLeft = "30px";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
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
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(5px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "20px"
        }}>
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "40px",
            maxWidth: "600px",
            width: "100%",
            maxHeight: "90vh",
            overflowY: "auto",
            border: "1px solid #e0e0e0",
            boxShadow: "0 25px 50px -12px #000000"
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px"
            }}>
              <h2 style={{
                fontSize: "2rem",
                color: "#0a1f44",
                margin: 0
              }}>
                Apply for {selectedJob?.title}
              </h2>
              <button
                onClick={() => setShowApplicationForm(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#2c3e50",
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
                  color: "#0a1f44",
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
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    color: "#0a1f44",
                    fontSize: "1rem"
                  }}
                  placeholder="Enter your full name"
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  color: "#0a1f44",
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
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    color: "#0a1f44",
                    fontSize: "1rem"
                  }}
                  placeholder="Enter your email address"
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  color: "#0a1f44",
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
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    color: "#0a1f44",
                    fontSize: "1rem"
                  }}
                  placeholder="Enter your phone number"
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  color: "#0a1f44",
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
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    color: "#0a1f44",
                    fontSize: "1rem"
                  }}
                  placeholder="e.g., 3 years in web development"
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block",
                  color: "#0a1f44",
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
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    color: "#0a1f44",
                    fontSize: "1rem",
                    resize: "vertical"
                  }}
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>

              <div style={{ marginBottom: "30px" }}>
                <label style={{
                  display: "block",
                  color: "#0a1f44",
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
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    color: "#0a1f44",
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
                    color: "#2c3e50",
                    border: "1px solid #e0e0e0",
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
                    background: "linear-gradient(135deg, #0a1f44, #1e3a8a)",
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