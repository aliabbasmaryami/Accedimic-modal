import React from "react";
import "./StaffAddress.css";
import { FaLocationDot } from "react-icons/fa6";

function StaffAddress() {
  return (
    <div className="StaffAddress-Main">
      <div className="StaffAddress-Row-1">
        <h3>Address & Contact</h3>
        <button>Edit Information</button>
      </div>
      <h4>Personal Contact Information</h4>

      <div className="StaffAddress-Main-row-1">
        <div>
          <label>Home phone</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Mobile phone</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Personal Email</label> <br />
          <input placeholder="-" />
        </div>
      </div>
      <div className="StaffAddress-Main-row-1">
        <div>
          <label>School Email</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Office Phone</label> <br />
          <input placeholder="-" />
        </div>
      </div>
      <div className="StaffAddress-Main-2">
        <h3>Home Address</h3>
        <span>
          <FaLocationDot />
          Show on map
        </span>
      </div>
      <div className="StaffAddress-Main-row-1">
        <div>
          <label>Street Address 1</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Street Address 2</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Country</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>State/province/Locality</label> <br />
          <input placeholder="-" />
        </div>
      </div>
      <div className="StaffAddress-Main-row-1">
        <div>
          <label>City</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Zip/postal Code</label> <br />
          <input placeholder="-" />
        </div>
      </div>
      <h3>Emergency Contact Info</h3>
      <div className="StaffAddress-Main-row-1">
        <div>
          <label>Emergency Contact Name</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Relationship to Staff</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Home phone</label> <br />
          <input placeholder="-" />
        </div>
      </div>
      <div className="StaffAddress-Main-row-1">
        <div>
          <label>Mobile Phone</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Email</label> <br />
          <input placeholder="-" />
        </div>
      </div>
    </div>
  );
}

export default StaffAddress;
