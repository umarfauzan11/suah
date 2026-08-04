export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 fade-in">
            <h1 className="hero-title">Selamat datang</h1>
            <p className="hero-subtitle">Membangun Solusi Inovatif untuk Masa Depan Digital Anda.</p>
            <a href="#about" className="btn btn-outline-dark btn-lg">Pelajari Lebih Lanjut</a>
          </div>
            <div style={{marginTop: '1.6rem'}} className="col-lg-6 fade-in">
              <img src="/img/ads1.png" width={390} alt="SUAH - Brand Bakery dan Baju Tidur di Depok, Jawa Barat" className="hero-img" />
            </div>
        </div>
      </div>
    </section>
  );
}