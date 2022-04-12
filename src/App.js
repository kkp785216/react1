import './App.css';
import './components/Navbar.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import About from './components/About';
import Sidebar from './components/Sidebar.js';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
        <div className="row my-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <TextForm heading="Enter your text to analyze" />
                <hr className='my-4' />
                <About/>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
