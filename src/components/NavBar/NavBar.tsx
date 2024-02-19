import React from "react";
import WheelChairIcon from "../../images/wheelchair-mini.png";

function NavBar() {
  return (
    <header>
      <div className="layout-container">
        <div className="navbar-content">
          <div className="logo">
            <img
              src={WheelChairIcon}
              alt="A wheelchair with a heart above it, slightly to the right hand side"
            />
          </div>

          <div className="menu-options">
            <div className="option button-like">
              <a href="#povestea-mea-section">Povestea Mea</a>
            </div>

            <div className="option on-hover">
              <a href="#ataxia-freidreich-section">
                Ataxia <span className="new-line">Friedreich</span>
              </a>
            </div>

            <div className="option button-like">
              <a href="#exista-o-speranta">Există o speranță</a>
            </div>

            <div className="option on-hover">
              <a href="#support">
                Dacă vrei <span className="new-line">să mă susții</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
