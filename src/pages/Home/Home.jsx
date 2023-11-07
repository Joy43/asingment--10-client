import { Helmet } from "react-helmet";
import Faq from "../../components/Faq/Faq";


import Slide from "../../components/Slide/Slide";

import Services from "../ServicesHomepage/Services/Services";
import Gallery from "../../components/Gallery/Gallery";


const Home = () => {
    return (
        <div>
            <Helmet>
<title>Home page</title>
<meta name='Home' content='This is home page' />
</Helmet>
            <div className="mt-10">
                <Slide></Slide>
            </div>

            <div>
                <Services></Services>
            </div>
            
           <div>
            <Gallery></Gallery>
           </div>
           <div className="mt-10">
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;