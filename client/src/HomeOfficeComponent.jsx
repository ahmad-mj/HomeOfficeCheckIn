import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomeOfficeComponent({ userInformation }) {
  const [homeOfficeTimes, setHomeOfficeTimes] = useState([]);
  const [showOverview, setShowOverview] = useState(false);
  const { userId } = userInformation;

  const fetchHomeOfficeTimes = async () => {
    try {
      if (userId) {
        const response = await axios.get(`http://localhost:3000/home-office-times/${userId}`);
        setHomeOfficeTimes(response.data);
      }
    } catch (error) {
      console.error('Fehler beim Abrufen der Home-Office-Zeiten:', error.message);
    }
  };

  const stopHomeOffice = async () => {
    try {
      if (userId) {
        const response = await axios.post(`http://localhost:3000/stop-homeoffice/${userId}`);
        if (response.data.success) {
          fetchHomeOfficeTimes(); // Update Home-Office-Time
          alert('HomeOffice gestoppt. Endzeit: ' + response.data.endTime);
        } else {
          alert('Fehler beim Stoppen des HomeOffice.');
        }
      }
    } catch (error) {
      console.error('Fehler beim Stoppen des HomeOffice:', error.message);
    }
  };

  const startHomeOffice = async () => {
    try {
      if (userId) {
        const response = await axios.post(`http://localhost:3000/start-homeoffice/${userId}`);
        if (response.data.success) {
          fetchHomeOfficeTimes(); // Update Home-Office-Time
          alert('HomeOffice gestartet. Startzeit: ' + response.data.startTime);
        } else {
          alert('Fehler beim Starten des HomeOffice.');
        }
      }
    } catch (error) {
      console.error('Fehler beim Starten des HomeOffice:', error.message);
    }
  };

  useEffect(() => {
    fetchHomeOfficeTimes();
  }, [userId]);

  return (
    <div className="container">
      <header>HomeOffice Start</header>
      <div className="wrapper">
        <h3>HomeOffice CheckIn - Start</h3>
        <div className='inner-box' >
          <div className="content">
            <img src="green_start.png" alt="start symbole" className='active-img' onClick={startHomeOffice} />
            <img src="stop.png" alt="stop symbole" />
          </div>
          <div className=" btn">
            <button onClick={() => setShowOverview(true)}>
              Übersicht
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <header>HomeOffice Start</header>
        <div className="wrapper">
          <h3>HomeOffice CheckIn - Stop</h3>
          <div className='inner-box' >
            <div className="content">
              <img src="start.png" alt="start symbole" />
              <img src="red_stop.png" alt="stop symbole" className='active-img' onClick={stopHomeOffice} />
            </div>
            <div className=" btn">
              <button onClick={() => setShowOverview(true)}>
                Übersicht
              </button>
            </div>
          </div>
        </div>
      </div>
      {showOverview && (
        <div>
          {homeOfficeTimes.map((time, index) => (
            <div key={index}>
              {`Startzeit: ${time.startTime || 'N/A'}, Endzeit: ${time.endTime || 'N/A'}`}
            </div>
          ))}
          <button onClick={() => setShowOverview(false)}>
            Zurück
          </button>
        </div>
      )}
    </div>
  );
}

export default HomeOfficeComponent;
