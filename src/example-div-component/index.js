// rcc
import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import ProductList from "./ProductList";
import Footer from "./Footer";

class ExampleDivComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <ProductList/>
        <Footer />
      </div>
    );
  }
}

export default ExampleDivComponent;
