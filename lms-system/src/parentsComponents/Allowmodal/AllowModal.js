import React from "react";
import './AllowmModal.css'
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AllowModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="AllowModal-MaiN">
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        className="Allowmodalmain"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="AllowModal-MaiN-child1">
              <p>Allow the Student for app access for while using this app?</p>
              <div className="AllowModal-MaiN-child2">

                  <button className="AllowModal-MaiN-child2-Dont-allow">Don’t Allow</button>
                  <button className="AllowModal-MaiN-child2-allow">Allow</button>
            
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AllowModal;
