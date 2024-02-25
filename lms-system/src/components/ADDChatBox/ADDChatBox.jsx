import React, { useState } from "react";
import "./ADDChatBox.css";
import { FaRegSmile } from "react-icons/fa";
import { IoMdCall, IoIosSend } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { GrAttachment } from "react-icons/gr";
import { BsCameraVideo, BsThreeDotsVertical } from "react-icons/bs";
import image1 from "./image/image1.png";
import image2 from "./image/image2.png";

const MessageInput = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    onSendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="message-input">
      <button className="emojiColor">
        <GrAttachment />
      </button>
      <input
        type="text"
        placeholder="Type your message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button className="emojiColor">
        <FaRegSmile />
      </button>
      <button onClick={handleSendMessage}>
        <IoIosSend />
      </button>
    </div>
  );
};

const MessageBox = ({ messages }) => {
  return (
    <div className="message-box">
      {messages.map((message, index) => (
        <div
          key={index}
          className={
            message.sender === "teacher" ? "teacher-message" : "student-message"
          }
        >
          {message.text}
          <span className="timestamp">{message.timestamp}</span>
        </div>
      ))}
    </div>
  );
};

const ADDChatBox = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [firstTabVisible, setFirstTabVisible] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setFirstTabVisible(false);
  };

  const handleToggleClick = () => {
    setFirstTabVisible((prevVisible) => !prevVisible);
  };

  const handleSendMessage = (text) => {
    const studentMessage = {
      text,
      sender: "student",
      timestamp: new Date().toLocaleTimeString(),
    };
    const updatedMessages = [...messages, studentMessage];
    setMessages(updatedMessages);

    // Simulating teacher's response after a short delay
    setTimeout(() => {
      const teacherResponse = `Thanks for your message, ${
        text.length > 0 ? "student" : "class"
      }!`;
      const teacherMessage = {
        text: teacherResponse,
        sender: "teacher",
        timestamp: new Date().toLocaleTimeString(),
      };
      const updatedMessagesWithResponse = [...updatedMessages, teacherMessage];
      setMessages(updatedMessagesWithResponse);
    }, 1000);
  };

  const [messages, setMessages] = useState([]);

  return (
    <div className="chat-box">
      <div
        className={`toggle ${firstTabVisible ? 'active' : ''}`}
        onClick={handleToggleClick}
      >
        <RiBarChartHorizontalLine />
      </div>
      <div className={`side-nav-tabs sideBar ${firstTabVisible ? 'first-tab-open' : ''}`}>
        <div className="tabs firstTab">
          <div className="btnAndSearch">
            <div className="Buttons">
              <button>Parent</button>
              <button>Admin</button>
              <button>Student</button>
            </div>
            <div className="search">
              <FiSearch />
              <input type="search" placeholder="Search" />
            </div>
            <h3>Announcement</h3>
          </div>
          <div
            className={`tab ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => handleTabClick("tab1")}
          >
            <div className="userMassage">
              <img src={image1} alt="userInfo" />
              <div className="userInfo">
                <h2>Jane Doe</h2>
                <div className="time">
                  <p>Hi, I want to make inquiries about You..</p>
                  <span>12:55 am</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`tab ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => handleTabClick("tab2")}
          >
            <div className="userMassage">
              <img src={image2} alt="userInfo" />
              <div className="userInfo">
                <h2>Sayan Doe</h2>
                <div className="time">
                  <p>Hi, I want to make inquiries about You..</p>
                  <span>12:55 am</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-content userMassages">
          {activeTab === "tab1" && (
            <div className="userMassageBox">
              <div className="userCall">
                <div className="parent">
                  <img src={image1} alt="Parent Info" />
                  <div className="userInfoCall">
                    <h3>
                      Jane Doe <span>(parent)</span>{" "}
                    </h3>
                    <p>Online</p>
                  </div>
                </div>
                <div className="callMsg">
                  <BsCameraVideo />
                  <IoMdCall />
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="ClassMassage">
                <MessageBox messages={messages} />
              </div>
              <div className="MassageBoxUser">
                <MessageInput onSendMessage={handleSendMessage} />
              </div>
            </div>
          )}
          {activeTab === "tab2" && (
            <div className="userMassageBox">
              <div className="userCall">
                <div className="parent">
                  <img src={image2} alt="Parent Info" />
                  <div className="userInfoCall">
                    <h3>
                      Sayan Doe <span>(parent)</span>{" "}
                    </h3>
                    <p>Online</p>
                  </div>
                </div>
                <div className="callMsg">
                  <BsCameraVideo />
                  <IoMdCall />
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="ClassMassage">
                <MessageBox messages={messages} />
              </div>
              <div className="MassageBoxUser">
                <MessageInput onSendMessage={handleSendMessage} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ADDChatBox;

