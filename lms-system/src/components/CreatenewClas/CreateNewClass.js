import React, { useState } from "react";
import "./CreateNewClass.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { PiUploadFill } from "react-icons/pi";

const CreateNewClass = () => {
  const [open, setOpen] = useState(false);
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setThumbnailImage(null);
    setThumbnailPreview(null);

    setOpen(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailImage(file);
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateClass = () => {
    console.log("Creating class with thumbnail:", thumbnailImage);
  };

  return (
    <div>
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent className="CreateNewClass-main">
            <div className="CreateNewClass-main-child1">
              <h5>Let’s Create your Classroom</h5>
              <div className="CreateNewClass-main-child2">
                <div className="CreateNewClass-main-child3">
                  {thumbnailPreview ? (
                    <img
                      src={thumbnailPreview}
                      alt="Thumbnail Preview"
                      className="thumbnail-preview"
                      style={{
                        width: "171px",
                        height: "171px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <label htmlFor="thumbnailInput">
                      <PiUploadFill className="PiUploadFill-create" />
                      <p>Upload a Thumbnail Image</p>
                    </label>
                  )}
                  <input
                    type="file"
                    id="thumbnailInput"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </div>

                <div className="CreateNewClass-main-child4">
                  <input type="text" id="text" placeholder="Classroom Name" />
                  <input
                    type="text"
                    id="text"
                    placeholder="My Name"
                    className="CreateNewClass-main-child4-My-Name"
                  />
                  <div className="CreateNewClass-main-child5">
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleCreateClass}>Create</button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </div>
  );
};

export default CreateNewClass;
