import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow-sm`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/service">Services</Link>
                        </li>
                    </ul>
                    <div className='d-flex align-items-center'>
                        {props.mode === "dark" && <div className='d-flex me-2'>
                            <div className='mx-1 bg-secondary' modecolor="secondary" style={{ width: "15px", height: "15px", borderRadius: "50%", cursor: "pointer" }} onClick={props.switchColorMode}></div>
                            <div className='mx-1 bg-primary' modecolor="primary" style={{ width: "15px", height: "15px", borderRadius: "50%", cursor: "pointer" }} onClick={props.switchColorMode}></div>
                            <div className='mx-1 bg-danger' modecolor="danger" style={{ width: "15px", height: "15px", borderRadius: "50%", cursor: "pointer" }} onClick={props.switchColorMode}></div>
                            <div className='mx-1 bg-warning' modecolor="warning" style={{ width: "15px", height: "15px", borderRadius: "50%", cursor: "pointer" }} onClick={props.switchColorMode}></div>
                        </div>}
                        <div className={`form-check form-switch text-${props.mode === "light" ? "black" : "white"}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}</label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'TextUtils'
};