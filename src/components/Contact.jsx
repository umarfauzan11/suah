const sendToWhatsApp = (event) => {
  event.preventDefault();
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const subjek = document.getElementById('subjek').value;
  const pesan = document.getElementById('pesan').value;
  const message = `Nama: ${nama}\nEmail: ${email}\nSubjek: ${subjek}\nPesan: ${pesan}`;
  const whatsappUrl = `https://wa.me/62818404422?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="section-title fade-in">Hubungi Kami</h2>
        <p className="section-subtitle fade-in delay-1">
          Punya pertanyaan? Jangan ragu untuk menghubungi kami.
        </p>
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0 fade-in delay-2">
            <div className="contact-info">
              <h4 className="mb-4">Informasi Kontak</h4>
              <p><i className="fas fa-map-marker-alt"></i>Jl. Griya Sawangan Asri Blok E1 No 12A, Pasir Putih, Sawangan, Depok, Jawa Barat</p>
              <p><i className="fas fa-phone"></i>0818404422 / 081779546781 (dev)</p>
              <p><i className="fas fa-envelope"></i>usahlanbuiness@gmail.com</p>
              <p><i className="fas fa-globe"></i>hellosuah.netlify.app</p>
            </div>
          </div>
          <div className="col-lg-6 fade-in delay-3">
            <h4 className="mb-4">Kirim Pesan</h4>
            <form onSubmit={sendToWhatsApp} className="contact-form">
              <div className="mb-3">
                <input type="text" className="form-control" id="nama" placeholder="Nama Lengkap" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" id="email" placeholder="Alamat Email" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="subjek" placeholder="Subjek" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" id="pesan" rows="5" placeholder="Pesan Anda" required></textarea>
              </div>
              <button type="submit" className="btn btn-dark">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}