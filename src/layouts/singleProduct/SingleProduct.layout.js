import React, { useEffect, useContext } from "react";
import { Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";
import { colors } from "../../config/colors";
import { addToCart } from "../../redux/actions/cartActions";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { getProductsDetails } from "../../redux/actions/productsActions";
import Title from "../../components/title/Title";
import AppContext from "../../config/AppContext";

export default function SingleProductLayout() {
  const { ActualData_id } = useContext(AppContext);

  const dispatch = useDispatch();

  const getProductDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, Product } = getProductDetails;

  useEffect(() => {
    if (Product && Product.id !== ActualData_id) {
      dispatch(getProductsDetails(ActualData_id));
    }
  }, [dispatch, Product, ActualData_id]);

  const addToCartHandler = () => {
    dispatch(addToCart(Product.id));
  };

  return (
    <div className="single-product">
      {loading ? (
        <Loading isLoading={loading} />
      ) : error ? (
        <Error />
      ) : (
        <div>
          <div className="detail">
            <div className="detail-image">
              <img src={Product.urlImage} alt={"logo"} className="image" />
            </div>
            <div className="detail-title">
              <Title title={Product.name} />
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
            </div>
            <div className="detail-info">
              <div className="detail-price">
                <p>
                  Price:
                  <strong> ${Product.price}</strong>
                </p>
                <p>
                  <del>${Product.price}</del>
                </p>
              </div>
              <div>
                <Button
                  onClick={() => console.log("buy")}
                  variant="outlined"
                  sx={{
                    margin: 1,
                    color: colors.white,
                    borderColor: colors.black,
                    backgroundColor: colors.black,
                    ":hover": {
                      color: colors.black,
                      borderColor: colors.black,
                      backgroundColor: colors.white,
                    },
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  onClick={addToCartHandler}
                  variant="outlined"
                  sx={{
                    margin: 1,
                    backgroundColor: colors.white,
                    borderColor: colors.black,
                    color: colors.black,
                    ":hover": {
                      backgroundColor: colors.black,
                      borderColor: colors.black,
                      color: colors.white,
                    },
                  }}
                >
                  add to cart
                </Button>
              </div>
              <div>
                <strong>
                  Product Description:{" "}
                  <IconButton>
                    <ExpandMoreIcon />
                  </IconButton>{" "}
                </strong>
                <p>{Product.description}</p>
                <p>
                  <i>{Product.category}</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
