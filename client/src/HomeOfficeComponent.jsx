import React from 'react';
import axios from 'axios';

function HomeOfficeComponent() {
  const stopHomeOffice = async () => {
    try {
      const userId = '1';

      const response = await axios.post(`http://localhost:3000/stop-homeoffice/${userId}`);

      if (response.data.success) {
        alert('HomeOffice gestoppt.');
      } else {
        alert('Fehler beim Stoppen des HomeOffice.');
      }
    } catch (error) {
      console.error('Fehler beim Stoppen des HomeOffice:', error.message);
    }
  };

  return (
    <div className="custom-box">
  <header>Welcome</header>
  <div className="input-group">
  <div className="content">
    <img src="start.png" alt="Image 1" />
    <img src="stop.png" alt="Image 2" />
  <div className="input-group btn">
    <button className='btn'>Übersicht</button>
  </div>
  </div>
    </div>
</div>
  );
}

export default HomeOfficeComponent;
