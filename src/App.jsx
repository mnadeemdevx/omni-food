import { Footer, Header, MealsCards, PricingData, PricingPlans, Steps } from "./components";

import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Steps/>
            <MealsCards/>
            <PricingPlans/>
            <PricingData/>
            <Footer/>
        </>
    );
}

export default App;
