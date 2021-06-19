import React from "react";
import img from "../zero.png";

export default function LandingPage(props) {
  const { setView } = props;
  return (
    <div className="landing-page">
      <div>
        <h1 className="app-name">Waste-Ed</h1>
        <p className="app-description">track your food expiration dates</p>
        <p className="app-description">+</p>
        <p className="app-description">your impact on the environment</p>
      </div>
      <img className="eco-woman" src={img} alt="eco-friendly-woman"></img>
      <button className="get-started" onClick={() => setView("home-page")}>Get Started</button>
    </div>
  );
}
