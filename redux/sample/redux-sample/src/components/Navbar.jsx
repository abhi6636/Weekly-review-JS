import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      id="mainNav"
      className="navbar navbar-dark navbar-expand-md sticky-top py-3"
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon">
            <i className="fa fa-user" />
          </span>
          <span>User Manager with MERN</span>
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
          <ul className="navbar-nav mx-auto" />
          <a className="btn btn-primary shadow" role="button">
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
