import React, { Component } from "react";

// import styles
import "./style.css";

export default class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item one active">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 carCaption">
                  <p className="smallCaption">
                    Reading is the best for get idea
                  </p>
                  <p className="bigCaption">Start Reading</p>
                  <a
                    className="btn btn-secondary js-scroll-trigger"
                    href="#popular"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item two">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 carCaption">
                  <p className="smallCaption">
                    Reading is the best for get idea
                  </p>
                  <p className="bigCaption">Keep Reading</p>
                  <a
                    className="btn btn-secondary js-scroll-trigger"
                    href="#popular"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item three">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 carCaption">
                  <p className="smallCaption">
                    Writing to improve your imagination
                  </p>
                  <p className="bigCaption">Let's Writing</p>
                  <a
                    className="btn btn-secondary  js-scroll-trigger"
                    href="#popular"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
