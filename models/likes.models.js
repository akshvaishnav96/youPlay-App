import mongoose, { Schema } from "mongoose";

const likesSchema = new Schema({
  video: {
    type: Schema.Types.ObjectId,
    ref: "Video",
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comments",
  },
  likedBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export const Likes = mongoose.model("Likes", likesSchema);
