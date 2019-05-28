import React, { Component } from "react";
import ProductGridContent from "./ProductGridContent";

class ProductGrid extends Component {
  render() {
    return this.props.products.map(item => (
      <ProductGridContent
        product={item}
        key={item.id}
        startCustomizeCallback={this.props.startCustomizeCallback}
      />
    ));
  }
}

export default ProductGrid;
