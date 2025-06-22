/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (

<div className="grid h-screen px-4 bg-white place-content-center">
  <div className="text-center">
    <img className="mb-6 w-[400px] rounded-3xl" src="https://cdn.svgator.com/images/2022/01/404-page-design-animation.gif" alt="" />
 <h1
      className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
    >
      Uh-oh! 404 Error
    </h1>
    <p className=" text-gray-500">We cant find that page.
    go back to home
    </p>
    <Link to='/'>
    <button className="btn btn-primary btn-sm">Go Home</button>
    </Link>
  </div>
</div>
    );
};


export default ErrorPage;