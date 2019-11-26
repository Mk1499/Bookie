import React, { Component } from "react";

import BookCard from "../BookCard/BookCard";

import "./plugin";

export default class PopularBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: "grid"
    };
  }

  changeViewType = newType => {
    this.setState({
      viewType: newType
    });
  };

  render() {
    return (
      <section className="popularBooks container" id="popular">
        <h2 className="sectionHead text-center">Popular Books</h2>
        <div className="bookBtns d-flex justify-content-center viewBtns">
          <button
            className="btn  bookDetails"
            onClick={() => this.changeViewType("list")}
          >
            <i className="fa fa-bars" />
            List
          </button>
          <button
            className=" btn bookBuy activeBtn"
            onClick={() => this.changeViewType("grid")}
          >
            <i className="fa fa-th"></i>
            Grid
          </button>
        </div>
        <div className="row">
          <BookCard
            viewType={this.state.viewType}
            bookInfo={{
              cover:
                "https://demo.tokopress.com/bookie/wp-content/uploads/sites/7/2016/06/book-22.jpg",
              name: "The Davinci Code",
              author: "Dan Brawn",
              oldPrice: "30.00",
              price: "25.00"
            }}
          />
          <BookCard
            viewType={this.state.viewType}
            bookInfo={{
              cover:
                "https://images-na.ssl-images-amazon.com/images/I/81p-TOxVbxL.jpg",
              name: "The Origin",
              author: "Dan Brawn",
              price: "35.00"
            }}
          />
          <BookCard
            viewType={this.state.viewType}
            bookInfo={{
              cover: "",
              name: "See Me",
              author: "MKhaled",
              price: "9.00"
            }}
          />
          <BookCard
            viewType={this.state.viewType}
            bookInfo={{
              cover:
                "https://www.quirkbooks.com/sites/default/files/editor_uploads/original/IISFanArt1_0.jpg",
              name: "If I Stay",
              author: "Gayle Forman",
              price: "20.00"
            }}
          />
        </div>
      </section>
    );
  }
}
