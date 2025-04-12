import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../Error/Error";
import Home from "../pages/Home";
import JobList from "../pages/JobList";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Jobs",
        element: <JobList/>,
      },
    ],
  },
]);
