import Faq from "../../components/Faq/Faq";
import Faqcard from "../../components/Faq/Faqcard";
import Slide from "../../components/Slide/Slide";
import Videodata from "../../components/Videoslide/Videodata";
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
            <div>
                <Videodata></Videodata>
            </div>
        </div>
    );
};

export default Home;