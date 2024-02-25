import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import './EditSchoolInfo.css'

const EditSchoolInfo = () => {
  const [isSchoolInfoVisible, setIsSchoolInfoVisible] = useState(false);

  const toggleSchoolInfo = () => {
    setIsSchoolInfoVisible(!isSchoolInfoVisible);
  };

  return (
    <div className="EditSchoolInfo-main">
      <p>School Information</p>
      <div className="EditSchoolInfo-child-1">
        <h4>Official Information</h4>
        <div className="EditSchoolInfo-child-2">
          <div>
            <label htmlFor="Job Title">Job Title</label>
            <div>
              <input type="text" id="text" placeholder="-" />
            </div>
          </div>
          <div>
            <label htmlFor="Joining Date">Joining Date</label>
            <div>
              <input type="date" id="date" placeholder="kuch b" />
            </div>
          </div>
          <div>
            <label htmlFor="Joining Date">End Date</label>
            <div>
              <input type="date" id="date" />
            </div>
          </div>
        </div>
        <div className="EditSchoolInfo-child-3">
          <div>
            <label htmlFor="Primary Grade Level">Primary Grade Level</label>
            <div className="EditSchoolInfo-child-4">
              <select
                name="Primary Grade Level"
                id="Primary Grade Level"
                placeholder="Gender"
              >
                <option value="" disabled selected hidden>
                  -
                </option>
                <option value="levelA">Level A</option>
                <option value="levelB">Level B</option>
                <option value="levelC">Level C</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="Other Grade Level Taught">
              Other Grade Level Taught
            </label>
            <div className="EditSchoolInfo-child-4">
              <select
                name="Other Grade Level Taught"
                id="Other Grade Level Taught"
                placeholder="Gender"
              >
                <option value="" disabled selected hidden>
                  -
                </option>
                <option value="levelA">Level A</option>
                <option value="levelB">Level B</option>
                <option value="levelC">Level C</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="Other Subject Taught">Other Subject Taught</label>
            <div className="EditSchoolInfo-child-4">
              <select
                name="Other Subject Taught"
                id="Other Subject Taught"
                placeholder="Gender"
              >
                <option value="" disabled selected hidden>
                  -
                </option>
                <option value="subjectA">Subject A</option>
                <option value="subjectB">Subject B</option>
                <option value="subjectC">Subject C</option>
              </select>
            </div>
          </div>
        </div>
        <div className="EditSchoolInfo-child-5">
          <div className="EditSchoolInfo-child-6">
            <h3>School Information</h3>
            <button onClick={toggleSchoolInfo}>Add School Info</button>
          </div>
          {isSchoolInfoVisible && (
            <div className="EditSchoolInfo-child-2">
              <div className="EditSchoolInfo-child-7">     
                <select
                  name="Other Subject Taught"
                  id="Other Subject Taught"
                  placeholder="Gender"
                >
                  <option value="" disabled selected hidden>
                    -
                  </option>
                  <option value="subjectA">Subject A</option>
                  <option value="subjectB">Subject B</option>
                  <option value="subjectC">Subject C</option>
                </select>
              </div>
              <div className="EditSchoolInfo-child-7">
                <select
                  name="Other Subject Taught"
                  id="Other Subject Taught"
                  placeholder="Gender"
                >
                  <option value="" disabled selected hidden>
                    -
                  </option>
                  <option value="subjectA">Subject A</option>
                  <option value="subjectB">Subject B</option>
                  <option value="subjectC">Subject C</option>
                </select>
              </div>
              <div className="EditSchoolInfo-child-8">
                <div>
                  <label htmlFor="Joining Date">Joining Date</label>
                  <div>
                    <input type="date" id="date" placeholder="kuch b" />
                  </div>
                </div>
                <div>
                  <label htmlFor="Joining Date">End Date</label>
                  <div>
                    <input type="date" id="date" />
                  </div>
                </div>
              </div>
              <IoClose className="oiClose-icon" onClick={toggleSchoolInfo} />
            </div>
          )}
        </div>
        <div className="EditSchoolInfo-btnn">
            <button>Cancel</button>
            <button>Update</button>
        </div>
      </div>
    </div>
  );
};

export default EditSchoolInfo;
