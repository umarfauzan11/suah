import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav
      style={navbarStyle}
    >
      <div className="containers">
        <div>
          <img src="/icon/800x300_white-Photoroomm.png" style={{ width: '90px', paddingLeft: '15px' }} alt="SUAH Logo" />
        </div>
          <div className="navbar-text" id="navbarNav">
            <ul className="navbar-nav ms-auto" style={{ paddingRight: '15px' }}>
                <a className="nav-link" href="#home" style={{
                  position: 'relative',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                }}>Home</a>
                <a className="nav-link" href="#about" style={{
                  position: 'relative',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                }}>About</a>
                <a className="nav-link" href="#services" style={{
                  position: 'relative',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                }}>Services</a>
                <a className="nav-link" href="#portfolio" style={{
                  position: 'relative',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                }}>Gallery</a>
                <a className="nav-link" href="#contact" style={{
                  position: 'relative',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                }}>Contact</a>
            </ul>
        </div>
      </div>
    </nav>
  );
}