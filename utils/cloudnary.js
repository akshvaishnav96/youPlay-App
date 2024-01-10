import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

import dotenv from "dotenv";
dotenv.config();





cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

const fileUplode = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};


const fileDelete  = async (oldFileCloudnaryUrl)=>{
 try {

  if(oldFileCloudnaryUrl){

    const oldFileAameAevisionArray = oldFileCloudnaryUrl.split("/");
    const fileIdWithExtension = oldFileAameAevisionArray[oldFileAameAevisionArray.length-1];
    const indexOfLastDot = fileIdWithExtension.lastIndexOf(".");
    const filenameWithoutExtension = fileIdWithExtension.slice(0, indexOfLastDot);
  
  
  
  
  
     await cloudinary.uploader.destroy(filenameWithoutExtension)
  }
 } catch (error) {
  console.log(error);
 }
}


export {fileUplode,fileDelete}