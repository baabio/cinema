import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" id='verte'>FAVFLICKS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <span className="visually-hidden">(current)</span>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="search" placeholder="Search movies..." />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit" id='green'>Search</button>
            </form>
            <a className="nav-link" href="#" id='white'><h5>Favorite</h5></a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;