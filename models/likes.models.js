import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

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

likesSchema.plugin(mongooseAggregatePaginate)

export const Likes = mongoose.model("Likes", likesSchema);
