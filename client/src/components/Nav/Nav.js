import React from "react";
import { Link } from "react-router-dom"

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
    <span className="navbar-brand mb-0 h1">NYTimes Search</span>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColaspe" aria-controls="navbarColaspe" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColaspe">
      <ul className="navbar-nav mr-auto">
        <li className={window.location.pathname === "/" ? "active nav-item" : "nav-item"}>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className={window.location.pathname === "/saved" ? "active nav-item" : "nav-item"}>
          <Link className="nav-link" to="/saved">Saved</Link>
        </li>
      </ul>

    </div>
  </nav>
)

export default Nav