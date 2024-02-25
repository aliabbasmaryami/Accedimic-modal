import React from "react";
import "./StaffProfile.css";
import StaffProfileimg from "../../Assets/img.png";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { TiDocumentText } from "react-icons/ti";
import StaffTabs from "./StaffProfileTabs/StaffTabs";

function StaffProfile() {
  return (
    <div className="StaffProfile-Main">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} className="StaffProfile-Col3-main">
            <div className="StaffProfile-COl3">
              <div className="StaffProfile-Child-1">
                <img src={StaffProfileimg} alt="Staff" />
                <h2>Mr.Anees khan</h2>
                <button>Teacher</button>
              </div>
            </div>
            <MDBAccordion initialActive={1}>
              <MDBAccordionItem collapseId={1} headerTitle={<>
                <TiDocumentText /> Staff Details
              </>}>
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
            <Nav.Item className="StaffDifferentLinkss">
              <Nav.Link eventKey="fourth"><TiDocumentText />  Course Schedule</Nav.Link>
            </Nav.Item>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first"><StaffTabs/></Tab.Pane>
              <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
              <Tab.Pane eventKey="third">third tab content</Tab.Pane>
              <Tab.Pane eventKey="fourth">fourth tab content</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default StaffProfile;
