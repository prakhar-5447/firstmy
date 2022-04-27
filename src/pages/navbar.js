import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../style/navbar.css";
import IMG from "../images/logo.png"

function Navbar() {
  let location = useLocation();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div className="navbar-brand">
            <Link to="/">
              <img src={IMG} alt="" />
            </Link>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link  ${location.pathname === "/" ? "active" : ""
                      }`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link  ${location.pathname === "/about" ? "active" : ""
                      }`}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === "/display" ? "active" : ""
                      }`}
                    to="/display"
                  >
                    Display
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


export default Navbar;
