import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
