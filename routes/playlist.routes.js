import { Router } from "express";
import { addPlaylist, addVideosToPlaylist } from "../controllers/playlists.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";


const playlistRouter = Router();

playlistRouter.route("/").post(userAuth, addPlaylist)
playlistRouter.route("/addVideos/:videoId/:playlistName").post(userAuth,addVideosToPlaylist)


export {playlistRouter}