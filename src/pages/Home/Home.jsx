import Faq from "../../components/Faq/Faq";


import Slide from "../../components/Slide/Slide";

import Services from "../ServicesHomepage/Services/Services";


const Home = () => {
    return (
        <div>
            
            <div className="mt-10">
                <Slide></Slide>
            </div>

            <div>
                <Services></Services>
            </div>
            <div>
                <Faq></Faq>
            </div>
           
        </div>
    );
};

export default Home;