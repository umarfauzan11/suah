import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import "./styles/home.css";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Helmet>
          {/* Primary Meta Tags */}
          <title>SUAH - Bakery & Baju Tidur | CV. SUAH</title>
          <meta name="title" content="SUAH - Bakery & Baju Tidur | CV. SUAH" />
          <meta name="description" content="CV. SUAH - Brand gaya hidup yang menyatukan kehangatan rasa dan kenyamanan berbusana. Produk bakery autentik dan baju tidur estetik yang berkualitas tinggi. Melayani dengan sepenuh hati di Depok, Jawa Barat." />
          <meta name="keywords" content="SUAH, bakery, baju tidur, CV SUAH, bakery Depok, baju tidur estetik, bakery autentik, brand lifestyle, produk bakery, pakaian rumah, Annishofie, Agie's Snack" />
          <meta name="author" content="CV. SUAH" />
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <link rel="canonical" href="https://suah.web.id/" />

          {/* Open Graph / Facebook / WhatsApp / Instagram */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://suah.web.id/" />
          <meta property="og:title" content="SUAH - Bakery & Baju Tidur | Brand Gaya Hidup Modern" />
          <meta property="og:description" content="CV. SUAH menghadirkan produk bakery autentik dan baju tidur estetik. Misi kami menyatukan kehangatan rasa dan kenyamanan berbusana di rumah. Kunjungi kami di Depok, Jawa Barat." />
          <meta property="og:image" content="https://suah.web.id/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="SUAH - Bakery & Baju Tidur" />
          <meta property="og:site_name" content="SUAH" />
          <meta property="og:locale" content="id_ID" />

          {/* Twitter / X Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://suah.web.id/" />
          <meta name="twitter:title" content="SUAH - Bakery & Baju Tidur | Brand Gaya Hidup Modern" />
          <meta name="twitter:description" content="CV. SUAH menghadirkan produk bakery autentik dan baju tidur estetik. Misi kami menyatukan kehangatan rasa dan kenyamanan berbusana di rumah." />
          <meta name="twitter:image" content="https://suah.web.id/og-image.jpg" />
          <meta name="twitter:image:alt" content="SUAH - Bakery & Baju Tidur" />
        </Helmet>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
