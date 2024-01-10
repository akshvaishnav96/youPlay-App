import { User } from "../models/users.models.js";

const userFind = async (id) => {
  const user = await User.findById(id).select("-password -refreshToken");

  if(!user){
    res.status(400).json(new ApiErrors(400, "", "unAuthorized User"));
 
   }

  return { user };
};

export { userFind };
