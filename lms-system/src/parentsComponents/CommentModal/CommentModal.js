import React from "react";
import "./CommentModal.css";
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

const CommentModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="CommentModal-Mmain">
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
            <div className="CommentModal-Mmain-child1">
              <h4>Delete comment</h4>
              <p>
                Are you sure you want to delete this comment? This will remove
                the comment and can’t be undone.
              </p>
              <div className="CommentModal-Mmain-child2">
                <button className="CommentModal-Mmain-child2-Dont-allow">
                NO, CANCEL
                </button>
                <button className="CommentModal-Mmain-child2-allow">
                YES, DELETE
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CommentModal;
