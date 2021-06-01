import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container className="my-5 py-5">{children}</Container>
      <Footer />
    </>
  );
};

export default PageLayout;
