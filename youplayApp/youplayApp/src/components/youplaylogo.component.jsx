import React from "react";

import { Link } from "react-router-dom";

const Youplaylogo = ({ logoName }) => {
  return (
    <>
      <Link to="/">
        {" "}
        <div className="youplayLogoDiv flex   items-center justify-around">
          <img
            src="../images/YouTube-Icon-Full-Color-Logo.wine.svg"
            alt=""
            className="youplayLogoImage"
          />
          <span>{logoName}</span>
        </div>
      </Link>
    </>
  );
};

export default Youplaylogo;
