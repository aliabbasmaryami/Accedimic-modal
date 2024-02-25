import React, { useState } from "react";
import "./Adminstrator.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Accordion from "react-bootstrap/Accordion";

const Adminstrator = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="Adminstrator-main">
      <div className="Adminstrator-main-2">
        <p>Data Filtering</p>
        <div className="Adminstrator-main-2-checkbox">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <p>Search All Schools</p>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <p>Include Inactive Students</p>
          </div>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Identification Information</Accordion.Header>
            <Accordion.Body>
              <div className="Adminstrator-child-Identification-Information">
                <div className="Adminstrator-child-Identification">
                  <input type="text" id="text" placeholder="First/Given Name" />
                  <input type="text" id="text" placeholder="Middle Name" />
                  <input type="text" id="text" placeholder="Last/Family Name" />
                  <input type="text" id="text" placeholder="Student ID " />
                </div>
                <div className="Adminstrator-child-Identification-2">
                  <input type="text" id="text" placeholder="Alternate ID " />
                  <input
                    type="text"
                    id="text"
                    placeholder="Admission Number "
                  />
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/*  */}

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Access Information</Accordion.Header>
            <Accordion.Body>
              <div className="Adminstrator-child-Access-Information">
                <div className="Adminstrator-child-Access-Information-2">
                  <input
                    type="text"
                    id="text"
                    placeholder="Login Email Address"
                  />
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/*  */}
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Search Birthdays between Date Range </Accordion.Header>
            <Accordion.Body>
              <div className="Adminstrator-child-Search-Birthdays">
                <div className="date-choseer">
                  <div>
                    <div>
                      <input type="date" id="date" placeholder="From Date" />
                    </div>
                  </div>
                  <div>
                    <input type="date" id="date" placeholder="From Date" />
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/*  */}
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Demographic Information</Accordion.Header>
            <Accordion.Body>
              <div className="Adminstrator-child-Demographic-Information">
                <div className="test-321">
                <div>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showIcon
                        className="ali"
                        placeholderText={startDate ? "" : "Date of birth"}
                      />  
                    </div>
                  <div className="Adminstrator-child-Demographic-2">
                    <select name="Gender" id="Gender" placeholder="Gendeer">
                      <option value="" disabled selected hidden>
                        Gender
                      </option>
                      <option value="saab">Male</option>
                      <option value="saab">FeMale</option>
                    </select>
                  </div>
                  <div className="Adminstrator-child-Demographic-2">
                    <select name="Gender" id="Gender" placeholder="Gendeer">
                      <option value="" disabled selected hidden>
                        Country of birth
                      </option>
                      <option value="saab">pakistan</option>
                      <option value="saab">uk</option>
                      <option value="saab">america</option>
                      <option value="saab">china</option>
                      <option value="saab">germany</option>
                    </select>
                  </div>
                  <div className="Adminstrator-child-Demographic-2">
                    <select name="Gender" id="Gender" placeholder="Gendeer">
                      <option value="" disabled selected hidden>
                        Nationality
                      </option>
                      <option value="saab">germany</option>
                      <option value="saab">america</option>
                      <option value="saab">uk</option>
                    </select>
                  </div>
                </div>
                <div className="Adminstrator-test123">
                  <div className="Adminstrator-child-Demographic-3">
                    <select name="Gender" id="Gender" placeholder="Gendeer">
                      <option value="" disabled selected hidden>
                        Native Language
                      </option>
                      <option value="saab">English</option>
                      <option value="saab">Spanish</option>
                      <option value="saab">chines</option>
                    </select>
                  </div>
                  <div className="Adminstrator-child-Demographic-2">
                    <select name="Gender" id="Gender" placeholder="Gendeer">
                      <option value="" disabled selected hidden>
                        Spoken Language
                      </option>
                      <option value="saab">English</option>
                      <option value="saab">Spanish</option>
                      <option value="saab">chines</option>
                    </select>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/*  */}
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Enrolment Information </Accordion.Header>
            <Accordion.Body>
              <div>
                <div className="Adminstrator-child-Native-Language">
                  <div className="Adminstrator-child-Demographic-2">
                    <select name="Section" id="Section" placeholder="Gendeer">
                      <option value="" disabled selected hidden>
                        Section
                      </option>
                      <option value="saab">Section1</option>
                      <option value="saab">Section2</option>
                      <option value="saab">Section3</option>
                    </select>
                  </div>
                  <div>
                    <div>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showIcon
                        className="ali"
                        placeholderText={startDate ? "" : "Enrolment Date"}
                      />
                    </div>
                  </div>
                  <div className="Adminstrator-child-Demographic-2">
                    <select name="Enrolment Code" id="Enrolment Code" placeholder="Enrolment Code">
                      <option value="" disabled selected hidden>
                      Enrolment Code
                      </option>
                      <option value="saab">Enrolment Code</option>
                      <option value="saab">Enrolment Code</option>
                      <option value="saab">Enrolment Code</option>
                    </select>
                  </div>
                  <div className="Estimated-graduat">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showIcon
                      className="ali"
                      placeholderText={startDate ? "" : "Estimated Graduation"}
                    />
                  </div>
                </div>

                <div className="Adminstrator-child-Demographic-4">
                  <select name="Grade Level" id="Grade Level" placeholder="Grade Level">
                    <option value="" disabled selected hidden>
                    Grade Level
                    </option>
                    <option value="saab">Grade Level 1</option>
                    <option value="saab">Grade Level 2</option>
                    <option value="saab">Grade Level 3</option>
                  </select>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/*  */}
        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Address Information </Accordion.Header>
              <Accordion.Body>
                <div className="Adminstration-Address-Information">
                  <input type="text" id="text" placeholder="Street Address 1" />
                  <input type="text" id="text" placeholder="Street Address 2" />
                  <div className="Adminstrator-child-Demographic-5">
                    <select name="Country" id="Country" placeholder="Country">
                      <option value="" disabled selected hidden>
                      Country
                      </option>
                      <option value="saab">pakistan</option>
                      <option value="saab">uk</option>
                      <option value="saab">america</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    id="text"
                    placeholder="State/Province/Locality"
                  />
                </div>
                <div className="mouse">
                  <div className="Adminstrator-child-Demographic-6">
                    <select name="City" id="City" placeholder="City">
                      <option value="" disabled selected hidden>
                      City
                      </option>
                      <option value="saab">Gilgit</option>
                      <option value="saab">lahore</option>
                      <option value="saab">karachi</option>
                    </select>
                  </div>
                  <div className="mouse-2">
                    <input
                      type="text"
                      id="text"
                      placeholder="Zip/Postal Code"
                    />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {/*  */}
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Personal Contact Information </Accordion.Header>
            <Accordion.Body>
              <div className="Adminstration-Personal-Contact-Information ">
                <div className="Adminstration-Personal-detail">
                  <input type="text" id="text" placeholder="Home Phone" />
                  <input type="text" id="text" placeholder="Mobile Phone" />
                  
                </div>
                <div className="Adminstrator-child-Demographic-7">
                    <select name="Gender" id="Gender" placeholder="Gendeer">
                      <option value="" disabled selected hidden>
                      Personal Email
                      </option>
                      <option value="saab">Personal Email</option>
                      <option value="saab">Personal Email</option>
                      <option value="saab">Personal Email</option>
                    </select>
                  </div>
                <div className="Adminstrator-bttn">
                  <button>Reset</button>
                  <button>Search</button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Adminstrator;

