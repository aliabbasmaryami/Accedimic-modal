import React, { useState } from "react";
import "./MyAccountSubscription.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import profile_img from "../../Assets/Rectangle 25 (2).png";
import subscribtion from "../../Assets/subscrib.svg";
import master_card from "../../Assets/ion_card-sharp.png";
import profileDefaultImg from "../../Assets/Rectangle 25 (2).png";

const MyAccountSubscription = () => {

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [profileImage, setProfileImage] = useState(profileDefaultImg);

  const togglePasswordVisibility = (field) => {
    switch (field) {
      case "current":
        setShowCurrentPassword(!showCurrentPassword);
        break;
      case "new":
        setShowNewPassword(!showNewPassword);
        break;
      case "confirm":
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
  };

  const handleSaveChanges = () => {
    setPasswordsMatch(true);

    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  // .
  return (
    <div className="my-account-subscriptiom-main">
      <h6>My Account & Subscription</h6>
      <div className="my-account-subscriptiom-main-1">
      <div className="my-account-upload-profile-image-account">
          <img src={profileImage} alt="" />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none"}}
            id="uploadImageInput"
          />
          <label className="change-img-upload" htmlFor="uploadImageInput">Change Image</label>
        </div>
        
        <div className="my-account-subscriptiom-information">
          <div className="my-account-subscriptiom-name">
            <h2>Shuaib karim</h2>
            <div>
            <button onClick={onOpenModal}>Edit information</button>
            </div>
          </div>
          <div className="my-account-subscriptiom-input-form">
            <div className="my-account-subscriptiom-input-form-Email">
              <label htmlFor="Email">Email</label>
              <div>Shuaibkarim302@gmail.com</div>
            </div>
            <div className="my-account-subscriptiom-input-form-phone">
              <label htmlFor="phone">phone</label>
              <div>+93111582224</div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-account-subscriptiom-main-2">
        <div className="my-account-subscriptiom-main-2-chils-1">
          <div className="my-account-subscriptiom-main-2-chils-1-data">
            <img src={subscribtion} alt="" />
            <div className="my-account-subscriptiom-main-cards-data">
              <h4>Current Subscription</h4>
              <p>
                You are on free Trial, which expires on{" "}
                <span>January 6, 2024</span>
              </p>
              <button>Subscribe Now</button>
            </div>
          </div>
          <div className="my-account-subscriptiom-main-2-chils-1-data2">
            <img src={master_card} alt="" />
            <div className="my-account-subscriptiom-main-cards-data2">
              <h4>Available Payment Methods</h4>
              <ol>
                <li>Credit Card</li>
                <li>ACH (bank Account Debit)</li>
                <li>Offline Wire Transfer</li>
                <li>Offline Cheque Payment</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="setting-child-3">
        <div className="Account-setting-notification">
          <h5>Notifications</h5>
          <div className="Notifications-checkboxes">
            <li>
              <input type="checkbox" id="checkbox" />
            </li>
            <p>I want to know Student mack-up time request.</p>
          </div>
          <div className="Notifications-checkboxes">
            <li>
              <input type="checkbox" id="checkbox" />
            </li>
            <p>I want to know when any message me.</p>
          </div>
          <div className="Notifications-checkboxes">
            <li>
              <input type="checkbox" id="checkbox" />
            </li>
            <p>I want to know when any message me.</p>
          </div>
          <div className="Notifications-checkboxes">
            <li>
              <input type="checkbox" id="checkbox" />
            </li>
            <p>I want to know when any message me.</p>
          </div>
          <div className="Notifications-checkboxes">
            <li>
              <input type="checkbox" id="checkbox" />
            </li>
            <p>I want to know daily how many people visited my profile.</p>
          </div>
          <div className="Notifications-checkboxes">
            <li>
              <input type="checkbox" id="checkbox" />
            </li>
            <p>I want to know when any message me.</p>
          </div>
          <div className="setting-notification-btn">
            <button>Save changes</button>
          </div>
        </div>

        {/* change password */}

        <div className="Account-setting-Change-password">
          <h5>Change password</h5>

          <div className="Account-setting-Current-Password">
            <label htmlFor="Current Password">Current Password</label>
            <div className="Change-password-input">
              <input
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Current Password"
              />
              {showCurrentPassword ? (
                <FiEyeOff onClick={() => togglePasswordVisibility("current")} />
              ) : (
                <FiEye onClick={() => togglePasswordVisibility("current")} />
              )}
            </div>
          </div>

          <div className="Account-setting-New-Password">
            <label htmlFor="New Password">New Password</label>
            <div className="New-Password-input">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
              />
              {showNewPassword ? (
                <FiEyeOff onClick={() => togglePasswordVisibility("new")} />
              ) : (
                <FiEye onClick={() => togglePasswordVisibility("new")} />
              )}
            </div>
          </div>

          <div className="Account-setting-Confirm-Password">
            <label htmlFor="Confirm-Password">Confirm Password</label>
            <div className="Confirm-password-input">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
              {showConfirmPassword ? (
                <FiEyeOff onClick={() => togglePasswordVisibility("confirm")} />
              ) : (
                <FiEye onClick={() => togglePasswordVisibility("confirm")} />
              )}
            </div>
          </div>
          {!passwordsMatch && (
            <div style={{ color: "red", marginTop: "10px" }}>
              Passwords don't match!
            </div>
          )}

          {passwordChanged && (
            <div style={{ color: "green", marginTop: "10px" }}>
              Password changed successfully!
            </div>
          )}

          <div className="setting-password-btn">
            <button onClick={handleSaveChanges}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountSubscription;
