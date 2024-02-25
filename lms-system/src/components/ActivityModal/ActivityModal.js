import { useState, react } from "react";
import "./ActivityModal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import annocements from "../.././Assets/annocements.svg";
import mettingg from "../.././Assets/group.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const ActivityModal = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton  className="ADD-ACTIVITY_cOntain">
          <p>Add Activity</p>
        </Modal.Header>
        <Modal.Title id="example-modal-sizes-title-lg">
          <div className="Activity-modal-main">
            <div className="Activity-modal-main-child-1">
              <div className="Activity-modal-main-child-2">
                <img className="Activity-FaPhoneAlt" src={annocements} alt="" />
                <p> Announcement</p>
              </div>
              <div className="Activity-modal-main-child-2">
                <FaPhoneAlt className="Activity-FaPhoneAlt" />
                <p>Phone Call</p>
              </div>
              <div className="Activity-modal-main-child-2">
                <img className="Activity-FaPhoneAlt" src={mettingg} alt="" />
                <p>Meeting</p>
              </div>
            </div>
            <hr />
            <div className="Activity-child-3">
              <div>
                <label htmlFor="Date">Date</label>
                <div>
                  <input type="date" id="date" />
                </div>
              </div>
              <div>
                <label htmlFor="Date">time</label>
                <div>
                  <input type="text" id="text" placeholder="Time*" />
                </div>
              </div>
            </div>
            <div className="Activity-child-4">
              <textarea name="text" id="text" placeholder="Notes*"></textarea>
            </div>
            <div className="Activity-child-5">
              <h5>Participants*</h5>
              <div className="Activity-child-6">
                <div className="ALIP">
                  <p>shuaib karim</p>
                  <IoMdClose />
                </div>
                <div>
                  <input type="text"id="text" placeholder="Search Participants" />
                </div>
              </div>
            </div>
            <div className="Activity-btnn">
                <button>Cancel</button>
                <button>Submit</button>
            </div>
          </div>
        </Modal.Title>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </div>
  );
};

export default ActivityModal;
