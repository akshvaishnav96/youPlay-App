import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

          
cloudinary.config({ 
  cloud_name: 'dhcsl4l6r', 
  api_key: '985246249143863', 
  api_secret: '9VedwhjYuHoNrro0-AGyfE-MVyg' 
});

const fileUplode = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

  
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};


const fileDelete  = async (oldFileCloudnaryUrl)=>{
 try {
  const oldFileAameAevisionArray = oldFileCloudnaryUrl.split("/");
  const fileId = oldFileAameAevisionArray[oldFileAameAevisionArray.length-1];
  const indexof  =fileId.lastIndexOf(".")
  const filenameWithoutExtension = fileId.slice(0, indexof);

  const result  =  await cloudinary.uploader.destroy(filenameWithoutExtension)
  console.log(result);
 } catch (error) {
  console.log(error);
 }
}


export {fileUplode,fileDelete}