import React, { useState } from "react";
import "./NoticeModalAdd.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import dayjs, { Dayjs } from "dayjs";

const NoticeModalAdd = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [visibleToAllSchool, setVisibleToAllSchool] = useState(false); // New state variable

  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
  };

  var formats = [
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "size",
  ];

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  const handleProcedureContentChange = (content) => {
    console.log("content---->", content);
  };

  const toggleVisibleToAllSchool = () => {
    setVisibleToAllSchool(!visibleToAllSchool);
  };

  return (
    <div>
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        className="newmodalmm"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="new-Activity-header">
          <p>Add Noticeboard</p>
        </Modal.Header>
        <Modal.Title id="example-modal-sizes-title-lg"></Modal.Title>
        <Modal.Body>
          <div className="NoticeModalAdd-mainn">
            <div>
              <label htmlFor="title">Title</label>
              <div>
                <input type="text" id="text" placeholder="Title" />
              </div>
            </div>
            <div className="NoticeModalAdd-mainn-child-1">
              <label htmlFor="Content">Content</label>
              <div className="reatctquill">
                <ReactQuill
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  placeholder="insert text.."
                  onChange={handleProcedureContentChange}
                ></ReactQuill>
              </div>
            </div>
            <div className="NoticeModalAdd-mainn-child-2">
              <div>
                <label htmlFor="form">From</label>
                <div>
                  <input type="date" value={fromDate} onChange={handleFromDateChange} />
                </div>
              </div>
              <div>
                <label htmlFor="To">To</label>
                <div>
                  <input type="date" value={toDate} min={fromDate} onChange={handleToDateChange} />
                </div>
              </div>
            </div>
          </div>
          <div className="NoticeModalAdd-mainn-child-3">
            <input type="checkbox" onChange={toggleVisibleToAllSchool} />
            <h6>Visible to All School</h6>
          </div>
          {visibleToAllSchool && (
            <div className="NoticeModalAdd-mainn-child-7">
              <h5>Visible to</h5>
              <div className="NoticeModalAdd-mainn-child-4">
                <div className="childnotice1">
                  <input type="checkbox" />
                  <p>School</p>
                </div>
                <div className="childnotice1">
                  <input type="checkbox" />
                  <p>Student</p>
                </div>
                <div className="childnotice1">
                  <input type="checkbox" />
                  <p>Parent</p>
                </div>
              </div>
              <div className="NoticeModalAdd-mainn-child-5">
                <div className="childnotice1">
                  <input type="checkbox" />
                  <p>Vendor</p>
                </div>
                <div className="childnotice1">
                  <input type="checkbox" />
                  <p>Thursday</p>
                </div>
                <div className="childnotice1">
                  <input type="checkbox" />
                  <p>Friday</p>
                </div>
              </div>
            </div>
          )}
          <div className="NoticeModalAdd-mainn-child-8">
            <button>Cancel</button>
            <button>Submit</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NoticeModalAdd;
