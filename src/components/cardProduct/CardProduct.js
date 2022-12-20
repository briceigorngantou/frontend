import React, { useContext } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";

import "./styles.css";
import AppContext from "../../config/AppContext";
import { colors } from "../../config/colors";
import image from "../../asset/icon.png";

const textPreviewLength = 22;

const CardProduct = ({ dataCard }) => {
  const { setActualData_id, setActualData_category } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: 250,
        height: 388,
        flexDirection: "row",
        borderRadius: 0,
        marginBottom: "5%",
      }}
    >
      <CardMedia
        image={dataCard.urlImage ? dataCard.urlImage : image}
        alt="Image Article"
        component="img"
        sx={{ height: "68%" }}
      />
      <CardContent sx={{ paddingLeft: 1, height: "10%", margin: 0 }}>
        <p className="card-title">
          {dataCard.name.length > textPreviewLength
            ? `${dataCard.name.slice(0, textPreviewLength)}...`
            : dataCard.name}
        </p>
      </CardContent>
      <CardActions
        sx={{ margin: 0, flexDirection: "column", padding: 0, height: "20%" }}
      >
        <div className="card-detail">
          <div>
            <p className="card-text">$ {dataCard.price}</p>
          </div>
          <div>
            <IconButton
              sx={{ width: 30, height: 30, color: colors.black }}
              onClick={() => console.log("ajouter")}
            >
              <AddCircleOutlineIcon />
            </IconButton>
            <IconButton
              sx={{ width: 30, height: 30, color: colors.black }}
              onClick={() => console.log("ajouter")}
            >
              <LocalMallIcon />
            </IconButton>
            <IconButton
              sx={{ width: 30, height: 30, color: colors.black }}
              onClick={() => console.log("ajouter")}
            >
              <EditIcon
                sx={{ width: 30, height: 30, color: colors.black }}
                onClick={() => console.log("edit")}
              />
            </IconButton>
          </div>
        </div>
        <Button
          variant="outlined"
          sx={{
            width: "100%",
            marginTop: 1,
            color: colors.white,
            borderColor: colors.black,
            backgroundColor: colors.black,
            ":hover": {
              color: colors.black,
              borderColor: colors.black,
              backgroundColor: colors.white,
            },
          }}
          onClick={() => {
            setActualData_id(dataCard.id);
            setActualData_category(dataCard.category);
            navigate(`/${dataCard.id}`);
          }}
        >
          buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
