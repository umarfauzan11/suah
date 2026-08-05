export default function Gallery() {
    return (
        <section id="portfolio" className="section-padding">
            <div className="container">
                <h2 className="section-title fade-in">Galeri Kami</h2>
                <p className="section-subtitle fade-in delay-1">
                    Lihat beberapa karya terbaik kami yang menonjolkan inovasi dan kualitas.
                </p>

                <div style={{ background: '#EFEFEF', padding: '1rem' }} className="justify-content-center">
                    <h3 style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }} className="section-title-black fade-in">Dari <img src="/img/d53c7dc5-46a1-4fdd-9c40-9f59edfbe885 (1)-Photoroom.png" alt="Logo Annishofie - Sub-brand Baju Tidur SUAH" className="img-fluid" style={{ width: '80px', marginLeft: '30px' }} /></h3>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <div className="portfolio-items ">
                            {/* <img src="/img/3image/imgae.png" className="img-fluid portfolio-main-imgs" alt="Koleksi Baju Tidur Annishofie - Produk estetik dan nyaman" /> */}
                            <img src="/img/3image/imgae1.png" className="img-fluid portfolio-main-imgs" alt="Koleksi Baju Tidur Annishofie - Produk estetik dan nyaman" />
                            <img src="/img/3image/imgae2.png" className="img-fluid portfolio-main-imgs" alt="Koleksi Baju Tidur Annishofie - Produk estetik dan nyaman" />
                            <img src="/img/3image/imgae3.png" className="img-fluid portfolio-main-imgs" alt="Koleksi Baju Tidur Annishofie - Produk estetik dan nyaman" />
                        </div>
                    </div>
                    <span style={{ color: 'black', opacity: '0.5', textAlign: 'center', fontSize: '0.7rem' }}>*Produk berikut bersifat Distro, <a href="">pelajari lebih lanjut mengenai Distro</a></span>
                </div>
                <br />
                <div style={{ background: 'radial-gradient(circle,rgba(171, 103, 36, 1) 0%, rgba(204, 141, 39, 1) 100%)', padding: '1rem' }} className="justify-content-center">
                    <h3 style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }} className="section-title fade-in">Dari <img className="image-responsif" src="/img/logo_transparent.png" alt="Logo Agie's Snack - Sub-brand Bakery SUAH" style={{ width: '90px', paddingLeft: '10px' }} /></h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <div className="portfolio-items">
                            <img src="/img/3image/pirings.png" className="img-fluid portfolio-main-imgs1" alt="Siomay Agie's Snack - Bakery homemade" />
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </section>
    );
}