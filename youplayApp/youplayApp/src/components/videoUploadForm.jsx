import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import "../scss/videoUploadForm/videoUploadForm.scss";

function VideoUploadForm() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(errors);
  }, [errors]);

  
    

  const videouploadeFunc = async (e) => {
    e.preventDefault();

    try {
      const requiredFields = ["video", "title", "description", "thumbnail"];
      const newErrors = [];

      requiredFields.forEach((item) => {
        if (e.target[item].value === "") {
          newErrors.push(`Field ${item} is required`);
        }
      });

      if (newErrors.length > 0) {
        setErrors(newErrors);
        return;
      }

      const { video, title, description, thumbnail } = e.target;

      const videoUpload = await axios.post(
        "http://localhost:3000/api/v1/videos",
        {
          video: video.files[0],
          title: title.value,
          description: description.value,
          thumbnail: thumbnail.files[0],
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
         
        }
      );

      console.log("Video uploaded successfully", videoUpload);

    } catch (error) {
        console.error("Error during video upload:", error);
        setErrors(["An unexpected error occurred. Please try again."]);
        
    }
    
  
  };

  return (
    <>
      <div className="videoUplodeFormMainDiv">
    
        <form onSubmit={videouploadeFunc}>
          <div className="grid gap-6 mb-6 md:grid-cols-1">
            <div>
              <label
                htmlFor="videoTitle"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                📹 Video Name
              </label>
              <input
                type="text"
                id="videoTitle"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="video Title"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                📓 description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="video Description..."
                required
              />
            </div>
            <div>
              <label
                htmlFor="videoFile"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                📹 Upload Video File
              </label>
              <input
                type="file"
                id="videoFile"
                name="video"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                accept="video/*"
                required
              />
            </div>
            <div>
              <label
                htmlFor="thumbnail"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                📸 Thumbnail Image
              </label>
              <input
                type="file"
                id="thumbnail"
                name="thumbnail"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                accept="image/*"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default VideoUploadForm;
