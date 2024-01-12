import mongoose,{Schema} from mongoose

const SubscriptionSchema = new Schema({

    subscriber:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    channel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

export const Subscription = mongoose.model("Subscription",SubscriptionSchema)