import './App.css';
import './components/Navbar.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import About from './components/About';
import Sidebar from './components/Sidebar.js';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#585858";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      type: type,
      message: message
    });
    setTimeout(() => {
      document.querySelectorAll('.alert').forEach((element) => {
        setAlert(null)
      })
    }, 3000);
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <div className="row my-4">
          <div className="col">
            <div className="card" style={{ backgroundColor: mode === "light" ? "white" : "#444444", color: mode === "light" ? "black" : "white" }}>
              <div className="card-body">
                <TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />
                <hr className='my-4' />
                <About mode={mode} />
              </div>
            </div>
          </div>
          <Sidebar mode={mode} />
        </div>
      </div>
    </>
  );
}

export default App;
