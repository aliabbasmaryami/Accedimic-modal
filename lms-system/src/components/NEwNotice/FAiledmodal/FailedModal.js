import React, { useState } from "react";
import "./FailedModal.css";
import Oppsimg from '../../../Assets/oops.png'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
} from "mdb-react-ui-kit";

const FailedModal = () => {
  const [centredModal, setCentredModal] = useState(false);

  const toggleOpen = () => setCentredModal(!centredModal);

  const handleDoneClick = () => {
    // Additional logic if needed
    // ...

    // Close the modal
    toggleOpen();
  };

  return (
    <div className="FailedModal-main">
      <MDBBtn className="failed-btn" onClick={toggleOpen}>
        Create
      </MDBBtn>

      <MDBModal tabIndex="-1" open={centredModal} setOpen={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalBody>
              <div className="FailedModal-main-child-1">
                <img src={Oppsimg} alt="successfully" />
              </div>
              <div className="FailedModal-main-child-2">
                <p>Oops! Something went wrong</p>
              </div>
              <div className="FailedModal-main-child-3">
                <button onClick={handleDoneClick}>Try Again</button>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default FailedModal;
