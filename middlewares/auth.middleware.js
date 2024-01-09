import { User } from "../models/users.models.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const userAuth = asyncHandler(async (req, res, next) => {
  try {
    const accessToken = await req.cookies.accessToken;

    const jwtverify = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);
    const _id = jwtverify.id;
    const authorizedUser = await User.findById({ _id }).select("-password");
    if (!authorizedUser) {
      throw new ApiErrors(404, "", "Unauthorized User");
    }


  
    req.user = authorizedUser;
  
    next();
  } catch (error) {
    res.status(400).send(new ApiErrors(400, "Unauthorized User", error));
  }
});

export { userAuth };
