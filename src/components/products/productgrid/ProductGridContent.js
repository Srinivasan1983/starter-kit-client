import React, { Component } from "react";
import { Jumbotron, Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProductGridContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: ""
    };
  }

  render() {
    let p = this.props.product;
    return (
      <div>
        <Jumbotron key={p.id} style={{ background: "white" }}>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Card border="dark">
                <Image thumbnail alt={p.id} src={p.image} />
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <Card border="light">
                <Card.Header
                  className="border-bottom-0 text-black"
                  style={{ background: "orange" }}
                >
                  <Row>
                    <Col md={4}>$ {p.name}</Col>
                    <Col md={{ span: 4, offset: 4 }}>
                      <Link
                        to={{
                          pathname: `/collections/all-sets`
                        }}
                        style={{ color: "white" }}
                      >
                        Buy Individual Sets
                      </Link>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Card.Title>{p.price} $</Card.Title>
                  <Card.Text>{p.description}</Card.Text>
                  <Link
                    to={{
                      pathname: `/product/${p.id}`
                    }}
                  >
                    Proceed
                  </Link>
                  &nbsp;&nbsp;
                  <Card.Link href="#">Description</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
export default ProductGridContent;
