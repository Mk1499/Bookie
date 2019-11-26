import React, { Component } from "react";

import "./navPlugin";
import "./style.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <p className="brandName">Bookie</p>
            <p className="brandSlogan">Book-Shop for Books Lovers</p>
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#page-top">
                  Home
                </a>
                <hr />
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#popular">
                  BookStore
                </a>
                <hr />
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  Blog
                </a>
                <hr />
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  VCAddOns
                </a>
                <hr />
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  MY Account
                </a>
                <hr />
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  Contact
                </a>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
