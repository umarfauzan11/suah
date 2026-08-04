export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '1rem 2rem'}}>
            <div className="fade-in">
              <img src="/icon/suah_icon.png" alt="Logo CV. SUAH - Brand Bakery dan Baju Tidur" className="img-fluid about-img" />
            </div>
          <div className="col-lg-6 fade-in delay-1 about-text mt-4 mt-lg-0">
            <h2 className="section-titles">Tentang Kami</h2>
            <p className="section-desc">
              CV. SUAH adalah perusahaan dengan pelayanan di Bidang Bakery dan Baju Tidur. Kami bersemangat untuk melayani klien dengan sepenuh hati dan memberikan solusi terbaik untuk kebutuhan mereka.
            </p>
            <p className="section-desc">
              Misi kami adalah Menjadi sebuah brand gaya hidup yang menyatukan kehangatan rasa dan kenyamanan berbusana di rumah, melalui produk bakery yang autentik dan baju tidur yang lembut dan estetik. Kami menghadirkan produk yang berkualitas tinggi, detail dalam proses, dan ramah digunakan sehari-hari. Komitmen kami adalah menjaga kualitas tanpa kompromi, menciptakan pengalaman yang nyaman, melayani dengan hati, terus berinovasi secara relevan, serta menjalankan usaha secara etis dan bertanggung jawab terhadap lingkungan.
            </p>
            <a href="kontak.html" className="btn btn-outline-dark">Hubungi Kami</a>
          </div>
        </div>
      </div>
    </section>
  );
}