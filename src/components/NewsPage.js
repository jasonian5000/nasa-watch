import React from "react";
import SpaceFlightNews from "./SpaceFlightNews";
import "../css/NewsPage.css";
import SpaceFlightReports from "./SpaceFlightReports";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NewsPage() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="news-page">
        <div className="column-heading">
          <h1 className="page-title reports">DAILY ISS REPORTS</h1>
          <h1 className="page-title news">SPACE FLIGHT NEWS</h1>
        </div>
        <div className="news-column">
          <SpaceFlightReports />
          <SpaceFlightNews />
        </div>
      </div>
      <div className="news-page-mobile">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="image tabs">
            <Tab label="Space Flight News" {...a11yProps(0)} />
            <Tab label="Daily Reports" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SpaceFlightNews />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SpaceFlightReports />
        </TabPanel>
      </div>
    </div>
  );
}
