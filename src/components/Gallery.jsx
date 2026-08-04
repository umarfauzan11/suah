export default function Gallery() {
    return (
        <section id="portfolio" className="section-padding">
            <div className="container">
                <h2 className="section-title fade-in">Galeri Kami</h2>
                <p className="section-subtitle fade-in delay-1">
                    Lihat beberapa karya terbaik kami/saya yang menonjolkan inovasi dan kualitas.
                </p>
                <div className="justify-content-center">
                    <h3 style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}} className="section-title fade-in">Dari <img src="/icon/iconutama.png" alt="" style={{ width: '70px', paddingLeft: '10px' }} /></h3>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <div className="portfolio-item product-card">
                            <img src="/img_gallery_index/annishofie/1.png" className="img-fluid portfolio-main-img" alt="Proyek 1" />
                        </div>
                        <div className="portfolio-item product-card">
                            <img src="/img_gallery_index/annishofie/2.png" className="img-fluid portfolio-main-img" alt="Proyek 2" />
                        </div>
                        <div className="portfolio-item product-card">
                            <img src="/img_gallery_index/annishofie/3.png" className="img-fluid portfolio-main-img" alt="Proyek 3" />
                        </div>
                        <div className="portfolio-item product-card">
                            <img src="/img_gallery_index/annishofie/4.png" className="img-fluid portfolio-main-img" alt="Proyek 4" />
                        </div>
                        <div className="portfolio-item product-card">
                            <img src="/img_gallery_index/annishofie/5.png" className="img-fluid portfolio-main-img" alt="Proyek 5" />
                        </div>
                        <div className="portfolio-item product-card">
                            <img src="/img_gallery_index/annishofie/6.png" className="img-fluid portfolio-main-img" alt="Proyek 6" />
                        </div>
                    </div>

                    {/* Agie's Snack Gallery */}
                    <h3 style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}} className="section-title fade-in">Dari <img src="/img/logo_transparent.png" alt="" style={{ width: '90px', paddingLeft: '10px' }} /></h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <div className="portfolio-item product-card">
                            <img src="/img_gallery_index/agies_snack/kentangsiomay.png" className="img-fluid portfolio-main-img" alt="Proyek 7" />
                        </div>
                        <div className="portfolio-item product-card">
                            <img src="/img_gallery_index/agies_snack/siomay.png" className="img-fluid portfolio-main-img" alt="Proyek 8" />
                        </div>
                        <div className="portfolio-item product-card">
                            <img src="/img_gallery_index/agies_snack/brownis.png" className="img-fluid portfolio-main-img" alt="Proyek 9" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}