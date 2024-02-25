import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomerDetailsFiltr.css";
import { CiSearch } from "react-icons/ci";
import Filter_icon from "../../Assets/Filter-icon.svg";

const CustomerDetailsFiltr = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="customerdetail-main">
      <div className="customerdetail-child-1">
        <p>Taking Attendance for</p>
        <DatePicker
          className="customerdetail-child-1-datepicker"
          showIcon
          toggleCalendarOnIconClick
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
      </div>
      <div className="customerdetail-child-2">
        <div className="customerdetail-child-2-search">
          <CiSearch size={22} />
          <input type="text" placeholder="Search ......" />
        </div>
        <div className="customerdetail-child-2-calander">
          <ins>
            <DatePicker
              className="customerdetail-child-1-datepicker2"
              showIcon
              toggleCalendarOnIconClick
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
          </ins>
        </div>
        <div className="customerdetail-child-2-setting">
          <img src={Filter_icon} alt="" />
          <p>Filters</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsFiltr;
