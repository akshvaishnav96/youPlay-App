import React from "react";

import "../scss/navbar/navbar.css";
import Youplaylogo from "./youplaylogo.component";
import { Link } from "react-router-dom";


const Navbar = ({userLoginDetails,userLoggedIn}) => {
  return (
    <>



      <div className="navbar w-full flex items-center justify-around">
        <div className=" flex items-center justify-around">
          <div className="w-10 hamburgerDiv">
            <img
              src="../images/Hamburger_icon.svg.png"
              alt=""
              className="hamburgerImage"
            />
          </div>
          <Youplaylogo logoName="YouPlay..." />
        </div>

        <form className="form">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search... by 📹videos  🦸channel"  
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex items-center justify-around">
          <div className="addVideoDiv flex items-center justify-center">
            <img
              src="../images/add-video-icon.webp"
              alt=""
              className="addVideoImage"
            />
          </div>

          <div className="userProgileDiv flex items-center justify-center">
            <img
              src={userLoggedIn ? userLoginDetails.data.avatar : "../images/user1.svg"}
              alt=""
              className="userProfileLogoImage"
            />


           
          </div>
    <button type="button" className= "mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to="/user/signup">Sign Up</Link></button>

        </div>
      </div>
    </>
  );
};

export default Navbar;
