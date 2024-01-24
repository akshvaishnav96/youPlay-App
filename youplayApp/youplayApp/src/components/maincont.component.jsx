import React, { useEffect, useState } from "react";

import "../scss/maincont/maincont.scss";


const Maincont = ({ video }) => {
  return (
    <>
      <div className="maincont">
        {video.map((video) => (
          <div className="mainVideoDiv flex my-3" key={video._id}>
            <video controls>
              <source src={video.videoFile} />
            </video>

            <div className="videoContaintDiv px-5">
              <p className="videoTitle">{video.title}</p>
              <div className="grey">
                <span>99 views</span> . <span>{video.createdAt}</span>
                <div className="flex">
                  <img
                    src={video.owner_details.avatar}
                    width={"15px"}
                    className="mx-2"
                    alt=""
                    srcSet=""
                  />
                  <span>{video.owner_details.fullName}</span>
                </div>
                <h6>{video.description}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Maincont;
