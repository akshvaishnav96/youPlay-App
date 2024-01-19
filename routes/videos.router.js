import { Router } from "express";

import { upload } from "../middlewares/multer.middleware.js";
import { userAuth } from "../middlewares/auth.middleware.js";
import { addVideo, deleteVideo, getCommentLikes, getLikes, getVideoDetails, updateVideoDetails } from "../controllers/videos.controller.js";
const videoRouter = Router();

videoRouter.route("/addVideo").post(userAuth,upload.fields([{name:"video",maxCount:1},{name:"thumbnail",maxCount:1}]),addVideo);
videoRouter.route("/likes/:videoId").get(userAuth,getLikes);
videoRouter.route("/getVideoDetails/:videoId").get(userAuth,getVideoDetails);
videoRouter.route("/delete-video/:videoId").delete(userAuth,deleteVideo);
videoRouter.route("/update-video-details/:videoId").post(userAuth,upload.fields([{name:"thumbnail",maxCount:1}]),updateVideoDetails)
videoRouter.route("/getcomments/:videoId").get(userAuth,getCommentLikes);

export {videoRouter}