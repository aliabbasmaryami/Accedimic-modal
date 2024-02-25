import React from "react";
import "./AttendenceFilter.css";
import { FaComment } from "react-icons/fa6";

const AttendenceFilterss = () => {
  const attendanceData = [
    {
      id: 1,
      student: "Aly",
      classTime: "9:30 AM",
      date: "12 April 2023",
      subject: "NEED-English Medium",
      status: "Leave",
      comments: true,
    },
    {
      id: 2,
      student: "Aly",
      classTime: "9:30 AM",
      date: "12 April 2023",
      subject: "NEED-English Medium",
      status: "Present",
      comments: true,
    },
    {
      id: 3,
      student: "Aly",
      classTime: "9:30 AM",
      date: "12 April 2023",
      subject: "NEED-English Medium",
      status: "Absent",
      comments: true,
    },
    {
      id: 3,
      student: "Aly",
      classTime: "9:30 AM",
      date: "12 April 2023",
      subject: "NEED-English Medium",
      status: "Absent",
      comments: true,
    },
    // Add more data as needed
  ];
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "leave":
        return "#DC9A00";
      case "present":
        return "#40997E";
      case "absent":
        return "#CC1313";
      default:
        return "black";
    }
  };
  
  const getStatusBackgroundColor = (status) => {
    switch (status.toLowerCase()) {
      case "leave":
        return "#FFF4EC";
      case "present":
        return "#ECFFEE";
      case "absent":
        return "#FFECEC";
      default:
        return "transparent";
    }
  };

  return (
    <div className="AttendenceFilterss-main">
      <div className="AtendenceFilterss-childs">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Student</th>
              <th>Class Time</th>
              <th>Date</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((attendance, index) => (
              <tr key={attendance.id} className="AttendenceFilterss-tr-data">
                <td>{index + 1}.</td>
                <td>{attendance.student}</td>
                <td>{attendance.classTime}</td>
                <td>{attendance.date}</td>
                <td className="Attendence-subject">{attendance.subject}</td>
                <td>
                  <button
                    style={{
                      backgroundColor: getStatusBackgroundColor(attendance.status),
                      color: getStatusColor(attendance.status),
                    }}
                  >
                    {attendance.status}
                  </button>
                </td>
                <td className="AttendenceFilterss-IcOns">
                  <FaComment
                    className="facoMMents-icon"
                    style={{ color: attendance.comments ? "#71d875" : "gray" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default AttendenceFilterss;
