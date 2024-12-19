import React from "react";
import Switch from "./Switch";
import Weekdays from "./Weekdays";
import DaysGrid from "./DaysGrid";

const Calendar = ({
  selectedDate,
  updateDate,
  handleDayClick,
  months,
  weekdays,
}) => (
  <div className="calendar">
    <div className="switch-container">
      <Switch
        label="Month"
        value={months[selectedDate.getMonth()]}
        onDecrease={() => updateDate(-1, "month")}
        onIncrease={() => updateDate(1, "month")}
      />
      <Switch
        label="Year"
        value={selectedDate.getFullYear()}
        onDecrease={() => updateDate(-1, "year")}
        onIncrease={() => updateDate(1, "year")}
      />
    </div>
    <Weekdays weekdays={weekdays} />
    <DaysGrid selectedDate={selectedDate} handleDayClick={handleDayClick} />
  </div>
);

export default Calendar;
