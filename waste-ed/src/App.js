import React, { useState } from "react";
import "./App.css";
import LandingPage from "./views/LandingPage";
import HomePage from "./views/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
//render LandingPage and HomePage
//change view w/ setView()
function App() {
  const [view, setView] = useState("home-page");

  if (view === "landing-page") {
    return (
      <div className="App">
        <LandingPage setView={setView} />
      </div>
    );
  }

  if (view === "home-page") {
    return (
      <div className="App">
        <HomePage setView={setView} />
      </div>
    );
  }
}

export default App;
