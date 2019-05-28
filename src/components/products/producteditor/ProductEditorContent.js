import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Form
} from "react-bootstrap";

class ProductEditorContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderMediaList = p => {
    return (
      <Card>
        <Card.Img variant="top" src={p.image} />
        <Card.Body>
          <Card.Title>{p.name}</Card.Title>
          <Card.Text>{p.category}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Row>
            <Col md={4}>
              <Card.Link href="#">Description</Card.Link>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <Card.Link href="#">Add To Cart</Card.Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  };

  renderProductChoice = p => {
    return (
      <Form>
        <Row>
          <Col xs={4}>
            <small>
              <b>{p.customization[1].name[0].beddingcolor}</b>
            </small>
            {p.customization[0].beddingcolor.map((item, index) => (
              <div key={index} className="mb-3">
                <Form.Check
                  inline
                  label={<small>{item}</small>}
                  type="radio"
                  name={p.customization[1].name[0].beddingcolor}
                  id={item}
                />
              </div>
            ))}
          </Col>
          <Col xs={4}>
            <small>
              <b>{p.customization[1].name[0].matresssize}</b>
            </small>
            {p.customization[0].matresssize.map((item, index) => (
              <div key={index} className="mb-3">
                <Form.Check
                  inline
                  label={<small>{item}</small>}
                  type="radio"
                  name={p.customization[1].name[0].matresssize}
                  id={item}
                />
              </div>
            ))}
          </Col>
          <Col xs={4}>
            <small>
              <b>{p.customization[1].name[0].towelcolor}</b>
            </small>
            {p.customization[0].towelcolor.map((item, index) => (
              <div key={index} className="mb-3">
                <Form.Check
                  inline
                  label={<small>{item}</small>}
                  type="radio"
                  name={p.customization[1].name[0].towelcolor}
                  id={item}
                />
              </div>
            ))}
          </Col>
        </Row>
      </Form>
    );
  };

  render() {
    let p = this.props.product;
    return (
      <div>
        <Card border="dark">
          <Card.Header
            className="border-bottom-0 text-black"
            style={{ background: "orange" }}
          >
            <Row>
              <Col md={4}>$ {p.price}</Col>
              <Col md={{ span: 4, offset: 4 }}>
                <Card.Link href="/collections/all-sets" style={{ color: "white" }}>Buy Individual Sets</Card.Link>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card border="dark">{this.renderMediaList(p)}</Card>
            <hr />
            <Card.Text>Customize</Card.Text>
            {this.renderProductChoice(p)}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProductEditorContent;
