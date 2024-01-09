import { Router } from "express";
import {avatarUpdate, loginUser, logout, registerUser, updateUserDetails} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { userAuth } from "../middlewares/auth.middleware.js";


const router = Router();

router.route("/register").post(upload.fields([{name:"avatar",maxCount:1},{name:"coverImage",maxCount:1}]),registerUser)
router.route("/login").post(loginUser)
router.route("/user-update").patch(userAuth,updateUserDetails)
router.route("/avatar-update").patch(userAuth,upload.fields([{name:"avatar",maxCount:1}]),avatarUpdate);
router.route("/logout").post(userAuth,logout)

export {router}



