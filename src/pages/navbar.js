import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../style/navbar.css";
import IMG from "../images/logo.png"

function Navbar() {
  let location = useLocation();
  let history = useNavigate();

  const logout = () => {
    localStorage.removeItem('token')
    history("../login");
  }
  const donate = () => {
    history("../donate");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-black">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to="/">
              <img src={IMG} alt="" />
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex justify-content-between" style={{width:"100%"}}>
              <ul className="navbar-nav text-white me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link  ${location.pathname === "/" ? "text-white" : "text-secondary"
                      }`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link  ${location.pathname === "/about" ? "text-white" : "text-secondary"
                      }`}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link  ${location.pathname === "/display" ? "text-white" : "text-secondary"
                      }`}
                    to="/display"
                  >
                    Display
                  </Link>
                </li>
              </ul>
              <div>
                <form>
                  <button className={`btn btn-primary  ${location.pathname === "/admin" ? "" : "d-none"
                    }`} style={{filter:"invert(1)"}} onClick={logout}>
                    Logout
                  </button>
                </form>
                <form>
                  <button className={`btn btn-primary ${location.pathname !== "/admin" ? "" : "d-none"
                    }`} style={{filter:"invert(1)"}} onClick={donate}>
                    DONATE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


export default Navbar;
