import React, { Component } from "react";
import { Figure } from "react-bootstrap";
import {Link} from 'react-router-dom';

class ProductRemaining extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otherproductkit: ""
    };
  }

  render() {
    let p = this.props.otherproductkit;
    return (
      <div>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            thumbnail
            alt={p.id}
            src={p.image}
          />
          <Figure.Caption style={{ color: "green" }}>
            <p>{p.name}</p>
            <h5>$ {p.price}</h5>
            <Link to={`/product/${p.id}`} onClick={() => window.location.refresh()} >Proceed</Link>
          </Figure.Caption>
        </Figure>
        <br />
      </div>
    );
  }
}

export default ProductRemaining;
