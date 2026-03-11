import React from 'react';
import { Link } from 'react-router-dom';
import { FiBarChart2, FiDatabase, FiCpu, FiCode, FiServer, FiActivity, FiTrendingUp, FiBook, FiArrowRight } from 'react-icons/fi';

function Courses() {
  const courses = [
    {
      title: 'Power BI + SQL + DAX',
      description: 'Master business intelligence with Power BI, SQL queries, and DAX formulas for advanced data modeling.',
      icon: <FiBarChart2 size={32} />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      modules: ['Power BI Desktop', 'SQL Fundamentals', 'DAX Functions', 'Data Modeling', 'Dashboard Creation']
    },
    {
      title: 'Tableau + SQL',
      description: 'Learn data visualization with Tableau and combine with SQL for comprehensive data analysis.',
      icon: <FiActivity size={32} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      duration: '3 Months',
      level: 'Intermediate',
      modules: ['Tableau Desktop', 'SQL Queries', 'Data Blending', 'Calculations', 'Storytelling']
    },
    {
      title: 'Data Science with R',
      description: 'Comprehensive data science program using R programming for statistical analysis and visualization.',
      icon: <FiCpu size={32} />,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      duration: '6 Months',
      level: 'Intermediate',
      modules: ['R Programming', 'Statistics', 'Machine Learning', 'Data Visualization', 'Reporting']
    },
    {
      title: 'Data Science with Python',
      description: 'Complete data science curriculum using Python, pandas, scikit-learn, and deep learning frameworks.',
      icon: <FiCode size={32} />,
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Alternative clear image
      duration: '6 Months',
      level: 'Beginner to Advanced',
      modules: ['Python Basics', 'NumPy/Pandas', 'Machine Learning', 'Deep Learning', 'NLP']
    },
    {
      title: 'Big Data (Hadoop)',
      description: 'Master big data technologies including Hadoop ecosystem, HDFS, MapReduce, and Spark.',
      icon: <FiServer size={32} />,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80',
      duration: '6 Months',
      level: 'Advanced',
      modules: ['Hadoop', 'HDFS', 'MapReduce', 'Hive', 'Pig', 'Spark']
    },
    {
      title: 'Clinical SAS Programming',
      description: 'Specialized SAS programming for clinical trials and pharmaceutical research applications.',
      icon: <FiDatabase size={32} />,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      duration: '6 Months',
      level: 'Intermediate',
      modules: ['SAS Basics', 'Clinical Trials', 'CDISC Standards', 'SDTM', 'ADaM']
    },
    {
      title: 'SAS Programming',
      description: 'Comprehensive SAS programming for data analysis, reporting, and business intelligence.',
      icon: <FiDatabase size={32} />,
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      modules: ['Base SAS', 'Macros', 'SQL in SAS', 'Statistical Procedures', 'Reporting']
    },
    {
      title: 'Credit Risk Modeling',
      description: 'Advanced modeling techniques for credit risk assessment in banking and financial services.',
      icon: <FiTrendingUp size={32} />,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      duration: '6 Months',
      level: 'Advanced',
      modules: ['Risk Analytics', 'PD Models', 'LGD/EAD', 'Scorecards', 'Regulatory Compliance']
    },
    {
      title: 'SAP',
      description: 'Enterprise resource planning with SAP modules including FICO, MM, SD, and ABAP programming.',
      icon: <FiBook size={32} />,
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      modules: ['SAP Overview', 'FICO', 'MM', 'SD', 'ABAP Basics']
    }
  ];

  return (
    <div style={containerStyle}>
      {/* Hero Section with Background Image */}
      <section style={heroStyle}>
        <div style={heroOverlayStyle}></div>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>Our Courses</h1>
          <p style={heroSubtitleStyle}>Industry-focused training programs</p>
          <p style={heroDescriptionStyle}>
            Choose from our comprehensive range of courses designed to make you job-ready 
            with hands-on projects and expert mentorship.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section style={coursesSectionStyle}>
        <div style={coursesGridStyle}>
          {courses.map((course, index) => (
            <div key={index} style={courseCardStyle}>
              <div style={courseImageContainerStyle}>
                <img src={course.image} alt={course.title} style={courseImageStyle} />
                <div style={courseIconOverlayStyle}>
                  {course.icon}
                </div>
              </div>
              <div style={courseContentStyle}>
                <h3 style={courseTitleStyle}>{course.title}</h3>
                <p style={courseDescriptionStyle}>{course.description}</p>
                
                <div style={courseMetaStyle}>
                  <div style={metaItemStyle}>
                    <span style={metaLabelStyle}>Duration:</span>
                    <span style={metaValueStyle}>{course.duration}</span>
                  </div>
                  <div style={metaItemStyle}>
                    <span style={metaLabelStyle}>Level:</span>
                    <span style={metaValueStyle}>{course.level}</span>
                  </div>
                </div>

                <div style={modulesStyle}>
                  <h4 style={modulesTitleStyle}>Key Modules:</h4>
                  <ul style={modulesListStyle}>
                    {course.modules.slice(0, 3).map((module, idx) => (
                      <li key={idx} style={moduleItemStyle}>• {module}</li>
                    ))}
                    {course.modules.length > 3 && (
                      <li style={moduleItemStyle}>• +{course.modules.length - 3} more</li>
                    )}
                  </ul>
                </div>

                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button style={enrollButtonStyle}>
                    Enroll Now <FiArrowRight style={{ marginLeft: '8px' }} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={whyUsStyle}>
        <h2 style={whyUsTitleStyle}>Why Choose Our Courses?</h2>
        <div style={whyUsGridStyle}>
          <div style={whyUsCardStyle}>
            <div style={whyUsIconStyle}>🎯</div>
            <h3 style={whyUsCardTitleStyle}>Industry Relevant</h3>
            <p style={whyUsCardDescStyle}>Curriculum designed with input from industry experts</p>
          </div>
          <div style={whyUsCardStyle}>
            <div style={whyUsIconStyle}>💼</div>
            <h3 style={whyUsCardTitleStyle}>Placement Support</h3>
            <p style={whyUsCardDescStyle}>100% placement assistance with top companies</p>
          </div>
          <div style={whyUsCardStyle}>
            <div style={whyUsIconStyle}>👨‍🏫</div>
            <h3 style={whyUsCardTitleStyle}>Expert Mentors</h3>
            <p style={whyUsCardDescStyle}>Learn from industry professionals with years of experience</p>
          </div>
          <div style={whyUsCardStyle}>
            <div style={whyUsIconStyle}>📊</div>
            <h3 style={whyUsCardTitleStyle}>Hands-on Projects</h3>
            <p style={whyUsCardDescStyle}>Real-world projects to build your portfolio</p>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section style={ctaStyle}>
        <div style={ctaOverlayStyle}></div>
        <div style={ctaContentStyle}>
          <h2 style={ctaTitleStyle}>Ready to Start Your Learning Journey?</h2>
          <p style={ctaDescriptionStyle}>
            Contact us today to get more details about course schedules, fees, and enrollment process.
          </p>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button style={ctaButtonStyle}>
              Contact Us Now
            </button>
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes zoomIn {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}

// Styles
const containerStyle = {
  minHeight: '100vh',
  background: '#0a1f44',
  color: '#ffffff',
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  paddingTop: '100px'
};

const heroStyle = {
  position: 'relative',
  backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 20px',
  textAlign: 'center',
  marginBottom: '40px'
};

const heroOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, rgba(10,31,68,0.9) 0%, rgba(10,31,68,0.7) 100%)',
  zIndex: 1
};

const heroContentStyle = {
  position: 'relative',
  zIndex: 2,
  maxWidth: '800px',
  margin: '0 auto',
  animation: 'fadeInUp 0.8s ease'
};

const heroTitleStyle = {
  fontSize: '3.5rem',
  fontWeight: '800',
  marginBottom: '20px',
  background: 'linear-gradient(135deg, #ffffff, #c0c0c0)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const heroSubtitleStyle = {
  fontSize: '1.5rem',
  color: '#c0c0c0',
  marginBottom: '20px'
};

const heroDescriptionStyle = {
  fontSize: '1.1rem',
  color: '#ffffff',
  lineHeight: '1.6'
};

const coursesSectionStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 20px'
};

const coursesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '30px'
};

const courseCardStyle = {
  background: '#ffffff',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  transition: 'all 0.3s ease',
  animation: 'fadeInUp 0.8s ease',
  display: 'flex',
  flexDirection: 'column',
  ':hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
  }
};

const courseImageContainerStyle = {
  position: 'relative',
  height: '200px',
  overflow: 'hidden'
};

const courseImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
  ':hover': {
    transform: 'scale(1.1)'
  }
};

const courseIconOverlayStyle = {
  position: 'absolute',
  bottom: '-20px',
  right: '20px',
  width: '60px',
  height: '60px',
  background: '#0a1f44',
  borderRadius: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#c0c0c0',
  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  border: '2px solid #c0c0c0'
};

const courseContentStyle = {
  padding: '30px 25px 25px',
  background: '#ffffff'
};

const courseTitleStyle = {
  fontSize: '1.4rem',
  fontWeight: '700',
  marginBottom: '12px',
  color: '#0a1f44'
};

const courseDescriptionStyle = {
  fontSize: '0.95rem',
  color: '#4a5568',
  lineHeight: '1.5',
  marginBottom: '20px'
};

const courseMetaStyle = {
  display: 'flex',
  gap: '20px',
  marginBottom: '20px',
  padding: '15px 0',
  borderTop: '1px solid #e2e8f0',
  borderBottom: '1px solid #e2e8f0'
};

const metaItemStyle = {
  flex: 1
};

const metaLabelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  color: '#718096',
  marginBottom: '4px'
};

const metaValueStyle = {
  fontSize: '1rem',
  fontWeight: '600',
  color: '#0a1f44'
};

const modulesStyle = {
  marginBottom: '25px'
};

const modulesTitleStyle = {
  fontSize: '1rem',
  fontWeight: '600',
  color: '#0a1f44',
  marginBottom: '10px'
};

const modulesListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0
};

const moduleItemStyle = {
  fontSize: '0.9rem',
  color: '#4a5568',
  marginBottom: '6px'
};

const enrollButtonStyle = {
  width: '100%',
  padding: '14px',
  background: '#0a1f44',
  border: 'none',
  borderRadius: '10px',
  color: '#c0c0c0',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    background: '#1a2f5c',
    color: '#ffffff'
  }
};

const whyUsStyle = {
  background: 'linear-gradient(135deg, #0a1f44 0%, #1a2f5c 100%)',
  padding: '80px 20px',
  marginTop: '40px'
};

const whyUsTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  textAlign: 'center',
  marginBottom: '50px',
  color: '#ffffff'
};

const whyUsGridStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '30px'
};

const whyUsCardStyle = {
  textAlign: 'center',
  padding: '30px',
  background: 'rgba(255,255,255,0.1)',
  borderRadius: '16px',
  border: '1px solid rgba(192,192,192,0.2)',
  backdropFilter: 'blur(10px)',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'translateY(-5px)'
  }
};

const whyUsIconStyle = {
  fontSize: '3rem',
  marginBottom: '20px'
};

const whyUsCardTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: '600',
  marginBottom: '10px',
  color: '#ffffff'
};

const whyUsCardDescStyle = {
  fontSize: '0.95rem',
  color: '#c0c0c0',
  lineHeight: '1.5'
};

const ctaStyle = {
  position: 'relative',
  backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 20px',
  textAlign: 'center'
};

const ctaOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, rgba(10,31,68,0.9) 0%, rgba(10,31,68,0.8) 100%)',
  zIndex: 1
};

const ctaContentStyle = {
  position: 'relative',
  zIndex: 2,
  maxWidth: '600px',
  margin: '0 auto'
};

const ctaTitleStyle = {
  fontSize: '2rem',
  fontWeight: '700',
  marginBottom: '20px',
  color: '#ffffff'
};

const ctaDescriptionStyle = {
  fontSize: '1.1rem',
  color: '#c0c0c0',
  marginBottom: '30px',
  lineHeight: '1.6'
};

const ctaButtonStyle = {
  padding: '16px 40px',
  background: '#c0c0c0',
  border: 'none',
  borderRadius: '12px',
  color: '#0a1f44',
  fontSize: '1.1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  ':hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 30px rgba(192,192,192,0.3)'
  }
};

export default Courses;