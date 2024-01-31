import { useState, useEffect } from "react";

import "./scss/index/index.scss";
import Sidebar from "./components/sidebar.component";
import Maincont from "./components/maincont.component";
import "./scss/app/app.scss";
import axios from "axios";



function App() {
  const [videoData, setVideoData] = useState([]);
  const [userId, setUserId] = useState();
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
    fetchVideoData();
  }, []);


 

  return (
      <div className="Maindiv flex">
        <Sidebar
          subscribersData={SubscribedChannelData}
          userId={userId}
          channelSubscribedByUser={channelSubscribedByUser}
        />
        <Maincont video={videoData} />
      </div>
  );
}

export default App;
