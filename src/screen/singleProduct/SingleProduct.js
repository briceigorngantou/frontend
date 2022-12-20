import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";
import AllProducts from "../../layouts/allProduct/AllProducts.layout";
import AppContext from "../../config/AppContext";
import { getProductByCategory as listsProductByCategory } from "../../redux/actions/productsActions";
import SingleProductLayout from "../../layouts/singleProduct/SingleProduct.layout";
import Title from "../../components/title/Title";

const SingleProduct = () => {
  const { ActualData_category } = useContext(AppContext);
  const dispatch = useDispatch();

  const getProductByCategory = useSelector(
    (state) => state.getProductByCategory
  );
  const { loading, error, ProductsByCategory } = getProductByCategory;

  useEffect(() => {
    if (!ProductsByCategory) {
      dispatch(listsProductByCategory(ActualData_category));
    }
  }, [dispatch, ProductsByCategory, ActualData_category]);

  return (
    <div className="single-product">
      <SingleProductLayout />
      <Title title={"Vous pourriez aussi aimer "} />
      <AllProducts
        Products={ProductsByCategory}
        loading={loading}
        error={error}
      />
    </div>
  );
};
export default SingleProduct;
