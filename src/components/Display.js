import React from "react";

const Display = props => {
  return (
    <div className="display-container">
      <div className="balls-container">
        <h2>Balls</h2>
        <div className="counter">{props.ball}</div>
      </div>
      <div className="strikes-container">
        <h2>Strikes</h2>
        <div className="counter">{props.strike}</div>
      </div>
    </div>
  );
};
export default Display;
