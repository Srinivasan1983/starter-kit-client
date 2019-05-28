import React, { Component } from "react";
import {
  Jumbotron,
  Row,
  Col
} from "react-bootstrap";
import ProductEditorContent from "./ProductEditorContent";

import { connect } from "react-redux";

import { WithProductService } from "../../hoc";
import {
  fetchProductById,
  fetchRemainingProductById
} from "../../../actions/productActions";
import ProductRemaining from "./ProductRemaining";

class ProductEditor extends Component {
  componentDidMount() {
    this.props.fetchProductById(this.props.match.params.id);
    this.props.fetchRemainingProductById(this.props.match.params.id);
  }

  render() {
    const { error, loading, product, otherproductkit } = this.props;
    console.log(otherproductkit);

    if (error) {
      return <div>{error.message}</div>;
    }
    if (
      loading ||
      loading === undefined ||
      product === undefined ||
      !product.length
    ) {
      return <div>Loading...</div>;
    }

    return (
      <Jumbotron style={{background:"white"}}>
        <Row>
          <Col xs={12} sm={6}>
            {product.map(item => (
              <ProductEditorContent
                product={item}
                key={item.id}
                startCustomizeCallback={this.props.startCustomizeCallback}
              />
            ))}
          </Col>
          <Col>
            {otherproductkit.map(item => (
              <ProductRemaining
                otherproductkit={item}
                key={item.id}
                startCustomizeCallback={this.props.startCustomizeCallback}
              />
            ))}
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => {
  const { product, loading, error } = state.updateProductList;
  const { otherproductkit, loading1, error1 } = state.remainingProductList;
  return { otherproductkit, loading1, error1, product, loading, error };
};

const mapDispatchToProps = (dispatch, { productService }) => {
  return {
    fetchProductById: fetchProductById(dispatch, productService),
    fetchRemainingProductById: fetchRemainingProductById(
      dispatch,
      productService
    )
  };
};

export default WithProductService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductEditor)
);
