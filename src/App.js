import './App.css';
import './components/Navbar.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import About from './components/About';
import Sidebar from './components/Sidebar.js';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import NotFound from './components/NotFound';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // Switch to enable Dark Mode or Light Mode
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

  // If Dark Mode Enabled then Switch the colors
  const [colorMode, setColorMode] = useState(null);
  const switchColorMode = (e) => {
    if (mode === "dark") {
      setColorMode(e.target.getAttribute('modecolor'));
    }
  }
  if (colorMode && mode === "dark") {
    switch (colorMode) {
      case ("secondary"):
        document.body.style.backgroundColor = "#585858";
        break;
      case ("primary"):
        document.body.style.backgroundColor = "#0c3a50";
        break;
      case ("danger"):
        document.body.style.backgroundColor = "#2e0c0c";
        break;
      case ("warning"):
        document.body.style.backgroundColor = "#423e0b";
        break;
      default:
        document.body.style.backgroundColor = "#585858";
        break;
    }
  }

  // Alert If need to display
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
    <Router basename='/react1/'>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} switchColorMode={switchColorMode} colorMode={colorMode} />
      <Alert alert={alert} />
      <div className="container">
        <div className="row my-4">
          <div className="col">
            <div className="card" style={{ backgroundColor: mode === "light" ? "white" : "#444444", color: mode === "light" ? "black" : "white" }}>
              <div className="card-body">
                <Routes>
                  <Route exact path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />} />
                  <Route exact path="/about" element={<About mode={mode} />} />
                  <Route exact path="/*" element={<NotFound />} />
                </Routes>
                {/* <hr className='my-4' /> */}
              </div>
            </div>
          </div>
          <Sidebar mode={mode} />
        </div>
      </div>
    </Router>
  );
}

export default App;
