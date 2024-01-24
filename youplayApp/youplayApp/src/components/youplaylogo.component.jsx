import React from "react";

const Youplaylogo = ({logoName}) => {
  return (
    <>
      <div className="youplayLogoDiv flex   items-center justify-around">
        <img
          src="../images/YouTube-Icon-Full-Color-Logo.wine.svg"
          alt=""
          className="youplayLogoImage"
        />
         <span>{logoName}</span>
      </div>
    </>
  );
};

export default Youplaylogo;
