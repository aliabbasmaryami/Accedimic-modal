import React, { useState } from "react";
import "./EditStaffInfo.css";

function EditStaffInfo() {
  return (
    <div className="EditStaffInfo-main">
      <div className="ADDEditStudent">
        <h3>Identification Information</h3>

        <div className="EditStaffInfo-inputs">
          <div>
            <label>First/Given Name</label> <br />
            <input placeholder="-" />
          </div>
          <div>
            <label>Middle Name</label> <br />
            <input placeholder="-" />
          </div>
          <div>
            <label>Last/Family Name</label> <br />
            <input placeholder="-" />
          </div>
        </div>
      </div>

      <div className="EditStaffInfo-inputschild-1">
        <div>
          <label>Student Information</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Preferred/Common Name</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Student ID</label> <br />
          <input placeholder="-" />
        </div>
      </div>
      <div className="EditStaffInfo-inputschild-1">
        <div>
          <label>State ID</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>District ID</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Admission Number</label> <br />
          <input placeholder="-" />
        </div>
      </div>
      <div className="EditStaffInfo-inputschild-1">
        <div>
          <label>Out Govt Issued Number</label> <br />
          <input placeholder="-" />
        </div>
      </div>

      <div className="EditStaffInfo-child-2">
        <h3>Demographic Information</h3>
        <div className="EditStaffInfo-inp">
          <div>
            <label>Date of birth</label> <br />
            <input placeholder="-" />
          </div>
          <div>
            <label>Gender</label> <br />
            <input placeholder="-" />
          </div>
          <div>
            <label>Country of birth</label> <br />
            <input placeholder="-" />
          </div>
        </div>
        <div className="EditStaffInfo-inp">
          <div>
            <label>Nationality</label> <br />
            <input placeholder="-" />
          </div>
          <div>
            <label>Native Language</label> <br />
            <input placeholder="-" />
          </div>
          <div>
            <label>Languages Spoken</label> <br />
            <input placeholder="-" />
          </div>
        </div>
      </div>
      <div
        className="ADDEditSchoolInfo-Switch"
        style={{ display: "flex", gap: "20px", alignItems: "center" }}
      >
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id=""
          />
          <label className="form-check-label">Portal Access</label>
        </div>
      </div>
      <div className="ADDEditFooter">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDisabled"
          />
          <label class="form-check-label" for="flexCheckDisabled">
            Disabled checkbox
          </label>
        </div>
        <button className="ADDEditFooter-btn1">Cancel</button>
        <button className="ADDEditFooter-btn2">Update</button>
      </div>
    </div>
  );
}

export default EditStaffInfo;
