import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { colors } from "../../config/colors";
import Title from "../../components/title/Title";
import { removeFromCart } from "../../redux/actions/cartActions";
import "./styles.css";
const Shop = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container">
      {cartItems.length === 0 ? (
        <h4>
          Your cart is empty <Link to="/my-Products">Go back to Home</Link>
        </h4>
      ) : (
        cartItems.map((item) => {
          return (
            <div key={item.id} style={{ display: "flex", margin: "20px" }}>
              Name <Title title={item.name} />
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  marginTop: 1,
                  color: colors.black,
                  backgroundColor: colors.white,
                  borderColor: colors.black,
                  ":hover": {
                    color: colors.white,
                    borderColor: colors.black,
                    backgroundColor: colors.black,
                  },
                }}
                onClick={() => removeHandler(item.id)}
              >
                Remove
              </Button>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Shop;
