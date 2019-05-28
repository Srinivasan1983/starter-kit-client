import React, { Component } from "react";
import ProductGrid from "../productgrid";
import ProductEditor from "../producteditor";

class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      selectedProduct: null
    };
  }

  startCustomize = product => {
    this.setState({ showEditor: true, selectedProduct: product });
  };
  cancelCustomize = () => {
    this.setState({ showEditor: false, selectedProduct: null });
  };
  render() {
    if (this.state.showEditor) {
      return (
        <ProductEditor
          key={this.state.selectedProduct.id || -1}
          product={this.state.selectedProduct}
        />
      );
    } else {
      return (
        <ProductGrid
          products={this.props.products}
          startCustomizeCallback={this.startCustomize}
        />
      );
    }
  }
}

export default ProductDisplay;
