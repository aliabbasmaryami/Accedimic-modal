import React, { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import "./MyGrade.css";
import { MygradeData } from "../MyscheduleData";
import Table from '../../../Assets/table.svg'

const Mygrade = () => {
  const [gradeData, setGradeData] = useState([]);

  const gradeStyles = [
    {
      result: "failed",
      labelColor: "#f93333",
      buttonColor: "#f93333",
      progressbarColor: "#f93333",
      gradebc: "#ffefef",
      id: 1,
      gradeTitle: "Articulate structure of C++ and Java in Semester 1",
      subject: "Gis Programming",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 65,
    },
    {
      result: "Failed",
      labelColor: "#f93333",
      buttonColor: "#f93333",
      progressbarColor: "#f93333",
      gradebc: "#ffefef",
      id: 1,
      gradeTitle: "Articulate structure of C++ and Java in Semester 1",
      subject: "Gis Programming",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 65,
    },
    {
      buttonColor: "#9A9A9A",
      labelColor: "#9A9A9A",
      progressbarColor: "#9A9A9A",
      gradebc: "#E6E6E6",
      id: 2,
      gradeTitle: "Articulate structure of C++ and Java in Semester 1",
      result: "Missed",
      subject: "Gis Programming",
      date: "4-01-2023",
      time: "10:00 AM - 11:40 AM",
      passingPercentage: 70,
      scoredPercentage: 20,
    },
    {
      result: "passed",
      buttonColor: "#11A529",
      labelColor: "#11A529",
      progressbarColor: "#11A529",
      gradebc: "#Effff5",
      id: 3,
      result: "Passed",
      gradeTitle: "Articulate structure of C++ and Java in Semester 1",
      subject: "Gis Programming",
      date: "4-01-2023",
      time: "10:00 AM - 11:40 AM",
      passingPercentage: 70,
      scoredPercentage: 30,
      buttonColor: "#11A529",
      gradebc: "#EFFFF5",
    },
  ];

  useEffect(() => {
    setGradeData(mapGradeData(MygradeData, gradeStyles));
  }, []);

  const mapGradeData = (originalData, gradeStyles) => {
    return originalData.map((item) => {
      const style =
        gradeStyles.find((gradeStyle) => gradeStyle.result === item.result) ||
        {};
      return { ...item, ...style };
    });
  };

  const updateScoredPercentage = (id, newScore) => {
    // Ensure gradeData is defined before using it
    if (!gradeData) return;
    const updatedData = gradeData.map((gradecard) => {
      if (gradecard.id === id) {
        return { ...gradecard, scoredPercentage: newScore };
      }
      return gradecard;
    });
    setGradeData(updatedData);
  };

  return (
    <>
      <div className="mygrade-containers-first-main">
        <div className="mygrade-containers-first-main2">
          <h5>Grades</h5>
          <img src={Table} alt="Table" />
        </div>
        <div className="mygrade-containers-first-main3">
          <h6 style={{color:"#3C3C3C"}}>Total Exams : 245</h6>
          <p style={{color:"#6B6B6B"}}>Attempted : 120</p>
          <p style={{color:"#9E9E9E"}}>Unattempt : 125</p>
          <p style={{color:"#55DE64"}}>Passed : 25</p>
          <p style={{color:"#F93333"}}>Failed : 25</p>
        </div>
      </div>
      <div className="MyGrade-main-Map">
        {gradeData &&
          gradeData.map((gradecard, index) => (
            <div
              className="mygrade-main"
              key={index}
              style={{ marginTop: "1px", backgroundColor: gradecard?.gradebc }}
            >
              <span style={{ color: gradecard?.labelColor }}>
                {gradecard.result}
              </span>
              <div className="mygrade-child">
                <div className="mygrade-child-1">
                  <h2>{gradecard.gradeTitle}</h2>
                  <p>Subject : {gradecard.subject}</p>
                </div>
                <div className="mygrade-time">
                  <div className="calander-icon">
                    <FaCalendar style={{ marginTop: "3px" }} />
                    <p>{gradecard.date}</p>
                  </div>
                  <div className="time-icon">
                    <FaRegClock style={{ marginTop: "4px" }} />
                    <p>{gradecard.time}</p>
                  </div>
                </div>
                <div className="mygrade-percentage">
                  <div className="Passing-Percentage">
                    <h6>Passing Percentage</h6>
                    <p>{gradecard.passingPercentage}%</p>
                  </div>
                  <div className="Scored-Percentage">
                    <h6>Scored Percentage</h6>
                    <p style={{ color: "#f93333" }}>
                      {gradecard.scoredPercentage}%
                    </p>
                  </div>
                </div>
                <div className="progress-bar-line">
                  {console.log(gradecard?.progressbarColor)}
                  <progress
                    className="mygrade-process-line"
                    id={`file-${gradecard.id}`}
                    value={gradecard.scoredPercentage}
                    max="100"
                    onChange={(e) =>
                      updateScoredPercentage(
                        gradecard.id,
                        parseInt(e.target.value)
                      )
                    }
                    style={{
                      "--progressbar-color": gradecard?.progressbarColor,
                    }}
                  >
                    {gradecard.scoredPercentage}%
                  </progress>
                </div>
                <div className="mygrade-btn">
                  <button style={{ backgroundColor: gradecard?.buttonColor }}>
                    View detail
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Mygrade;
