import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import errorIcon from "../asset/error_404.svg";
import { colors } from "../config/colors";
import Title from "./title/Title";

export default function Error() {
  const navigate = useNavigate();
  return (
    <Grid sx={{ justifyContent: "center", alignItems: "center", margin: 5 }}>
      <Grid sx={{ textAlign: "center" }}>
        <Typography fontWeight={"bold"} fontSize={24}>
          Sorry, page not found!
        </Typography>
        <Typography>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>
      </Grid>
      <Grid
        sx={{
          textAlign: "center",
        }}
      >
        <Grid sx={{ margin: 5 }}>
          <img src={errorIcon} alt="Not found" width={300} height={250} />
        </Grid>
        <Button
          onClick={() => {
            navigate("/my-Products");
          }}
          variant="outlined"
          sx={{
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
        >
          Go To Products
        </Button>
      </Grid>
    </Grid>
  );
}
