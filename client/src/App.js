import React, { useState } from "react";
import "./App.css";
import LoginComponent from "./LoginComponent";
import HomeOfficeComponent from "./HomeOfficeComponent";

function App() {
  const [userInformation, setUserInformation] = useState(null);

  const handleLogin = (userData) => {
    setUserInformation(userData);
  };

  return (
    <div className="App">
      {userInformation ? (
        <HomeOfficeComponent userInformation={userInformation} />
      ) : (
        <LoginComponent onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
