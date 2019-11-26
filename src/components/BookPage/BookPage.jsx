import React, { Component } from "react";
import "./style.css";

import BookSmall from '../BookSmall/BookSmall';
export default class BookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookInfo: {
        name: "",
        cover: "",
        author: "",
        price: ""
      }
    };
  }

  componentDidMount() {
    let bookInfo = {
      name: this.props.location.state.name,
      cover: this.props.location.state.cover,
      author: this.props.location.state.author,
      price: this.props.location.state.price
    };
    this.setState({
      bookInfo
    });
  }

  render() {
    return (
      <section className="container">
        <h4>We Recommended</h4>
        <div className="bookPage row">
          <div className="col-sm-3">
            <img className="bookPageImg" src={this.state.bookInfo.cover} />
          </div>
          <div className="bookPageData col-sm-8">
            <p className="bookPageName h1">{this.state.bookInfo.name}</p>
            <p className="bookPageAuthorSec">
              <span>by </span>
              <span className="authorName">{this.state.bookInfo.author}</span>
            </p>
            <div className="rate">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <div className="bookPageDesc">
              <p>Hard Cover</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt facere itaque commodi ex iure architecto ad cumque
                voluptates, quis tempora temporibus quae quod laboriosam tenetur
                praesentium nostrum. Error, repudiandae accusantium.
              </p>
            </div>
            <p className="bookPagePrice">${this.state.bookInfo.price}</p>
          </div>
        </div>
        <div className="row">
          <BookSmall />
          <BookSmall />
          <BookSmall />
          <BookSmall />
          <BookSmall />

        </div>

      </section>
    );
  }
}
