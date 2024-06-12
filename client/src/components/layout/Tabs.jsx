import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const groupData = [
  { groupId: 1, groupName: "group1" },
  { groupId: 2, groupName: "group2" },
  { groupId: 3, groupName: "group3" },
  { groupId: 4, groupName: "group4" },
  { groupId: 5, groupName: "group5" },
  { groupId: 6, groupName: "group6" },
  { groupId: 7, groupName: "group7" },
  { groupId: 8, groupName: "group8" },
  { groupId: 9, groupName: "group9" },
  { groupId: 10, groupName: "group10" },
  { groupId: 11, groupName: "group11" },
  { groupId: 12, groupName: "group12" },
  { groupId: 13, groupName: "group13" },
  { groupId: 14, groupName: "group14" },
  { groupId: 15, groupName: "group15" },
];

const VerticalTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "200px",
          height: `calc(100vh - 100px)`,
          bgcolor: "background.paper",
          overflowY: "scroll",
        }}
      >
        <Tabs
          orientation="vertical"
          //   variant="scrollable"

          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          {groupData.map((group) => (
            <Tab key={group.groupId} label={`Tab ${group.groupName}`} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ flexGrow: 1, bgcolor: "white", p: 3 }}>
        {/* Content for each tab */}

        {groupData.map((group, index) => (
          <TabPanel key={group.groupId} value={value} index={index}>
            {`Tab ${group.groupId} Content`}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

export default VerticalTabs;
