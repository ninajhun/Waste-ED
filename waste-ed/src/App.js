import React, { useState } from "react";
import "./App.css";
import LandingPage from "./views/LandingPage";
import HomePage from "./views/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
<<<<<<< HEAD
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
=======
  return (
    <>
    <div className="App">
      <header className="App-header">
        <p>Wasted-ED</p>
      </header>
    </div>
    </>
  );
>>>>>>> 7a24af26417a94608c6516569a4b36736946ef38
}

export default App;
