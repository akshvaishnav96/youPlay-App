import { Router } from "express";
import { addTweets, deletetweet, getTweetWithOwnerDatails } from "../controllers/tweets.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";

const tweetRouter = Router();


tweetRouter.route("/").post(userAuth,addTweets);
tweetRouter.route("/").get(userAuth,getTweetWithOwnerDatails)
tweetRouter.route("/:tweetId").delete(userAuth,deletetweet)




export {tweetRouter}