import React from "react";
import "./AppIntegration.css";
import { IoMdArrowBack } from "react-icons/io";
import microexel from "../../Assets/micro-exel.png";
import { SlSettings } from "react-icons/sl";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { GrShare } from "react-icons/gr";
    
const AppIntegration = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="app-integration-main">
      <div className="integration-child">
        <div className="integration-child-1">
          <IoMdArrowBack />
          <p>App Integrations </p>
        </div>
        <div className="integration-child-2">
          <div className="app-integestion-first">
            <div>
            <img
              src={microexel}
              alt="Exel-icon"
            />
            </div>
            <p>Microsoft Excel</p>
          </div>
          <div className="integration-child-3">
            <p>Connected</p>
            <SlSettings />
          </div>
        </div>
      </div>
      <div className="app-integration-overview">
        <div className="app-integration-overview-child-1">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                  <Tab label="Integration Overview" value="1" />
                  <Tab label="Configuration" value="2" />
                  <Tab label="About Microsoft Excel" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="app-integration-data">
                  <h2>Get Microsoft Excel bills and Invoices</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur{" "}
                    <span>adipiscing</span> elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="app-integration-data-2">
                  <h2>Export Microsoft Excel bills and Invoices</h2>
                  <p>
                    Lorem ipsum dolor sit aunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="app-integration-data-3">
                  <h2>Bring Microsoft data to your app</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                </div>
              </TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>

      <div className="app-integration-term-and-condation">
        <p>Read our 
      <ins>
        <span>terms and Conditions</span>

      </ins>
         </p>
        <GrShare className="app-share-icon"/>
      </div>
    </div>
  );
};

export default AppIntegration;
