import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

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

commentsSchema.plugin(mongooseAggregatePaginate)

export const Comments = mongoose.model("Comments", commentsSchema);
