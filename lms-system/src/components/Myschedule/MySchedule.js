import React from "react";
import "./MySchedule.css";
import { GrFormNext } from "react-icons/gr";
import { MyscheduleData } from '../data/MyscheduleData';

const MySchedule = () => {
  return (
    <div className="myschedule-main">
      <div className="myschedule-heading">
        <h1>My Schedule</h1>
        <span>See all</span>
      </div>
      {MyscheduleData.map((item, index) => (
        <div key={index} className="myschedule-child"style={{ marginTop: "19px", backgroundColor: item.backgroundColor }}>
          <div className="myschedule-child-data">
            <div className="myschedule-child-date" style={{ background: item.dateTextColor }}>
              <p>{item.dateText}</p>
            </div>
            <div className="mychild-myschedule">
              <h6>{item.heading}</h6>
              <div className="myschedule-time">
                <div className="myschedule-mother">
                <p>{item.time}</p>
                <span style={{ color: item.spanColor}}>●</span>
                <p>8 A.M - 9 A.M </p>  
                </div>
                <p style={{fontSize:"8px"}}>{item.lasttext}</p>
              </div>
            </div>
            <div className="myschedule-icon">
              <GrFormNext style={{ width: "18px", height: "18px" }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MySchedule;
