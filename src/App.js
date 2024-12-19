import React, { useState, useCallback, useMemo } from "react";
import "./styles.css";
import DateDisplay from "./components/DateDisplay";
import Calendar from "./components/Calendar";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const updateDate = useCallback((modifier, type) => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      if (type === "month") newDate.setMonth(newDate.getMonth() + modifier);
      if (type === "year")
        newDate.setFullYear(newDate.getFullYear() + modifier);
      return newDate;
    });
  }, []);

  const handleDayClick = useCallback((day) => {
    setSelectedDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth(), day)
    );
  }, []);

  const months = useMemo(
    () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    []
  );

  const weekdays = useMemo(() => ["S", "M", "T", "W", "T", "F", "S"], []);

  return (
    <div className="date-picker">
      <DateDisplay selectedDate={selectedDate} months={months} />
      <Calendar
        selectedDate={selectedDate}
        updateDate={updateDate}
        handleDayClick={handleDayClick}
        months={months}
        weekdays={weekdays}
      />
    </div>
  );
};

export default App;
