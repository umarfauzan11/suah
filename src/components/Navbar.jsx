import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle = {
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(26, 26, 26, 0.7)',
    borderBottom: '1px solid rgba(26, 26, 26, 0.2)',
    boxShadow: '0 1px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    position: 'fixed',
    top: '0',
    zIndex: '99',
    right: '0',
    left: '0'
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav style={navbarStyle}>
      <div className="containers">
        <div className="navbar-brand">
          {window.innerWidth < 768 ? (
            <img src="/icon/suah_icon.png" style={{ paddingLeft: '15px' }} alt="SUAH Logo" />
          ) : (
            <img src="/icon/800x300_white-Photoroomm.png" style={{ width: '90px', paddingLeft: '15px' }} alt="SUAH Logo" />
          )}
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-text ${isMobileMenuOpen ? 'active' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <a className="nav-link" href="#home" onClick={closeMobileMenu}>Home</a>
            <a className="nav-link" href="#about" onClick={closeMobileMenu}>About</a>
            <a className="nav-link" href="#services" onClick={closeMobileMenu}>Services</a>
            <a className="nav-link" href="#portfolio" onClick={closeMobileMenu}>Gallery</a>
            <a className="nav-link" href="#contact" onClick={closeMobileMenu}>Contact</a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
