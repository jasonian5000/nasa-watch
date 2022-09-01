import React from "react";
import ApodContainer from "./ApodContainer";
import JwContainer from "./JwContainer";
import NasaContainer from "./NasaContainer";
import SearchBar from "./SearchBar";
import "../css/ImagePage.css";

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

export default function ImagePage() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="image-page">
        <SearchBar />
        <div className="image-column-heading">
          <h1 className="page-title apod-title">
            ASTRONOMY PICTURE OF THE DAY
          </h1>
          <h1 className="page-title nasa-title">NASA IMAGES</h1>
          <h1 className="page-title jw-title">JAMES WEBB IMAGES</h1>
        </div>
        <div className="image-columns">
          <ApodContainer />
          <NasaContainer />
          <JwContainer />
        </div>
      </div>
      <div className="image-page-mobile">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="image tabs">
            <Tab label="Pic of the Day" {...a11yProps(0)} />
            <Tab label="Nasa" {...a11yProps(1)} />
            <Tab label="James Webb" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ApodContainer />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SearchBar />
          <NasaContainer />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <JwContainer />
        </TabPanel>
      </div>
    </div>
  );
}
