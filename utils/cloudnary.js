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


export {fileUplode}