import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p className="text-center my-4 pb-4">© Copyright Fashion Club 2021. All Rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
