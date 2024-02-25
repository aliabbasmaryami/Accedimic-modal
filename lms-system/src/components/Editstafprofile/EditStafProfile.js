import React, { useState, useRef } from "react";
import "./Editstafprofile.css";
import fiupload from "../../Assets/fi_upload-cloud.svg";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { TiDocumentText } from "react-icons/ti";
import EditStaffInfo from "./Editstaffinfo/EditStaffInfo";

const EditStafProfile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="EditStaff-main">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} className="EditStaff-Col3-main">
            <div className="EditStaff-COl3">
              <div className="EditStaff-Child-1">
                <div className="fiupload-img">
                  <div className="upLoaDing">
                    {selectedFile ? (
                      <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Staff"
                        style={{
                          width: "100%",
                          height: "171px",
                          cursor: "pointer",
                        }}
                        onClick={handleImageClick}
                      />
                    ) : (
                      <>
                        <img
                          src={fiupload}
                          alt="Staff"
                          style={{ width: "100%", cursor: "pointer" }}
                          onClick={handleImageClick}
                        />
                        <label
                          htmlFor="upload"
                          style={{ cursor: "pointer", marginTop: "8px" }}>
                          school logo
                        </label>
                      </>
                    )}
                    <input
                      type="file"
                      id="upload"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <h2>Mr.Anees khan</h2>
                <button>Teacher</button>
              </div>
            </div>
            <MDBAccordion initialActive={1}>
              <MDBAccordionItem
                collapseId={1}
                headerTitle={
                  <>
                    <TiDocumentText /> Staff Details
                  </>
                }
              >
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">General Info</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">School Info </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Address & Contact</Nav.Link>
                  </Nav.Item>
                </Nav>
              </MDBAccordionItem>
            </MDBAccordion>
            <Nav.Item className="EditStaffDifferentLink">
              <Nav.Link eventKey="fourth">Address & Contact</Nav.Link>
            </Nav.Item>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first"><EditStaffInfo/></Tab.Pane>
              {/* <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
              <Tab.Pane eventKey="third">third tab content</Tab.Pane>
              <Tab.Pane eventKey="fourth">fourth tab content</Tab.Pane> */}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default EditStafProfile;
