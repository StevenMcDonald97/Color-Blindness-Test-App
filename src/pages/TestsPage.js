import React, { useState } from "react";
import TestCB from "./TestCB";
import TestHD from "./TestHD";
import TestFreq from "./TestFreq";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TestsPage = () => {
  const [value, setValue] = useState(0);

  const styles = {
    backgroundColor: "#037272",
    color: "#f0efeb",
    fontFamily: "inherit",
    fontWeight: 500,
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="page">
      <div></div>
      <div className="main">
        <div className="tests-tab-container">
          <div className="tests-tab-wrapper">
            <AppBar position="static" style={styles}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Color Blind Test" {...a11yProps(0)} />
                <Tab label="Hearing Test" {...a11yProps(1)} />
                <Tab label="Frequency Test" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <TestCB />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <TestHD />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <TestFreq />
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestsPage;
