import React, { useEffect } from "react";

import "../scss/sidebar/sidebar.css";

const Sidebar = ({ subscribersData, channelSubscribedByUser , user }) => {
  return (
    <>
      <div className="sidebar">
        
       {subscribersData.length > 0 ? <h1 className="sidebarChannelHeading">Channel Subscribed </h1> : ""}
        
       
        {subscribersData.map((e) => (

          <div
            className="flex justify-start items-center  sidebarItemDiv"
            key={e.subscribed_Channel_Details._id}
          >
            <img
              src={e.subscribed_Channel_Details.avatar}
              alt=""
              className="sidebarIconImage"
            />
            <span>{e.subscribed_Channel_Details.fullName}</span>
          </div>

        ))}

        <hr />

        {channelSubscribedByUser.length > 0 ? <h1 className="sidebarChannelHeading">our Subscribed Channel : </h1> : ""}


        {channelSubscribedByUser.map((e) => (
          <div
            className="flex justify-start items-center  sidebarItemDiv"
            key={e.our_Channel_subscribers_Details._id}
          >
            <img
              src={e.our_Channel_subscribers_Details.avatar}
              alt=""
              className="sidebarIconImage"
            />
            <span>{e.our_Channel_subscribers_Details.fullName}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
