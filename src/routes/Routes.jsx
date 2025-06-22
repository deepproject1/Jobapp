import { createBrowserRouter } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
import Root from "../components/Root";
import JobList from "../components/Menus/JobList";
import Home from "../components/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import ContactUs from "../FooterPages/ContactUs";
import Disclaimer from "../FooterPages/Disclaimer";
import PrivacyPolicy from "../FooterPages/PrivacyPolicy";
import TermsAndConditions from "../FooterPages/TermsAndConditions";

// Admin Components
import AdminLayout from "../components/Admin/AdminLayout";
import Dashboard from "../components/Admin/Dashboard";
import PostJob from "../components/Admin/PostJob";
import AppliedJobs from "../components/Admin/AppliedJobs";
import AllJobs from "../components/Admin/AllJobs";
import PrivateRoute from "./PrivateRoute";
import JobApplicationForm from "../components/Menus/JobApplicationForm";
import GetJob from "../components/Menus/GetJob";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <JobList />,
      },
      {
        path: "/apply/:id",
        element: <JobApplicationForm />,
      },
      {
        path: "/getjob",
        element: <GetJob />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/disclaimer",
        element: <Disclaimer />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  // 🔐 Admin Routes (separate layout for admin)
  {
    path: "/admin",
    element:<PrivateRoute><AdminLayout/></PrivateRoute>,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "post-job", element: <PostJob /> },
      { path: "applied-jobs", element: <AppliedJobs /> },
      { path: "all-jobs", element: <AllJobs /> },
    ],
  }  
]);
