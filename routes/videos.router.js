import { Router } from "express";

import { upload } from "../middlewares/multer.middleware.js";
import { userAuth } from "../middlewares/auth.middleware.js";
import { addVideo, getVideoAndItsOwnerDetails } from "../controllers/videos.controller.js";
const videoRouter = Router();

videoRouter.route("/addVideo").post(userAuth,upload.fields([{name:"video",maxCount:1},{name:"thumbnail",maxCount:1}]),addVideo);
videoRouter.route("/getVideoDetails").get(userAuth,getVideoAndItsOwnerDetails);
export {videoRouter}