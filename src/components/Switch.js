import React from "react";

const Switch = ({ value, onDecrease, onIncrease }) => (
  <div className="switch">
    <button onClick={onDecrease}>{"<"}</button>
    <span>{value}</span>
    <button onClick={onIncrease}>{">"}</button>
  </div>
);

export default Switch;
