import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useSelector } from "react-redux";
import { Avatar, Badge, IconButton, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { colors } from "../../config/colors";
import profile from "../../asset/avatar.png";

function Navbar() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
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
            onClick={() => {
              console.log("boutton search clicked");
            }}
          >
            Search
          </Button>
        </form>
        <div className="navbar-left">
          <IconButton
            sx={{ color: "#444", width: 40, height: 40, cursor: "pointer" }}
            onClick={() => navigate("/shop")}
          >
            <Badge badgeContent={cartItems.length} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton
            sx={{ color: "#444", width: 40, height: 40, cursor: "pointer" }}
            onClick={() => console.log("nofication")}
          >
            <Badge badgeContent={2} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar
            alt="Profile"
            src={profile}
            sx={{ width: 40, height: 40, cursor: "pointer" }}
          />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
