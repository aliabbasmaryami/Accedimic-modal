import React, { useState } from "react";
import "./CourseSchedule.css";
import { MdPersonAdd } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const CourseSchedule = () => {
  const [courseScheduleData, setCourseScheduleData] = useState([
    { id: 1, course: "English", section: 1, markingPeriod: 2, time: "12:30", room: "1234" },
    { id: 1, course: "English", section: 1, markingPeriod: 2, time: "12:30", room: "1234" },
    { id: 1, course: "English", section: 1, markingPeriod: 2, time: "12:30", room: "1234" },
  
  ]);

  const handleDeleteRow = (index) => {
    const updatedData = [...courseScheduleData];
    updatedData.splice(index, 1);
    setCourseScheduleData(updatedData);
  };

  return (
    <div className="CourseSchedule-main">
      <p>Schedule</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Course Section</th>
              <th>Period</th>
              <th>Marking Period</th>
              <th>Time</th>
              <th>Room</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courseScheduleData.map((data, index) => (
              <tr key={data.id} className="courseSchedule-tr-data">
                <td>{index + 1}</td>
                <td>{data.course}</td>
                <td>{data.section}</td>
                <td className="timeup">{data.markingPeriod}</td>
                <td>
                  <button>{data.time}</button>
                </td>
                <td>{data.room}</td>
                <td className="courseSchedule-IcOns">
                  <MdPersonAdd />
                  <MdDelete onClick={() => handleDeleteRow(index)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseSchedule;
