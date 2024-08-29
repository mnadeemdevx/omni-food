import { Footer, Header, MealsCards, PricingData, PricingPlans, Steps } from "./components";
import Hero  from "./components/hero/Hero";
import Featured from "./components/bussinessLogos/Featured";
import Testimonial from "./components/testimonials/Testimonial";
import Form from "./components/contact/Form";

import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Hero/>
            <Featured/>
            <Steps/>
            <MealsCards/>
            <Testimonial/>
            <PricingPlans/>
            <PricingData/>
            <Form/>
            <Footer/>
        </>
    );
}

export default App;

