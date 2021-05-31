import axios from "axios";

export const fetchProducts = () => async (dispatch, getState) => {
    dispatch({
      type: "FETCH_PRODUCTS_REQUEST",
    });

    const response = await axios.get("https://fakestoreapi.com/products");
     console.log(response.data)
    try {
      dispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_PRODUCTS_FAILURE",
        error,
      });
    }
  };

