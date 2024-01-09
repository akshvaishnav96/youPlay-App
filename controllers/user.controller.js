import { ApiErrors } from "../utils/ApiErrors.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/users.models.js";
import { fileUplode } from "../utils/cloudnary.js";

const generateAccessTokenAndRefreshToken = async function (userID) {
  try {
    const user = await User.findById(userID);

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;

    const updateUser = await user.save();

    const userId = updateUser._id;
    return { accessToken, refreshToken, userId };
  } catch (error) {
    throw new ApiErrors(401, "cookies not set something went wrong", error);
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, fullName, password } = req.body;
  const { avatar, coverImage } = req.files;
  const requiredFields = ["userName", "email", "password", "fullName"];

  requiredFields.filter((item) => {
    if (!req.body[item]) {
      throw new ApiErrors(400, `Fields ${item} are required.`, [
        `error: Fields ${item} are required.`,
      ]);
    }
  });

  const userExist = await User.findOne({ email }, { userName });
  if (userExist) {
    throw new ApiErrors(400, "", ["user Already exist"]);
  }

  const avatarLocalPath = avatar?.[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiErrors(400, "", ["avatar is required"]);
  }

  const avatarFile = await fileUplode(avatarLocalPath);
  const coverImageLocalPath = coverImage?.[0]?.path;
  let coverImageFile;
  if (coverImageLocalPath) {
    coverImageFile = await fileUplode(coverImageLocalPath);
  }
  const user = await User.create({
    userName,
    email,
    fullName,
    avatar: avatarFile.url,
    coverImage: coverImageFile?.url || null,
    password,
  });

  const newuser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  res.send(new ApiResponse(200, "successfully added", newuser));
});

const loginUser = asyncHandler(async (req, res) => {
  const { userLoginDetail, password } = req.body;
  if (!userLoginDetail) {
    throw new ApiErrors(404, "", ["Please enter username or email to login"]);
  }

  const existUser = await User.findOne({
    $or: [{ email: userLoginDetail }, { userName: userLoginDetail }],
  });

  const verifyUser = await existUser.isPasswordValid(password);

  if (!verifyUser) {
    throw new ApiErrors(404, "", "user Details Not Matched");
  }

  const { accessToken, refreshToken, userId } =
    await generateAccessTokenAndRefreshToken(existUser._id);

  let cookieOption = {
    httpOnly: true,
    secure: true,
  };

  const user = await User.findById(userId).select("-password -refreshToken ");

  res
    .status(200)
    .cookie("accessToken", accessToken, cookieOption)
    .cookie("refreshToken", refreshToken, cookieOption)
    .json(new ApiResponse(200, "User Logged In  Successfully", user));
});

const logout = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user._id, {
    $unset: {
      refreshToken: 0,
    },
  });

  let cookieOption = {
    httpOnly: true,
    secure: true,
  };

  res
    .clearCookie("accessToken", cookieOption)
    .clearCookie("refreshToken", cookieOption)
    .json(new ApiResponse(200, "user Successfully Logout"));
});

const updateUserDetails = asyncHandler(async (req, res) => {
  const user = await User.findById(
    req.user._id 
  )

try{
  
    
    user.email= req.body.email || user.email
    user.fullName=  req.body.fullName || user.fullName
    user.password= req.body.password || user.password
    user.userName = req.body.userName  || user.userName
    
    
    const nuser = await user.save()
    
  res.status(200).json(new ApiResponse(200,"User Successfully Updated", nuser));
  
} catch (error) {
  console.log(error);
}

  

});

export { registerUser, loginUser, logout, updateUserDetails };
