import React from "react";
import "./Navbar.css";
import Logo from "../../assets/itcitylogo-white.png";

const Navbar = () => {
  return (
    <nav
      id="mainNav"
      className="navbar navbar-dark navbar-expand-md sticky-top py-3"
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center">
          <img src={Logo} alt="" srcset="" />
        </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navcol-1" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Projects</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="dropdown-toggle nav-link"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                href="#"
              >
                Dropdown{" "}
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  First Item
                </a>
                <a class="dropdown-item" href="#">
                  Second Item
                </a>
                <a class="dropdown-item" href="#">
                  Third Item
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link">Offer-Zone</a>
            </li>
          </ul>
          <form>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              id="form1"
            />
          </form>
          <a className="btn btn-outline-success shadow" role="button">
            Search
          </a>
          <i className="fa fa-shopping-cart mx-1rem" />
          <i className="fa fa-user mx-1rem" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
