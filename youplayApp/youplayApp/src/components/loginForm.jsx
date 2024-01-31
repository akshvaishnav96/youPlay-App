import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function LoginForm() {

 const navigate = useNavigate();
  const fetchUserLoggedInData = async (userName, password) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        {
          userLoginDetails: userName,
          password: password,
        },
        { withCredentials: true }
      );

      return res;

    } catch (error) {

      console.log(error);
    }
  };



  const loginFormSubmit = async (e) => {
    e.preventDefault();
  try {
      const { userName, password } = e.target.elements;
      const res = await fetchUserLoggedInData(userName.value, password.value);
      navigate("/")
  } catch (error) {
    navigate("/user/login");
  }
  };

  
 


  return (
      <div className="loginForm" style={{ width: "50%", margin: "4rem auto" }}>
        <form onSubmit={loginFormSubmit} method="post">
          <div className="grid gap-6 mb-6 md:grid-cols-1">
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
                placeholder="📹 Your Channel name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="🔑 Enter password"
                autoComplete="false"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
  );
}

export default LoginForm;
