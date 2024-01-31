import React, { useEffect, useState } from "react";

import "../scss/maincont/maincont.scss";

const Maincont = ({ video }) => {
  useEffect(() => {
    const videoElements = document.getElementsByClassName("mainVideoDiv");
    const videoTags = document.getElementsByClassName("video");

    Array.from(videoElements).forEach((element, index) => {
      element.addEventListener("mouseenter", () => {
        videoTags[index].setAttribute("controls", true);

        setTimeout(() => {
          videoTags[index].play();
          videoTags[index].volume = 0.3;
          
        }, 100);
      });

      element.addEventListener("mouseleave", () => {
        videoTags[index].removeAttribute("controls");
        videoTags[index].muted = true;
        videoTags[index].currentTime = 0;
        setTimeout(() => {
          videoTags[index].pause();
        }, 100);
      });

      element.addEventListener("click", () => {
        videoTags[index].muted = false;
        videoTags[index].volume = 0.3;
        const fullscreen = videoTags[index].requestFullscreen();
        fullscreen.then((e) => {
            videoTags[index].play();
          
        });

       
      });
    });
  }, [video]);

  return (
    <>
      <div
        className="maincont flex column "
        style={{ flexDirection: "column" }}
      >
        {video.map((video, index) => (
          <div className="mainVideoDiv flex" key={video._id}>
            <div className="videoDiv">
              <video muted className={`video change `} id="myVideo">
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
