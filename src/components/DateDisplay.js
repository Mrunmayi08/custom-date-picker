import React from "react";

const DateDisplay = ({ selectedDate, months }) => (
  <div className="date-display">
    <div className="top-day">
      <h3>{selectedDate.toLocaleString("en-US", { weekday: "long" })}</h3>
    </div>
    <div className="middle-date">
      <div className="top-item">
        <span>{selectedDate.getDate()}</span>
        <p>{months[selectedDate.getMonth()]}</p>
      </div>
      <div className="bottom-item">{selectedDate.getFullYear()}</div>
    </div>
  </div>
);

export default DateDisplay;
