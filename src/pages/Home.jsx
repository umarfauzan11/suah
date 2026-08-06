import Preloader from '../components/Preloader';
import MaintenanceNotification from '../components/MaintenanceNotification';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import SubBrands from '../components/SubBrands';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import VeloraEmbed from '@bmdu_studio/velora-embed';

export default function Home() {
  return (
    <div className="app">
      <Preloader />
      <MaintenanceNotification />
      <Navbar />
      <VeloraEmbed
        context="general"
        title="Tanya Velora"
        themeColor="#D4AF37"
      />
      <Hero />
      <About />
      <SubBrands />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}