import React from "react";
import { useEffect } from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSingleProduct } from "../../redux/Actions/productsAction";
import PageLayout from "../PageLayout/PageLayout";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.singleProduct);
  console.log(state);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  const renderProduct = () => {
    if (state.loading) {
      return <h1 className="text-center my-5">Loading...</h1>;
    }
    const { title, description, category, image, price } = state.product;
    return (
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <Image src={image} alt={title} fluid/>
          </Col>
          <Col xs={12} sm={6}>
            <p>Category: {category}</p>
            <h3>{title}</h3>
            <p><strong>${price}</strong></p>
            <p>{description}</p>
            
            <Button>Add To Cart</Button>
            
          </Col>
        </Row>
      </Container>
    );
  };

  return <PageLayout>{renderProduct()}</PageLayout>;
};

export default SingleProduct;
