import { Router } from "express";

import { upload } from "../middlewares/multer.middleware.js";
import { userAuth } from "../middlewares/auth.middleware.js";
import { addLikes, addVideo, deleteVideo, getCommentLikes, getLikes, getVideoDetails, getallVideos, updateVideoDetails } from "../controllers/videos.controller.js";
const videoRouter = Router();

videoRouter.route("/").post(userAuth,upload.fields([{name:"video",maxCount:1},{name:"thumbnail",maxCount:1}]),addVideo);
videoRouter.route("/likes/:videoId").get(userAuth,getLikes);
videoRouter.route("/likes/:videoId").post(userAuth,addLikes);
videoRouter.route("/:videoId").get(userAuth,getVideoDetails);
videoRouter.route("/").get(userAuth,getallVideos);
videoRouter.route("/:videoId").delete(userAuth,deleteVideo);
videoRouter.route("/update-video-details/:videoId").patch(userAuth,upload.fields([{name:"thumbnail",maxCount:1}]),updateVideoDetails)
videoRouter.route("/getcomments/:videoId").get(userAuth,getCommentLikes);

export {videoRouter}