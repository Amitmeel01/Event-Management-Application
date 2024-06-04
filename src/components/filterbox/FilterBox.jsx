import React, { useEffect, useState } from "react";
import "./FilterBox.css";

function FilterBox({ getMonthYear }) {
  const [selectMonth, setSelectMonth] = useState("January");
  const [selectYear, setSelectYear] = useState(2023);

  const months = [
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
  ];
  const years = [2023, 2024];

  const handleMonthChange = (e) => {
    setSelectMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectYear(Number(e.target.value));
  };

 

  

  useEffect(() => {
    const updateParent = () => {
      // e.preventDefault();
      getMonthYear(selectMonth, selectYear);
    };
    updateParent()
  }, [selectMonth,selectYear]);

  return (
    <div className="filter-card">
      <form >
        <div className="wrapper">
          <div className="month">
            <label htmlFor="month">Month:</label>
            <select value={selectMonth} onChange={handleMonthChange}>
              {months.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="month">
            <label htmlFor="year">Year:</label>
            <select value={selectYear} onChange={handleYearChange}>
              {years.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        
      </form>
    </div>
  );
}

export default FilterBox;
