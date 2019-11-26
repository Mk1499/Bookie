import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default class BookCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: this.props.viewType
    };
    console.log(this.state.viewType);
  }

  // check if view state changed
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.viewType !== prevState.viewType) {
      return { viewType: nextProps.viewType };
    } else return null;
  }

  render() {
    return (
      <section
        className={`text-center ${
          this.state.viewType != "grid"
            ? "d-flex justify-content-center col-md-12"
            : " col-lg-3 col-md-4 "
        }  `}
      >
        <Link
          to={{
            pathname: "/details",
            state: {
              name: this.props.bookInfo.name,
              cover:
                this.props.bookInfo.cover ||
                "https://demo.tokopress.com/bookie/wp-content/uploads/sites/7/2016/06/book-23-250x333.jpg",
              author: this.props.bookInfo.author,
              price: this.props.bookInfo.price
            }
          }}
        >
          <div className="bookCard align-self-center">
            <img
              src={
                this.props.bookInfo.cover ||
                "https://demo.tokopress.com/bookie/wp-content/uploads/sites/7/2016/06/book-23-250x333.jpg"
              }
              className={`bookImage ${this.state.viewType!='grid'?'list':null}`}
            />
            <p className="bookName">{this.props.bookInfo.name}</p>
            <p className="bookNote">{this.props.bookInfo.author}</p>
            <p>
              {this.props.bookInfo.oldPrice ? (
                <del>
                  <span className="oldPrice">
                    ${this.props.bookInfo.oldPrice}
                  </span>
                </del>
              ) : null}
              <span className="newPrice">${this.props.bookInfo.price}</span>
            </p>
            <div className="bookBtns">
              <button className="btn bookDetails">
                <i className="fa fa-paper-plane" />
                Detail
              </button>
              <button className=" btn bookBuy">
                <i className="fa fa-shopping-cart" />
                Buy
              </button>
            </div>
          </div>
        </Link>
      </section>
    );
  }
}
