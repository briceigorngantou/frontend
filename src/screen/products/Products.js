import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./styles.css";
import { getProducts as listProducts } from "../../redux/actions/productsActions";
import Title from "../../components/title/Title";
import AllProducts from "../../layouts/allProduct/AllProducts.layout";

const Products = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { Products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <div
        className="products
      -title"
      >
        <Title subtitle={"Liste de"} />
        <Title title={"Mes Produits"} />
      </div>
      <AllProducts Products={Products} loading={loading} error={error} />
    </div>
  );
};

export default Products;
