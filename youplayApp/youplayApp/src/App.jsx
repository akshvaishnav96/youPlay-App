import { useState, useEffect } from "react";

import "./scss/index/index.scss";
import Navbar from "./components/navbar.component";
import Sidebar from "./components/sidebar.component";
import Maincont from "./components/maincont.component";
import "./scss/app/app.scss";
import axios from "axios";

function App() {
  const [videoData, setVideoData] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const [SubscribedChannelData, setSubscribedChannelData] = useState([]);
  const [channelSubscribedByUser, setchannelSubscribedByUser] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/videos", {
          withCredentials: true,
        });
        setVideoData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchUserLoggedInData = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/v1/users/login",
          {
            userLoginDetails: "user1",
            password: 1234567890,
          },
          { withCredentials: true }
        );
        setUser(res.data);
        setUserLoggedIn(true);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchUserSubscriptions = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/users/get-subscription",
          { withCredentials: true }
        );
        setSubscribedChannelData(res.data.data.Channal_Subscribed);
        setchannelSubscribedByUser(res.data.data.our_Channel_Subscribers);

      } catch (error) {
        console.log(error);
      }
    };

    fetchUserSubscriptions();
    fetchUserLoggedInData();
    fetchVideoData();
  }, []);



  return (
    <>
      <Navbar />
      <div className="Maindiv flex">
        <Sidebar  subscribersData = {SubscribedChannelData}  channelSubscribedByUser = {channelSubscribedByUser}/>
        <Maincont video={videoData} />
      </div>
    </>
  );
}

export default App;
