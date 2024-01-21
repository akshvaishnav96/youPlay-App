import mongoose from "mongoose";
import { Playlist } from "../models/playlists.models.js";
import { User } from "../models/users.models.js";
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

const getPlaylists = asyncHandler(async (req, res) => {
  try {
    const playlistOwnerId = req.user._id;

    const playlistData = await Playlist.aggregate([
      {
        $match: {
          owner: new mongoose.Types.ObjectId(playlistOwnerId),
        },
      },
      {
        $project: {
          owner: 0,
          __v: 0,
        },
      },
    ]);

    res.status(200).json(new ApiResponse(200, "Success", playlistData));
  } catch (error) {
    res.status(400).json(new ApiErrors(400, "", [error]));
  }
});

const addVideosToPlaylist = asyncHandler(async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const playlistId = req.params.playlistId;

    const playlistData = await Playlist.findById(playlistId);

    if (playlistData.video.includes(videoId)) {
      throw new ApiErrors(400).json(400, "", ["Video already added"]);
    }

    await playlistData.video.push(videoId);

    const data = await playlistData.save();

    res.status(200).json(new ApiResponse(200, "successfullt added", data));
  } catch (error) {
    res.status(400).json(new ApiErrors(400, "", [error]));
  }
});

const deleteVideosFromPlaylist = asyncHandler(async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const playlistId = req.params.playlistId;

    const playlistData = await Playlist.findById(playlistId);

    if (playlistData?.video?.includes(videoId)) {
      const videoIndex = playlistData.video.indexOf(videoId);

      const x = playlistData.video.splice(videoIndex, 1);
      
    }

    const data = await playlistData.save();

    res.status(200).json(new ApiResponse(200, "successfullt added", data));
  } catch (error) {
    res.status(400).json(new ApiErrors(400, "", [error]));
  }
});

export { addPlaylist, addVideosToPlaylist, getPlaylists,deleteVideosFromPlaylist };
