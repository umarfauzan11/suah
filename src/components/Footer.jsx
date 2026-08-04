import { useEffect } from 'react';
import '../styles/footer.css';

export default function Footer() {
  useEffect(() => {
    // Image Protection
    const handleContextMenu = (e) => {
      if (e.target.tagName === 'IMG') e.preventDefault();
    };
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') e.preventDefault();
    };

    // Favicon Theme Switch
    const setFavicon = () => {
      const favicon = document.getElementById('favicon');
      if (favicon) {
        favicon.href = window.matchMedia('(prefers-color-scheme: dark)').matches 
          ? '/icon/suah_icon.png' 
          : '/icon/dark.png';
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    setFavicon();
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', setFavicon);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      mediaQuery.removeEventListener('change', setFavicon);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand-section">
            <h2 className="footer-brand">SUAH</h2>
            <p className="footer-description">
              Jl. Griya Sawangan Asri Blok E1 No 12A, Pasir Putih,<br />
              Sawangan, Depok, Jawa Barat
            </p>
            <div className="footer-social">
              <span className="social-label">Follow us</span>
              <div className="social-links">
                <a href="https://www.instagram.com/annishofie_/" className="social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@annishofie" className="social-link" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a href="https://linktr.ee/annishofie.id" className="social-link" aria-label="Linktree">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M13.818 6.818v3.818h6.182v3.182h-6.182v3.818l-6.182-4.91 6.182-4.908z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="footer-links-section">
            <div className="footer-links-group">
              <h3 className="footer-heading">Kategori</h3>
              <ul className="footer-links">
                <li><a href="https://annishofie.suah.web.id" className="footer-link">Annishofie</a></li>
                <li><a href="https://agies-snack.suah.web.id" className="footer-link">Agie's Snack</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <span className="footer-copyright">
              © {currentYear} <a href="https://suah.web.id" target="_blank" className="studio-link">SUAH</a>
            </span>
            <span className="footer-separator">·</span>
            <span className="footer-developer">
              Developed by <a href="https://bmdu.uwebly.com" target="_blank" className="studio-link">Bmdu Studio</a>
            </span>
          </div>
          <a href="mailto:suahidn@gmail.com" className="footer-email">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
            </svg>
            suahidn@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}