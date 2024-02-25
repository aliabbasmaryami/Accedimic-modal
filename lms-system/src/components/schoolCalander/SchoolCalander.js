import React, { useState } from "react";
import "./SchoolCalander.css";
import { FaCaretRight } from "react-icons/fa";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import group_ui from "../../Assets/jkl.svg";
import combine_ui from "../../Assets/dsdjkk.svg";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TabPanel } from "@mui/lab";

const style = {
  position: "absolute",
  top: "40%",
  right: "-8%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "#fff",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
};

const SchoolCalander = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="School-Calander-main">
      <div className="School-Calander-main-first">
        <span>School</span>
        <FaCaretRight className="Carleft-icons-Fa" />
        <p>Noticeboard</p>
      </div>
      <div className="School-Calander-main-child-1">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <div className="School-Calander-main-child-1-test-data-1">
                <div className="test2">
                  <TabList onChange={handleChange}>
                    <Tab label="Current" value="1" className="Currejdkd" />
                    <Tab label="Upcoming" value="2" className="Currejdkd" />
                    <Tab label="Past" value="3" className="Currejdkd" />
                  </TabList>
                </div>

                <div className="School-Calander-main-Tabs-buttn">
                  <FaPlus />
                  <div>
                    <button>Add new</button>
                  </div>
                </div>
              </div>
            </Box>
            <TabPanel value="1" className="School-Calander-main-Tabs">
              <div className="School-Calander-main-child-2">
                <div className="School-Calander-main-child-2-child-1">
                  <h1>Important</h1>
                  <BsThreeDotsVertical
                    onClick={handleOpen}
                    className="School-Calander-main-child-2-child-1-BsThreeDotsVertical"
                  />
                </div>
                <div className="School-Calander-main-child-2-child-2">
                  <div className="school-calander-child-2-data">
                    <p>
                      “ School starts on January 13th, and roll will be taken
                      daily at the start of each student group's instructional
                      time. <br />
                      If you have any questions, please contact your student's
                      school office or email us at mycentrality21 “
                    </p>
                    {/* modal */}
                    <div>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          ></Typography>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
                            <div className="modal-description-buttons">
                              <button className="Edit-button-School-Calander">
                                Edit Notice
                              </button>
                              <button className="Delete-button-School-Calander">
                                Delete Notice
                              </button>
                            </div>
                          </Typography>
                        </Box>
                      </Modal>
                    </div>
                    {/* modal */}
                  </div>
                  <div>
                    <div className="bosdii-lala">
                      <img src={combine_ui} alt="" />
                      <p>Visible from December 29, 2023 - December 31, 2024</p>
                    </div>
                    <div className="bosdii-lala-2">
                      <img src={group_ui} alt="" />
                      <p>Visible To Teacher, Student & Parents</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default SchoolCalander;
