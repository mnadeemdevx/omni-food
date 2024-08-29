import React from "react";
import FormImg from "../../assets/eating.jpg";
import "./Form.css";

function Form() {
  return (
    <section className="section-cta" id="cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">
              Get your first meal htmlFor free!
            </h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting htmlFor you.
              Start eating well today. You can cancel or pause anytime. And the
              first meal is on us!
            </p>

            <form className="cta-form" name="sign-up">
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="full-name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select
                  id="select-where"
                  name="select-where"
                  className="select"
                  required
                >
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div>
                <button className="sign-up-btn">Sign up now</button>
              </div>
            </form>
          </div>
          <div className="cta-img-box">
            <div className="img-div-wrapper">
              <img className="img-div" src={FormImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
