import React, { useState } from 'react';
import './ADDEditStudentinfo.css';
import RefreshIcon from '@mui/icons-material/Refresh';

function ADDEditStudentinfo() {
    const [portalAccess, setPortalAccess] = useState(false);

    const handleSwitchChange = () => {
        setPortalAccess(!portalAccess);
    };

    const [isShow, setIsShow] = useState(false);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const [handleFirstSwitch, setHandleFirstSwitch] = useState(false)
    const [handleSecondSwitch, setHandleSecondSwitch] = useState(false)


    const generateRandomPassword = () => {
        const randomPassword = Math.random().toString(36).slice(-8);
        setPassword(randomPassword);
    };

    const [handleFirstRadio, setHandleFirstRadio] = useState(false)
    
    return (
        <div className="ADDEditStudentInfo-main">
            <div className="ADDEditStudent">
                <h3>Identification Information</h3>

                <div className="ADDEditStudentInfo-inputs">
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

            <div className="ADDEditStudentInfo-inputschild-1">
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
            <div className="ADDEditStudentInfo-inputschild-1">
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
            <div className="ADDEditStudentInfo-inputschild-1">
                <div>
                    <label>Out Govt Issued Number</label> <br />
                    <input placeholder="-" />
                </div>
            </div>

            <div className="ADDEditStudentInfo-child-2">
                <h3>Demographic Information</h3>
                <div className="ADDEditStudentInfo-inp">
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
                <div className="ADDEditStudentInfo-inp">
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
            <div className="ADDEditSchoolInfo-Switch" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <div className="form-check form-switch" >
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id=""
                        checked={handleFirstSwitch}
                        onChange={()=> setHandleFirstSwitch(!handleFirstSwitch)}
                    />
                    <label className="form-check-label">
                        Portal Access
                    </label>


                </div>
                {handleFirstSwitch ? <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id=""
                        checked={handleSecondSwitch}
                        onChange={()=> setHandleSecondSwitch(!handleSecondSwitch)}
                    />
                    <label className="form-check-label" >
                        Allow SSO Login
                    </label>

                </div> : null}
            </div>
            {handleFirstSwitch && (
                <div className='ADDSwitchShowInput'>
                    <div className='ADDSwitchShowInput-child-1'>
                        <label>Access Information</label> <br />
                        <input placeholder="Login Email Address*" />
                    </div>
                    <div className='ADDSwitchShowInput-child-2'>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Set or Reset Password
                            </label>
                        </div>
                    </div>
                </div>
            )}
            {/* ///////////////////Show Hide////////////////////// */}
            {handleSecondSwitch ?<div className='ADDEditShowHide'>
                <h4>Password</h4>
                <h5>Student email to set or reset password</h5>
                <div class="form-check">
                    <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                    <label class="form-check-label labelss" for="exampleRadios1">
                        Student will be able to create password on their own by clicking the link on their email
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                    <label class="form-check-label" for="exampleRadios1">
                        Create Password
                    </label>
                </div>
                <div className="ADDShowCloseDiv-main">
                    <div className="ADDShowCloseDiv">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                        <span className="eye-icon" onClick={handleTogglePassword}>
                            {showPassword ? '👁️' : '👁️‍🗨️'}
                        </span>
                    </div>
                    <p onClick={generateRandomPassword}><RefreshIcon />Auto Generate Password</p>
                </div>

            </div> : null}
            {/* ///////////////////////End Show Hide/////////////////////////// */}
            <div className='ADDEditFooter'>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" />
                    <label class="form-check-label" for="flexCheckDisabled">
                        Disabled checkbox
                    </label>
                </div>
                <button className='ADDEditFooter-btn1'>Cancel</button>
                <button className='ADDEditFooter-btn2'>Update</button>
            </div>
        </div>
    )
}

export default ADDEditStudentinfo