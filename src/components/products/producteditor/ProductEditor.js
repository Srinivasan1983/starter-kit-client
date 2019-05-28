import React, { Component } from "react";
import { Jumbotron, Row, Col, Container, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import ProductEditorContent from "./ProductEditorContent";

import { connect } from "react-redux";

import { WithProductService } from "../../hoc";
import {
  fetchProductById,
  fetchRemainingProductById
} from "../../../actions/productActions";
// import ProductRemaining from "./ProductRemaining";

class ProductEditor extends Component {
  componentDidMount() {
    this.props.fetchProductById(this.props.match.params.id);
    this.props.fetchRemainingProductById(this.props.match.params.id);
  }

  render() {
    const { error, loading, product } = this.props;

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
      <Jumbotron style={{ background: "white" }}>
        <Container>
          <Row>
            <Col md={4}>
              <h3 style={{color: "orange"}}>Starter Kit</h3>
            </Col>
            <Col md={{ offset: 6 }}>
              <Link
                to={{
                  pathname: "/"
                }}
                style={{ color: "green" }}
              >
                <Button variant="outline-success">Buy Ready Kits</Button>
              </Link>
            </Col>
          </Row>
          <br />
        </Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            {product.map(item => (
              <ProductEditorContent
                product={item}
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

/**
 * 
 *           <Col>
            {otherproductkit.map(item => (
              <ProductRemaining
                otherproductkit={item}
                key={item.id}
                startCustomizeCallback={this.props.startCustomizeCallback}
              />
            ))}
          </Col>
 */
