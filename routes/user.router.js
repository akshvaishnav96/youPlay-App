import { Router } from "express";
import {
  avatarUpdate,
  coverImageUpdate,
  deleteCoverImage,
  deleteUser,
  deleteWatchList,
  deletesingleVideoFromWatchlist,
  getAllUplodedVideosDetails,
  getSubscriberAndChannel,
  getWatchList,
  loginUser,
  logout,
  registerUser,
  updatePassword,
  updateUserDetails,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { userAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);
router.route("/login").post(loginUser);
router.route("/user-update").patch(userAuth, updateUserDetails);
router
  .route("/avatar-update")
  .patch(
    userAuth,
    upload.fields([{ name: "avatar", maxCount: 1 }]),
    avatarUpdate
  );
router
  .route("/cover-update")
  .patch(
    userAuth,
    upload.fields([{ name: "coverImage", maxCount: 1 }]),
    coverImageUpdate
  );

router.route("/delete-Cover-Image").patch(userAuth, deleteCoverImage);
router.route("/update-password").patch(userAuth, updatePassword);
router.route("/delete-user").delete(userAuth, deleteUser);
router.route("/get-subscription/:id?").get(userAuth, getSubscriberAndChannel);
router.route("/get-uploded-videos").get(userAuth, getAllUplodedVideosDetails);
router.route("/watchlist").get(userAuth,getWatchList);
router.route("/watchlist/:videoId").delete(userAuth,deletesingleVideoFromWatchlist);
router.route("/watchlist").delete(userAuth,deleteWatchList);
router.route("/logout").post(userAuth, logout);

export { router };
