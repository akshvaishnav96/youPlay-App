import React, { useEffect, useState } from "react";

import "../scss/maincont/maincont.scss";

const Maincont = ({ video }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [videoWidth, setVideoWidth] = useState(null);
  useEffect(() => {
    const videoElem = document.getElementsByClassName("mainVideoDiv");
    const video = document.getElementsByClassName("video");
    Array.from(videoElem).forEach((element, index) => {
      element.addEventListener("mouseenter", () => {
        setHoveredIndex(index);
        video[index].play();
      });

      element.addEventListener("mouseleave", () => {
        setHoveredIndex(null);

        video[index].pause();
        video[index].currentTime = 0;
      });
    });
  }, [video]);

  return (
    <>
      <div className="maincont flex column " style={{flexDirection:"column"}}>
        {video.map((video, index) => (
          <div className="mainVideoDiv flex" key={video._id}>
            <div className="videoDiv">
              <img
                src={video.thumbnail}
                alt="Video Thumbnail "
                width={"50%"}
                className={`videoThumbnail  ${
                  index === hoveredIndex ? "hidden" : ""
                }`}
              />
              <video
                muted
                className={`video change ${
                  index !== hoveredIndex ? "hidden" : ""
                }`}
              >
                <source src={video.videoFile} />
              </video>
            </div>

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
