import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/index/index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import axios from "axios";

import HeaderFooter from "./layout/headerFooter.jsx";
import SignUpForm from "./components/signUpForm.jsx";
import LoginForm from "./components/loginForm.jsx";
import NotFoundPage from "./components/notFoundPage.jsx";

function Main() {
  const [userData, setUserData] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

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

      setUserData(res.data);
      setUserLoggedIn(true);

      return res;
    } catch (error) {
      setUserData([]);
      setUserLoggedIn(false);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HeaderFooter />}>
        <Route path="" element={<App />} />
        <Route path="/user/signup" element={<SignUpForm />} />
        <Route
          path="/user/login"
          element={<LoginForm fetchUserFunction={fetchUserLoggedInData} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
