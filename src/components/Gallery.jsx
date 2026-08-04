export default function Gallery() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <h2 className="section-title fade-in">Galeri Kami</h2>
        <p className="section-subtitle fade-in delay-1">
          Lihat beberapa karya terbaik kami/saya yang menonjolkan inovasi dan kualitas.
        </p>
        <div className="row justify-content-center">
          <h3 className="section-title fade-in">Dari <img src="/icon/iconutama.png" alt="" style={{ width: '70px', paddingLeft: '10px' }} /></h3>
          
          {/* Annishofie Gallery */}
          <div className="col-md-6 col-lg-4 mb-4 fade-in delay-2">
            <div className="portfolio-item product-card">
              <img src="/img_gallery_index/annishofie/1.png" className="img-fluid portfolio-main-img" alt="Proyek 1" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 fade-in delay-2">
            <div className="portfolio-item product-card">
              <img src="/img_gallery_index/annishofie/2.png" className="img-fluid portfolio-main-img" alt="Proyek 2" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 fade-in delay-2">
            <div className="portfolio-item product-card">
              <img src="/img_gallery_index/annishofie/3.png" className="img-fluid portfolio-main-img" alt="Proyek 3" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 fade-in delay-2">
            <div className="portfolio-item product-card">
              <img src="/img_gallery_index/annishofie/4.png" className="img-fluid portfolio-main-img" alt="Proyek 4" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 fade-in delay-2">
            <div className="portfolio-item product-card">
              <img src="/img_gallery_index/annishofie/5.png" className="img-fluid portfolio-main-img" alt="Proyek 5" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 fade-in delay-2">
            <div className="portfolio-item product-card">
              <img src="/img_gallery_index/annishofie/6.png" className="img-fluid portfolio-main-img" alt="Proyek 6" />
            </div>
          </div>

          {/* Agie's Snack Gallery */}
          <h3 className="section-title fade-in">Dari <img src="/img/logo_transparent.png" alt="" style={{ width: '90px', paddingLeft: '10px' }} /></h3>
          <div className="col-md-6 col-lg-4 mb-4 fade-in delay-3">
            <div className="portfolio-item product-card">
              <img src="/img_gallery_index/agies_snack/kentangsiomay.png" className="img-fluid portfolio-main-img" alt="Proyek 7" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 fade-in delay-3">
            <div className="portfolio-item product-card">
              <img src="/img_gallery_index/agies_snack/siomay.png" className="img-fluid portfolio-main-img" alt="Proyek 8" />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 fade-in delay-3">
            <div className="portfolio-item product-card">
              <img src="/img_gallery_index/agies_snack/brownis.png" className="img-fluid portfolio-main-img" alt="Proyek 9" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}