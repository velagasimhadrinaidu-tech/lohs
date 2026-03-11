import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Training & Placements', href: '/investors' },
    { label: 'Services', href: '/services' },
    { label: 'Careers', href: '/careers' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          {/* Logo - Greatly increased size */}
          <div className="header__logo">
            <Link to="/" className="header__logo-link">
              <img src="/Selected photo.png" alt="LOHS" className="logo__image" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                to={item.href}
                className="nav__link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="header__actions">
            <button 
              className={`header__menu-toggle ${isMobileMenuOpen ? 'header__menu-toggle--open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
          <div className="mobile-menu__content">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                to={item.href}
                className="mobile-menu__link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <style jsx>{`
        /* Main header - decreased height */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: #0a1f44;
          border-bottom: 1px solid rgba(192, 192, 192, 0.1);
          transition: all 0.3s ease;
        }

        .header--scrolled {
          background: #0a1f44;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .header__container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
          height: 100px;
        }

        /* Logo - Greatly increased size */
        .header__logo {
          display: flex;
          align-items: center;
        }

        .header__logo-link {
          display: block;
          line-height: 0;
        }

        .logo__image {
          width: 200px;
          height: 200px;
          object-fit: contain;
          display: block;
        }

        /* Navigation */
        .header__nav {
          display: flex;
          gap: 8px;
          margin-left: auto;
          margin-right: 20px;
        }

        @media (max-width: 1024px) {
          .header__nav {
            display: none;
          }
        }

        .nav__link {
          color: #c0c0c0;
          text-decoration: none;
          padding: 8px 16px;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.3s ease;
          border-radius: 6px;
        }

        .nav__link:hover {
          color: #ffffff;
          background: rgba(192, 192, 192, 0.1);
        }

        /* Mobile Menu Toggle */
        .header__actions {
          display: flex;
          align-items: center;
        }

        .header__menu-toggle {
          display: none;
          background: transparent;
          border: 1px solid rgba(192, 192, 192, 0.2);
          color: #c0c0c0;
          width: 42px;
          height: 42px;
          border-radius: 8px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        @media (max-width: 1024px) {
          .header__menu-toggle {
            display: flex;
          }
        }

        .header__menu-toggle:hover {
          color: #ffffff;
          border-color: rgba(192, 192, 192, 0.4);
          background: rgba(192, 192, 192, 0.1);
        }

        .header__menu-toggle--open {
          background: rgba(192, 192, 192, 0.1);
          color: #ffffff;
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 100px;
          left: 0;
          right: 0;
          background: #0a1f44;
          z-index: 999;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          border-bottom: 1px solid rgba(192, 192, 192, 0.1);
        }

        .mobile-menu--open {
          max-height: calc(100vh - 100px);
          overflow-y: auto;
        }

        .mobile-menu__content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-menu__link {
          color: #ffffff;
          text-decoration: none;
          padding: 16px 20px;
          font-size: 16px;
          font-weight: 500;
          display: block;
          transition: all 0.3s ease;
          background: rgba(192, 192, 192, 0.03);
          border-radius: 8px;
        }

        .mobile-menu__link:hover {
          background: rgba(192, 192, 192, 0.1);
          padding-left: 25px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header__container {
            padding: 0px 20px;
            height: 90px;
          }
          
          .logo__image {
            width: 180px;
            height: 180px;
          }
          
          .mobile-menu {
            top: 90px;
          }
        }

        @media (max-width: 480px) {
          .header__container {
            padding: 0px 15px;
            height: 80px;
          }
          
          .logo__image {
            width: 160px;
            height: 160px;
          }
          
          .mobile-menu {
            top: 80px;
          }

          .header__menu-toggle {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;