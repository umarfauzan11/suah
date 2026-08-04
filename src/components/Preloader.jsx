import { useEffect } from 'react';

export default function Preloader() {
  useEffect(() => {
    const handleLoad = () => {
      document.body.classList.add('loaded');
      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.remove();
        }
      }, 500);
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div id="preloader">
      <div id="preloader-content">
        <img 
          id="preloader-logo" 
          src="/icon/suahpreloader.png" 
          alt="Annishofie Logo" 
        />
        <div className="spinner"></div>
      </div>
    </div>
  );
}