import { useState } from 'react';

export default function SubBrands() {
  const [showAnnishofieModal, setShowAnnishofieModal] = useState(false);
  const [showSuahModal, setShowSuahModal] = useState(false);

  return (
    <>
      <section id="services" className="section-padding bg-light-bg">
        <div className="container">
          <h2 className="section-title fade-in">Sub-Brand Kami</h2>
          <p className="section-subtitle fade-in delay-1">
            Jelajahi sub-brand kami yang menawarkan produk berkualitas tinggi.
          </p>
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '0 auto', gap: '0.3rem' }}>
              <div 
                className="service-card text-center" 
                onClick={() => setShowAnnishofieModal(true)}
                style={{ cursor: 'pointer' }}
              >
                <img src="/img/d53c7dc5-46a1-4fdd-9c40-9f59edfbe885 (1)-Photoroom.png" alt="Annishofie Logo" className="img-fluid" style={{ width: '80px', filter: 'brightness(0) invert(1)', mixBlendMode: 'difference'}} />
              </div>
              <div 
                className="service-card text-center" 
                onClick={() => setShowSuahModal(true)}
                style={{ cursor: 'pointer' }}
              >
                <img src="/img/logo_transparent.png" alt="SUAH Logo" className="img-fluid" style={{ width: '80px' }} />
              </div>
          </div>
        </div>
      </section>

      {/* Modal for Annishofie */}
      {showAnnishofieModal && (
        <div className="modal show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div style={{ backgroundColor: '#070707' }} className="modal-content text-white">
              <div className="modal-header">
                <h5 className="modal-title">Annishofie</h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowAnnishofieModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Annishofie adalah sub-brand kami yang menyediakan pakaian tidur berkualitas tinggi dengan desain elegan dan nyaman untuk digunakan sehari-hari.
              </div>
              <div className="modal-footer">
                <a href="https://annishofie.netlify.app/" className="btn btn-outline-light">Kunjungi</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for SUAH */}
      {showSuahModal && (
        <div className="modal show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div style={{ backgroundColor: '#070707' }} className="modal-content text-white">
              <div className="modal-header">
                <h5 className="modal-title">Agie's Snack</h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowSuahModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Agie's Snack adalah sub-brand kami yang fokus pada produk bakery autentik dengan cita rasa yang hangat dan memanjakan lidah.
              </div>
              <div className="modal-footer">
                <a href="https://agiessnack.netlify.app/shop" className="btn btn-outline-light">Kunjungi</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}