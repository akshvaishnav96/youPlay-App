import mongoose, { Schema } from "mongoose";

const commentsSchema = new Schema({
  video: {
    type: Schema.Types.ObjectId,
    ref: "Video",
  },
  content: {
    type: Schema,
    required: true,
    trim: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Comments = mongoose.model("Comments", commentsSchema);
