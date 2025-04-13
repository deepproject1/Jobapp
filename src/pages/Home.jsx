import FAQ from "../components/FAQ";
import HighlightsBar from "../components/HighlightsBar";
import OnlineInterview from "../components/OnlineInterview";
import Banner from "./Banner";
import OurHeros from "./OurHeros";


const Home = () => {
    return(
        <div >
             <Banner />
             <HighlightsBar />
             <OnlineInterview/>
             <OurHeros/>
             <FAQ/>
             </div>
    )}
export default Home;