import React from "react";
import {Col, Image} from 'react-bootstrap';

const Product = (props) => {
  const { id, title, description, image, price, category } = props.product;
  return (
    <Col xs={12} sm={6} md={3}>
      <Image src={image} alt={title} className="image-responsive" fluid/>
      <h4>{title}</h4>
      <p>$ {price}</p>
    </Col>
  );
};

export default Product;
