import React from "react";

import "./styles.css";

const Footer = () => {
  return (
    <div className="col-sm">
      <p>
        &copy;{new Date().getFullYear()} | React-Redux & Nodejs | Tous droits
        reserves
      </p>
    </div>
  );
};

export default Footer;
