import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

const [ballCount, newBallCount] = useState(0);
const [strikeCount, newStrikeCount] = useState(0);
const [hitCount, newHitCount] = useState(0);
function App() {
  return (
    <div className="App">
      <h1>new app</h1>
      <Display />
      <Dashboard />
    </div>
  );
}

export default App;
