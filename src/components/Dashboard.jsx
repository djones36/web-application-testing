import React, { useState } from "react";
import Display from "./Display";
const Dashboard = props => {
  const [ballCount, newBallCount] = useState(0);
  const [strikeCount, newStrikeCount] = useState(0);
  // const [hitCount, newHitCount] = useState(0);
  console.log(ballCount, strikeCount);
  const handleStrikeClick = () => {
    if (strikeCount === 3) {
      return newStrikeCount(0);
    } else {
      return newStrikeCount(strikeCount + 1);
    }
  };
  const handleBallClick = () => {
    if (ballCount === 4) {
      return newBallCount(0);
    } else {
      return newBallCount(ballCount + 1);
    }
  };
  const handleFoulClick = () => {
    if (strikeCount != 2) return newStrikeCount(strikeCount + 1);
    else return strikeCount;
  };
  const handleHitClick = () => {
    return newBallCount(0), newStrikeCount(0);
  };
  return (
    <>
      <Display strike={strikeCount} ball={ballCount} />
      <div className="Dashboard-container">
        <button name="strikeCount" onClick={handleStrikeClick}>
          Strike
        </button>
        <button name="ballCount" onClick={handleBallClick}>
          Ball
        </button>
        <button onClick={handleHitClick}>Hit</button>
        <button onClick={handleFoulClick}>Foul</button>
      </div>
    </>
  );
};
export default Dashboard;
