import React from 'react';
import axios from 'axios';

function HomeOfficeComponent() {

  const stopHomeOffice = async () => {
    try {
      const userId = '1'; // userId should be dynamic

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

  const startHomeOffice = async () => {
    try {
      const userId = '1';

      const response = await axios.post(`http://localhost:3000/start-homeoffice/${userId}`);

      if (response.data.success) {
        alert('HomeOffice started.');
      } else {
        alert('error starting HomeOffice.');
      }
    } catch (error) {
      console.error('error starting HomeOffice.:', error.message);
    }
  };

  return (
    <>
   
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
            <button >
              Übersicht
            </button>
          </div>
         
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
            <button >
              Übersicht
            </button>
          </div>
         
        </div>
      </div>
    </div>
    </>
    
  );
}

export default HomeOfficeComponent;
