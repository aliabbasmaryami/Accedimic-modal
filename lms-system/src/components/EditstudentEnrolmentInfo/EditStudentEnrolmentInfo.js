import React from "react";
import "./EditStudentEnrolmentInfo.css";

const EditStudentEnrolmentInfo = () => {
  return (
    <div className="EditStudent-main">
      <div className="EditStudent-child1-1">
        <div className="StudentEnrolmentInfo-main-child-1">
          <p>School & Enrolment Info</p>
          <button>Edit Information</button>
        </div>
        <p>Enrollment Info</p>
        <div className="EditStudent-main-child-2">
          <div>
            <label htmlFor="School">School</label>
            <div className="select-labell">
              <select name="School" id="School" placeholder="School">
                <option value="text" disabled selected hidden>
                  -
                </option>
                <option value="saab">Unity School</option>
                <option value="saab">Guider School</option>
                <option value="saab">Dj School</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="School">Level</label>
            <div className="select-labell">
              <select name="School" id="School" placeholder="School">
                <option value="text" disabled selected hidden>
                  -
                </option>
                <option value="saab">Level 1</option>
                <option value="saab">Level 2</option>
                <option value="saab">Level 3</option>
                <option value="saab">Level 4</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="School">Estimate Graduation Date</label>
            <div className="select-labell">
              <select name="School" id="School" placeholder="School">
                <option value="text" disabled selected hidden>
                  -
                </option>
                <option value="saab">4 years</option>
                <option value="saab">2 years</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="School">Enrolment Code</label>
            <div className="select-labell">
              <select name="School" id="School" placeholder="School">
                <option value="text" disabled selected hidden>
                  -
                </option>
                <option value="saab">1234</option>
                <option value="saab">1234</option>
                <option value="saab">1234</option>
              </select>
            </div>
          </div>
        </div>

        <div className="EditStudent-main-child-3">
          <div className="EditStudent-main-child-3-Selt">
            <label htmlFor="School">Exit Date</label>
            <div className="select-labell">
              <select name="School" id="School" placeholder="School">
                <option value="text" disabled selected hidden>
                  -
                </option>
                <option value="saab">1234</option>
                <option value="saab">1234</option>
                <option value="saab">1234</option>
              </select>
            </div>
          </div>
          <div className="EditStudent-main-child-3-Selt">
            <label htmlFor="School">Exit Code</label>
            <div className="select-labell">
              <select name="School" id="School" placeholder="School">
                <option value="text" disabled selected hidden>
                  -
                </option>
                <option value="saab">1234</option>
                <option value="saab">1234</option>
                <option value="saab">1234</option>
              </select>
            </div>
          </div>
          <div className="EditStudent-main-child-3-Selt">
            <label htmlFor="School">Program</label>
            <div className="select-labell">
              <select name="School" id="School" placeholder="School">
                <option value="text" disabled selected hidden>
                  -
                </option>
                <option value="saab">1234</option>
                <option value="saab">1234</option>
                <option value="saab">1234</option>
              </select>
            </div>
          </div>
        </div>
        <div className="EditStudent-main-child-4">
              <div className="EditStudent-main-child-4-btnn">
                <button>Cancel</button>
                <button>Update</button>
              </div>
        </div>

      </div>
    </div>
  );
};

export default EditStudentEnrolmentInfo;
