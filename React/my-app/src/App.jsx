import { React, useState } from "react";
import Card from "./Card";
import "../Styles/styles.css";
function App() {
  return (
    <>
      <div className="cards">
        <Card name="fuji"/>
        <Card name="cheetah"/>
        <Card name="lion"/>
        <Card name="tiger"/>
      </div>
    </>
  );
}

export default App;
