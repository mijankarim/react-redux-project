import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/Actions/productsAction";
import Product from "../Product/Product";
import { Container, Row } from "react-bootstrap";
import PageLayout from "../PageLayout/PageLayout";

const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.allProducts);
  console.log(state);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const renderProducts = () => {
    if (state.loading) {
      return <h1 className="text-center my-5">Loading...</h1>;
    }
    return state.products.map((product) => (
      <Product key={product.id} product={product} />
    ));
  };

  return (
    <PageLayout>
      <Container>
        <Row>{renderProducts()}</Row>
      </Container>
    </PageLayout>
  );
};

export default Products;
