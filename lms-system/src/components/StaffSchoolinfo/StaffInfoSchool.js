import React from "react";
import "./StaffInfoSchool.css";

const StaffInfoSchool = () => {
  return (
    <div className="StaffInfoSchool-main">
      <div className="StaffInfoSchool-child-1">
        <div>
          <h3>General Information</h3>
          <h4>Identification Information</h4>
        </div>
        <button>Edit Information</button>
      </div>
      <div className="StaffInfoSchool-row-1">
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
      <div className="StaffInfoSchool-row-1">
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
      {/* div2 */}
      <div className="StaffInfoSchool-2">
        <p>School Information</p>
        <div className="StaffInfoSchool-table">
          <table>
            <thead>
              <tr>
                <th>School</th>
                <th>Profile</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>High Secondary</td>
                <td>Teacher</td>
                <td>December 28 2023</td>
                <td>march 2025</td>
                <td style={{color:"#018749"}}>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StaffInfoSchool;
