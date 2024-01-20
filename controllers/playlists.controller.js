import { Playlist } from "../models/playlists.models.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addPlaylist = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;

    const requiredFields = ["playlistName", "description"];

    requiredFields.map((item) => {
      if (!req.body[item]) {
        throw new ApiErrors(404, "", `field: ${item} is required`);
      }
    });

    const { playlistName, description } = req.body;

    const playlistAdd = await Playlist.create({
      playlistName,
      description,
      owner: userId,
    });

    res.status(201).json(new ApiResponse(201, "success", playlistAdd));
  } catch (error) {
    res.status(400).json(new ApiErrors(400, "", [error]));
  }
});

const addVideosToPlaylist = asyncHandler(async (req, res) => {


const videoId = req.params.videoId;
const playlistName = req.params.playlistName;

const data = Playlist.



});

export { addPlaylist, addVideosToPlaylist };
