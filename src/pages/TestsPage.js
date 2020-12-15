import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TestCB from "./TestCB";
import TestHD from "./TestHD";

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TestsPage = () => {
  const [value, setValue] = useState(0);

  const styles = {
    backgroundColor: '#368f8b',
    color: '#f0efeb',
    fontFamily: 'inherit',
    fontWeight: 500,
    width: 800,
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <TestCB />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TestHD />
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default TestsPage;
