
import React, { useState } from 'react';
import './DeatilModal.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const DeatilModal = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  return (
    <div>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className='detail-modal-main'>
        <h2>Edit Account</h2>
            <div className='deatil-modal-first-Name'>
                <label htmlFor="First Name*">First Name*</label>
                <div className='detail-modal-input-first-Name'>
                <input type="text" id='text' placeholder='Shuaib' />
                </div>
            </div>
            <div className='deatil-modal-last-Name'>
                <label htmlFor="last Name*">Last Name*</label>
                <div className='detail-modal-input-last-Name'>
                <input type="text" id='text' placeholder='Karim' />
                </div>
            </div>
            <div className='deatil-modal-Emails'>
                <label htmlFor="Email*">Email*</label>
                <div className='deatil-modal-Emails-your-Email'>
                <input type="text" id='text' placeholder='shuaibkarim302@gmail.com' />
                </div>
            </div>
            <div className='deatil-modal-Numbers'>
                <label htmlFor="Contact Number*">Contact Number*</label>
                <div>
                <input type="number" id='number' placeholder='+123456789' />
                </div>
            </div>
             <div className='details-models-btn'>
                    <button className='details-model-ntn-Cancel'>Cancel</button>
                    <button className='details-model-ntn-Update'>Update</button>
            </div>
        </div>
      </Modal>
    </div>
  )
}

export default DeatilModal