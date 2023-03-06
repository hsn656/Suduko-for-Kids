import "./Dateselector.css"
import React, { useState } from 'react';
import { HiArrowLongLeft } from "react-icons/hi2";


const Dateselector = () => {
  const [selectedDate1, setSelectedDate1] = useState('');
  const [selectedDate2, setSelectedDate2] = useState('');


  const handleDateChange1 = (event) => {
    setSelectedDate1(event.target.value);
  };
  const handleDateChange2 = (event) => {
    setSelectedDate2(event.target.value);
  };

  return (
    <div className="dateWrapper">
    
    <div className="date-selector">
      <input
        type="date"
        id="date-picker"
        value={selectedDate1}
        onChange={handleDateChange1}
      />
    </div>

    <HiArrowLongLeft/>

    <div className="date-selector">
      <input
        type="date"
        id="date-picker"
        value={selectedDate2}
        onChange={handleDateChange2}
      />
    </div>

    <p><b>:الفترة </b></p>
    </div>
  );
};

export default Dateselector;

