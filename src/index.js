import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./constants/routes";
import "./index.css";
import { Checkout } from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: routes.CHECKOUT,
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);