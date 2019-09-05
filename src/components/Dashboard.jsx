import React, { useState } from "react";
import Display from "./Display";
const Dashboard = props => {
  const [ballCount, newBallCount] = useState(0);
  const [strikeCount, newStrikeCount] = useState(0);
  // const [hitCount, newHitCount] = useState(0);
  console.log(ballCount, strikeCount);
  return (
    <>
      <Display strike={strikeCount} ball={ballCount} />
      <div className="Dashboard-container">
        <button
          name="strikeCount"
          onClick={() => newStrikeCount(strikeCount + 1)}
        >
          Strike
        </button>
        <button name="ballCount" onClick={() => newBallCount(ballCount + 1)}>
          Ball
        </button>
      </div>
    </>
  );
};
export default Dashboard;
