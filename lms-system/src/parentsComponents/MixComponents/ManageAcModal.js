import React from "react";
import TextEditor from "./TextEditor";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FiMail } from "react-icons/fi";
import "./ManageAcModal.css";
import Form from "react-bootstrap/Form";

function ManageAcModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="CMmodal-main">
      <div variant="primary" onClick={handleShow}>
        <FiMail />
      </div>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        className="CMmodal-main0modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Programs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="Accedmic-modal-main">
              <label htmlFor="ProgramName">Program Name</label>
              <div className="Accedmic-modal-main-child1">
                <Form.Select aria-label="Default select example">
                  <option selected disabled>Department of Business</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>

            <div className="Accedmic-modal-main1">
              <label htmlFor="ProgramName">Program Code</label>
              <div className="Accedmic-modal-main-child1">
                <Form.Select aria-label="Default select example">
                  <option selected disabled>Class Name</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
            <div className="Accedmic-modal-main1">
              <label htmlFor="ProgramName">Program Description</label>
              <div className="Accedmic-modal-main-child1">
                <Form.Select aria-label="Default select example">
                  <option selected disabled>Class Code</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
            <div className="Accedmic-modal-main1">
              <label htmlFor="ProgramName">Program Duration</label>
              <div className="Accedmic-modal-main-child1">
                <Form.Select aria-label="Default select example">
                  <option selected disabled>Student Limit</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
            <div className="Accedmic-modal-main1">
              <label htmlFor="ProgramName">Action</label>
              <div className="Accedmic-modal-main-child1">
                <Form.Select aria-label="Default select example">
                  <option selected disabled>Active</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
            <hr style={{width:"100%"}} />
            <div className="Accedmic-modal-main-child3">
                <button>Close</button>
                <button>Save</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default ManageAcModal;
