import { useState } from 'react';

export default function MaintenanceNotification() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div id="maintenance-notification" className="maintenance-notification">
      <i className="fas fa-exclamation-triangle" style={{ marginRight: '10px' }}></i>
      <span>Website sedang dalam Pengembangan. Mohon maaf atas ketidaknyamanannya.</span>
      <button className="close-btn" onClick={handleClose}>&times;</button>
    </div>
  );
}