import mongoose,{Schema} from "mongoose";


const playlistSchema = new Schema({
    video: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      }
    ],
      playlistName:{
        type:String,
        required:true,
        trim:true,
      },
      description:{
        type:String,
        required:true,
        trim:true
      },
      owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
      }
})



export const Playlist = mongoose.model("Playlist",playlistSchema)