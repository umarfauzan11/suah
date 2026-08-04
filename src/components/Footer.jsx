import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    // Image Protection Script
    const handleContextMenu = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // Favicon Theme Switch Script
    const setFavicon = () => {
      const favicon = document.getElementById('favicon');
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (favicon) {
        favicon.href = isDark ? '/icon/suah_icon.png' : '/icon/dark.png';
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    setFavicon();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h3 className="text-white mb-3" style={{ fontWeight: '700' }}>SUAH</h3>
            <p className="mb-3" style={{ color: '#ccc' }}>
              Jl. Griya Sawangan Asri Blok E1 No 12A, Pasir Putih, Sawangan, Depok, Jawa Barat
            </p>
            <div className="mb-3">
              <h5 className="text-white mb-2">Follow Us</h5>
              <div className="d-flex gap-2">
                <a href="https://www.instagram.com/annishofie_/" className="social-icon" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.tiktok.com/@annishofie" className="social-icon" aria-label="TikTok">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://linktr.ee/annishofie.id" className="social-icon" aria-label="Linktree">
                  <i className="fas fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 className="text-white mb-4">Kategori</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="annishofie.html" className="text-decoration-none text-white-50">Annishofie</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-white-50">Agie's Snack</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-4 bg-secondary" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <span className="developer-credit">
              <a href="https://bmdustudio" target="_blank" className="studio-link text-white" style={{ textDecoration: 'none' }}>
                © 2025 CV. SUAH.
                <span className="studio-icon2">✨</span>
              </a>
            </span>
            <span className="developer-credit ms-3">
              Web Developed by
              <a href="https://bmdustudio" target="_blank" className="studio-link text-white" style={{ textDecoration: 'none' }}>
                Bmdu Studio
                <span className="studio-icon">✨</span>
              </a>
            </span>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            <a href="mailto:suahidn@gmail.com" className="text-white" style={{ textDecoration: 'none' }}>
              <i className="fas fa-envelope me-2"></i>suahidn@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}