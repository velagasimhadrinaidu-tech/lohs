// import { useState, useEffect } from 'react';
// import { FiMenu, FiX, FiChevronDown, FiCode, FiSmartphone, FiCloud, FiDatabase, FiLayout } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { label: 'Home', href: '/' },
//     { 
//       label: 'Services', 
//       href: '/services',
//       submenu: [
//         { 
//           label: 'Web Development', 
//           href: '/web-projects',
//           icon: <FiCode />,
//           desc: 'Responsive & scalable web applications'
//         },
//         { 
//           label: 'Mobile Apps', 
//           href: '/mobile-projects',
//           icon: <FiSmartphone />,
//           desc: 'Native iOS & Android applications'
//         },
//         { 
//           label: 'Cloud Solutions', 
//           href: '/cloud-projects',
//           icon: <FiCloud />,
//           desc: 'AWS, Azure & Google Cloud services'
//         },
//         { 
//           label: 'Backend & API', 
//           href: '/backend-projects',
//           icon: <FiDatabase />,
//           desc: 'Secure and efficient backend systems'
//         },
//         { 
//           label: 'UI/UX Design', 
//           href: '/uiux-projects',
//           icon: <FiLayout />,
//           desc: 'User-centered design solutions'
//         }
//       ]
//     },
//     { label: 'Careers', href: '/careers' },
//     { label: 'Training & Placements', href: '/Training & Placements' },
//     { label: 'About', href: '/about' },
//     { label: 'Contact', href: '/contact' },
//   ];

//   return (
//     <>
//       <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
//         {/* Animated background */}
//         <div className="header__background" />
        
//         {/* Floating particles */}
//         <div className="header__particles">
//           {[...Array(15)].map((_, i) => (
//             <div key={i} className="particle" style={{
//               '--delay': `${i * 0.5}s`,
//               '--size': `${Math.random() * 4 + 2}px`,
//               '--x': `${Math.random() * 100}%`,
//               '--y': `${Math.random() * 100}%`
//             }} />
//           ))}
//         </div>

//         <div className="header__container">
//           {/* Logo */}
//           <div className="header__logo">
//             <Link to="/" style={{ textDecoration: 'none' }}>
//               <div className="logo__main">
//                 <span className="logo__text">LOHS</span>
//                 <div className="logo__glow" />
//                 <div className="logo__dot" />
//               </div>
//               <div className="logo__tagline">
//                 <span className="logo__tagline-text">Software Solutions</span>
//                 <div className="logo__tagline-underline" />
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="header__nav">
//             {navItems.map((item) => (
//               <div 
//                 key={item.label}
//                 className="nav__item"
//                 onMouseEnter={() => setActiveMenu(item.label)}
//                 onMouseLeave={() => setActiveMenu(null)}
//               >
//                 {item.submenu ? (
//                   <Link 
//                     to={item.href}
//                     className={`nav__link ${activeMenu === item.label ? 'nav__link--active' : ''}`}
//                   >
//                     {item.label}
//                     <FiChevronDown className="nav__chevron" />
//                   </Link>
//                 ) : (
//                   <Link 
//                     to={item.href}
//                     className={`nav__link ${activeMenu === item.label ? 'nav__link--active' : ''}`}
//                   >
//                     {item.label}
//                   </Link>
//                 )}
                
//                 {/* Enhanced Dropdown Menu */}
//                 {item.submenu && (
//                   <div className={`nav__dropdown ${activeMenu === item.label ? 'nav__dropdown--active' : ''}`}>
//                     <div className="nav__dropdown-content">
//                       {item.submenu.map((subItem) => (
//                         <Link 
//                           key={subItem.label} 
//                           to={subItem.href}
//                           className="nav__dropdown-item"
//                           onClick={() => setActiveMenu(null)}
//                         >
//                           <div className="nav__dropdown-item-icon">
//                             {subItem.icon}
//                           </div>
//                           <div className="nav__dropdown-item-content">
//                             <div className="nav__dropdown-item-title">{subItem.label}</div>
//                             <div className="nav__dropdown-item-desc">{subItem.desc}</div>
//                           </div>
//                           <div className="nav__dropdown-item-arrow">
//                             <span>→</span>
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Mobile Menu Toggle */}
//           <div className="header__actions">
//             <button 
//               className="header__menu-toggle"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {isMobileMenuOpen ? <FiX /> : <FiMenu />}
//             </button>
//           </div>
//         </div>

//         {/* Enhanced Mobile Menu */}
//         <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
//           <div className="mobile-menu__content">
//             {navItems.map((item) => (
//               <div key={item.label} className="mobile-menu__item">
//                 {item.submenu ? (
//                   <>
//                     <div className="mobile-menu__header">
//                       <Link 
//                         to={item.href}
//                         className="mobile-menu__link"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                       >
//                         {item.label}
//                       </Link>
//                     </div>
//                     {item.submenu && (
//                       <div className="mobile-menu__subitems">
//                         {item.submenu.map((subItem) => (
//                           <Link 
//                             key={subItem.label}
//                             to={subItem.href}
//                             className="mobile-menu__sublink"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                           >
//                             <div className="mobile-menu__sublink-icon">
//                               {subItem.icon}
//                             </div>
//                             <div className="mobile-menu__sublink-content">
//                               <div className="mobile-menu__sublink-title">{subItem.label}</div>
//                               <div className="mobile-menu__sublink-desc">{subItem.desc}</div>
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link 
//                     to={item.href}
//                     className="mobile-menu__link"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </header>

//       <style jsx>{`
//         /* Professional Red & Gold Theme */
        
//         /* Main header */
//         .header {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           z-index: 1000;
//           padding: 0;
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//             background: #ffffff;
//           box-shadow: 0 2px 20px rgba(230, 0, 0, 0.08);
//         }

//         .header--scrolled {
//           background: #ffffff;
//           box-shadow: 0 4px 30px rgba(230, 0, 0, 0.12);
//         }

//         .header__background {
//           display: none;
//       }

//         .header__particles {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//           z-index: -1;
//         }

//         .particle {
//   position: absolute;
//   border-radius: 50%;
//   background: rgba(29,161,242,0.25);
//   width: var(--size);
//   height: var(--size);
//   top: var(--y);
//   left: var(--x);
//   animation: floatParticle 15s infinite ease-in-out;
//   animation-delay: var(--delay);
// }

//         .header__container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 18px 20px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }

//         /* Enhanced Logo */
//         .header__logo {
//           display: flex;
//           flex-direction: column;
//           gap: 4px;
//           position: relative;
//         }

//         .header__logo a {
//           text-decoration: none;
//           position: relative;
//         }

//         .logo__main {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           position: relative;
//         }

//         .logo__text {
//           font-size: 32px;
//           font-weight: 900;
//           background: linear-gradient(45deg, #4361ee, #0077b5, #1da1f2);
//           background-size: 200% 200%;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           letter-spacing: 1px;
//           animation: gradientShift 3s ease infinite;
//           position: relative;
//           z-index: 2;
//         }

//         .logo__glow {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 120%;
//           height: 120%;
//           background: radial-gradient(circle, rgba(255, 184, 28, 0.15) 0%, transparent 70%);
//           filter: blur(8px);
//           z-index: 1;
//           animation: pulseGlow 3s ease-in-out infinite;
//         }

//         .logo__dot {
//           width: 10px;
//           height: 10px;
//           background: linear-gradient(45deg, #4361ee, #1da1f2);
//           border-radius: 50%;
//           animation: pulseDot 2s infinite;
//           box-shadow: 0 0 10px rgba(67,97,238,0.5);
//         }

//         .logo__tagline {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           gap: 3px;
//         }

//         .logo__tagline-text {
//           font-size: 11px;
//           color: #0d2b5f;
//           letter-spacing: 2px;
//           font-weight: 600;
//           text-transform: uppercase;
//           position: relative;
//           padding-left: 5px;
//         }

//         .logo__tagline-underline {
//           width: 60px;
//           height: 2px;
//           background: linear-gradient(90deg, #4361ee, #1da1f2);
//           border-radius: 1px;
//           animation: underlineWidth 3s ease-in-out infinite alternate;
//         }

//         /* Navigation */
//         .header__nav {
//           display: flex;
//           gap: 4px;
//           margin: 0 40px;
//           position: relative;
//         }

//         @media (max-width: 1024px) {
//           .header__nav {
//             display: none;
//           }
//         }

//         .nav__item {
//           position: relative;
//         }

//         .nav__link {
//           color: #0a1f44;
//           text-decoration: none;
//           padding: 14px 22px;
//           border-radius: 6px;
//           font-size: 15px;
//           font-weight: 600;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           transition: all 0.3s ease;
//           position: relative;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         .nav__link::before {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           width: 0;
//           height: 2px;
//           background: linear-gradient(90deg, #4361ee, #1da1f2);
//           transition: all 0.3s ease;
//           transform: translateX(-50%);
//           border-radius: 1px;
//         }

//         .nav__link:hover,
//         .nav__link--active {
//           color: #4361ee;
//           background: rgba(29,161,242,0.08);
//           transform: translateY(-1px);
//         }

//         .nav__link:hover::before,
//         .nav__link--active::before {
//           width: 70%;
//         }

//         .nav__chevron {
//           font-size: 14px;
//           transition: transform 0.3s ease;
//           color: #0d2b5f;
//         }

//         .nav__item:hover .nav__chevron {
//           transform: rotate(180deg);
//           color: #4361ee;
//         }

//         /* Enhanced Dropdown */
//         .nav__dropdown {
//           position: absolute;
//           top: calc(100% + 5px);
//           left: 0;
//           background: rgba(255, 255, 255, 0.98);
//           backdrop-filter: blur(20px);
//           border-radius: 12px;
//           padding: 24px;
//           min-width: 320px;
//           opacity: 0;
//           visibility: hidden;
//           transform: translateY(10px);
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           border: 1px solid rgba(67,97,238,0.1);
//           box-shadow: 0 20px 50px rgba(67,97,238,0.15);
//           z-index: 1001;
//         }

//         .nav__dropdown--active {
//           opacity: 1;
//           visibility: visible;
//           transform: translateY(0);
//         }

//         .nav__dropdown-content {
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//         }

//         .nav__dropdown-item {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           padding: 16px;
//           color: #0d2b5f;
//           text-decoration: none;
//           border-radius: 8px;
//           transition: all 0.3s ease;
//           border: 1px solid transparent;
//           background: rgba(255, 184, 28, 0.03);
//         }

//         .nav__dropdown-item:hover {
//           background: white;
//           color: #4361ee;
//           transform: translateX(8px);
//           border-color: rgba(29,161,242,0.2);
//           box-shadow: 0 5px 15px rgba(67,97,238,0.1);
//         }

//         .nav__dropdown-item-icon {
//           width: 44px;
//           height: 44px;
//           background: linear-gradient(135deg, rgba(67,97,238,0.1), rgba(29,161,242,0.2));
//           border-radius: 10px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #4361ee;
//           font-size: 20px;
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//         }

//         .nav__dropdown-item:hover .nav__dropdown-item-icon {
//           background: linear-gradient(135deg, #4361ee, #1da1f2);
//           color: white;
//           transform: scale(1.1) rotate(5deg);
//         }

//         .nav__dropdown-item-content {
//           flex: 1;
//           min-width: 0;
//         }

//         .nav__dropdown-item-title {
//           font-size: 15px;
//           font-weight: 700;
//           color: #0a1f44;
//           margin-bottom: 4px;
//           transition: color 0.3s ease;
//         }

//         .nav__dropdown-item:hover .nav__dropdown-item-title {
//           color: #4361ee;
//         }

//         .nav__dropdown-item-desc {
//           font-size: 13px;
//           color: #0d2b5f;
//           line-height: 1.4;
//           transition: color 0.3s ease;
//         }

//         .nav__dropdown-item:hover .nav__dropdown-item-desc {
//           color: #0d2b5f;
//         }

//         .nav__dropdown-item-arrow {
//           opacity: 0;
//           transform: translateX(-10px);
//           transition: all 0.3s ease;
//           color: #1da1f2;
//           font-size: 18px;
//           font-weight: bold;
//         }

//         .nav__dropdown-item:hover .nav__dropdown-item-arrow {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         /* Actions */
//         .header__actions {
//           display: flex;
//           align-items: center;
//         }

//         .header__menu-toggle {
//           display: none;
//           background: linear-gradient(45deg, rgba(67,97,238,0.1), rgba(29,161,242,0.1));
//           border: 1px solid rgba(67,97,238,0.2);
//           color: #4361ee;
//           width: 48px;
//           height: 48px;
//           border-radius: 8px;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           font-size: 24px;
//           transition: all 0.3s ease;
//         }

//         @media (max-width: 1024px) {
//           .header__menu-toggle {
//             display: flex;
//           }
//         }

//         .header__menu-toggle:hover {
//           background: linear-gradient(45deg, rgba(67,97,238,0.2), rgba(29,161,242,0.2));
//           color: #433fc8;
//           transform: scale(1.05);
//         }

//         /* Enhanced Mobile Menu */
//         .mobile-menu {
//           position: fixed;
//           top: 80px;
//           left: 0;
//           right: 0;
//           background: rgba(255, 255, 255, 0.98);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           z-index: 999;
//           padding: 0 20px;
//           max-height: 0;
//           overflow: hidden;
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .mobile-menu--open {
//           max-height: calc(100vh - 80px);
//           padding: 20px;
//         }

//         .mobile-menu__content {
//           display: flex;
//           flex-direction: column;
//           gap: 8px;
//         }

//         .mobile-menu__header {
//           padding: 4px 0;
//         }

//         .mobile-menu__link {
//           color: #0a1f44;
//           text-decoration: none;
//           padding: 16px 20px;
//           border-radius: 8px;
//           font-size: 16px;
//           font-weight: 700;
//           display: block;
//           transition: all 0.3s ease;
//           background: rgba(255, 184, 28, 0.05);
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         .mobile-menu__link:hover {
//           color: #4361ee;
//           background: rgba(29,161,242,0.1);
//           padding-left: 25px;
//           transform: translateX(5px);
//         }

//         .mobile-menu__subitems {
//           margin-left: 20px;
//           margin-top: 4px;
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }

//         .mobile-menu__sublink {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           color: #0d2b5f;
//           text-decoration: none;
//           padding: 14px 20px;
//           border-radius: 8px;
//           font-size: 14px;
//           transition: all 0.3s ease;
//           background: rgba(230, 0, 0, 0.02);
//         }

//         .mobile-menu__sublink:hover {
//           color: #4361ee;
//           background: rgba(29,161,242,0.08);
//           padding-left: 25px;
//           transform: translateX(5px);
//         }

//         .mobile-menu__sublink-icon {
//           width: 36px;
//           height: 36px;
//           background: rgba(29,161,242,0.1);
//           border-radius: 8px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #4361ee;
//           font-size: 18px;
//           flex-shrink: 0;
//         }

//         .mobile-menu__sublink-content {
//           flex: 1;
//         }

//         .mobile-menu__sublink-title {
//           font-weight: 600;
//           margin-bottom: 2px;
//         }

//         .mobile-menu__sublink-desc {
//           font-size: 12px;
//           color: #0d2b5f;
//         }

//         /* New Animations */
//         @keyframes gradientShift {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         @keyframes floatParticle {
//           0%, 100% {
//             transform: translateY(0) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(180deg);
//           }
//         }

//         @keyframes pulseDot {
//           0%, 100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: scale(1.2);
//             opacity: 0.8;
//           }
//         }

//         @keyframes pulseGlow {
//           0%, 100% {
//             opacity: 0.15;
//             transform: translate(-50%, -50%) scale(1);
//           }
//           50% {
//             opacity: 0.25;
//             transform: translate(-50%, -50%) scale(1.05);
//           }
//         }

//         @keyframes underlineWidth {
//           0% {
//             width: 60px;
//           }
//           100% {
//             width: 80px;
//           }
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .header__container {
//             padding: 12px 15px;
//           }
          
//           .header {
//             padding: 0;
//           }
          
//           .logo__text {
//             font-size: 28px;
//           }
          
//           .logo__glow {
//             display: none;
//           }
          
//           .header--scrolled {
//             padding: 0;
//           }
          
//           .mobile-menu {
//             top: 74px;
//           }
          
//           .logo__tagline-text {
//             font-size: 10px;
//             letter-spacing: 1.5px;
//           }
          
//           .logo__tagline-underline {
//             width: 50px;
//           }
//         }

//         @media (max-width: 480px) {
//           .header__container {
//             padding: 10px 15px;
//           }
          
//           .logo__text {
//             font-size: 26px;
//           }
          
//           .logo__dot {
//             width: 8px;
//             height: 8px;
//           }
          
//           .mobile-menu {
//             top: 70px;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// export default Header;




import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown, FiCode, FiSmartphone, FiCloud, FiDatabase, FiLayout } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Services', 
      href: '/services',
      submenu: [
        { 
          label: 'Web Development', 
          href: '/web-projects',
          icon: <FiCode />,
          desc: 'Responsive & scalable web applications'
        },
        { 
          label: 'Mobile Apps', 
          href: '/mobile-projects',
          icon: <FiSmartphone />,
          desc: 'Native iOS & Android applications'
        },
        { 
          label: 'Cloud Solutions', 
          href: '/cloud-projects',
          icon: <FiCloud />,
          desc: 'AWS, Azure & Google Cloud services'
        },
        { 
          label: 'Backend & API', 
          href: '/backend-projects',
          icon: <FiDatabase />,
          desc: 'Secure and efficient backend systems'
        },
        { 
          label: 'UI/UX Design', 
          href: '/uiux-projects',
          icon: <FiLayout />,
          desc: 'User-centered design solutions'
        }
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
    { label: 'Investors', href: '/investors' },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        {/* Animated background */}
        <div className="header__background" />
        
        {/* Floating particles */}
        <div className="header__particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${i * 0.5}s`,
              '--size': `${Math.random() * 4 + 2}px`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`
            }} />
          ))}
        </div>

        <div className="header__container">
          {/* Logo */}
          <div className="header__logo">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="logo__main">
                {/* Added logo image */}
                <div className="logo__image">
                  <img src="/Logo.png" alt="" />
                </div>
                <span className="logo__text">LOHS</span>
                <div className="logo__glow" />
                <div className="logo__dot" />
              </div>
              <div className="logo__tagline">
                <span className="logo__tagline-text">Software Solutions</span>
                <div className="logo__tagline-underline" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="nav__item"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {item.submenu ? (
                  <Link 
                    to={item.href}
                    className={`nav__link ${activeMenu === item.label ? 'nav__link--active' : ''}`}
                  >
                    {item.label}
                    <FiChevronDown className="nav__chevron" />
                  </Link>
                ) : (
                  <Link 
                    to={item.href}
                    className={`nav__link ${activeMenu === item.label ? 'nav__link--active' : ''}`}
                  >
                    {item.label}
                  </Link>
                )}
                
                {/* Enhanced Dropdown Menu */}
                {item.submenu && (
                  <div className={`nav__dropdown ${activeMenu === item.label ? 'nav__dropdown--active' : ''}`}>
                    <div className="nav__dropdown-content">
                      {item.submenu.map((subItem) => (
                        <Link 
                          key={subItem.label} 
                          to={subItem.href}
                          className="nav__dropdown-item"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="nav__dropdown-item-icon">
                            {subItem.icon}
                          </div>
                          <div className="nav__dropdown-item-content">
                            <div className="nav__dropdown-item-title">{subItem.label}</div>
                            <div className="nav__dropdown-item-desc">{subItem.desc}</div>
                          </div>
                          <div className="nav__dropdown-item-arrow">
                            <span>→</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="header__actions">
            <button 
              className="header__menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
          <div className="mobile-menu__content">
            {navItems.map((item) => (
              <div key={item.label} className="mobile-menu__item">
                {item.submenu ? (
                  <>
                    <div className="mobile-menu__header">
                      <Link 
                        to={item.href}
                        className="mobile-menu__link"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </div>
                    {item.submenu && (
                      <div className="mobile-menu__subitems">
                        {item.submenu.map((subItem) => (
                          <Link 
                            key={subItem.label}
                            to={subItem.href}
                            className="mobile-menu__sublink"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="mobile-menu__sublink-icon">
                              {subItem.icon}
                            </div>
                            <div className="mobile-menu__sublink-content">
                              <div className="mobile-menu__sublink-title">{subItem.label}</div>
                              <div className="mobile-menu__sublink-desc">{subItem.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={item.href}
                    className="mobile-menu__link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      <style jsx>{`
        /* Professional Red & Gold Theme */
        
        /* Main header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
            background: #ffffff;
          box-shadow: 0 2px 20px rgba(230, 0, 0, 0.08);
        }

        .header--scrolled {
          background: #ffffff;
          box-shadow: 0 4px 30px rgba(230, 0, 0, 0.12);
        }

        .header__background {
          display: none;
      }

        .header__particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }

        .particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(29,161,242,0.25);
  width: var(--size);
  height: var(--size);
  top: var(--y);
  left: var(--x);
  animation: floatParticle 15s infinite ease-in-out;
  animation-delay: var(--delay);
}

        .header__container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Enhanced Logo */
        .header__logo {
          display: flex;
          flex-direction: column;
          gap: 4px;
          position: relative;
        }

        .header__logo a {
          text-decoration: none;
          position: relative;
        }

        .logo__main {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
        }

        /* New logo image styles */
        .logo__image {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo__image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .logo__text {
          font-size: 32px;
          font-weight: 900;
          background: linear-gradient(45deg, #4361ee, #0077b5, #1da1f2);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1px;
          animation: gradientShift 3s ease infinite;
          position: relative;
          z-index: 2;
        }

        .logo__glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(255, 184, 28, 0.15) 0%, transparent 70%);
          filter: blur(8px);
          z-index: 1;
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .logo__dot {
          width: 10px;
          height: 10px;
          background: linear-gradient(45deg, #4361ee, #1da1f2);
          border-radius: 50%;
          animation: pulseDot 2s infinite;
          box-shadow: 0 0 10px rgba(67,97,238,0.5);
        }

        .logo__tagline {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3px;
        }

        .logo__tagline-text {
          font-size: 11px;
          color: #0d2b5f;
          letter-spacing: 2px;
          font-weight: 600;
          text-transform: uppercase;
          position: relative;
          padding-left: 5px;
        }

        .logo__tagline-underline {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #4361ee, #1da1f2);
          border-radius: 1px;
          animation: underlineWidth 3s ease-in-out infinite alternate;
        }

        /* Navigation */
        .header__nav {
          display: flex;
          gap: 4px;
          margin: 0 40px;
          position: relative;
        }

        @media (max-width: 1024px) {
          .header__nav {
            display: none;
          }
        }

        .nav__item {
          position: relative;
        }

        .nav__link {
          color: #0a1f44;
          text-decoration: none;
          padding: 14px 22px;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .nav__link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #4361ee, #1da1f2);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 1px;
        }

        .nav__link:hover,
        .nav__link--active {
          color: #4361ee;
          background: rgba(29,161,242,0.08);
          transform: translateY(-1px);
        }

        .nav__link:hover::before,
        .nav__link--active::before {
          width: 70%;
        }

        .nav__chevron {
          font-size: 14px;
          transition: transform 0.3s ease;
          color: #0d2b5f;
        }

        .nav__item:hover .nav__chevron {
          transform: rotate(180deg);
          color: #4361ee;
        }

        /* Enhanced Dropdown */
        .nav__dropdown {
          position: absolute;
          top: calc(100% + 5px);
          left: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-radius: 12px;
          padding: 24px;
          min-width: 320px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(67,97,238,0.1);
          box-shadow: 0 20px 50px rgba(67,97,238,0.15);
          z-index: 1001;
        }

        .nav__dropdown--active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .nav__dropdown-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .nav__dropdown-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          color: #0d2b5f;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          background: rgba(255, 184, 28, 0.03);
        }

        .nav__dropdown-item:hover {
          background: white;
          color: #4361ee;
          transform: translateX(8px);
          border-color: rgba(29,161,242,0.2);
          box-shadow: 0 5px 15px rgba(67,97,238,0.1);
        }

        .nav__dropdown-item-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, rgba(67,97,238,0.1), rgba(29,161,242,0.2));
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4361ee;
          font-size: 20px;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .nav__dropdown-item:hover .nav__dropdown-item-icon {
          background: linear-gradient(135deg, #4361ee, #1da1f2);
          color: white;
          transform: scale(1.1) rotate(5deg);
        }

        .nav__dropdown-item-content {
          flex: 1;
          min-width: 0;
        }

        .nav__dropdown-item-title {
          font-size: 15px;
          font-weight: 700;
          color: #0a1f44;
          margin-bottom: 4px;
          transition: color 0.3s ease;
        }

        .nav__dropdown-item:hover .nav__dropdown-item-title {
          color: #4361ee;
        }

        .nav__dropdown-item-desc {
          font-size: 13px;
          color: #0d2b5f;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .nav__dropdown-item:hover .nav__dropdown-item-desc {
          color: #0d2b5f;
        }

        .nav__dropdown-item-arrow {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          color: #1da1f2;
          font-size: 18px;
          font-weight: bold;
        }

        .nav__dropdown-item:hover .nav__dropdown-item-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Actions */
        .header__actions {
          display: flex;
          align-items: center;
        }

        .header__menu-toggle {
          display: none;
          background: linear-gradient(45deg, rgba(67,97,238,0.1), rgba(29,161,242,0.1));
          border: 1px solid rgba(67,97,238,0.2);
          color: #4361ee;
          width: 48px;
          height: 48px;
          border-radius: 8px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 24px;
          transition: all 0.3s ease;
        }

        @media (max-width: 1024px) {
          .header__menu-toggle {
            display: flex;
          }
        }

        .header__menu-toggle:hover {
          background: linear-gradient(45deg, rgba(67,97,238,0.2), rgba(29,161,242,0.2));
          color: #433fc8;
          transform: scale(1.05);
        }

        /* Enhanced Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 999;
          padding: 0 20px;
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu--open {
          max-height: calc(100vh - 80px);
          padding: 20px;
        }

        .mobile-menu__content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-menu__header {
          padding: 4px 0;
        }

        .mobile-menu__link {
          color: #0a1f44;
          text-decoration: none;
          padding: 16px 20px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 700;
          display: block;
          transition: all 0.3s ease;
          background: rgba(255, 184, 28, 0.05);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .mobile-menu__link:hover {
          color: #4361ee;
          background: rgba(29,161,242,0.1);
          padding-left: 25px;
          transform: translateX(5px);
        }

        .mobile-menu__subitems {
          margin-left: 20px;
          margin-top: 4px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mobile-menu__sublink {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #0d2b5f;
          text-decoration: none;
          padding: 14px 20px;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.3s ease;
          background: rgba(230, 0, 0, 0.02);
        }

        .mobile-menu__sublink:hover {
          color: #4361ee;
          background: rgba(29,161,242,0.08);
          padding-left: 25px;
          transform: translateX(5px);
        }

        .mobile-menu__sublink-icon {
          width: 36px;
          height: 36px;
          background: rgba(29,161,242,0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4361ee;
          font-size: 18px;
          flex-shrink: 0;
        }

        .mobile-menu__sublink-content {
          flex: 1;
        }

        .mobile-menu__sublink-title {
          font-weight: 600;
          margin-bottom: 2px;
        }

        .mobile-menu__sublink-desc {
          font-size: 12px;
          color: #0d2b5f;
        }

        /* New Animations */
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes pulseDot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.15;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.25;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @keyframes underlineWidth {
          0% {
            width: 60px;
          }
          100% {
            width: 80px;
          }
        }

        /* Responsive adjustments for logo */
        @media (max-width: 768px) {
          .header__container {
            padding: 12px 15px;
          }
          
          .header {
            padding: 0;
          }
          
          .logo__text {
            font-size: 28px;
          }
          
          .logo__glow {
            display: none;
          }
          
          .header--scrolled {
            padding: 0;
          }
          
          .mobile-menu {
            top: 74px;
          }
          
          .logo__tagline-text {
            font-size: 10px;
            letter-spacing: 1.5px;
          }
          
          .logo__tagline-underline {
            width: 50px;
          }

          .logo__image {
            width: 32px;
            height: 32px;
          }
        }

        @media (max-width: 480px) {
          .header__container {
            padding: 10px 15px;
          }
          
          .logo__text {
            font-size: 26px;
          }
          
          .logo__dot {
            width: 8px;
            height: 8px;
          }
          
          .mobile-menu {
            top: 70px;
          }

          .logo__image {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
    </>
  );
}

export default Header;