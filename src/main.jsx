import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./components/Pages/HomePage.jsx";
import BlogPage from "./components/Pages/BlogPage.jsx";
import SinglePage from "./components/Pages/SinglePage.jsx";

const route = createBrowserRouter([
  {element: <HomePage />, path: "/"},
  {element: <BlogPage />, path: "/blogs"},
  {element: <SinglePage />, path: "/single-post"},
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
