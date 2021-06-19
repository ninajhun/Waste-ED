import React from "react";

export default function LandingPage(props) {
  const { setView } = props;
  return (
    <>
      <p onClick={() => setView("home-page")}>Go to HomePage</p>
    </>
  );
}
