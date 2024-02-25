import React from "react";
import "./Classroom.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import img1 from "../../Assets/Teacher and Student Learning Chemistry1.png";
import {cardsData} from '../data/MyscheduleData'

const Classroom = () => {
  return (
    <div className="classroom-main">
      <div className="Classroom-child-1">
        <div>
          My <span>ClassRooms</span>
        </div>
        <p>View All</p>
      </div>
      <div className="Classroom-child-2-map">
      {cardsData.map((card) => (
        <div className="Classroom-child-2" key={card.id}>
          <div className="Classroom-child-2-main" style={{ background: card.backgroundColor }}>
            <span className="three-dot-icon" style={{ color: card.iconColor }}>
              <HiOutlineDotsVertical />
            </span>
            <div className="classroom-child-2-img" style={{ backgroundColor: card.imgBackgroundColor }}>
              <img src={card.image} alt="" />
            </div>
            <p>{card.subject}</p>
            <button style={{ backgroundColor: card.buttonColor }}>View Class</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Classroom;