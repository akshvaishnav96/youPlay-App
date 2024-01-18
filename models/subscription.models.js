import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
import mongoose,{Schema} from "mongoose"

const subscriptionSchema = new Schema({

    subscriber:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    channel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

subscriptionSchema.plugin(mongooseAggregatePaginate)


export const Subscription = mongoose.model("Subscription",subscriptionSchema)