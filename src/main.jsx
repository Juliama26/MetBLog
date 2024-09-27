import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./components/Pages/HomePage.jsx";

const route = createBrowserRouter([
  {element: <HomePage />, path: "/"},
  // {element: <App />, path: "/"},
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
