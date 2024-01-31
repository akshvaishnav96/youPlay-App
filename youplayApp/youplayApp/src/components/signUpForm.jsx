import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function SignUpForm() {
  const [userError, setUserError] = useState([]);
  const errors = [];
  const navigate = useNavigate();
  useEffect(() => {
    console.log(userError);
  }, [userError]);
  const signUpFormSubmit = async (e) => {
    e.preventDefault();
    // const requiredFields = [
    //   "userName",
    //   "email",
    //   "fullName",
    //   "password",
    //   "avatar",
    // ];

    // requiredFields.map((item) => {
    //   if (e.target[item].value === "") {
    //     errors.push(`field ${item} is required`);
    //   }
    //   return;
    // });

    // setUserError(errors);



    const { userName, email, fullName, avatar, password, coverImage } =
      e.target;

    const res = await axios.post(
      "http://localhost:3000/api/v1/users/register",
      {
        userName: userName.value,
        email: email.value,
        fullName: fullName.value,
        avatar: avatar.files[0],
        password: password.value,
        coverImage: coverImage.files[0],
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (res.data.errors) {
      setUserError(res.data.errors)
    } else {
      console.log("user successfully Added", res);
      navigate("/user/login")
    }
  };

  return (
    <>
      <div
        className="center"
        style={{
          width: "50%",
          margin: "4rem auto",
        }}
      >

        <h2 className="text-red-600 text-center my-8">{userError}</h2>
        <form
          method="post"
          onSubmit={signUpFormSubmit}
         
        >
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="channel_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Channel name
              </label>
              <input
                type="text"
                id="channel_name"
                name="userName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="📹 Channel Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="📬 example@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="fullname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="🦸 example exe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="avatar"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                avatar Image
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="📸 Profile Image"
                accept="image/*"
                required
              />
            </div>
            <div>
              <label
                htmlFor="coverImage"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Cover Image
              </label>
              <input
                type="file"
                id="coverImage"
                name="coverImage"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="🖼️ Cover Image"
                accept="image/*"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="🔑 password"
                autoComplete="false"
                required
              />

              {/* <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
<p class="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
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

export default SignUpForm;
