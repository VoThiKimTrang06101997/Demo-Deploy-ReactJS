import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <ProductItem />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <ProductItem />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <ProductItem />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <ProductItem />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ProductList;
