import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMonkey
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                style={{ "--bs-scroll-height": "100px" }}
              >
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    General
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
