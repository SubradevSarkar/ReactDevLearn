import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Contact, GithubEle, Home, User } from "./components/index.js";
import { githubInfoLoader } from "./components/GithubEle/GithubEle.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { loader: githubInfoLoader, path: "github", element: <GithubEle /> },
      { path: "user/:userId", element: <User /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
