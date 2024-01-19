import { Router } from "express";
import { addTweets, deletetweet, getTweetWithOwnerDatails } from "../controllers/tweets.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";

const tweetRouter = Router();


tweetRouter.route("/tweet").post(userAuth,addTweets);
tweetRouter.route("/tweet").get(userAuth,getTweetWithOwnerDatails)
tweetRouter.route("/tweet/:tweetId").delete(userAuth,deletetweet)




export {tweetRouter}