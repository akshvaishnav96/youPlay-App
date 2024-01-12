import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { Video } from "../models/video.models.js";
import { fileUplode } from "../utils/cloudnary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

const addVideo = asyncHandler(async (req, res) => {
  const requiredFields = ["title", "description"];
  const requiredFileFields = ["video", "thumbnail"];

  requiredFields.filter((item) => {
    if (!req.body[item]) {
      throw new ApiErrors(400, ` ${item} is required.`, [
        `error: Fields ${item} is required.`,
      ]);
    }
    return;
  });
  requiredFileFields.filter((item) => {
    if (!req.files[item]) {
      throw new ApiErrors(400, ` ${item} is required.`, [
        `error: Fields ${item} is required.`,
      ]);
    }
    return;
  });

  const { video, thumbnail } = req.files;
  const { title, description } = req.body;

  const videoLocalPath = video?.[0]?.path;
  const thumbnailLocalPath = thumbnail?.[0]?.path;
  if (!videoLocalPath || !thumbnailLocalPath) {
    throw new ApiErrors(400, ` video is required.`, [
      `error: something went wrong in localFile path`,
    ]);
  }

  const videoFile = await fileUplode(videoLocalPath);
  const thumbnailFile = await fileUplode(thumbnailLocalPath);

  const { duration, url } = videoFile;

  const videoUplode = await Video.create({
    videoFile: url,
    thumbnail: thumbnailFile.url,
    title,
    description,
    duration,
    owner: req.user._id,
  });

  const existVideo = await Video.findById(videoUplode._id);

  res
    .status(201)
    .json(new ApiResponse(201, "Video Uploaded Successfully", existVideo));
});

const getVideoAndItsOwnerDetails = asyncHandler(async (req, res) => {
try {
      const data = await Video.aggregate([
        {
          $match: {
            owner: new mongoose.Types.ObjectId(req.user._id),
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "owner",
            foreignField: "_id",
            as: "owner_details",
          },
        },
        {
          $addFields: {
            owner_details: {
              $first: "$owner_details",
            },
          },
        },
        {
          $project: {
            owner: 0,
            createdAt: 0,
            updatedAt: 0,
            owner_details: {
              password: 0,
              createdAt: 0,
              updatedAt: 0,
              refreshToken: 0,
            },
          },
        }
      ]);
    
    
      
      console.log(data[0]);

      res.status(200).json(new ApiResponse(200,"Data Successfully Synced",data[0]))
} catch (error) {
    res.status(400).json(new ApiErrors(400,"error on getting data of videos", error))
}
});

export { addVideo, getVideoAndItsOwnerDetails };
