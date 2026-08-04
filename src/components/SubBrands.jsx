import { useState } from 'react';
import '../styles/subrands.css';

export default function SubBrands() {
  const [showAnnishofieModal, setShowAnnishofieModal] = useState(false);
  const [showSuahModal, setShowSuahModal] = useState(false);

  return (
    <>
      <section id="services" className="subrands-section-padding subrands-bg-light-bg">
        <div className="subrands-container">
          <h2 className="subrands-section-title subrands-fade-in">Sub-Brand Kami</h2>
          <p className="subrands-section-subtitle subrands-fade-in subrands-delay-1">
            Jelajahi sub-brand kami yang menawarkan produk berkualitas tinggi.
          </p>
          <div className="subrands-brand-grid">
              <div 
                className="subrands-service-card subrands-text-center" 
                onClick={() => setShowAnnishofieModal(true)}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src="/img/d53c7dc5-46a1-4fdd-9c40-9f59edfbe885 (1)-Photoroom.png" 
                  alt="Logo Annishofie - Sub-brand Baju Tidur Estetik dari CV. SUAH" 
                  className="subrands-img-fluid" 
                  style={{ width: '80px', filter: 'brightness(0) invert(1)', mixBlendMode: 'difference'}} 
                />
              </div>
              <div 
                className="subrands-service-card subrands-text-center" 
                onClick={() => setShowSuahModal(true)}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src="/img/logo_transparent.png" 
                  alt="Logo SUAH - Brand Bakery dan Baju Tidur" 
                  className="subrands-img-fluid" 
                  style={{ width: '80px' }} 
                />
              </div>
          </div>
        </div>
      </section>

      {/* Modal for Annishofie */}
      {showAnnishofieModal && (
        <div className="subrands-modal subrands-show" style={{ display: 'block' }} tabIndex="-1">
          <div className="subrands-modal-dialog subrands-modal-dialog-centered">
            <div style={{ backgroundColor: '#070707' }} className="subrands-modal-content subrands-text-white">
              <div className="subrands-modal-header">
                <h5 className="subrands-modal-title">Annishofie</h5>
                <button 
                  type="button" 
                  className="subrands-btn-close subrands-btn-close-white" 
                  onClick={() => setShowAnnishofieModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="subrands-modal-body">
                Annishofie adalah sub-brand kami yang menyediakan pakaian tidur berkualitas tinggi dengan desain elegan dan nyaman untuk digunakan sehari-hari.
              </div>
              <div className="subrands-modal-footer">
                <a href="https://annishofie.suah.web.id/" className="subrands-btn subrands-btn-outline-light">Kunjungi</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for SUAH */}
      {showSuahModal && (
        <div className="subrands-modal subrands-show" style={{ display: 'block' }} tabIndex="-1">
          <div className="subrands-modal-dialog subrands-modal-dialog-centered">
            <div style={{ backgroundColor: '#070707' }} className="subrands-modal-content subrands-text-white">
              <div className="subrands-modal-header">
                <h5 className="subrands-modal-title">Agie's Snack</h5>
                <button 
                  type="button" 
                  className="subrands-btn-close subrands-btn-close-white" 
                  onClick={() => setShowSuahModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="subrands-modal-body">
                Agie's Snack adalah sub-brand kami yang fokus pada produk bakery autentik dengan cita rasa yang hangat dan memanjakan lidah.
              </div>
              <div className="subrands-modal-footer">
                <a href="https://agies-snack.suah.web.id" className="subrands-btn subrands-btn-outline-light">Kunjungi</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}