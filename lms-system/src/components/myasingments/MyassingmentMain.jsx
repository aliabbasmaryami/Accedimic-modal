import React from "react";
import { ImRadioChecked } from "react-icons/im";
import "./Myassingments.css";
import { RiDragMove2Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

// import { assignmentsData } from "../data/MyscheduleData";
// import { BsThreeDotsVertical } from "react-icons/bs";

const MyassingmentMain = () => {
  const assignmentsData = [
    {
      
      descriptionColor: "#F93333",
      bgColor: "#F93333",
      buttonBgColor: "#f93333",
      buttonTextColor: "#F93333",
      button: "Active",
      date: "1",
      programCodeColor: "#F93333",
      programDurationColor: "#F93333",
      drageIconColor:"#F93333",
      EditIconClor: "#F93333",
      deleteIconColor: "#F93333",

    },
    {
  
      descriptionColor: "#16D03B",
      bgColor: "#16D03B",
      buttonBgColor: "#16D03B",
      buttonTextColor: "#16D03B",
      button: "Active",
      bcColor: "#F0FFF3",
      mainbordercolor: "#16D03B",
      date: "2",
      programCodeColor: "#16D03B",
      programDurationColor: "#16D03B",
      drageIconColor:"#16D03B",
      EditIconClor: "#16D03B",
      deleteIconColor: "#16D03B",



    },
    {
      descriptionColor: "#FF7E3E",
      bgColor: "#FF7E3E",
      buttonBgColor: "#FF7E3E",
      buttonTextColor: "#16D03B",
      button: "Active",
      date: "3",
      bcColor: "#FFF5F0",
      mainbordercolor: "#FF7E3E",
      programCodeColor: "#FF7E3E",
      programDurationColor: "#FF7E3E",
      drageIconColor:"#FF7E3E",
      EditIconClor: "#FF7E3E",
      deleteIconColor: "#FF7E3E",



    },
    {
      descriptionColor: "#00AFEF",
      bgColor: "#00AFEF",
      buttonBgColor: "#00AFEF",
      buttonTextColor: "#00AFEF",
      button: "Active",
      date: "4",
      bcColor: "#00AFEF26",
      mainbordercolor: "#00AFEF",
      programCodeColor: "#00AFEF",
      programDurationColor: "#00AFEF",
      drageIconColor:"#00AFEF",
      EditIconClor: "#00AFEF",
      deleteIconColor: "#00AFEF",


    },
  ];

  return (
    <div className="myassingment-main">
      {/* map */}
      <div style={{ marginTop: "10px" }}>
        {assignmentsData.map((assignment, index) => (
          <div
            className="myassingments-child-2m"
            key={index}
            style={{ marginTop: "10px" }}>
            <div
              className="myassingments-cardd21"
              style={{
                backgroundColor: assignment.bcColor,
                borderColor: assignment.mainbordercolor,
              }}
            >
              <div className="myassingments-card-childs-1m">
                <div className="myassingmentss-childss12">
                  <div className="myassingments-childss-Data1">
                    <div
                      className="myassingments-childs-dateAb"
                      style={{ backgroundColor: assignment.bgColor }}
                    >
                      <p>{assignment.date}</p>
                    </div>
                    <div className="Mychildss-myassingmentss1">
                      <h6>Department of Business</h6>
                    </div>
                  </div>
                  <div>
                    <h6 style={{color: assignment.programCodeColor}}>12</h6>
                  </div>
                </div>
              </div>
              {/* ///////////////////////////////// */}

              <div className="myassingments-card-childs-3m">
                <div className="descriptions-s1">
                  <h5 style={{ color: assignment.descriptionColor }}>
                    Description
                  </h5>
                  <p>here is the Assignment Detail Discription</p>
                </div>
                <div>
                <p style={{color: assignment.programDurationColor}}>3 years</p>
                </div>
                <div className="mychilds-myassingments-dovh">
                  <button
                    style={{
                      color: assignment.bgColor,
                      borderColor: assignment.buttonBgColor,
                    }}
                  >
                    {assignment.button}
                  </button>
                  <div className="mychilds-myassingments-icoNs">
                    <RiDragMove2Line style={{color:assignment.drageIconColor}}/>
                    <MdEdit style={{color: assignment.EditIconClor}} />
                    <RiDeleteBin6Line style={{color: assignment.deleteIconColor}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyassingmentMain;
