import React from "react";
import { useState } from "react";

function Scans() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
  return (
    <>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="site information tabs"
      >
        <Tab label="Font" />
        <Tab label="Color" />
        <Tab label="Assets" />
      </StyledTabs>
    </>
  );
}

export default Scans;
