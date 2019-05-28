import React, { Component } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

class IndividualProductsContent extends Component {
  render() {
    let individualProducts = this.props.products;
    let title = this.props.headername;

    return (
      <>
        <Container>
          <Row>
            <Col md={4}><h3>{title}</h3></Col>
            <Col md={{ offset: 4 }}>
              <Card.Link
                href="/"
                style={{ color: "green" }}
              >
                <Button variant="outline-success">Buy Ready Kits</Button>
              </Card.Link>
            </Col>
          </Row>
          <br />
        </Container>
        {individualProducts.map(item => (
          <Card style={{ width: "18rem", margin: "5px" }} key={item.id}>
            <Card.Header>From ${item.price}</Card.Header>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text />
              <Button variant="outline-dark" size="sm">
                Proceed To Buy
              </Button>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}
export default IndividualProductsContent;
