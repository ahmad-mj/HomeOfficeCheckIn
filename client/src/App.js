import './App.css';
import HomeOfficeComponent from './HomeOfficeComponent';
import LoginComponent from './LoginComponent';

function App() {
  return (
    <div className="App">
      Client serving
      <LoginComponent />
      <HomeOfficeComponent></HomeOfficeComponent>
    </div>
  );
}

export default App;
