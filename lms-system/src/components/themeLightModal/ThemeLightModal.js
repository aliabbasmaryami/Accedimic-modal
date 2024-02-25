import React,{useState} from "react";
import "./ThemeLightModal.css";
import confirm_img from '../../Assets/Group (1).png';

function ThemeLightModal() {
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  const handleConfirmClick = () => {
    setConfirmationVisible(true);

    setTimeout(() => {
     
      setConfirmationVisible(false);

      console.log('Notice deleted!');
    }, 5000);
  };

  const handleCancelClick = () => {

    setConfirmationVisible(false);
  };

  return (
    <div className="ThemeLightModal-main">

      <div className="ThemeLightModal-confirm_img">
        <img src={confirm_img} alt="" />
      </div>
      
      <div className="ThemeLightModal-main-heading">Delete</div>
      
      <div className="ThemeLightModal-main-message">
        Are you sure you want to delete this Notice?.
      </div>
      
      <div className="ThemeLightModal-main-actions">
        <button className='ThemeLightModal-main-home-button' onClick={handleCancelClick}>
          Cancel
        </button>
        
        <button className="ThemeLightModal-main-message-button" onClick={handleConfirmClick}>
          Confirm
        </button>
      </div>

      {isConfirmationVisible && (
        <div className="confirmation-prompt">
          Your notice is being deleted. This may take a few seconds...
        </div>
      )}

    </div>
  );
}

export default ThemeLightModal;
