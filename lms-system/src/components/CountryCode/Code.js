import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import './Code.css'

function Code() {
    const [phoneNumber, setphoneNumber] = useState('');
    const [valid, setvalid] = useState(true);
    
    const handleChange=(value) =>{
        setphoneNumber(value);
        setvalid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) =>{
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
    }

    return (
    <div className='code-main'>
        <PhoneInput
        className="input"
            country={'us'}
            value={phoneNumber}
            onChange={handleChange}
            inputProps={{
                required:true
            }}
        />
        {/* {!valid && (
            <p className='error-message'>Please Enter a Valid Phone Number</p>
        )} */}
    </div>
  )
}

export default Code