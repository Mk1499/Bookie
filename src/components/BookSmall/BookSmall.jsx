import React, { Component } from "react";

export default class BookSmall extends Component {
  render() {
    return (
      <section className="smallCard col-md-2 col-5">
        <img
          src="https://www.quirkbooks.com/sites/default/files/editor_uploads/original/IISFanArt1_0.jpg"
          width="100%"
          height="80vh"
          className="smallCardImg"
        />
        <p className="smallBookName">The Light Between</p >
        <p className="bookPageAuthorSec">
          by <span className="smallAuthorName">Dan Brown</span>
        </p>
        <div className="rate">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        <p className="smallBookPrice">$13.00</p>
      </section>
    );
  }
}
