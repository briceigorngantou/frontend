import React, { useLayoutEffect, useState } from "react";
import { Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import MenuButton from "../form/menuButton/MenuButton";
import profile from "../../asset/avatar.png";
import { colors } from "../../config/colors";
import { pages } from "../../config/DataStack";

export default function Sidebar() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState("");

  useLayoutEffect(() => {
    setCurrentPage(window.location.pathname);
  });
  return (
    <div className="sidebar">
      <div className="section1">
        <p className="logo" onClick={() => navigate("/")}>
          <strong>
            <i>React-Redux & Nodejs</i>
          </strong>
        </p>
      </div>
      <div className="section2">
        {pages.map((page) => {
          return (
            <div onClick={() => navigate(`${page.link}`)} key={page.id}>
              <MenuButton
                text={page.name}
                variant={"outlined"}
                icon={page.icon}
                color={currentPage === page.link ? colors.white : colors.black}
                bordercolor={colors.first}
                bgcolor={currentPage === page.link && colors.black}
              />
            </div>
          );
        })}
      </div>
      <div className="section3">
        <MenuButton
          text={"Logout"}
          variant={"outlined"}
          color={colors.black}
          bordercolor={colors.first}
          icon={<LogoutIcon />}
        />
        <div className="profile">
          <img src={profile} alt={"profile"} width={55} height={50} />
          <Typography>John Doe</Typography>
        </div>
      </div>
    </div>
  );
}
