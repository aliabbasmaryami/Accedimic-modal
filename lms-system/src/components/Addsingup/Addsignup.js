import React from 'react'
import "./Addsignup.css"
import signuplogo from "./images/Group 1000004512.png"
import signupimg from "./images/image 9.png"
const Addsignup = () => {
    return (
        <div className='Addsignup-main'>
            <div className='Addsignup-main-child-1'>
                <div className='Addsignup-main-child-1-logo'>
                    <img src={signuplogo} alt='singinimg' />
                    <h2>MyCentrality</h2>
                </div>
                <div className='Addsignup-main-child-1-img'>
                    <img src={signupimg} alt='img' />
                </div>
                <div className='Addsignup-main-child-1-taxt'>
                    <h2>MyCentrality Multipurpose Dashboard</h2>
                    <p>Everything you need in an easily customizable dashboard.</p>
                </div>
                <div className='Addsignup-main-child-1-dits'>
                    <div className='dits-white'></div>
                    <div className='dits-blue'></div>
                    <div className='dits-blue'></div>
                </div>
            </div>
            <div className='Addsignup-main-child-2'>
                <div className='Addsignup-main-child-2-title'>
                    <h2>Sign up for MyCentrality</h2>
                    <p>Our District onboarding team will be in touch with next steps to create an account.</p>
                </div>
                <div className='Addsignup-main-child-2-form'>
                    <div className='Addsignup-main-child-2-input'>
                        <div className='inputs'>
                            <label>Name</label>
                            <div className='input'>
                                <input type='text' placeholder='First' />
                                <input type='text' placeholder='Last' />
                            </div>
                        </div>
                        <div className='inputs inputs-2'>
                            <div className='input'>
                                <label>Email</label>
                                <input type='text' placeholder='' />
                            </div>
                            <div className='input'>
                                <label>Number</label>
                                <input type='text' placeholder='' />
                            </div>
                        </div>
                        <div className='inputs inputs-2'>
                            <div className='input'>
                                <label>Name of School, District/Organization</label>
                                <input type='text' />
                            </div>
                            <div className='input'>
                                <label>Country</label>
                                <input type='country' />
                            </div>
                        </div>
                        <button>Create Your MyCentrality accountv</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addsignup;