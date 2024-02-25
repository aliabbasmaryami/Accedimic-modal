import React from "react";
import "./AddressContact.css";

const AddressContact = () => {
  return (
    <div className="AddressContact.main">
      <div className="AddressContact-main-child">
        <div className="AddressContact-child-1">
          <p>Address and Contact</p>
          <button>Edit Information</button>
        </div>
        <div className="AddressContact-child-2">
          <p>Student Home Address</p>
          <div className="AddressContact-child-3">
            <div>
              <label htmlFor="Street-Address-1">Street-Address-1</label>
              <div>
                <input type="text" id="text" placeholder="-" />
              </div>
            </div>
            <div>
              <label htmlFor="Street Address 2">Street Address 2</label>
              <div>
                <input type="text" id="text" placeholder="-" />
              </div>
            </div>
            <div>
              <label htmlFor="Country">Country</label>
              <div>
                <input type="text" id="text" placeholder="-" />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="AddressContact-child-4">
            <div>
              <label htmlFor="State/provenance/Locality">
                State/provenance/Locality
              </label>
              <div>
                <input type="text" id="text" placeholder="-" />
              </div>
            </div>
            <div>
              <label htmlFor="City">City</label>
              <div>
                <input type="text" id="text" placeholder="-" />
              </div>
            </div>
            <div>
              <label htmlFor="Zip/Postal Code">Zip/Postal Code</label>
              <div>
                <input type="text" id="text" placeholder="-" />
              </div>
            </div>
          </div>
          <div className="AddressContact-Student-Mailing">
            <p>Student Mailing Address</p>
            <div className="AddressContact-child-5">
              <div>
                <label htmlFor="Street Address 1">Street Address 1</label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
              <div>
                <label htmlFor="Street Address 2">Street Address 2</label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
              <div>
                <label htmlFor="Country">Country</label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="AddressContact-child-6">
              <div>
                <label htmlFor="State/provenance/Locality">
                  State/provenance/Locality
                </label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
              <div>
                <label htmlFor="City">City</label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
              <div>
                <label htmlFor="Zip/Postal Code">Zip/Postal Code</label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
            </div>
          </div>
          <div className="AddressContact-Personal-Information">
            <p>Personal Contact Information</p>
            <div className="AddressContact-child-7">
              <div>
                <label htmlFor="Home Phone">Home Phone</label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
              <div>
                <label htmlFor="Mobile Phone">Mobile Phone</label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
              <div>
                <label htmlFor="Personal Email">Personal Email</label>
                <div>
                  <input type="text" id="text" placeholder="-" />
                </div>
              </div>
            </div>
          </div>
          <div className="AddressContact-child-8">
            <div>
              <label htmlFor="Emergency Contact Number">
                Emergency Contact Number
              </label>
              <div>
                <input type="text" id="text" placeholder="-" />
              </div>
            </div>
            <div>
              <label htmlFor="Father Number">Father Number</label>
              <div>
                <input type="text" id="text" placeholder="-" />
              </div>
            </div>
            <div>
              <label htmlFor="Brother Number">Brother Number</label>
              <div>
                <input type="text" id="text" placeholder="-" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressContact;
