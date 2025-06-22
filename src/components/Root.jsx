import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./Home/Header";
import Footer from "./Footer";



const Root = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <Header/>
           <Outlet></Outlet>
           <Footer />
           <Toaster   position="top-right"
  reverseOrder={false}/>
        </div>
    );
};



export default Root;