import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import PopularBooks from "../PopularBooks/PopularBooks";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Carousel />
        <PopularBooks />
      </>
    );
  }
}
