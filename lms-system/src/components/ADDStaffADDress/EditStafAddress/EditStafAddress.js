import React from "react";
import "./EditStafAddress.css";
import location from "../../../Assets/location.png";

const EditStafAddress = () => {
  return (
    <div className="EditStafAddress-main">
      <div className="EditStafAddress-child-1">
        <h2>Address & Contact</h2>
        <p>Personal Contact Information</p>
        <div className="EditStafAddress-child-2">
          <div>
            <label htmlFor="Home Phone">Home Phone</label>
            <div>
              <input type="text" id="text" placeholder="-" />
            </div>
          </div>
          <div>
            <label htmlFor="Home Phone">Mobile Phone</label>
            <div>
              <input type="text" id="text" placeholder="-" />
            </div>
          </div>
          <div>
            <label htmlFor="Home Phone">Personal Email</label>
            <div>
              <input type="text" id="text" placeholder="-" />
            </div>
          </div>
        </div>
        <div className="EditStafAddress-child-3">
          <div>
            <label htmlFor="Home Phone">School Email</label>
            <div>
              <input type="text" id="text" placeholder="-" />
            </div>
          </div>
          <div>
            <label htmlFor="Home Phone">Office Phone</label>
            <div>
              <input type="text" id="text" placeholder="-" />
            </div>
          </div>
        </div>
        <div className="EditStafAddress-4">
          <div className="EditStafAddress-5">
            <h3>Home Address</h3>
            <img src={location} alt="" />
            <h5>Add on map</h5>
          </div>
          <div>
            <div className="EditStafAddress-child-3">
              <div>
                <label htmlFor="Home Phone">Street Address 1</label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
              <div>
                <label htmlFor="Home Phone">Street Address 2</label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
              <div>
                <label htmlFor="Home Phone">Country</label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
              <div>
                <label htmlFor="Home Phone">State/Province/Locality</label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
            </div>
            <div className="EditStafAddress-child-3">
              <div>
                <label htmlFor="Home Phone">State/Province/Locality</label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
              <div>
                <label htmlFor="Home Phone">City</label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="EditStafAddress-btnn">
        <button>Cancel</button>
        <button>Update</button>
        </div>
      </div>
    </div>
  );
};

export default EditStafAddress;
