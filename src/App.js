import './App.css';
import './components/navbar.js';
import Navbar from './components/navbar.js';
import Sidebar from './components/sidebar.js';

function App() {
  let myName = "Krishna";
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
        <div className="row my-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <p>Hello this is <b>{myName}</b></p>
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
