import React from "react";
import "./StaffTabs.css";

function StaffTabs() {
  return (
    <div className="StaffProfile-main">
      <div className="StaffProfile-child-1">
        <div>
          <h3>General Information</h3>
          <h4>Identification Information</h4>
        </div>
        <button>Edit Information</button>
      </div>
      <div className="StaffProfile-row-1">
        <div>
          <label>Staff Name</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Staff ID</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Alternative ID</label> <br />
          <input placeholder="-" />
        </div>
      </div>
      <div className="StaffProfile-row-1">
        <div>
          <label>State ID</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>District ID</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>other Govt Issue Number</label> <br />
          <input placeholder="-" />
        </div>
      </div>
      <h3 style={{marginLeft:'20px'}}>Demographic Information</h3>
      <div className="StaffProfile-row-1">
        <div>
          <label>Date of birth</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Gender</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Native Language</label> <br />
          <input placeholder="-" />
        </div>
      </div>
      <div className="StaffProfile-row-1">
        <div>
          <label>Nationality</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Native Language</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Spoken Language</label> <br />
          <input placeholder="-" />
        </div>
      </div>
      <h3 style={{marginLeft:'20px'}}>Access Information</h3>
      <div className="StaffProfile-row-1">
        <div>
          <label>Login Email Address</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Portal Access</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Disable Teacher</label> <br />
          <input placeholder="-" />
        </div>
      </div>
    </div>
  );
}

export default StaffTabs;
