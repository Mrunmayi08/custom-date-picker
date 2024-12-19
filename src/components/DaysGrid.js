import React, { useMemo } from "react";

const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const getFirstDayOfWeek = (year, month) => new Date(year, month, 1).getDay();

const DaysGrid = ({ selectedDate, handleDayClick }) => {
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();
  const totalDays = daysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);
  const prevMonthDays = daysInMonth(year, month - 1);

  const days = useMemo(() => {
    return [
      ...Array(firstDay)
        .fill(null)
        .map((_, i) => (
          <div key={`prev-${i}`} className="day disabled">
            {prevMonthDays - firstDay + i + 1}
          </div>
        )),

      ...Array(totalDays)
        .fill(null)
        .map((_, i) => (
          <div
            key={`day-${i + 1}`}
            className={`day ${
              i + 1 === selectedDate.getDate() ? "selected" : ""
            }`}
            onClick={() => handleDayClick(i + 1)}
          >
            {i + 1}
          </div>
        )),

      ...Array(42 - (totalDays + firstDay))
        .fill(null)
        .map((_, i) => (
          <div key={`next-${i}`} className="day disabled">
            {i + 1}
          </div>
        )),
    ];
  }, [selectedDate, totalDays, firstDay, prevMonthDays, handleDayClick]);

  return <div className="days-grid">{days}</div>;
};

export default DaysGrid;
