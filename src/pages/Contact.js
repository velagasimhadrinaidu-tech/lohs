import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you today?", isBot: true, time: "Just now" }
  ]);
  const [userMessage, setUserMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const sendChatMessage = () => {
    if (!userMessage.trim()) return;

    // Add user message
    const newUserMessage = {
      id: chatMessages.length + 1,
      text: userMessage,
      isBot: false,
      time: "Just now"
    };

    // Add bot response
    const botResponses = [
      "Thanks for your message! Our team will get back to you shortly.",
      "I can help you with technical support, pricing inquiries, or general questions.",
      "We typically respond to emails within 24 hours.",
      "Would you like to schedule a call with our sales team?",
      "You can reach our support team at support@lohssoftwaresolutions.com"
    ];

    const botResponse = {
      id: chatMessages.length + 2,
      text: botResponses[Math.floor(Math.random() * botResponses.length)],
      isBot: true,
      time: "Just now"
    };

    setChatMessages([...chatMessages, newUserMessage, botResponse]);
    setUserMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage();
    }
  };

  // SVG Icons
  const EmailIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  );

  const LocationIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );

  const ClockIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  );

  const ChatIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
  );

  const SendIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
    </svg>
  );

  const CloseIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  );

  // Styles
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    padding: '60px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    position: 'relative',
    overflow: 'hidden'
  };

  const backgroundPatternStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(56, 189, 248, 0.1) 0%, transparent 55%),
                      radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 55%)`,
    pointerEvents: 'none'
  };

  const wrapperStyle = {
    display: 'flex',
    maxWidth: '1200px',
    width: '100%',
    background: 'rgba(15, 23, 42, 0.7)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    animation: 'slideUp 0.8s ease-out',
    zIndex: 1,
    position: 'relative'
  };

  const contactInfoPanelStyle = {
    flex: 1,
    padding: '60px',
    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
    overflow: 'hidden'
  };

  const contactHeaderStyle = {
    marginBottom: '60px'
  };

  const contactTitleStyle = {
    fontSize: '3rem',
    background: 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '20px',
    fontWeight: '800'
  };

  const contactSubtitleStyle = {
    fontSize: '1.1rem',
    color: '#94a3b8',
    lineHeight: '1.6'
  };

  const contactDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  };

  const contactItemStyle = {
    display: 'flex',
    gap: '20px',
    padding: '25px',
    background: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const contactIconStyle = {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'transform 0.3s ease'
  };

  const contactItemContentStyle = {
    flex: 1
  };

  const contactItemTitleStyle = {
    color: '#f8fafc',
    fontSize: '1.25rem',
    marginBottom: '10px',
    fontWeight: '600'
  };

  const contactItemTextStyle = {
    color: '#94a3b8',
    marginBottom: '8px',
    lineHeight: '1.5'
  };

  const contactLinkStyle = {
    color: '#38bdf8',
    textDecoration: 'none',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease'
  };

  const contactFormPanelStyle = {
    flex: 1,
    padding: '60px',
    background: 'rgba(15, 23, 42, 0.8)'
  };

  const formTitleStyle = {
    fontSize: '2.5rem',
    background: 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '40px',
    fontWeight: '700'
  };

  const formGroupStyle = {
    marginBottom: '30px'
  };

  const labelStyle = {
    display: 'block',
    color: '#cbd5e1',
    fontWeight: '500',
    marginBottom: '10px',
    fontSize: '0.95rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    background: 'rgba(30, 41, 59, 0.5)',
    color: '#f8fafc',
    boxSizing: 'border-box'
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '150px',
    fontFamily: 'inherit'
  };

  const buttonStyle = {
    width: '100%',
    padding: '18px',
    background: 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const successStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  };

  // Chat Widget Styles
  const chatButtonStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 30px rgba(56, 189, 248, 0.4)',
    zIndex: 1000,
    animation: 'pulse 2s infinite'
  };

  const chatWidgetStyle = {
    position: 'fixed',
    bottom: '100px',
    right: '30px',
    width: '350px',
    height: '500px',
    background: 'rgba(15, 23, 42, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1000,
    overflow: 'hidden',
    transform: chatOpen ? 'translateY(0)' : 'translateY(20px)',
    opacity: chatOpen ? 1 : 0,
    visibility: chatOpen ? 'visible' : 'hidden',
    transition: 'all 0.3s ease'
  };

  const chatHeaderStyle = {
    padding: '20px',
    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const chatTitleStyle = {
    color: '#f8fafc',
    fontSize: '1.2rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
    padding: '5px'
  };

  const chatBodyStyle = {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };

  const chatMessageStyle = (isBot) => ({
    maxWidth: '80%',
    padding: '12px 16px',
    borderRadius: '18px',
    background: isBot ? 'rgba(30, 41, 59, 0.8)' : 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)',
    color: isBot ? '#f8fafc' : 'white',
    alignSelf: isBot ? 'flex-start' : 'flex-end',
    border: isBot ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
    animation: 'fadeIn 0.3s ease'
  });

  const chatInputContainerStyle = {
    padding: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    gap: '10px'
  };

  const chatInputStyle = {
    flex: 1,
    padding: '12px 16px',
    background: 'rgba(30, 41, 59, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: '#f8fafc',
    fontSize: '0.95rem'
  };

  const chatSendButtonStyle = {
    padding: '12px 20px',
    background: 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const styleSheet = `
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes successPulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }
    
    @keyframes pulse {
      0% {
        box-shadow: 0 10px 30px rgba(56, 189, 248, 0.4);
      }
      50% {
        box-shadow: 0 10px 40px rgba(56, 189, 248, 0.6);
      }
      100% {
        box-shadow: 0 10px 30px rgba(56, 189, 248, 0.4);
      }
    }
    
    @keyframes ripple {
      0% {
        transform: scale(0, 0);
        opacity: 0.5;
      }
      100% {
        transform: scale(40, 40);
        opacity: 0;
      }
    }
    
    .animate-slide-in {
      animation: slideIn 0.8s ease-out;
    }
    
    .animate-fade-in {
      animation: fadeIn 0.8s ease-out 0.2s both;
    }
    
    .animate-fade-up {
      animation: fadeUp 0.6s ease-out both;
    }
    
    .contact-item:hover {
      transform: translateY(-5px);
      border-color: rgba(56, 189, 248, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    .contact-item:hover .contact-icon {
      transform: rotate(10deg) scale(1.1);
    }
    
    .contact-link:hover {
      color: #8b5cf6;
      gap: 12px;
    }
    
    .form-input:focus,
    .form-textarea:focus {
      outline: none;
      border-color: #38bdf8;
      box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1);
      transform: translateY(-2px);
    }
    
    .submit-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 30px rgba(56, 189, 248, 0.4);
    }
    
    .submit-btn:active {
      transform: translateY(-1px);
    }
    
    .submit-btn:focus:not(:active)::after {
      animation: ripple 1s ease-out;
    }
    
    .submit-btn::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 5px;
      background: rgba(255, 255, 255, 0.5);
      opacity: 0;
      border-radius: 100%;
      transform: scale(1, 1) translate(-50%);
      transform-origin: 50% 50%;
    }
    
    .submit-success {
      animation: successPulse 0.5s ease;
    }
    
    ::-webkit-scrollbar {
      width: 6px;
    }
    
    ::-webkit-scrollbar-track {
      background: rgba(30, 41, 59, 0.5);
      border-radius: 3px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%);
      border-radius: 3px;
    }
    
    @media (max-width: 1024px) {
      .contact-wrapper {
        flex-direction: column;
      }
      
      .contact-info-panel,
      .contact-form-panel {
        padding: 40px;
      }
    }
    
    @media (max-width: 640px) {
      .contact-container {
        padding: 20px;
      }
      
      .contact-info-panel,
      .contact-form-panel {
        padding: 30px 20px;
      }
      
      .contact-title {
        font-size: 2.5rem;
      }
      
      .contact-item {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .contact-icon {
        margin-bottom: 15px;
      }
      
      .chat-widget {
        width: calc(100vw - 40px);
        right: 20px;
        bottom: 80px;
      }
    }
  `;

  return (
    <>
      <style>{styleSheet}</style>
      
      {/* Background Pattern */}
      <div style={backgroundPatternStyle} />
      
      {/* Main Contact Container */}
      <div style={containerStyle}>
        <div style={wrapperStyle} className="contact-wrapper">
          {/* Left Panel - Contact Information */}
          <div style={contactInfoPanelStyle} className="contact-info-panel">
            <div style={contactHeaderStyle}>
              <h1 style={contactTitleStyle} className="animate-slide-in">Get in Touch</h1>
              <p style={contactSubtitleStyle} className="animate-fade-in">
                We're here to help! Reach out to us for any inquiries, support, or collaboration opportunities.
              </p>
            </div>

            <div style={contactDetailsStyle}>
              <div style={contactItemStyle} className="contact-item animate-fade-up">
                <div style={contactIconStyle} className="contact-icon">
                  <EmailIcon />
                </div>
                <div style={contactItemContentStyle}>
                  <h3 style={contactItemTitleStyle}>Email</h3>
                  <p style={contactItemTextStyle}>contact@lohssoftwaresolutions.com</p>
                  <p style={contactItemTextStyle}>support@lohssoftwaresolutions.com</p>
                  <a 
                    href="mailto:contact@lohssoftwaresolutions.com" 
                    style={contactLinkStyle}
                    className="contact-link"
                  >
                    Send an email →
                  </a>
                </div>
              </div>

              <div style={contactItemStyle} className="contact-item animate-fade-up">
                <div style={contactIconStyle} className="contact-icon">
                  <PhoneIcon />
                </div>
                <div style={contactItemContentStyle}>
                  <h3 style={contactItemTitleStyle}>Phone</h3>
                  <p style={contactItemTextStyle}>+91 98765 43210 (Sales)</p>
                  <p style={contactItemTextStyle}>+91 98765 43211 (Support)</p>
                  <a 
                    href="tel:+919876543210" 
                    style={contactLinkStyle}
                    className="contact-link"
                  >
                    Call us →
                  </a>
                </div>
              </div>

              <div style={contactItemStyle} className="contact-item animate-fade-up">
                <div style={contactIconStyle} className="contact-icon">
                  <LocationIcon />
                </div>
                <div style={contactItemContentStyle}>
                  <h3 style={contactItemTitleStyle}>Office</h3>
                  <p style={contactItemTextStyle}>Tech Hub Tower, 5th Floor</p>
                  <p style={contactItemTextStyle}>Bangalore, Karnataka 560001</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={contactLinkStyle}
                    className="contact-link"
                  >
                    Get directions →
                  </a>
                </div>
              </div>

              <div style={contactItemStyle} className="contact-item animate-fade-up">
                <div style={contactIconStyle} className="contact-icon">
                  <ClockIcon />
                </div>
                <div style={contactItemContentStyle}>
                  <h3 style={contactItemTitleStyle}>Business Hours</h3>
                  <p style={contactItemTextStyle}>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p style={contactItemTextStyle}>Saturday: 10:00 AM - 4:00 PM</p>
                  <p style={{...contactItemTextStyle, color: '#38bdf8', fontWeight: '500'}}>
                    24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div style={contactFormPanelStyle} className="contact-form-panel">
            <form onSubmit={handleSubmit} className="contact-form" style={{ animation: 'fadeIn 0.8s ease-out 0.2s both' }}>
              <h2 style={formTitleStyle}>Send us a Message</h2>
              
              <div style={formGroupStyle} className="form-group">
                <label htmlFor="name" style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  className="form-input"
                  placeholder="Enter your name"
                />
              </div>

              <div style={formGroupStyle} className="form-group">
                <label htmlFor="email" style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div style={formGroupStyle} className="form-group">
                <label htmlFor="message" style={labelStyle}>Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={textareaStyle}
                  className="form-textarea"
                  rows="6"
                  placeholder="How can we help you? Please provide details..."
                />
              </div>

              <button 
                type="submit" 
                style={buttonStyle}
                className="submit-btn"
              >
                {isSubmitted ? (
                  <span style={successStyle} className="submit-success">
                    ✓ Message Sent Successfully!
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              
              <p style={{marginTop: '20px', color: '#94a3b8', fontSize: '0.9rem', textAlign: 'center'}}>
                We'll respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* AI Chat Widget */}
      <button 
        style={chatButtonStyle}
        onClick={() => setChatOpen(!chatOpen)}
        title="Chat with AI Assistant"
      >
        {chatOpen ? <CloseIcon /> : <ChatIcon />}
      </button>

      <div style={chatWidgetStyle} className="chat-widget">
        <div style={chatHeaderStyle}>
          <div style={chatTitleStyle}>
            <ChatIcon />
            AI Assistant
          </div>
          <button 
            style={closeButtonStyle}
            onClick={() => setChatOpen(false)}
            title="Close chat"
          >
            <CloseIcon />
          </button>
        </div>
        
        <div style={chatBodyStyle}>
          {chatMessages.map((msg) => (
            <div key={msg.id} style={chatMessageStyle(msg.isBot)}>
              {msg.text}
              <div style={{
                fontSize: '0.7rem',
                opacity: 0.7,
                marginTop: '5px',
                textAlign: msg.isBot ? 'left' : 'right'
              }}>
                {msg.time}
              </div>
            </div>
          ))}
        </div>
        
        <div style={chatInputContainerStyle}>
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            style={chatInputStyle}
          />
          <button 
            style={chatSendButtonStyle}
            onClick={sendChatMessage}
            disabled={!userMessage.trim()}
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;