export default function Gallery() {
    return (
        <section id="portfolio" className="section-padding">
            <div className="container">
                <h2 className="section-title fade-in">Galeri Kami</h2>
                <p className="section-subtitle fade-in delay-1">
                    Lihat beberapa karya terbaik kami/saya yang menonjolkan inovasi dan kualitas.
                </p>
                <div className="justify-content-center">
                    <h3 style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }} className="section-title fade-in">Dari <img src="/img/d53c7dc5-46a1-4fdd-9c40-9f59edfbe885 (1)-Photoroom.png" alt="Logo Annishofie - Sub-brand Baju Tidur SUAH" className="img-fluid" style={{ width: '80px', filter: 'brightness(0) invert(1)', mixBlendMode: 'difference', marginLeft: '10px' }} /></h3>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <div className="portfolio-item product-card">
                            <img src="https://res.cloudinary.com/qps5i0wp/image/upload/v1785847836/2_i19ft6.png" className="img-fluid portfolio-main-img" alt="Koleksi Baju Tidur Annishofie - Produk estetik dan nyaman" />
                        </div>
                        <div className="portfolio-item product-card">
                            <img src="https://res.cloudinary.com/qps5i0wp/image/upload/v1785847837/1_qepee2.png" className="img-fluid portfolio-main-img" alt="Baju Tidur Annishofie - Gaya dan kenyamanan" />
                        </div>
                        <div className="portfolio-item product-card">
                            <img src="https://res.cloudinary.com/qps5i0wp/image/upload/v1785847837/16_ljjgka.png" className="img-fluid portfolio-main-img" alt="Katalog Baju Tidur Annishofie - Pilihan terbaik" />
                        </div>
                        <div className="portfolio-item product-card">
                            <img src="https://res.cloudinary.com/qps5i0wp/image/upload/v1785847839/4_zrlukc.png" className="img-fluid portfolio-main-img" alt="Produk Baju Tidur Annishofie - Kualitas premium" />
                        </div>
                        <div className="portfolio-item product-card">
                            <img src="https://res.cloudinary.com/qps5i0wp/image/upload/v1785847839/3_bkjfhk.png" className="img-fluid portfolio-main-img" alt="Baju Tidur Wanita Annishofie - Desain estetik" />
                        </div>
                        <div className="portfolio-item product-card">
                            <img src="https://res.cloudinary.com/qps5i0wp/image/upload/v1785847840/8_s46ipx.png" className="img-fluid portfolio-main-img" alt="Koleksi Terbaru Annishofie - Baju Tidur" />
                        </div>
                    </div>

                    {/* Agie's Snack Gallery */}
                    <h3 style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }} className="section-title fade-in">Dari <img src="/img/logo_transparent.png" alt="Logo Agie's Snack - Sub-brand Bakery SUAH" style={{ width: '90px', paddingLeft: '10px' }} /></h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <div className="portfolio-item product-card">
                            <img src="https://res.cloudinary.com/qps5i0wp/image/upload/v1785847958/siomay_zwjhkg.png" className="img-fluid portfolio-main-img" alt="Siomay Agie's Snack - Bakery homemade" />
                        </div>
                        <div className="portfolio-item product-card">
                            <img src="https://res.cloudinary.com/qps5i0wp/image/upload/v1785847959/brownis_jpmd5o.png" className="img-fluid portfolio-main-img" alt="Brownis Agie's Snack - Dessert lezat" />
                        </div>
                        <div className="portfolio-item product-card">
                            <img src="https://res.cloudinary.com/qps5i0wp/image/upload/v1785847960/kentangsiomay_deuw6p.png" className="img-fluid portfolio-main-img" alt="Kentang Siomay Agie's Snack - Camilan sehat" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}