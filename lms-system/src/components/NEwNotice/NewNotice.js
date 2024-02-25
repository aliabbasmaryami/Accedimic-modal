import { useState, react } from "react";
import "./NewNotice.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NewNotice = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className="NewNotice-main">
      <div>
        <Button onClick={() => setLgShow(true)}>Large modal</Button>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton className="new-Activity-header">
            <p>Noticeboard</p>
          </Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg"></Modal.Title>
          <Modal.Body>
            <div className="new-notice-mainn">
              <div>
                <label htmlFor="title">Title</label>
                <div>
                  <input type="text" id="text" placeholder="Title" />
                </div>
              </div>
              <div className="new-notice-mainn-child-1">
                <div>
                  <textarea
                    name="text"
                    id="text"
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>
              <div className="new-notice-mainn-child-2">
                <div>
                  <label htmlFor="Date">Date</label>
                  <div>
                    <input type="date" id="date" />
                  </div>
                </div>
                <div>
                  <label htmlFor="Class">Class</label>
                  <div>
                    <select name="class" id="class">
                      <option value="" disabled selected>Select Class</option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="new-notice-mainn-child-3">
                <button>Create</button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default NewNotice;
