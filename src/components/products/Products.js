import React, { Component } from "react";
import ProductDisplay from "./productdisplay";

import { WithProductService } from "../hoc";
import { fetchProducts } from "../../actions/productActions";
import { connect } from "react-redux";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "100% Ready Kit",
          image:
            "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/O1_300x.png?v=1554528793",
          price: 189.9,
          category: "Starter Kit",
          weight: 0,
          available: true,
          description: "Take an organized step...",
          customization: [
            {
              matresssize: ["90x200 CM", "120x200 CM", "180x200 CM"],
              towelcolor: ["white", "cream", "skyblue"],
              beddingcolor: ["white", "lightblue", "lightgrey"]
            }
          ]
        },
        {
          id: 2,
          name: "HTH Tailored 100% Ready Kit",
          image:
            "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/O4_300x.png?v=1554528799",
          price: 181.9,
          category: "Starter Kit",
          weight: 0,
          available: true,
          description: "Take an organized step...",
          customization: [
            {
              matresssize: ["90x200 CM", "120x200 CM", "180x200 CM"],
              towelcolor: ["white", "cream", "skyblue"],
              beddingcolor: ["white", "lightblue", "lightgrey"]
            }
          ]
        },
        {
          id: 3,
          name: "Essentials Kit",
          image:
            "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/O1_300x.png?v=1554528793",
          price: 169.9,
          category: "Starter Kit",
          weight: 0,
          available: false,
          description: "Take an organized step...",
          customization: [
            {
              matresssize: ["90x200 CM", "120x200 CM", "180x200 CM"],
              towelcolor: ["white", "cream", "skyblue"],
              beddingcolor: ["white", "lightblue", "lightgrey"]
            }
          ]
        }
      ]
    };
  }
  render() {
    
    const { error, loading, products } = this.props;

    if (error) {
      return <div>{error.message}</div>;
    }
    if (loading || loading === undefined || products === undefined || !products.length) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ProductDisplay name="products" products={products} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { products, loading, error } = state.updateProductList
  return { products, loading, error };
};

const mapDispatchToProps = (dispatch, { productService }) => {
  return {
    fetchProducts: fetchProducts(dispatch, productService)
  };
};

export default WithProductService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Products)
);
