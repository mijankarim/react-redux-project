import React from "react";
import {Col, Image, Button} from 'react-bootstrap';
import { useHistory } from "react-router";

const Product = (props) => {
  const { id, title, image, price } = props.product;
  const history = useHistory();
  const handleClick = () => history.push(`product/${id}`);
  return (
    <Col xs={12} sm={6} md={3} className="p-3 text-center mb-4">
      <Image src={image} alt={title} className="product-image mb-4" fluid/>
      <h4 className="mb-3">{title}</h4>
      <p><strong>$ {price}</strong></p>
      <Button onClick={handleClick}>View More</Button>
    </Col>
  );
};

export default Product;
