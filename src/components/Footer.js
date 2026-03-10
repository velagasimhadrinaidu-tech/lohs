import { useEffect, useState } from 'react';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialIcons = [
    { icon: <FiLinkedin />, label: "LinkedIn" },
    { icon: <FiTwitter />, label: "Twitter" },
    { icon: <FiFacebook />, label: "Facebook" },
    { icon: <FiInstagram />, label: "Instagram" }
  ];

  return (
    <footer className={`footer ${mounted ? 'footer--visible' : ''}`}>
      <div className="footer__wave" />
      
      <div className="footer__content">

        <div className="footer__logo">
          <span className="logo-text">LOHS</span>
          <span className="logo-dot" />
        </div>
        
        <p className="footer__copyright">
          © 2026 LOHS Software Solutions. All rights reserved.
        </p>
        
        <div className="footer__social">
          {socialIcons.map((social, index) => (
            <a
              key={social.label}
              href="#"
              className="social-icon"
              aria-label={social.label}
              style={{
                animationDelay: `${index * 0.1 + 0.8}s`
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
      
      <style jsx>{`

        .footer {
          background: #0a1f44;
          color: #ffffff;
          text-align: center;
          padding: 30px 20px 25px;
          margin-top: 60px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          border-top: 1px solid #c0c0c0;
        }

        .footer--visible {
          animation: footerEntry 1s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }

        .footer__wave {
          position: absolute;
          top: -10px;
          left: 0;
          width: 100%;
          height: 20px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%23c0c0c0'/%3E%3C/svg%3E");
          animation: waveMove 20s linear infinite;
        }

        .footer__logo {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 15px;
        }

        .logo-text {
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 1px;
          background: linear-gradient(45deg, #ffffff, #c0c0c0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-dot {
          width: 8px;
          height: 8px;
          background: #c0c0c0;
          border-radius: 50%;
          animation: pulseDot 2s infinite;
        }

        .footer__copyright {
          font-size: 14px;
          margin: 0 0 20px;
          font-weight: 300;
          letter-spacing: 0.3px;
          color: #d1d5db;
        }

        .footer__social {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .social-icon {
          color: #d1d5db;
          font-size: 18px;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(10px);
          animation: iconReveal 0.5s ease forwards;
          padding: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid #c0c0c0;
        }

        .social-icon:hover {
          color: #0a1f44;
          background: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        @keyframes footerEntry {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes waveMove {
          0% { background-position-x: 0; }
          100% { background-position-x: 1200px; }
        }

        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }

        @keyframes iconReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .footer__social {
            gap: 15px;
          }

          .social-icon {
            font-size: 16px;
            padding: 7px;
          }
        }

      `}</style>
    </footer>
  );
}

export default Footer;