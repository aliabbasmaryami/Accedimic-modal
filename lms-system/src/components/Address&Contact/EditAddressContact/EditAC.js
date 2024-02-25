import React from "react";
import "./EditAC.css";

function EditAC() {
  return (
    <div className="EditAC-main">
      <h1>Address and Contact </h1>
      <h2>Student Home Address</h2>
      <div className="EditAC-1-Input-Row">
        <div>
          <label>Street Address 1</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Street Address 1</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>Street Address 1</label> <br />
          <select>
            <option>-</option>
            <option>Uk</option>
          </select>
        </div>
      </div>
      <div className="EditAC-1-Input-Row">
        <div>
          <label>State/Provence/Locality</label> <br />
          <input placeholder="-" />
        </div>
        <div>
          <label>City</label> <br />
          <select>
            <option>-</option>
            <option>Uk</option>
          </select>
        </div>
        <div>
          <label>Zip/Postal Code</label> <br />
          <input placeholder="-" />
        </div>
      </div>
      <div className="EditAC-2-Input-Row">
        <h1 className="EditH1">Student Mailing Address</h1>
        <div className="EditCheckBoxLabel">
          <input type="checkbox" />
          <label>Same as Home Address</label>
        </div>
        <div className="EditAC-1-Input-Row">
          <div>
            <label>Street Address 1</label> <br />
            <input placeholder="-" />
          </div>
          <div>
            <label>Street Address 1</label> <br />
            <input placeholder="-" />
          </div>
          <div>
            <label>Street Address 1</label> <br />
            <select>
              <option>-</option>
              <option>Uk</option>
            </select>
          </div>
        </div>
        <div className="EditAC-1-Input-Row">
          <div>
            <label>State/Provence/Locality</label> <br />
            <input placeholder="-" />
          </div>
          <div>
            <label>City</label> <br />
            <select>
              <option>-</option>
              <option>Uk</option>
            </select>
          </div>
          <div>
            <label>Zip/Postal Code</label> <br />
            <input placeholder="-" />
          </div>
        </div>
      </div>
      <div className="EditAC-3-Input-Row">
        <h1>Personal Contact Information</h1>
        <div className="EditAC-1-Input-Row">
          <div>
            <label>Home Phone</label> <br />
            <input placeholder="-" />
          </div>
          <div>
            <label>Mobile Phone</label> <br />
            <input placeholder="-" />
          </div>
          <div>
            <label>Personal Email</label> <br />
            <input placeholder="-" />
          </div>
        </div>
        <div className="EditAC-1-Input-Row">
          <div>
            <label>State/Provence/Locality</label> <br />
            <input placeholder="-" />
          </div>
          <div>
            <label>City</label> <br />
            <select>
              <option>-</option>
              <option>Uk</option>
            </select>
          </div>
          <div>
            <label>Zip/Postal Code</label> <br />
            <input placeholder="-" />
          </div>
        </div>
      </div>
      <div className="EditAC-main-btns">
      <button className="EditAC-main-btn1">Cancel</button>
      <button className="EditAC-main-btn2">Update</button>
      </div>
    </div>
  );
}

export default EditAC;
