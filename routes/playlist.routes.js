import { Router } from "express";
import { addPlaylist, addVideosToPlaylist, deleteVideosFromPlaylist, getPlaylists } from "../controllers/playlists.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";


const playlistRouter = Router();

playlistRouter.route("/").post(userAuth, addPlaylist)
playlistRouter.route("/").get(userAuth, getPlaylists)

playlistRouter.route("/:playlistId/:videoId?").post(userAuth,addVideosToPlaylist)
playlistRouter.route("/:playlistId/:videoId?").delete(userAuth,deleteVideosFromPlaylist)


export {playlistRouter}