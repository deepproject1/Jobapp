import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../Error/Error";
import Home from "../pages/Home";
import JobList from "../pages/JobList";
import TermsAndConditions from "../FooterPages/TermsAndConditions";
import PrivacyPolicy from "../FooterPages/PrivacyPolicy";
import Disclaimer from "../FooterPages/Disclaimer";
import ContactUs from "../FooterPages/ContactUs";


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
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions/>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>,
      },
      {
        path: "/disclaimer",
        element: <Disclaimer/>,
      },
      {
        path: "/Contact",
        element: <ContactUs/>
      }
    ],
  },
]);
