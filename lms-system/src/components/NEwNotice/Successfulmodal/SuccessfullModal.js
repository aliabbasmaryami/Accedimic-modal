import React, { useState } from "react";
import "./SuccessfullModal.css";
import successful from "../../../Assets/Successful.png";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
} from "mdb-react-ui-kit";

const   SuccessfullModal = () => {
  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);
  const handleDoneClick = () => {
    toggleOpen();
  };
  return (
    <div className="SuccessfullModal-main">
      <MDBBtn className="ntb-btn" onClick={toggleOpen}>Create</MDBBtn>

      <MDBModal tabIndex="-1" open={centredModal} setOpen={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalBody>
              <div className="SuccessfullModal-main-child-1">
                <img src={successful} alt="successfully" />
              </div>
              <div className="SuccessfullModal-main-child-2">
                <p>Your upload was a success!</p>
              </div>
              <div className="SuccessfullModal-main-child-3">
                <button onClick={handleDoneClick} >Done</button>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default SuccessfullModal;
