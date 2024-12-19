import React from "react";

const Weekdays = ({ weekdays }) => (
  <div className="weekdays">
    {weekdays.map((day, index) => (
      <div key={index} className="weekday">
        {day}
      </div>
    ))}
  </div>
);

export default Weekdays;
