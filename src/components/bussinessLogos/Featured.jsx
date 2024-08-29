import React from "react";
import "./Featured.css";
import Logo1 from "../../assets/logos/techcrunch.png";
import Logo2 from "../../assets/logos/business-insider.png";
import Logo3 from "../../assets/logos/the-new-york-times.png";
import Logo4 from "../../assets/logos/forbes.png";
import Logo5 from "../../assets/logos/usa-today.png";

const Featured = () => {
  return (
    <>
      <section className="section-featured">
        <div className="container">
          <h2 className="heading-featured-in">As featured in</h2>
          <div className="logos">
            <img src={Logo1} alt="Techcrunch logo" />
            <img src={Logo2} alt="Business Insider logo" />
            <img src={Logo3} alt="The New York Times logo" />
            <img src={Logo4} alt="Forbes logo" />
            <img src={Logo5} alt="USA Today logo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
