import { Tweet } from "../models/tweets.models.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addTweets = asyncHandler(async (req, res) => {
  try {
    const tweet = req.body.tweet;
    if (!tweet) {
      res
        .status(400)
        .json(new ApiErrors(400, "", ["tweet content is required"]));
      return;
    }

    const userId = req.user._id;

    const addTweet = await Tweet.create({
      content: tweet,
      owner: userId,
    });

    res.status(201).json(new ApiResponse(201, "successfully Added", addTweet));
  } catch (error) {
    res.status(400).json(new ApiErrors(400, "", [error]));
  }
});

const getTweetWithOwnerDatails = asyncHandler(async (req, res) => {
  try {
    const tweetData = await Tweet.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "owner",
          foreignField: "_id",
          as: "tweet_user_Details",
        },
      },
      {
        $project: {
          owner: 0,
          _id: 0,
          __v: 0,
          tweet_user_Details: {
            _id: 0,
            coverImage: 0,
            watchHistory: 0,
            password: 0,
            createdAt: 0,
            updatedAt: 0,
            refreshToken: 0,
            __v: 0,
          },
        },
      },
    ]);

    res.status(200).json(new ApiResponse(200, "success", tweetData));
  } catch (error) {
    res.status(400).json(new ApiErrors(400, "", [error]));
  }
});

const deletetweet = asyncHandler(async (req, res) => {
  try {
    const tweetId = req.params.tweetId;
    const tweet = await Tweet.findById(tweetId);

    if (!tweet) {
      res.status(404).json(new ApiErrors(404, "", ["no comment found"]));
      return;
    }

    const deleteUser = await Tweet.deleteOne({ _id: tweetId }, { new: true });

    res
      .status(200)
      .json(new ApiResponse(200, "Successfully Deleted", deleteUser));
  } catch (error) {
    res.status(400).json(new ApiErrors(400, "", [error]));
  }
});

export { addTweets, getTweetWithOwnerDatails, deletetweet };
