import { asyncHandler } from "../utils/asyncHandler.js";

import { ApiErrors } from "../utils/ApiErrors.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/users.models.js";
import mongoose from "mongoose";
import { Video } from "../models/video.models.js";
import jwt from "jsonwebtoken";
import { Subscription } from "../models/subscription.models.js";

// get channel detaisl if user click or search any channel with uploded videos details
// get channel all subscribers count
// get channel video likes
// get channel video comments


